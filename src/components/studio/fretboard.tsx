import {
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { unlockAudio } from "@/lib/guitar/audio";
import { cn } from "@/lib/utils";
import {
  CHORDS,
  DISPLAY_STRINGS,
  FRET_COUNT,
  FRET_FRACTIONS,
  INLAY_FRETS,
  SCALES,
  STRING_LABELS,
  getTuning,
  intervalFrom,
  keyToPc,
  noteName,
  pitchClass,
  scalePitchClasses,
} from "@/lib/guitar/theory";
import { clampPos, heldMidi, midiAt, useStudio } from "@/store/studio";

/** One fretting finger (pointer). Mirrors the violin board's drag ref, per pointer. */
type FingerGesture = {
  stringIndex: number;
  row: HTMLElement;
  startFret: number;
  startCont: number;
  startX: number;
  pos: number;
  moved: boolean;
  order: number;
};

const SLIDE_DEADZONE_PX = 5;

export function Fretboard() {
  const mode = useStudio((s) => s.mode);
  const tuningId = useStudio((s) => s.tuningId);
  const capo = useStudio((s) => s.capo);
  const showNotes = useStudio((s) => s.showNotes);
  const showDegrees = useStudio((s) => s.showDegrees);
  const accidental = useStudio((s) => s.accidental);
  const leftHanded = useStudio((s) => s.leftHanded);
  const lastPlayed = useStudio((s) => s.lastPlayed);
  const selectedChordId = useStudio((s) => s.selectedChordId);
  const selectedScaleId = useStudio((s) => s.selectedScaleId);
  const selectedKey = useStudio((s) => s.selectedKey);
  const atlasPc = useStudio((s) => s.atlasPc);
  const quiz = useStudio((s) => s.quiz);
  const playFret = useStudio((s) => s.playFret);
  const held = useStudio((s) => s.held);
  const pressFret = useStudio((s) => s.pressFret);
  const slideFret = useStudio((s) => s.slideFret);
  const holdAt = useStudio((s) => s.holdAt);
  const releaseFret = useStudio((s) => s.releaseFret);
  const releaseAll = useStudio((s) => s.releaseAll);
  const gestures = useRef(new Map<number, FingerGesture>());
  const orderSeq = useRef(0);

  useEffect(() => {
    const map = gestures.current;
    const drop = () => {
      map.clear();
      releaseAll();
    };
    window.addEventListener("blur", drop);
    return () => {
      window.removeEventListener("blur", drop);
      drop();
    };
  }, [releaseAll]);

  const onFingerDown = (e: ReactPointerEvent<HTMLDivElement>, stringIndex: number) => {
    const cell = (e.target as HTMLElement).closest("[data-fret]") as HTMLButtonElement | null;
    if (!cell || cell.disabled) return;
    unlockAudio();
    e.preventDefault();
    const row = e.currentTarget;
    try {
      row.setPointerCapture(e.pointerId);
    } catch {
      /* synthetic pointer without capture support */
    }
    const fret = Number(cell.dataset.fret);
    if (!Number.isFinite(fret)) return;
    orderSeq.current += 1;
    gestures.current.set(e.pointerId, {
      stringIndex,
      row,
      startFret: fret,
      startCont: continuousFret(row, e.clientX),
      startX: e.clientX,
      pos: fret,
      moved: false,
      order: orderSeq.current,
    });
    pressFret(stringIndex, fret);
  };

  const onFingerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const gesture = gestures.current.get(e.pointerId);
    if (!gesture) return;
    if (!gesture.moved && Math.abs(e.clientX - gesture.startX) < SLIDE_DEADZONE_PX) return;
    gesture.moved = true;
    // Relative glide: the pressed fret is where the finger landed, then pitch
    // follows the finger continuously along its own string (never steps).
    const cont = continuousFret(gesture.row, e.clientX);
    const pos = clampPos(gesture.startFret + (cont - gesture.startCont));
    if (pos === gesture.pos) return;
    gesture.pos = pos;
    slideFret(gesture.stringIndex, pos);
  };

  const onFingerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const gesture = gestures.current.get(e.pointerId);
    if (!gesture) return;
    gestures.current.delete(e.pointerId);
    let other: FingerGesture | undefined;
    for (const g of gestures.current.values()) {
      if (g.stringIndex === gesture.stringIndex && (!other || g.order > other.order)) other = g;
    }
    if (other) holdAt(gesture.stringIndex, other.pos);
    else releaseFret(gesture.stringIndex);
  };

  const tuning = getTuning(tuningId);
  const chord =
    mode === "chords" || quiz?.kind === "chord"
      ? CHORDS.find((c) => c.id === (quiz?.chordId ?? selectedChordId))
      : undefined;
  const scale = SCALES.find((s) => s.id === selectedScaleId);
  const rootPc = keyToPc(selectedKey);
  const scaleSet = useMemo(
    () => (scale ? scalePitchClasses(rootPc, scale.intervals) : new Set<number>()),
    [scale, rootPc],
  );

  const columns = [
    "2.8rem",
    "minmax(2.1rem, 0.7fr)",
    ...FRET_FRACTIONS.map((f) => `${(f * 100).toFixed(3)}fr`),
  ].join(" ");

  return (
    <div className="flex items-stretch gap-2">
      {leftHanded ? <StrumBar /> : null}
      <div className="min-w-0 flex-1">
      <div
        data-held={JSON.stringify(held.map((h) => (h == null ? null : Math.round(h * 1000) / 1000)))}
        className="fretboard-wood relative w-full rounded-l-xl border border-border p-1.5 shadow-[0_20px_50px_rgb(0_0_0_/_0.45)]"
        style={{
          direction: leftHanded ? "rtl" : "ltr",
        }}
      >
        <div className="mb-1 grid" style={{ gridTemplateColumns: columns }}>
          <div />
          <div className="text-center font-mono text-xs text-bone">0</div>
          {Array.from({ length: FRET_COUNT }, (_, i) => (
            <div
              key={i + 1}
              className="text-center font-mono text-xs text-muted tabular-nums"
            >
              {i + 1}
            </div>
          ))}
        </div>

        {DISPLAY_STRINGS.map((stringIndex) => {
          const meta = STRING_LABELS[stringIndex]!;
          const holdPos = held[stringIndex] ?? null;
          const ringing =
            lastPlayed &&
            lastPlayed.stringIndex === stringIndex &&
            Date.now() - lastPlayed.at < 700;
          return (
            <div
              key={stringIndex}
              data-string-row={stringIndex}
              className="guitar-string-row relative isolate grid"
              style={{ gridTemplateColumns: columns }}
              onPointerDown={(e) => onFingerDown(e, stringIndex)}
              onPointerMove={onFingerMove}
              onPointerUp={onFingerUp}
              onPointerCancel={onFingerUp}
              onLostPointerCapture={onFingerUp}
            >
              <div className="flex flex-col items-end justify-start pr-2 pt-1 text-right">
                <span className="font-mono text-xs text-bone">
                  {tuning.midi[stringIndex] != null
                    ? noteName(tuning.midi[stringIndex]!, accidental)
                    : ""}
                </span>
                <span className="font-mono text-xs text-muted">{meta.number}</span>
              </div>

              {Array.from({ length: FRET_COUNT + 1 }, (_, fret) => {
                const midi = midiAt(stringIndex, fret, tuningId, capo);
                const dead = midi == null;
                const pc = midi != null ? pitchClass(midi) : -1;
                const isOpen = fret === 0;
                const chordFret = chord?.frets[stringIndex];
                const inChord = Boolean(chord) && chordFret === fret;
                const mutedString = Boolean(chord) && chordFret == null && isOpen;
                const inScale = mode === "scales" && midi != null && scaleSet.has(pc);
                const isRoot = inScale && pc === rootPc;
                const inAtlas = mode === "notes" && atlasPc != null && pc === atlasPc;
                const quizTarget =
                  quiz &&
                  (quiz.kind === "identify" || quiz.kind === "play-along") &&
                  quiz.stringIndex === stringIndex &&
                  quiz.fret === fret;
                const findHit =
                  quiz?.kind === "find" && quiz.found.includes(`${stringIndex}:${fret}`);
                const findTarget = quiz?.kind === "find" && pc === quiz.targetPc;
                const played =
                  lastPlayed?.stringIndex === stringIndex && lastPlayed.fret === fret;
                const finger = inChord ? chord?.fingers[stringIndex] : null;

                const showDigit =
                  !dead &&
                  (showNotes ||
                    inChord ||
                    mutedString ||
                    inScale ||
                    inAtlas ||
                    Boolean(quizTarget) ||
                    Boolean(findHit) ||
                    Boolean(played));

                const showDot =
                  inChord ||
                  mutedString ||
                  Boolean(quizTarget) ||
                  Boolean(findHit) ||
                  Boolean(played) ||
                  (inScale && isRoot) ||
                  inAtlas;

                let digit = "";
                if (mutedString) digit = "X";
                else if (midi != null && showDegrees && (inScale || inChord))
                  digit = intervalFrom(rootPc, midi);
                else if (midi != null) digit = noteName(midi, accidental);

                let dotLabel = "";
                if (mutedString) dotLabel = "X";
                else if (inChord && isOpen && chordFret === 0) dotLabel = "O";
                else if (finger) dotLabel = String(finger);

                return (
                  <button
                    key={fret}
                    type="button"
                    disabled={dead}
                    data-fret={fret}
                    onClick={(e) => {
                      // Keyboard activation only; pointers are handled by the row (press-hold-slide).
                      if (e.detail === 0 && !dead) playFret(stringIndex, fret);
                    }}
                    aria-label={
                      midi == null
                        ? `Muted ${meta.name}`
                        : `${noteName(midi, accidental)} string ${meta.number} fret ${fret}`
                    }
                    className={cn(
                      "relative z-10 fret-cell",
                      isOpen && "border-r-2 border-r-nut bg-nut/12",
                      INLAY_FRETS.has(fret) &&
                        stringIndex === 2 &&
                        "after:absolute after:top-2 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:rounded-full after:bg-bone/50",
                      fret === 12 &&
                        stringIndex === 1 &&
                        "after:absolute after:top-0.5 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:rounded-full after:bg-bone/50",
                      dead && "opacity-30",
                      (inChord || quizTarget || inAtlas) && "bg-primary/10",
                      findTarget && quiz?.kind === "find" && "bg-ember/10",
                    )}
                  >
                    {fret > 0 ? (
                      <span className="pointer-events-none absolute inset-y-0 right-0 w-px bg-fretwire/80" />
                    ) : null}
                    {showDot ? (
                      <span
                        className={cn(
                          "finger-dot",
                          (isRoot || quizTarget || played || findHit) && "is-root",
                        )}
                      >
                        {dotLabel}
                      </span>
                    ) : null}
                    {showDigit ? (
                      <span
                        className={cn(
                          "note-digit",
                          (isRoot || quizTarget || findHit) && "is-root",
                          played && "is-played",
                          mutedString && "is-mute",
                        )}
                      >
                        {digit}
                      </span>
                    ) : null}
                  </button>
                );
              })}

              <span
                className={cn(
                  "string-wire",
                  ringing && "is-ringing",
                  holdPos != null && "is-fretted",
                )}
                style={{ ["--gauge" as string]: `${meta.gauge}px` }}
              />
              {holdPos != null ? (
                <HeldMarker
                  stringIndex={stringIndex}
                  pos={holdPos}
                  leftHanded={leftHanded}
                  label={(() => {
                    const m = heldMidi(stringIndex, holdPos, tuningId, capo);
                    return m == null ? "" : noteName(Math.round(m), accidental);
                  })()}
                />
              ) : null}
            </div>
          );
        })}

        {capo > 0 ? (
          <div
            className="pointer-events-none absolute top-7 bottom-2 z-20 rounded-sm bg-ember/80 shadow-[0_0_12px_rgb(232_93_58_/_0.55)]"
            style={{
              left: leftHanded
                ? "auto"
                : `calc(2.8rem + 2.1rem + ${(FRET_FRACTIONS.slice(0, capo - 1).reduce((a, b) => a + b, 0) * 100).toFixed(2)}%)`,
              right: leftHanded
                ? `calc(2.8rem + 2.1rem + ${(FRET_FRACTIONS.slice(0, capo - 1).reduce((a, b) => a + b, 0) * 100).toFixed(2)}%)`
                : "auto",
              width: `${((FRET_FRACTIONS[capo - 1] ?? 0.08) * 18).toFixed(2)}%`,
            }}
          />
        ) : null}

        <p className="fret-legend mt-2 px-1 font-mono text-xs uppercase tracking-widest text-muted">
          Steeley Strings · nut left, body right
          {openMidiHint(tuning.midi.map((m) => noteName(m, accidental)))}
        </p>
      </div>
      </div>
      {leftHanded ? null : <GuitarBody />}
      {leftHanded ? null : <StrumBar />}
    </div>
  );
}

/** Glowing fingertip that sits at the continuous held position on its string. */
function HeldMarker({
  stringIndex,
  pos,
  label,
  leftHanded,
}: {
  stringIndex: number;
  pos: number;
  label: string;
  leftHanded: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const place = () => {
      const el = ref.current;
      const row = el?.parentElement;
      if (!el || !row) return;
      const x = fretToX(row, pos);
      if (x != null) el.style.left = `${x}px`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [pos, leftHanded]);

  return (
    <span
      ref={ref}
      className="held-marker"
      data-held-string={stringIndex}
      data-held-pos={pos.toFixed(3)}
      aria-hidden
    >
      <span className="held-marker-dot">{label}</span>
      <span className="held-marker-pos">{pos.toFixed(1)}</span>
    </span>
  );
}

/** Guitar Hero style strum area: tap = down strum, swipe back and forth = alternate strums. */
function StrumBar() {
  const held = useStudio((s) => s.held);
  const strumNow = useStudio((s) => s.strumNow);
  const swipes = useRef(new Map<number, { anchor: number; dir: "down" | "up" }>());
  const [flash, setFlash] = useState<{ dir: "down" | "up"; n: number } | null>(null);
  const flashTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (flashTimer.current != null) window.clearTimeout(flashTimer.current);
    },
    [],
  );

  const fire = (dir: "down" | "up") => {
    strumNow(dir === "down");
    setFlash((f) => ({ dir, n: (f?.n ?? 0) + 1 }));
    if (flashTimer.current != null) window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setFlash(null), 220);
  };

  return (
    <div
      className={cn("strum-bar", flash && `is-strum-${flash.dir}`)}
      data-strum-bar
      role="button"
      tabIndex={0}
      aria-label="Strum bar: tap or swipe to strum the held shape"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          fire("down");
        }
      }}
      onPointerDown={(e) => {
        unlockAudio();
        e.preventDefault();
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          /* synthetic pointer */
        }
        swipes.current.set(e.pointerId, { anchor: e.clientY, dir: "down" });
        fire("down");
      }}
      onPointerMove={(e) => {
        const swipe = swipes.current.get(e.pointerId);
        if (!swipe) return;
        const dy = e.clientY - swipe.anchor;
        if (swipe.dir === "down") {
          if (dy > 0) swipe.anchor = e.clientY;
          else if (dy < -22) {
            swipe.dir = "up";
            swipe.anchor = e.clientY;
            fire("up");
          }
        } else if (dy < 0) swipe.anchor = e.clientY;
        else if (dy > 22) {
          swipe.dir = "down";
          swipe.anchor = e.clientY;
          fire("down");
        }
      }}
      onPointerUp={(e) => swipes.current.delete(e.pointerId)}
      onPointerCancel={(e) => swipes.current.delete(e.pointerId)}
    >
      <span className="strum-label">Strum</span>
      {DISPLAY_STRINGS.map((stringIndex) => (
        <div
          key={stringIndex}
          className={cn("strum-lane", held[stringIndex] != null && "is-held")}
        >
          <span className="strum-lane-wire" />
        </div>
      ))}
      <span className="strum-hint">{flash?.dir === "up" ? "▲" : "▼"}</span>
    </div>
  );
}

/** Centers of the fret cells in a string row, indexed by fret number. */
function fretCenters(row: HTMLElement): number[] {
  const centers: number[] = [];
  row.querySelectorAll<HTMLElement>("[data-fret]").forEach((cell) => {
    const fret = Number(cell.dataset.fret);
    const box = cell.getBoundingClientRect();
    centers[fret] = box.left + box.width / 2;
  });
  return centers;
}

/** Continuous fret number under clientX (center of cell N = N). Works for left-handed (rtl) too. */
function continuousFret(row: HTMLElement, clientX: number): number {
  const c = fretCenters(row);
  if (c.length < 2) return 0;
  for (let f = 0; f < c.length - 1; f++) {
    const a = c[f]!;
    const b = c[f + 1]!;
    const lo = Math.min(a, b);
    const hi = Math.max(a, b);
    if (clientX >= lo && clientX <= hi) return f + (clientX - a) / (b - a);
  }
  const first = c[0]!;
  const last = c[c.length - 1]!;
  return Math.abs(clientX - first) < Math.abs(clientX - last) ? 0 : c.length - 1;
}

/** X offset (px, relative to the row) of a continuous fret position. */
function fretToX(row: HTMLElement, pos: number): number | null {
  const c = fretCenters(row);
  if (c.length < 2) return null;
  const f = Math.min(c.length - 2, Math.max(0, Math.floor(pos)));
  const t = pos - f;
  const x = c[f]! + t * (c[f + 1]! - c[f]!);
  return x - row.getBoundingClientRect().left;
}

function GuitarBody() {
  return (
    <svg
      viewBox="0 0 120 220"
      className="hidden h-auto w-24 shrink-0 self-center sm:block"
      aria-label="Steel-string guitar body"
    >
      <defs>
        <radialGradient id="soundhole" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#070a09" />
          <stop offset="70%" stopColor="#1a100c" />
          <stop offset="100%" stopColor="#c4a574" />
        </radialGradient>
        <linearGradient id="steelbody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a3a22" />
          <stop offset="45%" stopColor="#3a2218" />
          <stop offset="100%" stopColor="#1a0e0a" />
        </linearGradient>
      </defs>
      <path
        d="M48 8c18 0 28 10 32 22 6 18 8 28 8 48 0 22-6 36-16 48-8 10-10 22-8 40 2 16-6 28-24 34-10 4-16 4-24 0-18-6-26-18-24-34 2-18 0-30-8-40C-6 114-12 100-12 78c0-20 2-30 8-48C0 18 14 8 32 8h16z"
        transform="translate(28 0)"
        fill="url(#steelbody)"
        stroke="#d4c4a8"
        strokeWidth="2"
      />
      <circle cx="60" cy="92" r="22" fill="url(#soundhole)" />
      <circle cx="60" cy="92" r="14" fill="none" stroke="#e8d7b0" strokeWidth="3" />
      <rect x="46" y="148" width="28" height="8" rx="2" fill="#e6dcc8" />
      {Array.from({ length: 6 }, (_, index) => (
        <circle key={index} cx={40 + index * 8} cy="152" r="1.6" fill="#1a100c" />
      ))}
      <path d="M60 8v150" stroke="#d7d3c8" strokeWidth="1.2" opacity="0.7" />
    </svg>
  );
}

function openMidiHint(names: string[]) {
  return ` · open ${[...names].reverse().join(" ")}`;
}
