import { Button } from "@/components/ui/button";
import { lockLandscape, unlockAudio } from "@/lib/guitar/audio";
import { useStudio } from "@/store/studio";

export function StartGate() {
  const start = useStudio((s) => s.start);

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <div className="start-copy relative z-10 flex flex-1 flex-col justify-end px-5 pb-8 pt-8 sm:justify-center sm:px-10">
        <p className="enter-1 font-mono text-xs uppercase tracking-widest text-primary">
          Guitar
        </p>
        <h1 className="enter-1 mt-3 font-display text-5xl uppercase leading-[0.9] tracking-tight text-fg sm:text-7xl">
          Steeley
          <span className="block text-bone">Strings</span>
        </h1>
        <p className="enter-2 mt-4 max-w-md text-base leading-relaxed text-muted">
          Lay the phone on its side. Tap the neck, hear steel, read the note
          under each string.
        </p>
        <div className="enter-2 mt-6">
          <Button
            size="lg"
            onPointerDown={() => {
              unlockAudio();
              lockLandscape();
            }}
            onClick={() => {
              unlockAudio();
              lockLandscape();
              start();
            }}
          >
            Pick a string
          </Button>
        </div>
      </div>
    </div>
  );
}
