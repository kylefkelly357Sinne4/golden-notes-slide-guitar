export const SHARP_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;

export const FLAT_NAMES = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
] as const;

export const STRING_COUNT = 6;
export const FRET_COUNT = 12;
export const INLAY_FRETS = new Set([3, 5, 7, 9, 12]);

export type Accidental = "sharp" | "flat";

export function midiToFreq(midi: number): number {
  return 440 * 2 ** ((midi - 69) / 12);
}

export function pitchClass(midi: number): number {
  return ((midi % 12) + 12) % 12;
}

export function noteName(midi: number, accidental: Accidental = "sharp"): string {
  const names = accidental === "flat" ? FLAT_NAMES : SHARP_NAMES;
  return names[pitchClass(midi)] ?? "C";
}

export function noteOctave(midi: number): number {
  return Math.floor(midi / 12) - 1;
}

export function noteLabel(midi: number, accidental: Accidental = "sharp"): string {
  return `${noteName(midi, accidental)}${noteOctave(midi)}`;
}

export type TuningId =
  | "standard"
  | "drop-d"
  | "eb"
  | "open-g"
  | "open-d"
  | "dadgad";

export type Tuning = {
  id: TuningId;
  name: string;
  midi: number[];
};

export const TUNINGS: Tuning[] = [
  { id: "standard", name: "Standard EADGBE", midi: [40, 45, 50, 55, 59, 64] },
  { id: "drop-d", name: "Drop D", midi: [38, 45, 50, 55, 59, 64] },
  { id: "eb", name: "Half step down", midi: [39, 44, 49, 54, 58, 63] },
  { id: "open-g", name: "Open G", midi: [38, 43, 50, 55, 59, 62] },
  { id: "open-d", name: "Open D", midi: [38, 45, 50, 54, 57, 62] },
  { id: "dadgad", name: "DADGAD", midi: [38, 45, 50, 55, 57, 62] },
];

export function getTuning(id: TuningId): Tuning {
  return TUNINGS.find((t) => t.id === id) ?? TUNINGS[0]!;
}

/** Sounding MIDI. Capo raises open strings; frets below the capo are dead. */
export function soundingMidi(
  openMidi: number,
  fret: number,
  capo: number,
): number | null {
  if (fret < 0) return null;
  if (fret === 0) return openMidi + capo;
  if (fret < capo) return null;
  return openMidi + fret;
}

export function fretCellFractions(totalFrets = FRET_COUNT): number[] {
  const positions = [0];
  for (let i = 1; i <= totalFrets; i++) {
    positions.push(1 - 2 ** (-i / 12));
  }
  const end = positions[totalFrets] ?? 1;
  const widths: number[] = [];
  for (let i = 1; i <= totalFrets; i++) {
    const a = positions[i - 1] ?? 0;
    const b = positions[i] ?? 0;
    widths.push((b - a) / end);
  }
  return widths;
}

export const FRET_FRACTIONS = fretCellFractions();

export type ChordShape = {
  id: string;
  name: string;
  quality: string;
  group: "open" | "seventh" | "barre" | "power";
  /** Frets low E → high e. null = mute. */
  frets: (number | null)[];
  /** Finger 1–4, same order. */
  fingers: (number | null)[];
};

export const CHORDS: ChordShape[] = [
  { id: "em", name: "Em", quality: "minor", group: "open", frets: [0, 2, 2, 0, 0, 0], fingers: [null, 2, 3, null, null, null] },
  { id: "e", name: "E", quality: "major", group: "open", frets: [0, 2, 2, 1, 0, 0], fingers: [null, 2, 3, 1, null, null] },
  { id: "g", name: "G", quality: "major", group: "open", frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, null, null, null, 3] },
  { id: "c", name: "C", quality: "major", group: "open", frets: [null, 3, 2, 0, 1, 0], fingers: [null, 3, 2, null, 1, null] },
  { id: "d", name: "D", quality: "major", group: "open", frets: [null, null, 0, 2, 3, 2], fingers: [null, null, null, 1, 3, 2] },
  { id: "a", name: "A", quality: "major", group: "open", frets: [null, 0, 2, 2, 2, 0], fingers: [null, null, 1, 2, 3, null] },
  { id: "am", name: "Am", quality: "minor", group: "open", frets: [null, 0, 2, 2, 1, 0], fingers: [null, null, 2, 3, 1, null] },
  { id: "dm", name: "Dm", quality: "minor", group: "open", frets: [null, null, 0, 2, 3, 1], fingers: [null, null, null, 2, 3, 1] },
  { id: "fmaj7", name: "Fmaj7", quality: "maj7", group: "open", frets: [null, null, 3, 2, 1, 0], fingers: [null, null, 3, 2, 1, null] },
  { id: "e7", name: "E7", quality: "7", group: "seventh", frets: [0, 2, 0, 1, 0, 0], fingers: [null, 2, null, 1, null, null] },
  { id: "a7", name: "A7", quality: "7", group: "seventh", frets: [null, 0, 2, 0, 2, 0], fingers: [null, null, 2, null, 3, null] },
  { id: "d7", name: "D7", quality: "7", group: "seventh", frets: [null, null, 0, 2, 1, 2], fingers: [null, null, null, 2, 1, 3] },
  { id: "g7", name: "G7", quality: "7", group: "seventh", frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, null, null, null, 1] },
  { id: "c7", name: "C7", quality: "7", group: "seventh", frets: [null, 3, 2, 3, 1, 0], fingers: [null, 3, 2, 4, 1, null] },
  { id: "b7", name: "B7", quality: "7", group: "seventh", frets: [null, 2, 1, 2, 0, 2], fingers: [null, 2, 1, 3, null, 4] },
  { id: "f", name: "F", quality: "major", group: "barre", frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1] },
  { id: "bm", name: "Bm", quality: "minor", group: "barre", frets: [null, 2, 4, 4, 3, 2], fingers: [null, 1, 3, 4, 2, 1] },
  { id: "bb", name: "Bb", quality: "major", group: "barre", frets: [null, 1, 3, 3, 3, 1], fingers: [null, 1, 2, 3, 4, 1] },
  { id: "e5", name: "E5", quality: "power", group: "power", frets: [0, 2, 2, null, null, null], fingers: [null, 1, 2, null, null, null] },
  { id: "a5", name: "A5", quality: "power", group: "power", frets: [null, 0, 2, 2, null, null], fingers: [null, null, 1, 2, null, null] },
  { id: "d5", name: "D5", quality: "power", group: "power", frets: [null, null, 0, 2, 3, null], fingers: [null, null, null, 1, 2, null] },
  { id: "g5", name: "G5", quality: "power", group: "power", frets: [3, 5, 5, null, null, null], fingers: [1, 3, 4, null, null, null] },
];

export type ScaleDef = {
  id: string;
  name: string;
  intervals: number[];
  hint: string;
};

export const SCALES: ScaleDef[] = [
  { id: "major", name: "Major", intervals: [0, 2, 4, 5, 7, 9, 11], hint: "Do re mi — bright, resolved." },
  { id: "minor", name: "Natural minor", intervals: [0, 2, 3, 5, 7, 8, 10], hint: "Sad, song-like, relative of major." },
  { id: "pent-maj", name: "Major pentatonic", intervals: [0, 2, 4, 7, 9], hint: "Five notes. Country and melody friendly." },
  { id: "pent-min", name: "Minor pentatonic", intervals: [0, 3, 5, 7, 10], hint: "The box. Rock, blues, and country lead." },
  { id: "blues", name: "Blues", intervals: [0, 3, 5, 6, 7, 10], hint: "Minor pentatonic plus the blue note." },
  { id: "dorian", name: "Dorian", intervals: [0, 2, 3, 5, 7, 9, 10], hint: "Minor with a raised 6th. Soulful." },
  { id: "mixolydian", name: "Mixolydian", intervals: [0, 2, 4, 5, 7, 9, 10], hint: "Major with a flat 7. Southern rock." },
  { id: "harmonic", name: "Harmonic minor", intervals: [0, 2, 3, 5, 7, 8, 11], hint: "The raised 7th. Drama." },
];

export const DEGREE_NAMES = ["1", "b2", "2", "b3", "3", "4", "b5", "5", "b6", "6", "b7", "7"];

export function scalePitchClasses(rootPc: number, intervals: number[]): Set<number> {
  return new Set(intervals.map((i) => (rootPc + i) % 12));
}

export function intervalFrom(rootPc: number, midi: number): string {
  const d = (pitchClass(midi) - rootPc + 12) % 12;
  return DEGREE_NAMES[d] ?? "1";
}

export const KEYS_SHARP = ["C", "G", "D", "A", "E", "B", "F#"];
export const KEYS_FLAT = ["F", "Bb", "Eb", "Ab", "Db"];
export const ALL_KEYS = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

export function keyToPc(key: string): number {
  const sharp = SHARP_NAMES.indexOf(key as (typeof SHARP_NAMES)[number]);
  if (sharp >= 0) return sharp;
  const flat = FLAT_NAMES.indexOf(key as (typeof FLAT_NAMES)[number]);
  return flat >= 0 ? flat : 0;
}

export function shapesMatch(
  held: readonly (number | "x" | null)[],
  shape: readonly (number | null)[],
): boolean {
  return shape.every((fret, index) => {
    const finger = held[index];
    if (fret == null) return finger === "x";
    if (fret === 0) return finger == null;
    return finger === fret;
  });
}

export function chordNameFor(
  held: readonly (number | "x" | null)[],
): string | null {
  const found = CHORDS.find((chord) => shapesMatch(held, chord.frets));
  return found?.name ?? null;
}

export const STRING_LABELS = [
  { number: 6, name: "low E", gauge: 3.1 },
  { number: 5, name: "A", gauge: 2.5 },
  { number: 4, name: "D", gauge: 2.1 },
  { number: 3, name: "G", gauge: 1.6 },
  { number: 2, name: "B", gauge: 1.2 },
  { number: 1, name: "high E", gauge: 0.9 },
];

/** Display order: high e at top (tab convention). */
export const DISPLAY_STRINGS = [5, 4, 3, 2, 1, 0];
