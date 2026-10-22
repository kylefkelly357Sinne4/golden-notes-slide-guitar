import { create } from "zustand";
import {
  type Accidental,
  type ChordShape,
  type TuningId,
  CHORDS,
  FRET_COUNT,
  STRING_COUNT,
  getTuning,
  noteName,
  pitchClass,
  soundingMidi,
} from "@/lib/guitar/theory";
import { type LessonId, LESSONS, isNatural } from "@/lib/guitar/lessons";
import {
  glideString,
  pluck,
  setMasterVolume,
  setMuted,
  strum,
} from "@/lib/guitar/audio";

export type Mode = "play" | "notes" | "chords" | "scales" | "train";

export type LastPlayed = {
  stringIndex: number;
  fret: number;
  midi: number;
  at: number;
  /** Continuous fret position while a held finger slides (steel-slide style). */
  pos?: number;
  /** Fractional MIDI pitch while sliding (for Hz readout). */
  exact?: number;
};

/** Six strings, low E first. A number = fretted (fractional while sliding); null = open. */
export type Held = Array<number | null>;

const NO_HELD: Held = [null, null, null, null, null, null];

export type Quiz = {
  lessonId: LessonId;
  kind: "identify" | "find" | "play-along" | "chord";
  prompt: string;
  stringIndex: number;
  fret: number;
  midi: number;
  targetPc: number;
  choices: string[];
  correct: string;
  found: string[];
  needed: number;
  score: number;
  round: number;
  total: number;
  feedback: "idle" | "good" | "bad";
  chordId?: string;
};

type Persist = {
  volume: number;
  muted: boolean;
  showNotes: boolean;
  showDegrees: boolean;
  accidental: Accidental;
  leftHanded: boolean;
  tuningId: TuningId;
  capo: number;
  completedLessons: LessonId[];
};

const STORAGE_KEY = "steeley-strings-v1";
const SAVE_VERSION = 1;

const defaults: Persist = {
  volume: 0.78,
  muted: false,
  showNotes: true,
  showDegrees: false,
  accidental: "sharp",
  leftHanded: false,
  tuningId: "standard",
  capo: 0,
  completedLessons: [],
};

function loadPersist(): Persist {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as Partial<Persist>;
    return { ...defaults, ...parsed };
  } catch {
    return defaults;
  }
}

function savePersist(p: Persist) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...p, version: SAVE_VERSION }),
    );
  } catch {
    /* private mode */
  }
}

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function pickChoices(correct: string, accidental: Accidental): string[] {
  const pool =
    accidental === "flat"
      ? ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
      : ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const set = new Set<string>([correct]);
  while (set.size < 4) {
    set.add(pool[randomInt(pool.length)]!);
  }
  return [...set].sort(() => Math.random() - 0.5);
}

function randomFretNote(
  maxFret: number,
  accidental: Accidental,
  naturalsOnly: boolean,
  tuningId: TuningId,
  capo: number,
): { stringIndex: number; fret: number; midi: number; name: string } {
  for (let i = 0; i < 40; i++) {
    const stringIndex = randomInt(STRING_COUNT);
    const fret = randomInt(maxFret + 1);
    const open = getTuning(tuningId).midi[stringIndex]!;
    const midi = soundingMidi(open, fret, capo);
    if (midi == null) continue;
    if (naturalsOnly && !isNatural(midi)) continue;
    if (!naturalsOnly && isNatural(midi) && Math.random() < 0.35) continue;
    return {
      stringIndex,
      fret,
      midi,
      name: noteName(midi, accidental),
    };
  }
  const open = getTuning(tuningId).midi[0]!;
  const midi = soundingMidi(open, 0, capo) ?? open;
  return { stringIndex: 0, fret: 0, midi, name: noteName(midi, accidental) };
}

type StudioState = Persist & {
  started: boolean;
  mode: Mode;
  lastPlayed: LastPlayed | null;
  selectedChordId: string | null;
  selectedScaleId: string;
  selectedKey: string;
  atlasPc: number | null;
  quiz: Quiz | null;
  metronomeOn: boolean;
  bpm: number;
  start: () => void;
  setMode: (mode: Mode) => void;
  setVolume: (v: number) => void;
  toggleMute: () => void;
  toggleShowNotes: () => void;
  toggleShowDegrees: () => void;
  setAccidental: (a: Accidental) => void;
  toggleLeftHanded: () => void;
  setTuning: (id: TuningId) => void;
  setCapo: (n: number) => void;
  setChord: (id: string | null) => void;
  setScale: (id: string) => void;
  setKey: (key: string) => void;
  setAtlasPc: (pc: number | null) => void;
  playFret: (stringIndex: number, fret: number) => void;
  /** Fretting-hand state, mirrored from the violin's `fingers`. */
  held: Held;
  /** Finger down on a fret: hold it and pluck immediately. */
  pressFret: (stringIndex: number, fret: number) => void;
  /** Held finger dragged along the string: continuous position, ringing note glides. */
  slideFret: (stringIndex: number, pos: number) => void;
  /** Move a hold without plucking (e.g. another finger on the string lifted). */
  holdAt: (stringIndex: number, pos: number) => void;
  releaseFret: (stringIndex: number) => void;
  releaseAll: () => void;
  /** Pluck one string at its held position (open if not held). */
  pickString: (stringIndex: number) => void;
  /** Strum exactly what the fretting hand holds; unheld strings ring open. */
  strumHeld: (down?: boolean) => void;
  /** Strum bar / Space: held shape if any finger is down, else chord or open strings. */
  strumNow: (down?: boolean) => void;
  strumChord: (down?: boolean) => void;
  strumOpen: () => void;
  startLesson: (id: LessonId) => void;
  answerQuiz: (choice: string) => void;
  nextRound: () => void;
  setMetronomeOn: (on: boolean) => void;
  setBpm: (n: number) => void;
};

function persistSlice(s: StudioState): Persist {
  return {
    volume: s.volume,
    muted: s.muted,
    showNotes: s.showNotes,
    showDegrees: s.showDegrees,
    accidental: s.accidental,
    leftHanded: s.leftHanded,
    tuningId: s.tuningId,
    capo: s.capo,
    completedLessons: s.completedLessons,
  };
}

function makeIdentifyQuiz(
  lessonId: LessonId,
  state: Pick<Persist, "accidental" | "tuningId" | "capo">,
  round: number,
  score: number,
): Quiz {
  const naturalsOnly = lessonId === "naturals" || lessonId === "first-frets";
  const maxFret = lessonId === "first-frets" ? 3 : 5;
  const accidentalsOnly = lessonId === "accidentals";
  let note = randomFretNote(
    maxFret,
    state.accidental,
    naturalsOnly,
    state.tuningId,
    state.capo,
  );
  if (accidentalsOnly) {
    for (let i = 0; i < 20 && isNatural(note.midi); i++) {
      note = randomFretNote(7, state.accidental, false, state.tuningId, state.capo);
    }
  }
  return {
    lessonId,
    kind: "identify",
    prompt: "What note is this?",
    stringIndex: note.stringIndex,
    fret: note.fret,
    midi: note.midi,
    targetPc: pitchClass(note.midi),
    choices: pickChoices(note.name, state.accidental),
    correct: note.name,
    found: [],
    needed: 1,
    score,
    round,
    total: 8,
    feedback: "idle",
  };
}

function makeFindQuiz(
  lessonId: LessonId,
  state: Pick<Persist, "accidental" | "tuningId" | "capo">,
  round: number,
  score: number,
): Quiz {
  const pcs = [4, 7, 9, 0, 2, 5];
  const pc = pcs[(round - 1) % pcs.length]!;
  const name = noteName(pc + 60, state.accidental);
  const tuning = getTuning(state.tuningId);
  let needed = 0;
  for (let s = 0; s < STRING_COUNT; s++) {
    for (let f = 0; f <= FRET_COUNT; f++) {
      const midi = soundingMidi(tuning.midi[s]!, f, state.capo);
      if (midi != null && pitchClass(midi) === pc) needed += 1;
    }
  }
  needed = Math.min(needed, 6);
  return {
    lessonId,
    kind: "find",
    prompt: `Tap ${needed} different ${name} notes`,
    stringIndex: 0,
    fret: 0,
    midi: 60 + pc,
    targetPc: pc,
    choices: [],
    correct: name,
    found: [],
    needed,
    score,
    round,
    total: 6,
    feedback: "idle",
  };
}

function makePlayAlongQuiz(
  lessonId: LessonId,
  state: Pick<Persist, "accidental" | "tuningId" | "capo">,
  round: number,
  score: number,
): Quiz {
  const stringIndex = (round - 1) % STRING_COUNT;
  const open = getTuning(state.tuningId).midi[stringIndex]!;
  const midi = soundingMidi(open, 0, state.capo) ?? open;
  const labels = ["low E", "A", "D", "G", "B", "high E"];
  return {
    lessonId,
    kind: "play-along",
    prompt: `Play the open ${labels[stringIndex]} string (string ${6 - stringIndex})`,
    stringIndex,
    fret: 0,
    midi,
    targetPc: pitchClass(midi),
    choices: [],
    correct: noteName(midi, state.accidental),
    found: [],
    needed: 1,
    score,
    round,
    total: 6,
    feedback: "idle",
  };
}

function makeChordQuiz(lessonId: LessonId, round: number, score: number): Quiz {
  const ids = ["em", "g"] as const;
  const id = ids[(round - 1) % ids.length]!;
  const chord = CHORDS.find((c) => c.id === id)!;
  return {
    lessonId,
    kind: "chord",
    prompt: `Form ${chord.name} and press Strum`,
    stringIndex: 0,
    fret: 0,
    midi: 40,
    targetPc: 0,
    choices: [],
    correct: chord.name,
    found: [],
    needed: 1,
    score,
    round,
    total: 6,
    feedback: "idle",
    chordId: chord.id,
  };
}

export const useStudio = create<StudioState>((set, get) => ({
  ...defaults,
  started: false,
  mode: "play",
  lastPlayed: null,
  selectedChordId: "em",
  selectedScaleId: "pent-min",
  selectedKey: "A",
  atlasPc: null,
  quiz: null,
  metronomeOn: false,
  bpm: 80,
  held: NO_HELD,

  start: () => set({ started: true }),

  setMode: (mode) =>
    set({
      mode,
      atlasPc: mode === "notes" ? get().atlasPc : null,
      quiz: mode === "train" ? get().quiz : null,
    }),

  setVolume: (v) => {
    setMasterVolume(v);
    set({ volume: v });
    savePersist(persistSlice({ ...get(), volume: v }));
  },

  toggleMute: () => {
    const muted = !get().muted;
    setMuted(muted);
    set({ muted });
    savePersist(persistSlice({ ...get(), muted }));
  },

  toggleShowNotes: () => {
    const showNotes = !get().showNotes;
    set({ showNotes });
    savePersist(persistSlice({ ...get(), showNotes }));
  },

  toggleShowDegrees: () => {
    const showDegrees = !get().showDegrees;
    set({ showDegrees });
    savePersist(persistSlice({ ...get(), showDegrees }));
  },

  setAccidental: (accidental) => {
    set({ accidental });
    savePersist(persistSlice({ ...get(), accidental }));
  },

  toggleLeftHanded: () => {
    const leftHanded = !get().leftHanded;
    set({ leftHanded });
    savePersist(persistSlice({ ...get(), leftHanded }));
  },

  setTuning: (tuningId) => {
    set({ tuningId });
    savePersist(persistSlice({ ...get(), tuningId }));
  },

  setCapo: (capo) => {
    const next = Math.min(7, Math.max(0, capo));
    set({ capo: next });
    savePersist(persistSlice({ ...get(), capo: next }));
  },

  setChord: (selectedChordId) => set({ selectedChordId, mode: "chords" }),
  setScale: (selectedScaleId) => set({ selectedScaleId }),
  setKey: (selectedKey) => set({ selectedKey }),
  setAtlasPc: (atlasPc) => set({ atlasPc, mode: "notes" }),

  playFret: (stringIndex, fret) => {
    const s = get();
    const open = getTuning(s.tuningId).midi[stringIndex];
    if (open == null) return;
    const midi = soundingMidi(open, fret, s.capo);
    if (midi == null) return;
    pluck(midi, stringIndex);
    set({
      lastPlayed: { stringIndex, fret, midi, at: Date.now() },
    });

    const quiz = s.quiz;
    if (!quiz || s.mode !== "train" || quiz.feedback !== "idle") return;

    if (quiz.kind === "play-along") {
      const ok = stringIndex === quiz.stringIndex && fret === quiz.fret;
      set({
        quiz: {
          ...quiz,
          feedback: ok ? "good" : "bad",
          score: quiz.score + (ok ? 1 : 0),
        },
      });
      return;
    }

    if (quiz.kind === "find") {
      if (pitchClass(midi) !== quiz.targetPc) {
        set({ quiz: { ...quiz, feedback: "bad" } });
        window.setTimeout(() => {
          const q = get().quiz;
          if (q && q.feedback === "bad") set({ quiz: { ...q, feedback: "idle" } });
        }, 420);
        return;
      }
      const key = `${stringIndex}:${fret}`;
      if (quiz.found.includes(key)) return;
      const found = [...quiz.found, key];
      const done = found.length >= quiz.needed;
      set({
        quiz: {
          ...quiz,
          found,
          feedback: done ? "good" : "idle",
          score: quiz.score + (done ? 1 : 0),
        },
      });
    }
  },

  pressFret: (stringIndex, fret) => {
    const pos = clampPos(fret);
    const held = get().held.slice();
    held[stringIndex] = pos;
    set({ held });
    get().playFret(stringIndex, Math.round(pos));
  },

  slideFret: (stringIndex, pos) => {
    const s = get();
    const next = clampPos(pos);
    if (s.held[stringIndex] === next) return;
    const held = s.held.slice();
    held[stringIndex] = next;
    const exact = heldMidi(stringIndex, next, s.tuningId, s.capo);
    const patch: Partial<StudioState> = { held };
    if (exact != null) {
      const ringing = glideString(stringIndex, exact);
      const last = s.lastPlayed;
      if (ringing && last && last.stringIndex === stringIndex) {
        patch.lastPlayed = {
          ...last,
          fret: Math.round(next),
          midi: Math.round(exact),
          pos: next,
          exact,
        };
      }
    }
    set(patch);
  },

  holdAt: (stringIndex, pos) => {
    get().slideFret(stringIndex, pos);
  },

  releaseFret: (stringIndex) => {
    const s = get();
    if (s.held[stringIndex] == null) return;
    const held = s.held.slice();
    held[stringIndex] = null;
    set({ held });
  },

  releaseAll: () => {
    if (get().held.every((h) => h == null)) return;
    set({ held: NO_HELD.slice() });
  },

  pickString: (stringIndex) => {
    const s = get();
    const pos = s.held[stringIndex];
    if (pos == null || Math.abs(pos - Math.round(pos)) < 0.05) {
      s.playFret(stringIndex, pos == null ? 0 : Math.round(pos));
      return;
    }
    const exact = heldMidi(stringIndex, pos, s.tuningId, s.capo);
    if (exact == null) return;
    pluck(exact, stringIndex);
    set({
      lastPlayed: {
        stringIndex,
        fret: Math.round(pos),
        midi: Math.round(exact),
        at: Date.now(),
        pos,
        exact,
      },
    });
  },

  strumHeld: (down = true) => {
    const s = get();
    const notes = heldNotes(s.held, s.tuningId, s.capo);
    strum(notes, down);
    const last = down ? notes[0] : notes[notes.length - 1];
    if (last) {
      const pos = s.held[last.stringIndex] ?? 0;
      set({
        lastPlayed: {
          stringIndex: last.stringIndex,
          fret: Math.round(pos),
          midi: Math.round(last.midi),
          at: Date.now(),
          pos,
          exact: last.midi,
        },
      });
    }
    const quiz = s.quiz;
    if (quiz && s.mode === "train" && quiz.kind === "chord" && quiz.feedback === "idle") {
      const chord = CHORDS.find((c) => c.id === quiz.chordId);
      const ok = Boolean(chord && heldMatchesChord(s.held, chord));
      set({
        quiz: {
          ...quiz,
          feedback: ok ? "good" : "bad",
          score: quiz.score + (ok ? 1 : 0),
        },
      });
    }
  },

  strumNow: (down = true) => {
    const s = get();
    if (anyHeld(s.held)) {
      s.strumHeld(down);
      return;
    }
    if (s.mode === "chords" || s.quiz?.kind === "chord") s.strumChord(down);
    else s.strumHeld(down);
  },

  strumChord: (down = true) => {
    const s = get();
    if (anyHeld(s.held)) {
      s.strumHeld(down);
      return;
    }
    const chord =
      CHORDS.find((c) => c.id === (s.quiz?.chordId ?? s.selectedChordId)) ??
      CHORDS[0];
    if (!chord) return;
    const tuning = getTuning(s.tuningId);
    const notes: { midi: number; stringIndex: number }[] = [];
    chord.frets.forEach((fret, stringIndex) => {
      if (fret == null) return;
      const midi = soundingMidi(tuning.midi[stringIndex]!, fret, s.capo);
      if (midi == null) return;
      notes.push({ midi, stringIndex });
    });
    strum(notes, down);
    const last = notes[notes.length - 1];
    if (last) {
      set({
        lastPlayed: {
          stringIndex: last.stringIndex,
          fret: chord.frets[last.stringIndex] ?? 0,
          midi: last.midi,
          at: Date.now(),
        },
      });
    }
    const quiz = s.quiz;
    if (quiz && s.mode === "train" && quiz.kind === "chord" && quiz.feedback === "idle") {
      const ok = quiz.chordId === chord.id;
      set({
        quiz: {
          ...quiz,
          feedback: ok ? "good" : "bad",
          score: quiz.score + (ok ? 1 : 0),
        },
        selectedChordId: chord.id,
      });
    }
  },

  strumOpen: () => {
    const s = get();
    if (anyHeld(s.held)) {
      s.strumHeld(true);
      return;
    }
    const tuning = getTuning(s.tuningId);
    const notes = tuning.midi
      .map((open, stringIndex) => {
        const midi = soundingMidi(open, 0, s.capo);
        return midi == null ? null : { midi, stringIndex };
      })
      .filter((n): n is { midi: number; stringIndex: number } => n != null);
    strum(notes, true);
  },

  startLesson: (id) => {
    const s = get();
    const lesson = LESSONS.find((l) => l.id === id);
    if (!lesson) return;
    let quiz: Quiz;
    if (lesson.kind === "find") quiz = makeFindQuiz(id, s, 1, 0);
    else if (lesson.kind === "play-along") quiz = makePlayAlongQuiz(id, s, 1, 0);
    else if (lesson.kind === "chord") quiz = makeChordQuiz(id, 1, 0);
    else quiz = makeIdentifyQuiz(id, s, 1, 0);
    set({
      mode: "train",
      quiz,
      selectedChordId: quiz.chordId ?? s.selectedChordId,
    });
    if (quiz.kind === "identify" || quiz.kind === "play-along") {
      pluck(quiz.midi, quiz.stringIndex);
      set({
        lastPlayed: {
          stringIndex: quiz.stringIndex,
          fret: quiz.fret,
          midi: quiz.midi,
          at: Date.now(),
        },
      });
    }
  },

  answerQuiz: (choice) => {
    const quiz = get().quiz;
    if (!quiz || quiz.kind !== "identify" || quiz.feedback !== "idle") return;
    const ok = choice === quiz.correct;
    set({
      quiz: {
        ...quiz,
        feedback: ok ? "good" : "bad",
        score: quiz.score + (ok ? 1 : 0),
      },
    });
  },

  nextRound: () => {
    const s = get();
    const quiz = s.quiz;
    if (!quiz) return;
    if (quiz.round >= quiz.total) {
      const completed = s.completedLessons.includes(quiz.lessonId)
        ? s.completedLessons
        : [...s.completedLessons, quiz.lessonId];
      set({ quiz: null, completedLessons: completed });
      savePersist(persistSlice({ ...s, completedLessons: completed }));
      return;
    }
    const round = quiz.round + 1;
    const lesson = LESSONS.find((l) => l.id === quiz.lessonId);
    let next: Quiz;
    if (lesson?.kind === "find") next = makeFindQuiz(quiz.lessonId, s, round, quiz.score);
    else if (lesson?.kind === "play-along")
      next = makePlayAlongQuiz(quiz.lessonId, s, round, quiz.score);
    else if (lesson?.kind === "chord") next = makeChordQuiz(quiz.lessonId, round, quiz.score);
    else next = makeIdentifyQuiz(quiz.lessonId, s, round, quiz.score);
    set({ quiz: next, selectedChordId: next.chordId ?? s.selectedChordId });
    if (next.kind === "identify" || next.kind === "play-along") {
      pluck(next.midi, next.stringIndex);
      set({
        lastPlayed: {
          stringIndex: next.stringIndex,
          fret: next.fret,
          midi: next.midi,
          at: Date.now(),
        },
      });
    }
  },

  setMetronomeOn: (metronomeOn) => set({ metronomeOn }),
  setBpm: (bpm) => set({ bpm }),
}));

export function hydrateStudio() {
  const saved = loadPersist();
  useStudio.setState(saved);
  setMasterVolume(saved.volume);
  setMuted(saved.muted);
}

export function getActiveChord(id: string | null): ChordShape | undefined {
  return CHORDS.find((c) => c.id === id);
}

export function midiAt(
  stringIndex: number,
  fret: number,
  tuningId: TuningId,
  capo: number,
): number | null {
  const open = getTuning(tuningId).midi[stringIndex];
  if (open == null) return null;
  return soundingMidi(open, fret, capo);
}

export function clampPos(pos: number): number {
  if (!Number.isFinite(pos)) return 0;
  return Math.min(FRET_COUNT, Math.max(0, pos));
}

export function anyHeld(held: Held): boolean {
  return held.some((h) => h != null);
}

/**
 * Fractional sounding MIDI for a (possibly sliding) finger. Behind the capo the
 * string sounds at the capo; open (null/0) is the open string plus capo.
 */
export function heldMidi(
  stringIndex: number,
  pos: number | null,
  tuningId: TuningId,
  capo: number,
): number | null {
  const open = getTuning(tuningId).midi[stringIndex];
  if (open == null) return null;
  if (pos == null || pos <= 0) return open + capo;
  return open + Math.max(pos, capo);
}

/** All six strings: held ones at their (fractional) position, the rest open. */
export function heldNotes(
  held: Held,
  tuningId: TuningId,
  capo: number,
): { midi: number; stringIndex: number }[] {
  const notes: { midi: number; stringIndex: number }[] = [];
  for (let stringIndex = 0; stringIndex < STRING_COUNT; stringIndex++) {
    const midi = heldMidi(stringIndex, held[stringIndex] ?? null, tuningId, capo);
    if (midi != null) notes.push({ midi, stringIndex });
  }
  return notes;
}

/** Does the held shape voice this chord? Muted (X) strings are ignored. */
export function heldMatchesChord(held: Held, chord: ChordShape): boolean {
  for (let stringIndex = 0; stringIndex < STRING_COUNT; stringIndex++) {
    const want = chord.frets[stringIndex];
    if (want == null) continue;
    const pos = held[stringIndex];
    const have = pos == null ? 0 : Math.round(pos);
    if (have !== want) return false;
  }
  return true;
}

/** Best named chord for the held shape (most strings specified wins). */
export function matchHeldChord(held: Held): ChordShape | undefined {
  if (!held.some((h) => h != null && Math.round(h) > 0)) return undefined;
  let best: ChordShape | undefined;
  let bestCount = -1;
  for (const chord of CHORDS) {
    if (!heldMatchesChord(held, chord)) continue;
    const count = chord.frets.filter((f) => f != null).length;
    if (count > bestCount) {
      best = chord;
      bestCount = count;
    }
  }
  return best;
}
