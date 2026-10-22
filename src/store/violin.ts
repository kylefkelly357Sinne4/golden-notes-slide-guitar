import { create } from "zustand";
import { retuneBow, startBow, stopAllBows, stopBow } from "@/lib/guitar/audio";
import {
  type TuneStep,
  type ViolinLesson,
  VIOLIN_STRINGS,
  lessonSteps,
} from "@/lib/violin/board";

type ViolinState = {
  lesson: ViolinLesson;
  fingers: Array<number | null>;
  bowing: number | null;
  step: number;
  hits: number;
  setLesson: (lesson: ViolinLesson) => void;
  plant: (stringIndex: number, place: number) => void;
  lift: (stringIndex: number) => void;
  slideTo: (stringIndex: number, place: number) => void;
  beginBow: (stringIndex: number) => void;
  moveBow: (stringIndex: number) => void;
  endBow: () => void;
};

function pitch(stringIndex: number, place: number | null): number {
  const open = VIOLIN_STRINGS[stringIndex]!.midi;
  return open + (place ?? 0);
}

function advance(get: () => ViolinState, set: (partial: Partial<ViolinState>) => void, stringIndex: number) {
  const state = get();
  const steps = lessonSteps(state.lesson);
  if (!steps) return;
  const target = steps[state.step % steps.length];
  if (!target) return;
  const placed = state.fingers[stringIndex] ?? 0;
  if (stringIndex !== target.stringIndex || placed !== target.place) return;
  const next = state.step + 1;
  set({
    step: next,
    hits: state.hits + 1,
  });
}

export const useViolin = create<ViolinState>((set, get) => ({
  lesson: "opens",
  fingers: [null, null, null, null],
  bowing: null,
  step: 0,
  hits: 0,

  setLesson: (lesson) => {
    stopAllBows();
    set({ lesson, step: 0, hits: 0, bowing: null });
  },

  plant: (stringIndex, place) => {
    const fingers = get().fingers.slice();
    fingers[stringIndex] = place === 0 ? null : place;
    set({ fingers });
    if (get().bowing === stringIndex) retuneBow(stringIndex, pitch(stringIndex, fingers[stringIndex]));
  },

  lift: (stringIndex) => {
    const fingers = get().fingers.slice();
    fingers[stringIndex] = null;
    set({ fingers });
    if (get().bowing === stringIndex) retuneBow(stringIndex, pitch(stringIndex, null));
  },

  slideTo: (stringIndex, place) => {
    const fingers = get().fingers.slice();
    if (fingers[stringIndex] === (place === 0 ? null : place)) return;
    fingers[stringIndex] = place === 0 ? null : place;
    set({ fingers });
    if (get().bowing === stringIndex) retuneBow(stringIndex, pitch(stringIndex, fingers[stringIndex]));
  },

  beginBow: (stringIndex) => {
    stopAllBows();
    const place = get().fingers[stringIndex];
    startBow(pitch(stringIndex, place), stringIndex);
    set({ bowing: stringIndex });
    advance(get, set, stringIndex);
  },

  moveBow: (stringIndex) => {
    if (get().bowing === stringIndex) return;
    if (get().bowing != null) stopBow(get().bowing!);
    const place = get().fingers[stringIndex];
    startBow(pitch(stringIndex, place), stringIndex);
    set({ bowing: stringIndex });
    advance(get, set, stringIndex);
  },

  endBow: () => {
    stopAllBows();
    set({ bowing: null });
  },
}));

export function currentStep(): TuneStep | null {
  const { lesson, step } = useViolin.getState();
  const steps = lessonSteps(lesson);
  if (!steps) return null;
  return steps[step % steps.length] ?? null;
}
