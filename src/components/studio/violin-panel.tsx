import { Button } from "@/components/ui/button";
import { VIOLIN_STRINGS, bowWord, fingerName, lessonSteps } from "@/lib/violin/board";
import { useViolin } from "@/store/violin";

const LESSONS = [
  { id: "opens", label: "Opens" },
  { id: "fingers", label: "Fingers" },
  { id: "tapes", label: "Tapes" },
  { id: "one-string", label: "Scale" },
  { id: "twinkle", label: "Twinkle" },
  { id: "free", label: "Free" },
] as const;

export function ViolinPanel() {
  const lesson = useViolin((s) => s.lesson);
  const setLesson = useViolin((s) => s.setLesson);
  const step = useViolin((s) => s.step);
  const hits = useViolin((s) => s.hits);
  const steps = lessonSteps(lesson);
  const target = steps ? steps[step % steps.length] : null;
  const targetName = target ? VIOLIN_STRINGS[target.stringIndex]!.name : null;
  const round = steps ? Math.floor(step / steps.length) + 1 : 1;
  const note = steps ? (step % steps.length) + 1 : 0;

  return (
    <div className="space-y-3">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Practice</p>
      <h2 className="font-display text-2xl uppercase leading-none">
        {target && targetName
          ? `${targetName} ${fingerName(target.place)}`
          : "Free bow"}
      </h2>
      {target && targetName ? (
        <div className="rounded-lg border border-border bg-surface-2 px-3 py-3">
          <p className="font-display text-4xl uppercase text-primary">
            {bowWord(step)}
          </p>
          <p className="mt-1 font-mono text-sm text-muted">
            {note} of {steps!.length} · round {round} · {hits} clean
          </p>
        </div>
      ) : (
        <p className="text-sm leading-relaxed text-muted">
          No target. Put a finger down, then draw the bow on that string.
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {LESSONS.map((item) => (
          <Button
            key={item.id}
            size="sm"
            variant={lesson === item.id ? "primary" : "ghost"}
            onClick={() => setLesson(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted">
        Finger first, then the bow. It only moves on when that string and that
        finger are the ones sounding.
      </p>
    </div>
  );
}