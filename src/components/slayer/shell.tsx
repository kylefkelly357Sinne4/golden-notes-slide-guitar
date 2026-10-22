import { useEffect, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SceneLayers, RotateHint, SLAYER_ART } from "@/components/studio/scene";
import { ViolinBoard } from "@/components/studio/violin-board";
import { ViolinPanel } from "@/components/studio/violin-panel";
import {
  bindVisibilityResume,
  lockLandscape,
  setMetronome,
  stopAllBows,
  unlockAudio,
} from "@/lib/guitar/audio";
import { type ViolinLesson } from "@/lib/violin/board";
import { cn } from "@/lib/utils";
import { useStudio } from "@/store/studio";
import { useViolin } from "@/store/violin";

const MODES: { id: ViolinLesson; label: string }[] = [
  { id: "opens", label: "Opens" },
  { id: "fingers", label: "Fingers" },
  { id: "tapes", label: "Tapes" },
  { id: "one-string", label: "Scale" },
  { id: "twinkle", label: "Twinkle" },
  { id: "free", label: "Free" },
];

export function Slayer({ onExit }: { onExit: () => void }) {
  const [started, setStarted] = useState(false);

  useEffect(() => bindVisibilityResume(), []);

  useEffect(() => {
    return () => stopAllBows();
  }, []);

  return (
    <div className="guise-violin relative min-h-dvh text-fg">
      <SceneLayers started={started} pieces={SLAYER_ART} />
      <RotateHint />
      {started ? (
        <SlayerMain
          onExit={() => {
            stopAllBows();
            onExit();
          }}
        />
      ) : (
        <SlayerGate
          onStart={() => {
            unlockAudio();
            lockLandscape();
            setStarted(true);
          }}
        />
      )}
    </div>
  );
}

function SlayerGate({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <div className="start-copy relative z-10 flex flex-1 flex-col justify-end px-5 pb-8 pt-8 sm:justify-center sm:px-10">
        <p className="enter-1 font-mono text-xs uppercase tracking-widest text-primary">
          Violin
        </p>
        <h1 className="enter-1 mt-3 font-display text-5xl uppercase leading-[0.9] tracking-tight text-fg sm:text-7xl">
          Golden
          <span className="block text-bone">Notes</span>
        </h1>
        <p className="enter-2 mt-4 max-w-md text-base leading-relaxed text-muted">
          Four strings. Put a finger on a tape, then draw the bow. The note holds
          until you lift.
        </p>
        <div className="enter-2 mt-6">
          <Button size="lg" onPointerDown={unlockAudio} onClick={onStart}>
            Draw the bow
          </Button>
        </div>
      </div>
    </div>
  );
}

function SlayerMain({ onExit }: { onExit: () => void }) {
  const lesson = useViolin((s) => s.lesson);
  const setLesson = useViolin((s) => s.setLesson);
  const muted = useStudio((s) => s.muted);
  const toggleMute = useStudio((s) => s.toggleMute);
  const volume = useStudio((s) => s.volume);
  const setVolume = useStudio((s) => s.setVolume);
  const metronomeOn = useStudio((s) => s.metronomeOn);
  const setMetronomeOn = useStudio((s) => s.setMetronomeOn);
  const bpm = useStudio((s) => s.bpm);
  const setBpm = useStudio((s) => s.setBpm);
  const [railOpen, setRailOpen] = useState(false);

  useEffect(() => {
    setMetronome(metronomeOn, bpm);
    return () => setMetronome(false, bpm);
  }, [metronomeOn, bpm]);

  return (
    <div className={cn("studio-shell", railOpen && "rail-open")}>
      <header className="studio-top flex flex-nowrap items-center gap-2 rounded-xl border border-border bg-surface/75 px-3 py-1.5 backdrop-blur-sm">
        <div className="flex items-center gap-2 pr-2">
          <Music2 className="size-5 text-primary" />
          <div>
            <p className="font-display text-lg uppercase leading-none tracking-wide">
              Golden Notes
            </p>
            <p className="studio-kicker font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              Violin
            </p>
          </div>
        </div>

        <nav className="flex min-w-0 flex-1 flex-nowrap gap-1 overflow-x-auto" aria-label="Violin modes">
          {MODES.map((mode) => (
            <Button
              key={mode.id}
              size="sm"
              variant={lesson === mode.id ? "primary" : "ghost"}
              onClick={() => setLesson(mode.id)}
            >
              {mode.label}
            </Button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button size="sm" variant="ghost" onClick={onExit}>
            Games
          </Button>
          <Button
            size="sm"
            variant={railOpen ? "primary" : "ghost"}
            className="rail-toggle"
            onClick={() => setRailOpen((open) => !open)}
          >
            {railOpen ? "Neck" : "Lessons"}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            aria-label={muted ? "Unmute" : "Mute"}
            onClick={() => {
              unlockAudio();
              toggleMute();
            }}
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </Button>
          <label className="flex items-center gap-2 text-xs text-muted">
            Vol
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-1 w-20 accent-primary"
            />
          </label>
        </div>
      </header>

      <section className="studio-neck">
        <ViolinBoard />
      </section>

      <div className="studio-rail">
        <section className="rounded-xl border border-border bg-surface/75 p-3 backdrop-blur-sm">
          <ViolinPanel />
        </section>
        <aside className="rounded-xl border border-border bg-surface/75 p-3 backdrop-blur-sm">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            Setup
          </p>
          <div className="mt-3 space-y-3">
            <label className="flex items-center justify-between gap-2 text-sm">
              <span>Metronome</span>
              <input
                type="checkbox"
                checked={metronomeOn}
                onChange={(e) => {
                  unlockAudio();
                  setMetronomeOn(e.target.checked);
                }}
                className="size-4 accent-primary"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-muted">Tempo {bpm} BPM</span>
              <input
                type="range"
                min={50}
                max={160}
                step={1}
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="h-1 w-full accent-primary"
              />
            </label>
          </div>
        </aside>
      </div>
    </div>
  );
}
