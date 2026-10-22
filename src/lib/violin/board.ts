/** Violin strings, low G to high E. First-position tapes, not a fret quiz. */
export const VIOLIN_STRINGS = [
  { name: "G", midi: 55, gauge: 2.4 },
  { name: "D", midi: 62, gauge: 1.8 },
  { name: "A", midi: 69, gauge: 1.3 },
  { name: "E", midi: 76, gauge: 0.8 },
] as const;

/** High E on top, same way the guitar neck sits. */
export const VIOLIN_DISPLAY = [3, 2, 1, 0];

export const PLACE_COUNT = 8;

/** Semitones from the open string that get a finger tape. */
export const TAPE: Record<number, string> = {
  0: "0",
  2: "1",
  3: "2",
  4: "2",
  5: "3",
  7: "4",
};

export type TuneStep = { stringIndex: number; place: number };

/** A, E, D, G, then back. Open strings are the first thing you actually practice. */
export const OPENS: TuneStep[] = [
  { stringIndex: 2, place: 0 },
  { stringIndex: 3, place: 0 },
  { stringIndex: 1, place: 0 },
  { stringIndex: 0, place: 0 },
  { stringIndex: 0, place: 0 },
  { stringIndex: 1, place: 0 },
  { stringIndex: 3, place: 0 },
  { stringIndex: 2, place: 0 },
];

/** Open, then first finger, on A, E, D, and G. */
export const FINGERS: TuneStep[] = [
  { stringIndex: 2, place: 0 },
  { stringIndex: 2, place: 2 },
  { stringIndex: 3, place: 0 },
  { stringIndex: 3, place: 2 },
  { stringIndex: 1, place: 0 },
  { stringIndex: 1, place: 2 },
  { stringIndex: 0, place: 0 },
  { stringIndex: 0, place: 2 },
];

/** Every tape on the A string, up and back, including low 2. */
export const TAPES_DRILL: TuneStep[] = [
  { stringIndex: 2, place: 0 },
  { stringIndex: 2, place: 2 },
  { stringIndex: 2, place: 3 },
  { stringIndex: 2, place: 4 },
  { stringIndex: 2, place: 5 },
  { stringIndex: 2, place: 7 },
  { stringIndex: 2, place: 5 },
  { stringIndex: 2, place: 4 },
  { stringIndex: 2, place: 3 },
  { stringIndex: 2, place: 2 },
  { stringIndex: 2, place: 0 },
];

/** Twinkle on D and A: open D, open A, first finger, back to open. */
export const TWINKLE: TuneStep[] = [
  { stringIndex: 1, place: 0 },
  { stringIndex: 1, place: 0 },
  { stringIndex: 2, place: 0 },
  { stringIndex: 2, place: 0 },
  { stringIndex: 2, place: 2 },
  { stringIndex: 2, place: 2 },
  { stringIndex: 2, place: 0 },
  { stringIndex: 1, place: 0 },
];

export const ONE_STRING: TuneStep[] = [
  { stringIndex: 2, place: 0 },
  { stringIndex: 2, place: 2 },
  { stringIndex: 2, place: 4 },
  { stringIndex: 2, place: 5 },
  { stringIndex: 2, place: 7 },
  { stringIndex: 2, place: 5 },
  { stringIndex: 2, place: 4 },
  { stringIndex: 2, place: 2 },
  { stringIndex: 2, place: 0 },
];

export type ViolinLesson = "free" | "opens" | "fingers" | "tapes" | "one-string" | "twinkle";

export function lessonSteps(lesson: ViolinLesson): TuneStep[] | null {
  if (lesson === "opens") return OPENS;
  if (lesson === "fingers") return FINGERS;
  if (lesson === "tapes") return TAPES_DRILL;
  if (lesson === "twinkle") return TWINKLE;
  if (lesson === "one-string") return ONE_STRING;
  return null;
}

export function fingerName(place: number): string {
  if (place === 0) return "open";
  if (place === 2) return "1";
  if (place === 3) return "low 2";
  if (place === 4) return "high 2";
  if (place === 5) return "3";
  if (place === 7) return "4";
  return "between";
}

export function bowWord(step: number): "Down bow" | "Up bow" {
  return step % 2 === 0 ? "Down bow" : "Up bow";
}
