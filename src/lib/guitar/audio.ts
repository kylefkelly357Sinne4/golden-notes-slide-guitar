import { midiToFreq } from "@/lib/guitar/theory";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let muted = false;
let volume = 0.78;
let metroOn = false;
let metroTimer: number | null = null;
let beat = 0;

function ensureContext(): AudioContext {
  if (ctx && master) return ctx;
  const AudioCtx =
    window.AudioContext ||
    (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  ctx = new AudioCtx({ latencyHint: "interactive" });
  master = ctx.createGain();
  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.value = -14;
  compressor.knee.value = 10;
  compressor.ratio.value = 3.5;
  compressor.attack.value = 0.004;
  compressor.release.value = 0.14;
  master.gain.value = muted ? 0 : volume * volume;
  master.connect(compressor);
  compressor.connect(ctx.destination);
  return ctx;
}

export function unlockAudio() {
  const c = ensureContext();
  if (c.state === "suspended") void c.resume();
  lockLandscape();
}

export function lockLandscape() {
  const orientation = screen.orientation as ScreenOrientation & {
    lock?: (mode: string) => Promise<void>;
  };
  void orientation.lock?.("landscape").catch(() => undefined);
}

export function bindVisibilityResume() {
  const onVis = () => {
    if (document.visibilityState === "visible" && ctx?.state === "suspended") {
      void ctx.resume();
    }
  };
  document.addEventListener("visibilitychange", onVis);
  window.addEventListener("focus", onVis);
  return () => {
    document.removeEventListener("visibilitychange", onVis);
    window.removeEventListener("focus", onVis);
  };
}

export function setMasterVolume(v: number) {
  volume = Math.min(1, Math.max(0, v));
  if (master && ctx) {
    master.gain.setTargetAtTime(muted ? 0 : volume * volume, ctx.currentTime, 0.03);
  }
}

export function setMuted(next: boolean) {
  muted = next;
  if (master && ctx) {
    master.gain.setTargetAtTime(muted ? 0 : volume * volume, ctx.currentTime, 0.03);
  }
}

const CUTOFF = [1600, 2100, 2700, 3600, 5200, 6800];
const stringStop: Array<(() => void) | null> = [null, null, null, null, null, null];

/** Live plucked voice per string, so a held finger can slide the ringing pitch. */
type PluckVoice = {
  source: AudioBufferSourceNode;
  delay: DelayNode;
  baseFreq: number;
  sampleRate: number;
  freq: number;
};
const pluckVoices: Array<PluckVoice | null> = [null, null, null, null, null, null];

function hush(stringIndex: number) {
  const stop = stringStop[stringIndex];
  stringStop[stringIndex] = null;
  stop?.();
}

export function pluck(
  midi: number,
  stringIndex: number,
  velocity = 0.86,
  when?: number,
) {
  const c = ensureContext();
  if (!master) return;
  if (c.state === "suspended") void c.resume();
  hush(stringIndex);

  const freq = midiToFreq(midi);
  const start = when ?? c.currentTime;
  const period = Math.max(18, Math.round(c.sampleRate / freq));
  const noise = c.createBuffer(1, period, c.sampleRate);
  const samples = noise.getChannelData(0);
  const pick = Math.floor(period * (0.13 + stringIndex * 0.012));
  for (let i = 0; i < period; i++) {
    samples[i] = (Math.random() * 2 - 1) * velocity;
  }
  for (let i = pick; i < Math.min(period, pick + Math.floor(period * 0.07)); i++) {
    samples[i] = 0;
  }

  const source = c.createBufferSource();
  source.buffer = noise;
  source.loop = true;

  const delay = c.createDelay(1);
  delay.delayTime.value = period / c.sampleRate;

  const damp = c.createBiquadFilter();
  damp.type = "lowpass";
  damp.frequency.value = CUTOFF[stringIndex] ?? 3200;
  damp.Q.value = 0.4;

  const feedback = c.createGain();
  feedback.gain.value = 0.986 - stringIndex * 0.0045;

  const body = c.createBiquadFilter();
  body.type = "peaking";
  body.frequency.value = 95 + stringIndex * 18;
  body.Q.value = 1.1;
  body.gain.value = 5;

  const env = c.createGain();
  env.gain.setValueAtTime(0.0001, start);
  env.gain.exponentialRampToValueAtTime(0.38 * velocity, start + 0.005);
  env.gain.exponentialRampToValueAtTime(0.0001, start + 2.6);

  const pan = c.createStereoPanner();
  pan.pan.value = (stringIndex - 2.5) * 0.14;

  source.connect(delay);
  delay.connect(damp);
  damp.connect(feedback);
  feedback.connect(delay);
  delay.connect(body);
  body.connect(env);
  env.connect(pan);
  pan.connect(master);

  source.start(start);
  source.stop(start + 2.7);
  const stop = () => {
    try {
      source.stop();
    } catch {
      /* already ended */
    }
  };
  stringStop[stringIndex] = stop;
  const voice: PluckVoice = {
    source,
    delay,
    baseFreq: freq,
    sampleRate: c.sampleRate,
    freq,
  };
  pluckVoices[stringIndex] = voice;
  source.onended = () => {
    if (stringStop[stringIndex] === stop) stringStop[stringIndex] = null;
    if (pluckVoices[stringIndex] === voice) pluckVoices[stringIndex] = null;
    source.disconnect();
    delay.disconnect();
    damp.disconnect();
    feedback.disconnect();
    body.disconnect();
    env.disconnect();
    pan.disconnect();
  };
}

/**
 * Slide the ringing note on a string to a (fractional) MIDI pitch — the guitar
 * counterpart of retuneBow. Glides smoothly (steel slide), never steps.
 * Returns true when a voice was actually ringing on that string.
 */
export function glideString(stringIndex: number, midi: number, glide = 0.018): boolean {
  const voice = pluckVoices[stringIndex];
  if (!voice || !ctx) return false;
  const freq = midiToFreq(midi);
  if (!Number.isFinite(freq) || freq <= 0) return false;
  const t = ctx.currentTime;
  // The looped excitation buffer and the feedback delay both set the period,
  // so both scale together to keep the string in tune while it glides.
  voice.source.playbackRate.cancelScheduledValues(t);
  voice.source.playbackRate.setTargetAtTime(freq / voice.baseFreq, t, glide);
  voice.delay.delayTime.cancelScheduledValues(t);
  voice.delay.delayTime.setTargetAtTime(
    Math.min(1, Math.max(1 / voice.sampleRate, 1 / freq)),
    t,
    glide,
  );
  voice.freq = freq;
  return true;
}

export function isStringRinging(stringIndex: number): boolean {
  return pluckVoices[stringIndex] != null;
}

export function strumOrdered(notes: { midi: number; stringIndex: number }[]) {
  const c = ensureContext();
  notes.forEach((note, i) => {
    pluck(note.midi, note.stringIndex, 0.72, c.currentTime + i * 0.016);
  });
}

type BowVoice = {
  gain: GainNode;
  osc: OscillatorNode;
  osc2: OscillatorNode;
  lfo: OscillatorNode;
  midi: number;
};

const bows: Array<BowVoice | null> = [null, null, null, null, null, null];

export function startBow(midi: number, stringIndex: number) {
  const c = ensureContext();
  if (!master) return;
  if (c.state === "suspended") void c.resume();
  const existing = bows[stringIndex];
  if (existing) {
    if (existing.midi === midi) return;
    retuneBow(stringIndex, midi);
    return;
  }
  hush(stringIndex);

  const now = c.currentTime;
  const freq = midiToFreq(midi);
  const osc = c.createOscillator();
  osc.type = "sawtooth";
  osc.frequency.value = freq;
  const osc2 = c.createOscillator();
  osc2.type = "triangle";
  osc2.frequency.value = freq * 2;

  const filter = c.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 780 + stringIndex * 220;
  filter.Q.value = 4;

  const body = c.createBiquadFilter();
  body.type = "peaking";
  body.frequency.value = 280 + stringIndex * 40;
  body.Q.value = 1.4;
  body.gain.value = 6;

  const gain = c.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.2, now + 0.09);

  const lfo = c.createOscillator();
  lfo.frequency.value = 5.1;
  const lfoGain = c.createGain();
  lfoGain.gain.value = freq * 0.006;
  lfo.connect(lfoGain);
  lfoGain.connect(osc.frequency);
  lfoGain.connect(osc2.frequency);

  const high = c.createGain();
  high.gain.value = 0.22;
  osc.connect(filter);
  osc2.connect(high);
  high.connect(filter);
  filter.connect(body);
  body.connect(gain);

  const pan = c.createStereoPanner();
  pan.pan.value = (stringIndex - 1.5) * 0.22;
  gain.connect(pan);
  pan.connect(master);

  osc.start(now);
  osc2.start(now);
  lfo.start(now);
  bows[stringIndex] = { gain, osc, osc2, lfo, midi };
}

export function retuneBow(stringIndex: number, midi: number) {
  const voice = bows[stringIndex];
  if (!voice || !ctx) return;
  const freq = midiToFreq(midi);
  const t = ctx.currentTime;
  voice.osc.frequency.setTargetAtTime(freq, t, 0.04);
  voice.osc2.frequency.setTargetAtTime(freq * 2, t, 0.04);
  voice.midi = midi;
}

export function stopBow(stringIndex: number) {
  const voice = bows[stringIndex];
  bows[stringIndex] = null;
  if (!voice || !ctx) return;
  const t = ctx.currentTime;
  voice.gain.gain.cancelScheduledValues(t);
  voice.gain.gain.setTargetAtTime(0.0001, t, 0.04);
  const { osc, osc2, lfo, gain } = voice;
  window.setTimeout(() => {
    try {
      osc.stop();
      osc2.stop();
      lfo.stop();
    } catch {
      /* already stopped */
    }
    osc.disconnect();
    osc2.disconnect();
    lfo.disconnect();
    gain.disconnect();
  }, 160);
}

export function stopAllBows() {
  bows.forEach((_, index) => stopBow(index));
}

export function strum(
  notes: { midi: number; stringIndex: number }[],
  down = true,
) {
  const c = ensureContext();
  const ordered = down ? [...notes].reverse() : [...notes];
  ordered.forEach((note, i) => {
    pluck(note.midi, note.stringIndex, 0.74, c.currentTime + i * 0.016);
  });
}

export function setMetronome(on: boolean, bpm: number) {
  metroOn = on;
  if (metroTimer != null) {
    window.clearInterval(metroTimer);
    metroTimer = null;
  }
  if (!on) return;
  ensureContext();
  const click = () => {
    if (!metroOn || !ctx || !master) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const accent = beat % 4 === 0;
    osc.type = "square";
    osc.frequency.value = accent ? 1260 : 880;
    const t = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(accent ? 0.16 : 0.09, t + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    osc.connect(gain);
    gain.connect(master);
    osc.start(t);
    osc.stop(t + 0.06);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
    beat += 1;
  };
  beat = 0;
  click();
  metroTimer = window.setInterval(click, (60 / Math.max(40, bpm)) * 1000);
}
