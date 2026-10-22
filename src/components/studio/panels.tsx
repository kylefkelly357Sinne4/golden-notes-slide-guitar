import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LESSONS } from "@/lib/guitar/lessons";
import {
  ALL_KEYS,
  CHORDS,
  FLAT_NAMES,
  SCALES,
  SHARP_NAMES,
  midiToFreq,
  noteLabel,
  noteName,
} from "@/lib/guitar/theory";
import { pluck } from "@/lib/guitar/audio";
import { anyHeld, matchHeldChord, useStudio } from "@/store/studio";

const GROUPS = ["open", "seventh", "barre", "power"] as const;

export function SidePanel() {
  const mode = useStudio((s) => s.mode);
  if (mode === "chords") return <ChordPanel />;
  if (mode === "scales") return <ScalePanel />;
  if (mode === "notes") return <NotesPanel />;
  if (mode === "train") return <TrainPanel />;
  return <PlayPanel />;
}

function PlayPanel() {
  const lastPlayed = useStudio((s) => s.lastPlayed);
  const accidental = useStudio((s) => s.accidental);
  const strumOpen = useStudio((s) => s.strumOpen);
  const strumHeld = useStudio((s) => s.strumHeld);
  const showNotes = useStudio((s) => s.showNotes);
  const toggleShowNotes = useStudio((s) => s.toggleShowNotes);
  const holding = useStudio((s) => anyHeld(s.held));

  return (
    <div className="space-y-4">
      <Header
        title="Free play"
        kicker="Tap a fret to hear it. Hold it, slide it, strum the bar."
      />
      <HeldReadout />
      <div className="rounded-lg border border-border bg-surface/80 p-4">
        {lastPlayed ? (
          <div>
            <p className="font-display text-5xl tracking-tight text-primary">
              {noteName(lastPlayed.midi, accidental)}
              <span className="ml-1 text-2xl text-bone">
                {noteLabel(lastPlayed.midi, accidental).replace(
                  noteName(lastPlayed.midi, accidental),
                  "",
                )}
              </span>
            </p>
            <p className="mt-2 font-mono text-sm text-muted tabular-nums">
              String {6 - lastPlayed.stringIndex} · fret{" "}
              {lastPlayed.pos != null && Math.abs(lastPlayed.pos - lastPlayed.fret) > 0.04
                ? lastPlayed.pos.toFixed(2)
                : lastPlayed.fret}{" "}
              · {midiToFreq(lastPlayed.exact ?? lastPlayed.midi).toFixed(1)} Hz
            </p>
          </div>
        ) : (
          <p className="text-muted">Strike a string to pin a note here.</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => (holding ? strumHeld(true) : strumOpen())}>
          {holding ? "Strum held shape" : "Strum open strings"}
        </Button>
        <Button variant="ghost" onClick={() => strumHeld(false)}>
          Strum up
        </Button>
        <Button variant="ghost" onClick={toggleShowNotes}>
          {showNotes ? "Hide note names" : "Show note names"}
        </Button>
      </div>
      <p className="text-sm leading-relaxed text-muted">
        Press and hold frets to fret strings — several fingers make a chord.
        Drag a held finger along its string to slide the pitch. Strum with the
        bar beside the neck, the buttons, or Space. Keys 1–6 pick single strings
        (1 is high E) at the held position.
      </p>
    </div>
  );
}

function ChordPanel() {
  const selectedChordId = useStudio((s) => s.selectedChordId);
  const setChord = useStudio((s) => s.setChord);
  const strumChord = useStudio((s) => s.strumChord);
  const chord = CHORDS.find((c) => c.id === selectedChordId);

  return (
    <div className="space-y-4">
      <Header
        title={chord ? chord.name : "Chords"}
        kicker={chord ? `${chord.quality} · ${chord.group}` : "Pick a shape"}
      />
      <HeldReadout idle="No fingers down — Strum plays the selected shape." />
      <div className="flex gap-2">
        <Button onClick={() => strumChord(true)}>Strum down</Button>
        <Button variant="ghost" onClick={() => strumChord(false)}>
          Strum up
        </Button>
      </div>
      {GROUPS.map((group) => (
        <div key={group}>
          <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            {group}
          </p>
          <div className="flex flex-wrap gap-2">
            {CHORDS.filter((c) => c.group === group).map((c) => (
              <Button
                key={c.id}
                size="sm"
                variant={c.id === selectedChordId ? "primary" : "ghost"}
                onClick={() => setChord(c.id)}
              >
                {c.name}
              </Button>
            ))}
          </div>
        </div>
      ))}
      <p className="text-sm leading-relaxed text-muted">
        Numbers on the board are fingers: 1 index, 2 middle, 3 ring, 4 pinky. O is
        open. X is mute. Hold the dots (multi-touch), then strum — with no
        fingers down, Strum plays the selected shape.
      </p>
    </div>
  );
}

function ScalePanel() {
  const selectedScaleId = useStudio((s) => s.selectedScaleId);
  const selectedKey = useStudio((s) => s.selectedKey);
  const setScale = useStudio((s) => s.setScale);
  const setKey = useStudio((s) => s.setKey);
  const showDegrees = useStudio((s) => s.showDegrees);
  const toggleShowDegrees = useStudio((s) => s.toggleShowDegrees);
  const scale = SCALES.find((s) => s.id === selectedScaleId);

  return (
    <div className="space-y-4">
      <Header title={scale?.name ?? "Scales"} kicker={scale?.hint} />
      <div>
        <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          Key
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ALL_KEYS.map((k) => (
            <Button
              key={k}
              size="sm"
              variant={k === selectedKey ? "primary" : "ghost"}
              onClick={() => setKey(k)}
              className="min-w-10 px-2"
            >
              {k}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {SCALES.map((s) => (
          <Button
            key={s.id}
            size="sm"
            variant={s.id === selectedScaleId ? "primary" : "ghost"}
            onClick={() => setScale(s.id)}
          >
            {s.name}
          </Button>
        ))}
      </div>
      <Button variant="ghost" onClick={toggleShowDegrees}>
        {showDegrees ? "Show note names" : "Show scale degrees"}
      </Button>
      <p className="text-sm leading-relaxed text-muted">
        Glowing orbs are in the scale. Ember marks the root. Walk the dots
        slowly — that is the map of the key.
      </p>
    </div>
  );
}

function NotesPanel() {
  const accidental = useStudio((s) => s.accidental);
  const setAccidental = useStudio((s) => s.setAccidental);
  const atlasPc = useStudio((s) => s.atlasPc);
  const setAtlasPc = useStudio((s) => s.setAtlasPc);
  const names = accidental === "flat" ? FLAT_NAMES : SHARP_NAMES;

  return (
    <div className="space-y-4">
      <Header title="Twelve notes" kicker="The whole language. Click a letter." />
      <div className="flex gap-2">
        <Button
          size="sm"
          variant={accidental === "sharp" ? "primary" : "ghost"}
          onClick={() => setAccidental("sharp")}
        >
          Sharps
        </Button>
        <Button
          size="sm"
          variant={accidental === "flat" ? "primary" : "ghost"}
          onClick={() => setAccidental("flat")}
        >
          Flats
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
        {names.map((n, pc) => (
          <button
            key={n}
            type="button"
            onClick={() => {
              setAtlasPc(pc);
              pluck(60 + pc, 3, 0.7);
            }}
            className={cn(
              "flex h-12 items-center justify-center rounded-md border text-sm font-semibold transition-[background-color,border-color,transform] duration-150 active:scale-[0.96]",
              atlasPc === pc
                ? "border-primary bg-primary text-primary-fg"
                : "border-border bg-surface-2/80 text-fg hover:border-primary/50",
            )}
          >
            {n}
          </button>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted">
        A through G, plus the sharps and flats between most of them. There is no
        sharp between E and F, or between B and C. Select a letter to light every
        matching place on the neck.
      </p>
    </div>
  );
}

function TrainPanel() {
  const quiz = useStudio((s) => s.quiz);
  const completed = useStudio((s) => s.completedLessons);
  const startLesson = useStudio((s) => s.startLesson);
  const answerQuiz = useStudio((s) => s.answerQuiz);
  const nextRound = useStudio((s) => s.nextRound);
  const strumChord = useStudio((s) => s.strumChord);

  if (!quiz) {
    return (
      <div className="space-y-4">
        <Header title="Train" kicker="Short drills. Real notes." />
        <ul className="space-y-2">
          {LESSONS.map((lesson) => {
            const done = completed.includes(lesson.id);
            return (
              <li key={lesson.id}>
                <button
                  type="button"
                  onClick={() => startLesson(lesson.id)}
                  className="flex w-full items-start gap-3 rounded-lg border border-border bg-surface/80 p-3 text-left transition-[border-color,background-color] duration-150 hover:border-primary/40"
                >
                  <span
                    className={cn(
                      "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border",
                      done
                        ? "border-primary bg-primary text-primary-fg"
                        : "border-border text-muted",
                    )}
                  >
                    {done ? <Check className="size-3.5" /> : null}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{lesson.title}</span>
                    <span className="block text-sm text-muted">{lesson.blurb}</span>
                  </span>
                  <ChevronRight className="mt-1 size-4 text-muted" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  const lesson = LESSONS.find((l) => l.id === quiz.lessonId);
  const finished = quiz.round >= quiz.total && quiz.feedback !== "idle";

  return (
    <div className="space-y-4">
      <Header
        title={lesson?.title ?? "Drill"}
        kicker={`Round ${Math.min(quiz.round, quiz.total)} / ${quiz.total} · ${quiz.score} correct`}
      />
      <p className="text-lg text-fg">{quiz.prompt}</p>
      {lesson ? <p className="text-sm leading-relaxed text-muted">{lesson.detail}</p> : null}

      {quiz.kind === "identify" ? (
        <div className="grid grid-cols-2 gap-2">
          {quiz.choices.map((c) => (
            <Button
              key={c}
              variant={
                quiz.feedback !== "idle" && c === quiz.correct
                  ? "primary"
                  : quiz.feedback === "bad" && c !== quiz.correct
                    ? "ghost"
                    : "ghost"
              }
              onClick={() => answerQuiz(c)}
              disabled={quiz.feedback !== "idle"}
            >
              {c}
            </Button>
          ))}
        </div>
      ) : null}

      {quiz.kind === "chord" ? (
        <>
          <HeldReadout idle="Hold the glowing dots on the neck, then strum." />
          <Button onClick={() => strumChord(true)}>Strum {quiz.correct}</Button>
        </>
      ) : null}

      {quiz.kind === "find" ? (
        <p className="font-mono text-sm text-bone tabular-nums">
          Found {quiz.found.length} / {quiz.needed}
        </p>
      ) : null}

      {quiz.feedback === "good" ? (
        <p className="text-primary">Right. That is {quiz.correct}.</p>
      ) : null}
      {quiz.feedback === "bad" && quiz.kind === "identify" ? (
        <p className="text-ember">That one is {quiz.correct}.</p>
      ) : null}
      {quiz.feedback === "bad" && quiz.kind === "chord" ? (
        <p className="text-ember">
          That shape is not {quiz.correct}. Hold the glowing dots, then strum.
        </p>
      ) : null}
      {quiz.feedback === "bad" && quiz.kind !== "identify" && quiz.kind !== "chord" ? (
        <p className="text-ember">Not that string. Try the highlighted target.</p>
      ) : null}

      {quiz.feedback !== "idle" ? (
        <Button onClick={nextRound}>
          {finished || quiz.round >= quiz.total ? "Finish drill" : "Next"}
        </Button>
      ) : null}
    </div>
  );
}

/** Live view of the fretting hand: which strings are held, where, and the chord it makes. */
function HeldReadout({ idle = "No fingers down — strums ring open." }: { idle?: string }) {
  const held = useStudio((s) => s.held);
  const holding = anyHeld(held);
  const shape = matchHeldChord(held);
  return (
    <div
      className="rounded-lg border border-border bg-surface/80 px-3 py-2 font-mono text-xs text-muted tabular-nums"
      data-held-readout
    >
      {holding ? (
        <span>
          Holding{" "}
          {held
            .map((h, stringIndex) =>
              h == null ? null : `str ${6 - stringIndex} @ fret ${h.toFixed(2)}`,
            )
            .filter(Boolean)
            .join(" · ")}
          {shape ? <span className="ml-2 text-primary">= {shape.name}</span> : null}
        </span>
      ) : (
        <span>{idle}</span>
      )}
    </div>
  );
}

function Header({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <div>
      <h2 className="font-display text-3xl tracking-tight text-fg">{title}</h2>
      {kicker ? <p className="mt-1 text-sm text-muted">{kicker}</p> : null}
    </div>
  );
}
