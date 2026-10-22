import { useEffect, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Fretboard } from "@/components/studio/fretboard";
import { SidePanel } from "@/components/studio/panels";
import { SceneLayers, RotateHint } from "@/components/studio/scene";
import { StartGate } from "@/components/studio/start-gate";
import {
  bindVisibilityResume,
  setMetronome,
  unlockAudio,
} from "@/lib/guitar/audio";
import { TUNINGS } from "@/lib/guitar/theory";
import { cn } from "@/lib/utils";
import { type Mode, hydrateStudio, useStudio } from "@/store/studio";

const MODES: { id: Mode; label: string }[] = [
  { id: "play", label: "Play" },
  { id: "notes", label: "Notes" },
  { id: "chords", label: "Chords" },
  { id: "scales", label: "Scales" },
  { id: "train", label: "Train" },
];

export function Studio({ onExit }: { onExit: () => void }) {
  const started = useStudio((s) => s.started);

  useEffect(() => bindVisibilityResume(), []);

  useEffect(() => {
    hydrateStudio();
  }, []);

  useEffect(() => {
    if (!started) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
      const state = useStudio.getState();
      if (e.code === "Space") {
        e.preventDefault();
        if (e.repeat) return;
        unlockAudio();
        // Held shape first (hold frets with the mouse/touch, strum with Space).
        state.strumNow(true);
        return;
      }
      const map: Record<string, number> = {
        Digit1: 5,
        Digit2: 4,
        Digit3: 3,
        Digit4: 2,
        Digit5: 1,
        Digit6: 0,
      };
      const stringIndex = map[e.code];
      if (stringIndex != null) {
        e.preventDefault();
        unlockAudio();
        // Plays the string at its held position, or open when no finger is on it.
        state.pickString(stringIndex);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started]);

  return (
    <div className="guise-guitar relative min-h-dvh text-fg">
      <SceneLayers started={started} />
      <RotateHint />
      {started ? <StudioMain onExit={onExit} /> : <StartGate />}
    </div>
  );
}

function StudioMain({ onExit }: { onExit: () => void }) {
  const mode = useStudio((s) => s.mode);
  const setMode = useStudio((s) => s.setMode);
  const muted = useStudio((s) => s.muted);
  const toggleMute = useStudio((s) => s.toggleMute);
  const volume = useStudio((s) => s.volume);
  const setVolume = useStudio((s) => s.setVolume);
  const tuningId = useStudio((s) => s.tuningId);
  const setTuning = useStudio((s) => s.setTuning);
  const capo = useStudio((s) => s.capo);
  const setCapo = useStudio((s) => s.setCapo);
  const leftHanded = useStudio((s) => s.leftHanded);
  const toggleLeftHanded = useStudio((s) => s.toggleLeftHanded);
  const metronomeOn = useStudio((s) => s.metronomeOn);
  const setMetronomeOn = useStudio((s) => s.setMetronomeOn);
  const bpm = useStudio((s) => s.bpm);
  const setBpm = useStudio((s) => s.setBpm);
  const strumChord = useStudio((s) => s.strumChord);
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
              Steeley Strings
            </p>
            <p className="studio-kicker font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              Steel-string studio
            </p>
          </div>
        </div>

        <nav className="flex min-w-0 flex-1 flex-nowrap gap-1 overflow-x-auto" aria-label="Studio modes">
          {MODES.map((m) => (
            <Button
              key={m.id}
              size="sm"
              variant={mode === m.id ? "primary" : "ghost"}
              onClick={() => setMode(m.id)}
            >
              {m.label}
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
        <Fretboard />
      </section>

      <div className="studio-rail">
        <section className="rounded-xl border border-border bg-surface/75 p-3 backdrop-blur-sm">
          <SidePanel />
        </section>

        <aside className="rounded-xl border border-border bg-surface/75 p-3 backdrop-blur-sm">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            Setup
          </p>
          <div className="mt-3 space-y-3">
            <label className="block text-sm">
              <span className="mb-1 block text-muted">Tuning</span>
              <select
                value={tuningId}
                onChange={(e) => setTuning(e.target.value as typeof tuningId)}
                className="h-11 w-full rounded-md border border-border bg-surface-2 px-3 text-fg"
              >
                {TUNINGS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-muted">Capo · fret {capo || "off"}</span>
              <input
                type="range"
                min={0}
                max={7}
                step={1}
                value={capo}
                onChange={(e) => setCapo(Number(e.target.value))}
                className="h-1 w-full accent-ember"
              />
            </label>
            <label className="flex items-center justify-between gap-2 text-sm">
              <span>Left-handed neck</span>
              <input
                type="checkbox"
                checked={leftHanded}
                onChange={toggleLeftHanded}
                className="size-4 accent-primary"
              />
            </label>
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
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                unlockAudio();
                strumChord(true);
              }}
            >
              Strum current chord
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
