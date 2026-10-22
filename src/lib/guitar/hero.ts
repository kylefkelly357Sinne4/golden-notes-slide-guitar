export type RiffId = "country" | "blues" | "power";

export type Riff = {
  id: RiffId;
  name: string;
  steps: string[];
};

export const RIFFS: Riff[] = [
  { id: "country", name: "Country", steps: ["g", "d", "em", "c"] },
  { id: "blues", name: "Blues", steps: ["e", "a", "e", "b7"] },
  { id: "power", name: "Power", steps: ["e5", "a5", "g5", "a5"] },
];

export function getRiff(id: RiffId): Riff {
  return RIFFS.find((r) => r.id === id) ?? RIFFS[0]!;
}
