import { useRef } from "react";
import { cn } from "@/lib/utils";
import { unlockAudio } from "@/lib/guitar/audio";
import {
  PLACE_COUNT,
  TAPE,
  VIOLIN_DISPLAY,
  VIOLIN_STRINGS,
  lessonSteps,
} from "@/lib/violin/board";
import { useViolin } from "@/store/violin";

export function ViolinBoard() {
  const lesson = useViolin((s) => s.lesson);
  const fingers = useViolin((s) => s.fingers);
  const bowing = useViolin((s) => s.bowing);
  const step = useViolin((s) => s.step);
  const plant = useViolin((s) => s.plant);
  const lift = useViolin((s) => s.lift);
  const slideTo = useViolin((s) => s.slideTo);
  const beginBow = useViolin((s) => s.beginBow);
  const moveBow = useViolin((s) => s.moveBow);
  const endBow = useViolin((s) => s.endBow);

  const steps = lessonSteps(lesson);
  const target = steps ? steps[step % steps.length] : null;
  const drag = useRef<{ stringIndex: number; place: number; moved: boolean } | null>(null);
  const bowHits = useRef(new Set<number>());

  return (
    <div className="flex gap-2">
      <div className="violin-board min-w-0 flex-1 rounded-xl border border-border p-2">
        <div
          className="mb-1 grid items-end"
          style={{ gridTemplateColumns: `2.4rem repeat(${PLACE_COUNT}, minmax(0, 1fr))` }}
        >
          <div />
          {Array.from({ length: PLACE_COUNT }, (_, place) => (
            <div key={place} className="text-center font-mono text-xs text-bone">
              {TAPE[place] ?? ""}
            </div>
          ))}
        </div>

        {VIOLIN_DISPLAY.map((stringIndex) => {
          const meta = VIOLIN_STRINGS[stringIndex]!;
          const down = fingers[stringIndex];
          return (
            <div
              key={stringIndex}
              className="relative grid"
              style={{ gridTemplateColumns: `2.4rem repeat(${PLACE_COUNT}, minmax(0, 1fr))` }}
            >
              <div className="flex items-center justify-end pr-2 font-display text-lg text-bone">
                {meta.name}
              </div>
              {Array.from({ length: PLACE_COUNT }, (_, place) => {
                const held = (down ?? 0) === place && down != null ? true : down == null && place === 0;
                const fingerDown = down === place;
                const wanted =
                  target?.stringIndex === stringIndex && target.place === place;
                return (
                  <button
                    key={place}
                    type="button"
                    data-string={stringIndex}
                    data-place={place}
                    className={cn(
                      "violin-place relative z-10",
                      place === 0 && "bg-nut/15",
                      wanted && "is-target",
                      TAPE[place] && "is-tape",
                    )}
                    onPointerDown={(e) => {
                      unlockAudio();
                      e.preventDefault();
                      e.currentTarget.setPointerCapture(e.pointerId);
                      drag.current = { stringIndex, place, moved: false };
                      if (place === 0) lift(stringIndex);
                      else if (down !== place) plant(stringIndex, place);
                    }}
                    onPointerMove={(e) => {
                      const gesture = drag.current;
                      if (!gesture || gesture.stringIndex !== stringIndex) return;
                      const el = document.elementFromPoint(e.clientX, e.clientY);
                      const cell = el?.closest("[data-place]") as HTMLElement | null;
                      if (!cell || Number(cell.dataset.string) !== stringIndex) return;
                      const next = Number(cell.dataset.place);
                      if (!Number.isFinite(next) || next === gesture.place) return;
                      gesture.moved = true;
                      gesture.place = next;
                      slideTo(stringIndex, next);
                    }}
                    onPointerUp={() => {
                      const gesture = drag.current;
                      drag.current = null;
                      if (!gesture || gesture.moved || gesture.place === 0) return;
                      if (fingers[stringIndex] === gesture.place) lift(stringIndex);
                    }}
                  >
                    {fingerDown ? <span className="finger-dot is-held" /> : null}
                    {held && place === 0 ? <span className="finger-dot is-open" /> : null}
                  </button>
                );
              })}
              <span
                className={cn("string-wire", bowing === stringIndex && "is-ringing")}
                style={{ ["--gauge" as string]: `${meta.gauge}px` }}
              />
            </div>
          );
        })}
        <p className="mt-2 px-1 text-xs text-muted">
          Golden Notes · finger on a tape, then draw the bow.
        </p>
      </div>
      <ViolinBody />

      <div
        className="bow-bar"
        onPointerDown={(e) => {
          unlockAudio();
          e.preventDefault();
          e.currentTarget.setPointerCapture(e.pointerId);
          bowHits.current = new Set();
          const hit = stringFromBow(e.currentTarget, e.clientY);
          if (hit == null) return;
          bowHits.current.add(hit);
          beginBow(hit);
        }}
        onPointerMove={(e) => {
          if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
          const hit = stringFromBow(e.currentTarget, e.clientY);
          if (hit == null || bowHits.current.has(hit)) return;
          bowHits.current.add(hit);
          moveBow(hit);
        }}
        onPointerUp={() => {
          bowHits.current = new Set();
          endBow();
        }}
        onPointerCancel={endBow}
      >
        <span className="bow-label">Bow</span>
        {VIOLIN_DISPLAY.map((stringIndex) => (
          <div
            key={stringIndex}
            data-bow={stringIndex}
            className={cn("bow-lane", bowing === stringIndex && "is-live")}
          />
        ))}
      </div>
    </div>
  );
}

function ViolinBody() {
  return (
    <svg
      viewBox="0 0 90 200"
      className="hidden h-auto w-16 shrink-0 self-center sm:block"
      aria-label="Golden Notes violin"
    >
      <defs>
        <linearGradient id="vbody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a4a28" />
          <stop offset="50%" stopColor="#3a2014" />
          <stop offset="100%" stopColor="#140c08" />
        </linearGradient>
      </defs>
      <rect x="38" y="0" width="14" height="36" rx="2" fill="#1a120c" stroke="#d4c4a8" />
      <path
        d="M45 34c16 6 28 20 28 40 0 16-8 26-14 32 10 8 16 20 16 34 0 22-14 40-30 48-16-8-30-26-30-48 0-14 6-26 16-34-6-6-14-16-14-32 0-20 12-34 28-40z"
        fill="url(#vbody)"
        stroke="#e6dcc8"
        strokeWidth="1.5"
      />
      <path d="M38 78c6 8 8 8 8 16s-2 10-8 16" fill="none" stroke="#e6dcc8" strokeWidth="1.4" />
      <path d="M52 78c-6 8-8 8-8 16s2 10 8 16" fill="none" stroke="#e6dcc8" strokeWidth="1.4" />
      <rect x="40" y="128" width="10" height="16" rx="1" fill="#e6dcc8" />
    </svg>
  );
}

function stringFromBow(bar: HTMLElement, clientY: number): number | null {
  const lanes = bar.querySelectorAll("[data-bow]");
  for (const lane of lanes) {
    const box = lane.getBoundingClientRect();
    if (clientY >= box.top && clientY <= box.bottom) {
      return Number((lane as HTMLElement).dataset.bow);
    }
  }
  return null;
}
