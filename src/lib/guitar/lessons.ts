export type LessonId =
  | "open-strings"
  | "first-frets"
  | "naturals"
  | "accidentals"
  | "find-notes"
  | "open-chords";

export type Lesson = {
  id: LessonId;
  title: string;
  blurb: string;
  kind: "play-along" | "identify" | "find" | "chord";
  detail: string;
};

export const LESSONS: Lesson[] = [
  {
    id: "open-strings",
    title: "The six open strings",
    blurb: "E A D G B E — from thickest to thinnest.",
    kind: "play-along",
    detail:
      "Play each open string from low E (string 6, bottom) up to high E (string 1, top). The mnemonic: Eddie Ate Dynamite, Good Bye Eddie.",
  },
  {
    id: "first-frets",
    title: "Frets 1–3",
    blurb: "Every fret is one semitone — one piano key.",
    kind: "identify",
    detail:
      "A highlighted dot will appear. Name the note. Stay in the first three frets, where beginners live.",
  },
  {
    id: "naturals",
    title: "Natural notes",
    blurb: "A B C D E F G — the letters of music.",
    kind: "identify",
    detail:
      "No sharps or flats this round. Natural notes are the white keys. On guitar they sit in a pattern you can learn by sight.",
  },
  {
    id: "accidentals",
    title: "Sharps and flats",
    blurb: "The note between F and G is F# — also Gb.",
    kind: "identify",
    detail:
      "Same pitch, two names. Sharps raise a note; flats lower the one above. You will see both spellings in music.",
  },
  {
    id: "find-notes",
    title: "Find every G",
    blurb: "The same note lives in several places.",
    kind: "find",
    detail:
      "Tap every matching note on the first twelve frets. One letter, many addresses — that is the fretboard.",
  },
  {
    id: "open-chords",
    title: "First chords: Em and G",
    blurb: "Two shapes. A thousand songs.",
    kind: "chord",
    detail:
      "Hold the highlighted dots, then strum. Em is two fingers. G is three. Switch between them slowly.",
  },
];

const NATURAL_PC = new Set([0, 2, 4, 5, 7, 9, 11]);

export function isNatural(midi: number): boolean {
  return NATURAL_PC.has(((midi % 12) + 12) % 12);
}

export const OPEN_STRING_ORDER = [0, 1, 2, 3, 4, 5];
