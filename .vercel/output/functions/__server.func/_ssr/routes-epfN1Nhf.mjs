import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, i as Music2, n as Volume2, o as Check, t as VolumeX } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-epfN1Nhf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Arcade({ onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-dvh md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onPick("steeley"),
			className: "guise-guitar relative flex min-h-[50dvh] flex-col justify-end overflow-hidden border-b-4 border-primary p-6 text-left md:min-h-dvh md:border-r-4 md:border-b-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/bg-guitar.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs uppercase tracking-[0.25em] text-primary",
						children: "Guitar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-2 block font-display text-5xl uppercase leading-[0.9] text-fg",
						children: ["Steeley", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Strings"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onPick("slayer"),
			className: "guise-violin relative flex min-h-[50dvh] flex-col justify-end overflow-hidden border-b-4 border-primary p-6 text-left md:min-h-dvh md:border-b-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/slayer-visor.png",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover object-[center_20%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs uppercase tracking-[0.25em] text-primary",
						children: "Violin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-2 block font-display text-5xl uppercase leading-[0.9] text-fg",
						children: ["Golden", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Notes"
						})]
					})]
				})
			]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-[opacity,transform,background-color,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:opacity-90",
			ghost: "border border-border bg-surface-2/80 text-fg hover:bg-surface",
			outline: "border border-border bg-transparent text-fg hover:bg-surface-2",
			ember: "bg-ember text-fg hover:opacity-90",
			bone: "bg-bone text-primary-fg hover:opacity-90"
		},
		size: {
			sm: "h-9 px-3 text-sm",
			md: "h-11 px-4 text-sm",
			lg: "h-12 px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var GUITAR = [
	{
		src: "/art/bg-jungle.jpg",
		tilt: "-5deg",
		crop: "object-top"
	},
	{
		src: "/art/fg-duel.jpg",
		tilt: "4deg",
		crop: "object-center"
	},
	{
		src: "/art/bg-orbs.jpg",
		tilt: "-3deg",
		crop: "crop-orbs"
	},
	{
		src: "/art/fg-photo.jpg",
		tilt: "6deg",
		crop: "object-top"
	},
	{
		src: "/art/bg-guitar.jpg",
		tilt: "-4deg",
		crop: "object-center"
	},
	{
		src: "/art/bg-ember.jpg",
		tilt: "5deg",
		crop: "crop-orbs"
	}
];
/** Cabin visor, yearbook, roses, close-up, pixel board, dock. Silent Slayer only. */
var SLAYER_ART = [
	{
		src: "/art/slayer-visor.png",
		tilt: "-4deg",
		crop: "object-center"
	},
	{
		src: "/art/slayer-yearbook.jpg",
		tilt: "3deg",
		crop: "object-top"
	},
	{
		src: "/art/slayer-roses.jpg",
		tilt: "-2deg",
		crop: "object-center"
	},
	{
		src: "/art/slayer-close.jpg",
		tilt: "5deg",
		crop: "object-center"
	},
	{
		src: "/art/slayer-pixel.jpg",
		tilt: "-3deg",
		crop: "object-center"
	},
	{
		src: "/art/slayer-dock.jpg",
		tilt: "4deg",
		crop: "object-center"
	}
];
function SceneLayers({ started, pieces = GUITAR }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "collage-wall",
			children: pieces.map((piece) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "collage-piece",
				style: { ["--tilt"]: piece.tilt },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: piece.src,
					alt: "",
					className: piece.crop
				})
			}, piece.src))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0", started ? "scene-scrim" : "scene-scrim-soft") })]
	});
}
function RotateHint() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rotate-hint",
		role: "status",
		children: "Turn the phone on its side — the neck sits left to right."
	});
}
var SHARP_NAMES = [
	"C",
	"C#",
	"D",
	"D#",
	"E",
	"F",
	"F#",
	"G",
	"G#",
	"A",
	"A#",
	"B"
];
var FLAT_NAMES = [
	"C",
	"Db",
	"D",
	"Eb",
	"E",
	"F",
	"Gb",
	"G",
	"Ab",
	"A",
	"Bb",
	"B"
];
var INLAY_FRETS = /* @__PURE__ */ new Set([
	3,
	5,
	7,
	9,
	12
]);
function midiToFreq(midi) {
	return 440 * 2 ** ((midi - 69) / 12);
}
function pitchClass(midi) {
	return (midi % 12 + 12) % 12;
}
function noteName(midi, accidental = "sharp") {
	return (accidental === "flat" ? FLAT_NAMES : SHARP_NAMES)[pitchClass(midi)] ?? "C";
}
function noteOctave(midi) {
	return Math.floor(midi / 12) - 1;
}
function noteLabel(midi, accidental = "sharp") {
	return `${noteName(midi, accidental)}${noteOctave(midi)}`;
}
var TUNINGS = [
	{
		id: "standard",
		name: "Standard EADGBE",
		midi: [
			40,
			45,
			50,
			55,
			59,
			64
		]
	},
	{
		id: "drop-d",
		name: "Drop D",
		midi: [
			38,
			45,
			50,
			55,
			59,
			64
		]
	},
	{
		id: "eb",
		name: "Half step down",
		midi: [
			39,
			44,
			49,
			54,
			58,
			63
		]
	},
	{
		id: "open-g",
		name: "Open G",
		midi: [
			38,
			43,
			50,
			55,
			59,
			62
		]
	},
	{
		id: "open-d",
		name: "Open D",
		midi: [
			38,
			45,
			50,
			54,
			57,
			62
		]
	},
	{
		id: "dadgad",
		name: "DADGAD",
		midi: [
			38,
			45,
			50,
			55,
			57,
			62
		]
	}
];
function getTuning(id) {
	return TUNINGS.find((t) => t.id === id) ?? TUNINGS[0];
}
/** Sounding MIDI. Capo raises open strings; frets below the capo are dead. */
function soundingMidi(openMidi, fret, capo) {
	if (fret < 0) return null;
	if (fret === 0) return openMidi + capo;
	if (fret < capo) return null;
	return openMidi + fret;
}
function fretCellFractions(totalFrets = 12) {
	const positions = [0];
	for (let i = 1; i <= totalFrets; i++) positions.push(1 - 2 ** (-i / 12));
	const end = positions[totalFrets] ?? 1;
	const widths = [];
	for (let i = 1; i <= totalFrets; i++) {
		const a = positions[i - 1] ?? 0;
		const b = positions[i] ?? 0;
		widths.push((b - a) / end);
	}
	return widths;
}
var FRET_FRACTIONS = fretCellFractions();
var CHORDS = [
	{
		id: "em",
		name: "Em",
		quality: "minor",
		group: "open",
		frets: [
			0,
			2,
			2,
			0,
			0,
			0
		],
		fingers: [
			null,
			2,
			3,
			null,
			null,
			null
		]
	},
	{
		id: "e",
		name: "E",
		quality: "major",
		group: "open",
		frets: [
			0,
			2,
			2,
			1,
			0,
			0
		],
		fingers: [
			null,
			2,
			3,
			1,
			null,
			null
		]
	},
	{
		id: "g",
		name: "G",
		quality: "major",
		group: "open",
		frets: [
			3,
			2,
			0,
			0,
			0,
			3
		],
		fingers: [
			2,
			1,
			null,
			null,
			null,
			3
		]
	},
	{
		id: "c",
		name: "C",
		quality: "major",
		group: "open",
		frets: [
			null,
			3,
			2,
			0,
			1,
			0
		],
		fingers: [
			null,
			3,
			2,
			null,
			1,
			null
		]
	},
	{
		id: "d",
		name: "D",
		quality: "major",
		group: "open",
		frets: [
			null,
			null,
			0,
			2,
			3,
			2
		],
		fingers: [
			null,
			null,
			null,
			1,
			3,
			2
		]
	},
	{
		id: "a",
		name: "A",
		quality: "major",
		group: "open",
		frets: [
			null,
			0,
			2,
			2,
			2,
			0
		],
		fingers: [
			null,
			null,
			1,
			2,
			3,
			null
		]
	},
	{
		id: "am",
		name: "Am",
		quality: "minor",
		group: "open",
		frets: [
			null,
			0,
			2,
			2,
			1,
			0
		],
		fingers: [
			null,
			null,
			2,
			3,
			1,
			null
		]
	},
	{
		id: "dm",
		name: "Dm",
		quality: "minor",
		group: "open",
		frets: [
			null,
			null,
			0,
			2,
			3,
			1
		],
		fingers: [
			null,
			null,
			null,
			2,
			3,
			1
		]
	},
	{
		id: "fmaj7",
		name: "Fmaj7",
		quality: "maj7",
		group: "open",
		frets: [
			null,
			null,
			3,
			2,
			1,
			0
		],
		fingers: [
			null,
			null,
			3,
			2,
			1,
			null
		]
	},
	{
		id: "e7",
		name: "E7",
		quality: "7",
		group: "seventh",
		frets: [
			0,
			2,
			0,
			1,
			0,
			0
		],
		fingers: [
			null,
			2,
			null,
			1,
			null,
			null
		]
	},
	{
		id: "a7",
		name: "A7",
		quality: "7",
		group: "seventh",
		frets: [
			null,
			0,
			2,
			0,
			2,
			0
		],
		fingers: [
			null,
			null,
			2,
			null,
			3,
			null
		]
	},
	{
		id: "d7",
		name: "D7",
		quality: "7",
		group: "seventh",
		frets: [
			null,
			null,
			0,
			2,
			1,
			2
		],
		fingers: [
			null,
			null,
			null,
			2,
			1,
			3
		]
	},
	{
		id: "g7",
		name: "G7",
		quality: "7",
		group: "seventh",
		frets: [
			3,
			2,
			0,
			0,
			0,
			1
		],
		fingers: [
			3,
			2,
			null,
			null,
			null,
			1
		]
	},
	{
		id: "c7",
		name: "C7",
		quality: "7",
		group: "seventh",
		frets: [
			null,
			3,
			2,
			3,
			1,
			0
		],
		fingers: [
			null,
			3,
			2,
			4,
			1,
			null
		]
	},
	{
		id: "b7",
		name: "B7",
		quality: "7",
		group: "seventh",
		frets: [
			null,
			2,
			1,
			2,
			0,
			2
		],
		fingers: [
			null,
			2,
			1,
			3,
			null,
			4
		]
	},
	{
		id: "f",
		name: "F",
		quality: "major",
		group: "barre",
		frets: [
			1,
			3,
			3,
			2,
			1,
			1
		],
		fingers: [
			1,
			3,
			4,
			2,
			1,
			1
		]
	},
	{
		id: "bm",
		name: "Bm",
		quality: "minor",
		group: "barre",
		frets: [
			null,
			2,
			4,
			4,
			3,
			2
		],
		fingers: [
			null,
			1,
			3,
			4,
			2,
			1
		]
	},
	{
		id: "bb",
		name: "Bb",
		quality: "major",
		group: "barre",
		frets: [
			null,
			1,
			3,
			3,
			3,
			1
		],
		fingers: [
			null,
			1,
			2,
			3,
			4,
			1
		]
	},
	{
		id: "e5",
		name: "E5",
		quality: "power",
		group: "power",
		frets: [
			0,
			2,
			2,
			null,
			null,
			null
		],
		fingers: [
			null,
			1,
			2,
			null,
			null,
			null
		]
	},
	{
		id: "a5",
		name: "A5",
		quality: "power",
		group: "power",
		frets: [
			null,
			0,
			2,
			2,
			null,
			null
		],
		fingers: [
			null,
			null,
			1,
			2,
			null,
			null
		]
	},
	{
		id: "d5",
		name: "D5",
		quality: "power",
		group: "power",
		frets: [
			null,
			null,
			0,
			2,
			3,
			null
		],
		fingers: [
			null,
			null,
			null,
			1,
			2,
			null
		]
	},
	{
		id: "g5",
		name: "G5",
		quality: "power",
		group: "power",
		frets: [
			3,
			5,
			5,
			null,
			null,
			null
		],
		fingers: [
			1,
			3,
			4,
			null,
			null,
			null
		]
	}
];
var SCALES = [
	{
		id: "major",
		name: "Major",
		intervals: [
			0,
			2,
			4,
			5,
			7,
			9,
			11
		],
		hint: "Do re mi — bright, resolved."
	},
	{
		id: "minor",
		name: "Natural minor",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			8,
			10
		],
		hint: "Sad, song-like, relative of major."
	},
	{
		id: "pent-maj",
		name: "Major pentatonic",
		intervals: [
			0,
			2,
			4,
			7,
			9
		],
		hint: "Five notes. Country and melody friendly."
	},
	{
		id: "pent-min",
		name: "Minor pentatonic",
		intervals: [
			0,
			3,
			5,
			7,
			10
		],
		hint: "The box. Rock, blues, and country lead."
	},
	{
		id: "blues",
		name: "Blues",
		intervals: [
			0,
			3,
			5,
			6,
			7,
			10
		],
		hint: "Minor pentatonic plus the blue note."
	},
	{
		id: "dorian",
		name: "Dorian",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			9,
			10
		],
		hint: "Minor with a raised 6th. Soulful."
	},
	{
		id: "mixolydian",
		name: "Mixolydian",
		intervals: [
			0,
			2,
			4,
			5,
			7,
			9,
			10
		],
		hint: "Major with a flat 7. Southern rock."
	},
	{
		id: "harmonic",
		name: "Harmonic minor",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			8,
			11
		],
		hint: "The raised 7th. Drama."
	}
];
var DEGREE_NAMES = [
	"1",
	"b2",
	"2",
	"b3",
	"3",
	"4",
	"b5",
	"5",
	"b6",
	"6",
	"b7",
	"7"
];
function scalePitchClasses(rootPc, intervals) {
	return new Set(intervals.map((i) => (rootPc + i) % 12));
}
function intervalFrom(rootPc, midi) {
	return DEGREE_NAMES[(pitchClass(midi) - rootPc + 12) % 12] ?? "1";
}
var ALL_KEYS = [
	"C",
	"C#",
	"D",
	"Eb",
	"E",
	"F",
	"F#",
	"G",
	"Ab",
	"A",
	"Bb",
	"B"
];
function keyToPc(key) {
	const sharp = SHARP_NAMES.indexOf(key);
	if (sharp >= 0) return sharp;
	const flat = FLAT_NAMES.indexOf(key);
	return flat >= 0 ? flat : 0;
}
var STRING_LABELS = [
	{
		number: 6,
		name: "low E",
		gauge: 3.1
	},
	{
		number: 5,
		name: "A",
		gauge: 2.5
	},
	{
		number: 4,
		name: "D",
		gauge: 2.1
	},
	{
		number: 3,
		name: "G",
		gauge: 1.6
	},
	{
		number: 2,
		name: "B",
		gauge: 1.2
	},
	{
		number: 1,
		name: "high E",
		gauge: .9
	}
];
/** Display order: high e at top (tab convention). */
var DISPLAY_STRINGS = [
	5,
	4,
	3,
	2,
	1,
	0
];
var ctx = null;
var master = null;
var muted = false;
var volume = .78;
var metroOn = false;
var metroTimer = null;
var beat = 0;
function ensureContext() {
	if (ctx && master) return ctx;
	ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "interactive" });
	master = ctx.createGain();
	const compressor = ctx.createDynamicsCompressor();
	compressor.threshold.value = -14;
	compressor.knee.value = 10;
	compressor.ratio.value = 3.5;
	compressor.attack.value = .004;
	compressor.release.value = .14;
	master.gain.value = muted ? 0 : volume * volume;
	master.connect(compressor);
	compressor.connect(ctx.destination);
	return ctx;
}
function unlockAudio() {
	const c = ensureContext();
	if (c.state === "suspended") c.resume();
	lockLandscape();
}
function lockLandscape() {
	screen.orientation.lock?.("landscape").catch(() => void 0);
}
function bindVisibilityResume() {
	const onVis = () => {
		if (document.visibilityState === "visible" && ctx?.state === "suspended") ctx.resume();
	};
	document.addEventListener("visibilitychange", onVis);
	window.addEventListener("focus", onVis);
	return () => {
		document.removeEventListener("visibilitychange", onVis);
		window.removeEventListener("focus", onVis);
	};
}
function setMasterVolume(v) {
	volume = Math.min(1, Math.max(0, v));
	if (master && ctx) master.gain.setTargetAtTime(muted ? 0 : volume * volume, ctx.currentTime, .03);
}
function setMuted(next) {
	muted = next;
	if (master && ctx) master.gain.setTargetAtTime(muted ? 0 : volume * volume, ctx.currentTime, .03);
}
var CUTOFF = [
	1600,
	2100,
	2700,
	3600,
	5200,
	6800
];
var stringStop = [
	null,
	null,
	null,
	null,
	null,
	null
];
var pluckVoices = [
	null,
	null,
	null,
	null,
	null,
	null
];
function hush(stringIndex) {
	const stop = stringStop[stringIndex];
	stringStop[stringIndex] = null;
	stop?.();
}
function pluck(midi, stringIndex, velocity = .86, when) {
	const c = ensureContext();
	if (!master) return;
	if (c.state === "suspended") c.resume();
	hush(stringIndex);
	const freq = midiToFreq(midi);
	const start = when ?? c.currentTime;
	const period = Math.max(18, Math.round(c.sampleRate / freq));
	const noise = c.createBuffer(1, period, c.sampleRate);
	const samples = noise.getChannelData(0);
	const pick = Math.floor(period * (.13 + stringIndex * .012));
	for (let i = 0; i < period; i++) samples[i] = (Math.random() * 2 - 1) * velocity;
	for (let i = pick; i < Math.min(period, pick + Math.floor(period * .07)); i++) samples[i] = 0;
	const source = c.createBufferSource();
	source.buffer = noise;
	source.loop = true;
	const delay = c.createDelay(1);
	delay.delayTime.value = period / c.sampleRate;
	const damp = c.createBiquadFilter();
	damp.type = "lowpass";
	damp.frequency.value = CUTOFF[stringIndex] ?? 3200;
	damp.Q.value = .4;
	const feedback = c.createGain();
	feedback.gain.value = .986 - stringIndex * .0045;
	const body = c.createBiquadFilter();
	body.type = "peaking";
	body.frequency.value = 95 + stringIndex * 18;
	body.Q.value = 1.1;
	body.gain.value = 5;
	const env = c.createGain();
	env.gain.setValueAtTime(1e-4, start);
	env.gain.exponentialRampToValueAtTime(.38 * velocity, start + .005);
	env.gain.exponentialRampToValueAtTime(1e-4, start + 2.6);
	const pan = c.createStereoPanner();
	pan.pan.value = (stringIndex - 2.5) * .14;
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
		} catch {}
	};
	stringStop[stringIndex] = stop;
	const voice = {
		source,
		delay,
		baseFreq: freq,
		sampleRate: c.sampleRate,
		freq
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
function glideString(stringIndex, midi, glide = .018) {
	const voice = pluckVoices[stringIndex];
	if (!voice || !ctx) return false;
	const freq = midiToFreq(midi);
	if (!Number.isFinite(freq) || freq <= 0) return false;
	const t = ctx.currentTime;
	voice.source.playbackRate.cancelScheduledValues(t);
	voice.source.playbackRate.setTargetAtTime(freq / voice.baseFreq, t, glide);
	voice.delay.delayTime.cancelScheduledValues(t);
	voice.delay.delayTime.setTargetAtTime(Math.min(1, Math.max(1 / voice.sampleRate, 1 / freq)), t, glide);
	voice.freq = freq;
	return true;
}
var bows = [
	null,
	null,
	null,
	null,
	null,
	null
];
function startBow(midi, stringIndex) {
	const c = ensureContext();
	if (!master) return;
	if (c.state === "suspended") c.resume();
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
	gain.gain.setValueAtTime(1e-4, now);
	gain.gain.exponentialRampToValueAtTime(.2, now + .09);
	const lfo = c.createOscillator();
	lfo.frequency.value = 5.1;
	const lfoGain = c.createGain();
	lfoGain.gain.value = freq * .006;
	lfo.connect(lfoGain);
	lfoGain.connect(osc.frequency);
	lfoGain.connect(osc2.frequency);
	const high = c.createGain();
	high.gain.value = .22;
	osc.connect(filter);
	osc2.connect(high);
	high.connect(filter);
	filter.connect(body);
	body.connect(gain);
	const pan = c.createStereoPanner();
	pan.pan.value = (stringIndex - 1.5) * .22;
	gain.connect(pan);
	pan.connect(master);
	osc.start(now);
	osc2.start(now);
	lfo.start(now);
	bows[stringIndex] = {
		gain,
		osc,
		osc2,
		lfo,
		midi
	};
}
function retuneBow(stringIndex, midi) {
	const voice = bows[stringIndex];
	if (!voice || !ctx) return;
	const freq = midiToFreq(midi);
	const t = ctx.currentTime;
	voice.osc.frequency.setTargetAtTime(freq, t, .04);
	voice.osc2.frequency.setTargetAtTime(freq * 2, t, .04);
	voice.midi = midi;
}
function stopBow(stringIndex) {
	const voice = bows[stringIndex];
	bows[stringIndex] = null;
	if (!voice || !ctx) return;
	const t = ctx.currentTime;
	voice.gain.gain.cancelScheduledValues(t);
	voice.gain.gain.setTargetAtTime(1e-4, t, .04);
	const { osc, osc2, lfo, gain } = voice;
	window.setTimeout(() => {
		try {
			osc.stop();
			osc2.stop();
			lfo.stop();
		} catch {}
		osc.disconnect();
		osc2.disconnect();
		lfo.disconnect();
		gain.disconnect();
	}, 160);
}
function stopAllBows() {
	bows.forEach((_, index) => stopBow(index));
}
function strum(notes, down = true) {
	const c = ensureContext();
	(down ? [...notes].reverse() : [...notes]).forEach((note, i) => {
		pluck(note.midi, note.stringIndex, .74, c.currentTime + i * .016);
	});
}
function setMetronome(on, bpm) {
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
		gain.gain.setValueAtTime(1e-4, t);
		gain.gain.exponentialRampToValueAtTime(accent ? .16 : .09, t + .002);
		gain.gain.exponentialRampToValueAtTime(1e-4, t + .05);
		osc.connect(gain);
		gain.connect(master);
		osc.start(t);
		osc.stop(t + .06);
		osc.onended = () => {
			osc.disconnect();
			gain.disconnect();
		};
		beat += 1;
	};
	beat = 0;
	click();
	metroTimer = window.setInterval(click, 60 / Math.max(40, bpm) * 1e3);
}
/** Violin strings, low G to high E. First-position tapes, not a fret quiz. */
var VIOLIN_STRINGS = [
	{
		name: "G",
		midi: 55,
		gauge: 2.4
	},
	{
		name: "D",
		midi: 62,
		gauge: 1.8
	},
	{
		name: "A",
		midi: 69,
		gauge: 1.3
	},
	{
		name: "E",
		midi: 76,
		gauge: .8
	}
];
/** High E on top, same way the guitar neck sits. */
var VIOLIN_DISPLAY = [
	3,
	2,
	1,
	0
];
/** Semitones from the open string that get a finger tape. */
var TAPE = {
	0: "0",
	2: "1",
	3: "2",
	4: "2",
	5: "3",
	7: "4"
};
/** A, E, D, G, then back. Open strings are the first thing you actually practice. */
var OPENS = [
	{
		stringIndex: 2,
		place: 0
	},
	{
		stringIndex: 3,
		place: 0
	},
	{
		stringIndex: 1,
		place: 0
	},
	{
		stringIndex: 0,
		place: 0
	},
	{
		stringIndex: 0,
		place: 0
	},
	{
		stringIndex: 1,
		place: 0
	},
	{
		stringIndex: 3,
		place: 0
	},
	{
		stringIndex: 2,
		place: 0
	}
];
/** Open, then first finger, on A, E, D, and G. */
var FINGERS = [
	{
		stringIndex: 2,
		place: 0
	},
	{
		stringIndex: 2,
		place: 2
	},
	{
		stringIndex: 3,
		place: 0
	},
	{
		stringIndex: 3,
		place: 2
	},
	{
		stringIndex: 1,
		place: 0
	},
	{
		stringIndex: 1,
		place: 2
	},
	{
		stringIndex: 0,
		place: 0
	},
	{
		stringIndex: 0,
		place: 2
	}
];
/** Every tape on the A string, up and back, including low 2. */
var TAPES_DRILL = [
	{
		stringIndex: 2,
		place: 0
	},
	{
		stringIndex: 2,
		place: 2
	},
	{
		stringIndex: 2,
		place: 3
	},
	{
		stringIndex: 2,
		place: 4
	},
	{
		stringIndex: 2,
		place: 5
	},
	{
		stringIndex: 2,
		place: 7
	},
	{
		stringIndex: 2,
		place: 5
	},
	{
		stringIndex: 2,
		place: 4
	},
	{
		stringIndex: 2,
		place: 3
	},
	{
		stringIndex: 2,
		place: 2
	},
	{
		stringIndex: 2,
		place: 0
	}
];
/** Twinkle on D and A: open D, open A, first finger, back to open. */
var TWINKLE = [
	{
		stringIndex: 1,
		place: 0
	},
	{
		stringIndex: 1,
		place: 0
	},
	{
		stringIndex: 2,
		place: 0
	},
	{
		stringIndex: 2,
		place: 0
	},
	{
		stringIndex: 2,
		place: 2
	},
	{
		stringIndex: 2,
		place: 2
	},
	{
		stringIndex: 2,
		place: 0
	},
	{
		stringIndex: 1,
		place: 0
	}
];
var ONE_STRING = [
	{
		stringIndex: 2,
		place: 0
	},
	{
		stringIndex: 2,
		place: 2
	},
	{
		stringIndex: 2,
		place: 4
	},
	{
		stringIndex: 2,
		place: 5
	},
	{
		stringIndex: 2,
		place: 7
	},
	{
		stringIndex: 2,
		place: 5
	},
	{
		stringIndex: 2,
		place: 4
	},
	{
		stringIndex: 2,
		place: 2
	},
	{
		stringIndex: 2,
		place: 0
	}
];
function lessonSteps(lesson) {
	if (lesson === "opens") return OPENS;
	if (lesson === "fingers") return FINGERS;
	if (lesson === "tapes") return TAPES_DRILL;
	if (lesson === "twinkle") return TWINKLE;
	if (lesson === "one-string") return ONE_STRING;
	return null;
}
function fingerName(place) {
	if (place === 0) return "open";
	if (place === 2) return "1";
	if (place === 3) return "low 2";
	if (place === 4) return "high 2";
	if (place === 5) return "3";
	if (place === 7) return "4";
	return "between";
}
function bowWord(step) {
	return step % 2 === 0 ? "Down bow" : "Up bow";
}
function pitch(stringIndex, place) {
	return VIOLIN_STRINGS[stringIndex].midi + (place ?? 0);
}
function advance(get, set, stringIndex) {
	const state = get();
	const steps = lessonSteps(state.lesson);
	if (!steps) return;
	const target = steps[state.step % steps.length];
	if (!target) return;
	const placed = state.fingers[stringIndex] ?? 0;
	if (stringIndex !== target.stringIndex || placed !== target.place) return;
	set({
		step: state.step + 1,
		hits: state.hits + 1
	});
}
var useViolin = create((set, get) => ({
	lesson: "opens",
	fingers: [
		null,
		null,
		null,
		null
	],
	bowing: null,
	step: 0,
	hits: 0,
	setLesson: (lesson) => {
		stopAllBows();
		set({
			lesson,
			step: 0,
			hits: 0,
			bowing: null
		});
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
		if (get().bowing != null) stopBow(get().bowing);
		const place = get().fingers[stringIndex];
		startBow(pitch(stringIndex, place), stringIndex);
		set({ bowing: stringIndex });
		advance(get, set, stringIndex);
	},
	endBow: () => {
		stopAllBows();
		set({ bowing: null });
	}
}));
function ViolinBoard() {
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
	const drag = (0, import_react.useRef)(null);
	const bowHits = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "violin-board min-w-0 flex-1 rounded-xl border border-border p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 grid items-end",
						style: { gridTemplateColumns: `2.4rem repeat(8, minmax(0, 1fr))` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), Array.from({ length: 8 }, (_, place) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center font-mono text-xs text-bone",
							children: TAPE[place] ?? ""
						}, place))]
					}),
					VIOLIN_DISPLAY.map((stringIndex) => {
						const meta = VIOLIN_STRINGS[stringIndex];
						const down = fingers[stringIndex];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid",
							style: { gridTemplateColumns: `2.4rem repeat(8, minmax(0, 1fr))` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-end pr-2 font-display text-lg text-bone",
									children: meta.name
								}),
								Array.from({ length: 8 }, (_, place) => {
									const held = (down ?? 0) === place && down != null ? true : down == null && place === 0;
									const fingerDown = down === place;
									const wanted = target?.stringIndex === stringIndex && target.place === place;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"data-string": stringIndex,
										"data-place": place,
										className: cn("violin-place relative z-10", place === 0 && "bg-nut/15", wanted && "is-target", TAPE[place] && "is-tape"),
										onPointerDown: (e) => {
											unlockAudio();
											e.preventDefault();
											e.currentTarget.setPointerCapture(e.pointerId);
											drag.current = {
												stringIndex,
												place,
												moved: false
											};
											if (place === 0) lift(stringIndex);
											else if (down !== place) plant(stringIndex, place);
										},
										onPointerMove: (e) => {
											const gesture = drag.current;
											if (!gesture || gesture.stringIndex !== stringIndex) return;
											const cell = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-place]");
											if (!cell || Number(cell.dataset.string) !== stringIndex) return;
											const next = Number(cell.dataset.place);
											if (!Number.isFinite(next) || next === gesture.place) return;
											gesture.moved = true;
											gesture.place = next;
											slideTo(stringIndex, next);
										},
										onPointerUp: () => {
											const gesture = drag.current;
											drag.current = null;
											if (!gesture || gesture.moved || gesture.place === 0) return;
											if (fingers[stringIndex] === gesture.place) lift(stringIndex);
										},
										children: [fingerDown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "finger-dot is-held" }) : null, held && place === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "finger-dot is-open" }) : null]
									}, place);
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("string-wire", bowing === stringIndex && "is-ringing"),
									style: { ["--gauge"]: `${meta.gauge}px` }
								})
							]
						}, stringIndex);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 px-1 text-xs text-muted",
						children: "Golden Notes · finger on a tape, then draw the bow."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViolinBody, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bow-bar",
				onPointerDown: (e) => {
					unlockAudio();
					e.preventDefault();
					e.currentTarget.setPointerCapture(e.pointerId);
					bowHits.current = /* @__PURE__ */ new Set();
					const hit = stringFromBow(e.currentTarget, e.clientY);
					if (hit == null) return;
					bowHits.current.add(hit);
					beginBow(hit);
				},
				onPointerMove: (e) => {
					if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
					const hit = stringFromBow(e.currentTarget, e.clientY);
					if (hit == null || bowHits.current.has(hit)) return;
					bowHits.current.add(hit);
					moveBow(hit);
				},
				onPointerUp: () => {
					bowHits.current = /* @__PURE__ */ new Set();
					endBow();
				},
				onPointerCancel: endBow,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bow-label",
					children: "Bow"
				}), VIOLIN_DISPLAY.map((stringIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-bow": stringIndex,
					className: cn("bow-lane", bowing === stringIndex && "is-live")
				}, stringIndex))]
			})
		]
	});
}
function ViolinBody() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 90 200",
		className: "hidden h-auto w-16 shrink-0 self-center sm:block",
		"aria-label": "Golden Notes violin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "vbody",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#8a4a28"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "#3a2014"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#140c08"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "38",
				y: "0",
				width: "14",
				height: "36",
				rx: "2",
				fill: "#1a120c",
				stroke: "#d4c4a8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M45 34c16 6 28 20 28 40 0 16-8 26-14 32 10 8 16 20 16 34 0 22-14 40-30 48-16-8-30-26-30-48 0-14 6-26 16-34-6-6-14-16-14-32 0-20 12-34 28-40z",
				fill: "url(#vbody)",
				stroke: "#e6dcc8",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M38 78c6 8 8 8 8 16s-2 10-8 16",
				fill: "none",
				stroke: "#e6dcc8",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 78c-6 8-8 8-8 16s2 10 8 16",
				fill: "none",
				stroke: "#e6dcc8",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "128",
				width: "10",
				height: "16",
				rx: "1",
				fill: "#e6dcc8"
			})
		]
	});
}
function stringFromBow(bar, clientY) {
	const lanes = bar.querySelectorAll("[data-bow]");
	for (const lane of lanes) {
		const box = lane.getBoundingClientRect();
		if (clientY >= box.top && clientY <= box.bottom) return Number(lane.dataset.bow);
	}
	return null;
}
var LESSONS$1 = [
	{
		id: "opens",
		label: "Opens"
	},
	{
		id: "fingers",
		label: "Fingers"
	},
	{
		id: "tapes",
		label: "Tapes"
	},
	{
		id: "one-string",
		label: "Scale"
	},
	{
		id: "twinkle",
		label: "Twinkle"
	},
	{
		id: "free",
		label: "Free"
	}
];
function ViolinPanel() {
	const lesson = useViolin((s) => s.lesson);
	const setLesson = useViolin((s) => s.setLesson);
	const step = useViolin((s) => s.step);
	const hits = useViolin((s) => s.hits);
	const steps = lessonSteps(lesson);
	const target = steps ? steps[step % steps.length] : null;
	const targetName = target ? VIOLIN_STRINGS[target.stringIndex].name : null;
	const round = steps ? Math.floor(step / steps.length) + 1 : 1;
	const note = steps ? step % steps.length + 1 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-muted",
				children: "Practice"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl uppercase leading-none",
				children: target && targetName ? `${targetName} ${fingerName(target.place)}` : "Free bow"
			}),
			target && targetName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-surface-2 px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl uppercase text-primary",
					children: bowWord(step)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-mono text-sm text-muted",
					children: [
						note,
						" of ",
						steps.length,
						" · round ",
						round,
						" · ",
						hits,
						" clean"
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "No target. Put a finger down, then draw the bow on that string."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: LESSONS$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: lesson === item.id ? "primary" : "ghost",
					onClick: () => setLesson(item.id),
					children: item.label
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Finger first, then the bow. It only moves on when that string and that finger are the ones sounding."
			})
		]
	});
}
var LESSONS = [
	{
		id: "open-strings",
		title: "The six open strings",
		blurb: "E A D G B E — from thickest to thinnest.",
		kind: "play-along",
		detail: "Play each open string from low E (string 6, bottom) up to high E (string 1, top). The mnemonic: Eddie Ate Dynamite, Good Bye Eddie."
	},
	{
		id: "first-frets",
		title: "Frets 1–3",
		blurb: "Every fret is one semitone — one piano key.",
		kind: "identify",
		detail: "A highlighted dot will appear. Name the note. Stay in the first three frets, where beginners live."
	},
	{
		id: "naturals",
		title: "Natural notes",
		blurb: "A B C D E F G — the letters of music.",
		kind: "identify",
		detail: "No sharps or flats this round. Natural notes are the white keys. On guitar they sit in a pattern you can learn by sight."
	},
	{
		id: "accidentals",
		title: "Sharps and flats",
		blurb: "The note between F and G is F# — also Gb.",
		kind: "identify",
		detail: "Same pitch, two names. Sharps raise a note; flats lower the one above. You will see both spellings in music."
	},
	{
		id: "find-notes",
		title: "Find every G",
		blurb: "The same note lives in several places.",
		kind: "find",
		detail: "Tap every matching note on the first twelve frets. One letter, many addresses — that is the fretboard."
	},
	{
		id: "open-chords",
		title: "First chords: Em and G",
		blurb: "Two shapes. A thousand songs.",
		kind: "chord",
		detail: "Hold the highlighted dots, then strum. Em is two fingers. G is three. Switch between them slowly."
	}
];
var NATURAL_PC = /* @__PURE__ */ new Set([
	0,
	2,
	4,
	5,
	7,
	9,
	11
]);
function isNatural(midi) {
	return NATURAL_PC.has((midi % 12 + 12) % 12);
}
var NO_HELD = [
	null,
	null,
	null,
	null,
	null,
	null
];
var STORAGE_KEY = "steeley-strings-v1";
var SAVE_VERSION = 1;
var defaults = {
	volume: .78,
	muted: false,
	showNotes: true,
	showDegrees: false,
	accidental: "sharp",
	leftHanded: false,
	tuningId: "standard",
	capo: 0,
	completedLessons: []
};
function loadPersist() {
	if (typeof window === "undefined") return defaults;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return defaults;
		const parsed = JSON.parse(raw);
		return {
			...defaults,
			...parsed
		};
	} catch {
		return defaults;
	}
}
function savePersist(p) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
			...p,
			version: SAVE_VERSION
		}));
	} catch {}
}
function randomInt(max) {
	return Math.floor(Math.random() * max);
}
function pickChoices(correct, accidental) {
	const pool = accidental === "flat" ? [
		"C",
		"Db",
		"D",
		"Eb",
		"E",
		"F",
		"Gb",
		"G",
		"Ab",
		"A",
		"Bb",
		"B"
	] : [
		"C",
		"C#",
		"D",
		"D#",
		"E",
		"F",
		"F#",
		"G",
		"G#",
		"A",
		"A#",
		"B"
	];
	const set = /* @__PURE__ */ new Set([correct]);
	while (set.size < 4) set.add(pool[randomInt(pool.length)]);
	return [...set].sort(() => Math.random() - .5);
}
function randomFretNote(maxFret, accidental, naturalsOnly, tuningId, capo) {
	for (let i = 0; i < 40; i++) {
		const stringIndex = randomInt(6);
		const fret = randomInt(maxFret + 1);
		const open = getTuning(tuningId).midi[stringIndex];
		const midi = soundingMidi(open, fret, capo);
		if (midi == null) continue;
		if (naturalsOnly && !isNatural(midi)) continue;
		if (!naturalsOnly && isNatural(midi) && Math.random() < .35) continue;
		return {
			stringIndex,
			fret,
			midi,
			name: noteName(midi, accidental)
		};
	}
	const open = getTuning(tuningId).midi[0];
	const midi = soundingMidi(open, 0, capo) ?? open;
	return {
		stringIndex: 0,
		fret: 0,
		midi,
		name: noteName(midi, accidental)
	};
}
function persistSlice(s) {
	return {
		volume: s.volume,
		muted: s.muted,
		showNotes: s.showNotes,
		showDegrees: s.showDegrees,
		accidental: s.accidental,
		leftHanded: s.leftHanded,
		tuningId: s.tuningId,
		capo: s.capo,
		completedLessons: s.completedLessons
	};
}
function makeIdentifyQuiz(lessonId, state, round, score) {
	const naturalsOnly = lessonId === "naturals" || lessonId === "first-frets";
	const maxFret = lessonId === "first-frets" ? 3 : 5;
	const accidentalsOnly = lessonId === "accidentals";
	let note = randomFretNote(maxFret, state.accidental, naturalsOnly, state.tuningId, state.capo);
	if (accidentalsOnly) for (let i = 0; i < 20 && isNatural(note.midi); i++) note = randomFretNote(7, state.accidental, false, state.tuningId, state.capo);
	return {
		lessonId,
		kind: "identify",
		prompt: "What note is this?",
		stringIndex: note.stringIndex,
		fret: note.fret,
		midi: note.midi,
		targetPc: pitchClass(note.midi),
		choices: pickChoices(note.name, state.accidental),
		correct: note.name,
		found: [],
		needed: 1,
		score,
		round,
		total: 8,
		feedback: "idle"
	};
}
function makeFindQuiz(lessonId, state, round, score) {
	const pcs = [
		4,
		7,
		9,
		0,
		2,
		5
	];
	const pc = pcs[(round - 1) % pcs.length];
	const name = noteName(pc + 60, state.accidental);
	const tuning = getTuning(state.tuningId);
	let needed = 0;
	for (let s = 0; s < 6; s++) for (let f = 0; f <= 12; f++) {
		const midi = soundingMidi(tuning.midi[s], f, state.capo);
		if (midi != null && pitchClass(midi) === pc) needed += 1;
	}
	needed = Math.min(needed, 6);
	return {
		lessonId,
		kind: "find",
		prompt: `Tap ${needed} different ${name} notes`,
		stringIndex: 0,
		fret: 0,
		midi: 60 + pc,
		targetPc: pc,
		choices: [],
		correct: name,
		found: [],
		needed,
		score,
		round,
		total: 6,
		feedback: "idle"
	};
}
function makePlayAlongQuiz(lessonId, state, round, score) {
	const stringIndex = (round - 1) % 6;
	const open = getTuning(state.tuningId).midi[stringIndex];
	const midi = soundingMidi(open, 0, state.capo) ?? open;
	return {
		lessonId,
		kind: "play-along",
		prompt: `Play the open ${[
			"low E",
			"A",
			"D",
			"G",
			"B",
			"high E"
		][stringIndex]} string (string ${6 - stringIndex})`,
		stringIndex,
		fret: 0,
		midi,
		targetPc: pitchClass(midi),
		choices: [],
		correct: noteName(midi, state.accidental),
		found: [],
		needed: 1,
		score,
		round,
		total: 6,
		feedback: "idle"
	};
}
function makeChordQuiz(lessonId, round, score) {
	const ids = ["em", "g"];
	const id = ids[(round - 1) % ids.length];
	const chord = CHORDS.find((c) => c.id === id);
	return {
		lessonId,
		kind: "chord",
		prompt: `Form ${chord.name} and press Strum`,
		stringIndex: 0,
		fret: 0,
		midi: 40,
		targetPc: 0,
		choices: [],
		correct: chord.name,
		found: [],
		needed: 1,
		score,
		round,
		total: 6,
		feedback: "idle",
		chordId: chord.id
	};
}
var useStudio = create((set, get) => ({
	...defaults,
	started: false,
	mode: "play",
	lastPlayed: null,
	selectedChordId: "em",
	selectedScaleId: "pent-min",
	selectedKey: "A",
	atlasPc: null,
	quiz: null,
	metronomeOn: false,
	bpm: 80,
	held: NO_HELD,
	start: () => set({ started: true }),
	setMode: (mode) => set({
		mode,
		atlasPc: mode === "notes" ? get().atlasPc : null,
		quiz: mode === "train" ? get().quiz : null
	}),
	setVolume: (v) => {
		setMasterVolume(v);
		set({ volume: v });
		savePersist(persistSlice({
			...get(),
			volume: v
		}));
	},
	toggleMute: () => {
		const muted = !get().muted;
		setMuted(muted);
		set({ muted });
		savePersist(persistSlice({
			...get(),
			muted
		}));
	},
	toggleShowNotes: () => {
		const showNotes = !get().showNotes;
		set({ showNotes });
		savePersist(persistSlice({
			...get(),
			showNotes
		}));
	},
	toggleShowDegrees: () => {
		const showDegrees = !get().showDegrees;
		set({ showDegrees });
		savePersist(persistSlice({
			...get(),
			showDegrees
		}));
	},
	setAccidental: (accidental) => {
		set({ accidental });
		savePersist(persistSlice({
			...get(),
			accidental
		}));
	},
	toggleLeftHanded: () => {
		const leftHanded = !get().leftHanded;
		set({ leftHanded });
		savePersist(persistSlice({
			...get(),
			leftHanded
		}));
	},
	setTuning: (tuningId) => {
		set({ tuningId });
		savePersist(persistSlice({
			...get(),
			tuningId
		}));
	},
	setCapo: (capo) => {
		const next = Math.min(7, Math.max(0, capo));
		set({ capo: next });
		savePersist(persistSlice({
			...get(),
			capo: next
		}));
	},
	setChord: (selectedChordId) => set({
		selectedChordId,
		mode: "chords"
	}),
	setScale: (selectedScaleId) => set({ selectedScaleId }),
	setKey: (selectedKey) => set({ selectedKey }),
	setAtlasPc: (atlasPc) => set({
		atlasPc,
		mode: "notes"
	}),
	playFret: (stringIndex, fret) => {
		const s = get();
		const open = getTuning(s.tuningId).midi[stringIndex];
		if (open == null) return;
		const midi = soundingMidi(open, fret, s.capo);
		if (midi == null) return;
		pluck(midi, stringIndex);
		set({ lastPlayed: {
			stringIndex,
			fret,
			midi,
			at: Date.now()
		} });
		const quiz = s.quiz;
		if (!quiz || s.mode !== "train" || quiz.feedback !== "idle") return;
		if (quiz.kind === "play-along") {
			const ok = stringIndex === quiz.stringIndex && fret === quiz.fret;
			set({ quiz: {
				...quiz,
				feedback: ok ? "good" : "bad",
				score: quiz.score + (ok ? 1 : 0)
			} });
			return;
		}
		if (quiz.kind === "find") {
			if (pitchClass(midi) !== quiz.targetPc) {
				set({ quiz: {
					...quiz,
					feedback: "bad"
				} });
				window.setTimeout(() => {
					const q = get().quiz;
					if (q && q.feedback === "bad") set({ quiz: {
						...q,
						feedback: "idle"
					} });
				}, 420);
				return;
			}
			const key = `${stringIndex}:${fret}`;
			if (quiz.found.includes(key)) return;
			const found = [...quiz.found, key];
			const done = found.length >= quiz.needed;
			set({ quiz: {
				...quiz,
				found,
				feedback: done ? "good" : "idle",
				score: quiz.score + (done ? 1 : 0)
			} });
		}
	},
	pressFret: (stringIndex, fret) => {
		const pos = clampPos(fret);
		const held = get().held.slice();
		held[stringIndex] = pos;
		set({ held });
		get().playFret(stringIndex, Math.round(pos));
	},
	slideFret: (stringIndex, pos) => {
		const s = get();
		const next = clampPos(pos);
		if (s.held[stringIndex] === next) return;
		const held = s.held.slice();
		held[stringIndex] = next;
		const exact = heldMidi(stringIndex, next, s.tuningId, s.capo);
		const patch = { held };
		if (exact != null) {
			const ringing = glideString(stringIndex, exact);
			const last = s.lastPlayed;
			if (ringing && last && last.stringIndex === stringIndex) patch.lastPlayed = {
				...last,
				fret: Math.round(next),
				midi: Math.round(exact),
				pos: next,
				exact
			};
		}
		set(patch);
	},
	holdAt: (stringIndex, pos) => {
		get().slideFret(stringIndex, pos);
	},
	releaseFret: (stringIndex) => {
		const s = get();
		if (s.held[stringIndex] == null) return;
		const held = s.held.slice();
		held[stringIndex] = null;
		set({ held });
	},
	releaseAll: () => {
		if (get().held.every((h) => h == null)) return;
		set({ held: NO_HELD.slice() });
	},
	pickString: (stringIndex) => {
		const s = get();
		const pos = s.held[stringIndex];
		if (pos == null || Math.abs(pos - Math.round(pos)) < .05) {
			s.playFret(stringIndex, pos == null ? 0 : Math.round(pos));
			return;
		}
		const exact = heldMidi(stringIndex, pos, s.tuningId, s.capo);
		if (exact == null) return;
		pluck(exact, stringIndex);
		set({ lastPlayed: {
			stringIndex,
			fret: Math.round(pos),
			midi: Math.round(exact),
			at: Date.now(),
			pos,
			exact
		} });
	},
	strumHeld: (down = true) => {
		const s = get();
		const notes = heldNotes(s.held, s.tuningId, s.capo);
		strum(notes, down);
		const last = down ? notes[0] : notes[notes.length - 1];
		if (last) {
			const pos = s.held[last.stringIndex] ?? 0;
			set({ lastPlayed: {
				stringIndex: last.stringIndex,
				fret: Math.round(pos),
				midi: Math.round(last.midi),
				at: Date.now(),
				pos,
				exact: last.midi
			} });
		}
		const quiz = s.quiz;
		if (quiz && s.mode === "train" && quiz.kind === "chord" && quiz.feedback === "idle") {
			const chord = CHORDS.find((c) => c.id === quiz.chordId);
			const ok = Boolean(chord && heldMatchesChord(s.held, chord));
			set({ quiz: {
				...quiz,
				feedback: ok ? "good" : "bad",
				score: quiz.score + (ok ? 1 : 0)
			} });
		}
	},
	strumNow: (down = true) => {
		const s = get();
		if (anyHeld(s.held)) {
			s.strumHeld(down);
			return;
		}
		if (s.mode === "chords" || s.quiz?.kind === "chord") s.strumChord(down);
		else s.strumHeld(down);
	},
	strumChord: (down = true) => {
		const s = get();
		if (anyHeld(s.held)) {
			s.strumHeld(down);
			return;
		}
		const chord = CHORDS.find((c) => c.id === (s.quiz?.chordId ?? s.selectedChordId)) ?? CHORDS[0];
		if (!chord) return;
		const tuning = getTuning(s.tuningId);
		const notes = [];
		chord.frets.forEach((fret, stringIndex) => {
			if (fret == null) return;
			const midi = soundingMidi(tuning.midi[stringIndex], fret, s.capo);
			if (midi == null) return;
			notes.push({
				midi,
				stringIndex
			});
		});
		strum(notes, down);
		const last = notes[notes.length - 1];
		if (last) set({ lastPlayed: {
			stringIndex: last.stringIndex,
			fret: chord.frets[last.stringIndex] ?? 0,
			midi: last.midi,
			at: Date.now()
		} });
		const quiz = s.quiz;
		if (quiz && s.mode === "train" && quiz.kind === "chord" && quiz.feedback === "idle") {
			const ok = quiz.chordId === chord.id;
			set({
				quiz: {
					...quiz,
					feedback: ok ? "good" : "bad",
					score: quiz.score + (ok ? 1 : 0)
				},
				selectedChordId: chord.id
			});
		}
	},
	strumOpen: () => {
		const s = get();
		if (anyHeld(s.held)) {
			s.strumHeld(true);
			return;
		}
		strum(getTuning(s.tuningId).midi.map((open, stringIndex) => {
			const midi = soundingMidi(open, 0, s.capo);
			return midi == null ? null : {
				midi,
				stringIndex
			};
		}).filter((n) => n != null), true);
	},
	startLesson: (id) => {
		const s = get();
		const lesson = LESSONS.find((l) => l.id === id);
		if (!lesson) return;
		let quiz;
		if (lesson.kind === "find") quiz = makeFindQuiz(id, s, 1, 0);
		else if (lesson.kind === "play-along") quiz = makePlayAlongQuiz(id, s, 1, 0);
		else if (lesson.kind === "chord") quiz = makeChordQuiz(id, 1, 0);
		else quiz = makeIdentifyQuiz(id, s, 1, 0);
		set({
			mode: "train",
			quiz,
			selectedChordId: quiz.chordId ?? s.selectedChordId
		});
		if (quiz.kind === "identify" || quiz.kind === "play-along") {
			pluck(quiz.midi, quiz.stringIndex);
			set({ lastPlayed: {
				stringIndex: quiz.stringIndex,
				fret: quiz.fret,
				midi: quiz.midi,
				at: Date.now()
			} });
		}
	},
	answerQuiz: (choice) => {
		const quiz = get().quiz;
		if (!quiz || quiz.kind !== "identify" || quiz.feedback !== "idle") return;
		const ok = choice === quiz.correct;
		set({ quiz: {
			...quiz,
			feedback: ok ? "good" : "bad",
			score: quiz.score + (ok ? 1 : 0)
		} });
	},
	nextRound: () => {
		const s = get();
		const quiz = s.quiz;
		if (!quiz) return;
		if (quiz.round >= quiz.total) {
			const completed = s.completedLessons.includes(quiz.lessonId) ? s.completedLessons : [...s.completedLessons, quiz.lessonId];
			set({
				quiz: null,
				completedLessons: completed
			});
			savePersist(persistSlice({
				...s,
				completedLessons: completed
			}));
			return;
		}
		const round = quiz.round + 1;
		const lesson = LESSONS.find((l) => l.id === quiz.lessonId);
		let next;
		if (lesson?.kind === "find") next = makeFindQuiz(quiz.lessonId, s, round, quiz.score);
		else if (lesson?.kind === "play-along") next = makePlayAlongQuiz(quiz.lessonId, s, round, quiz.score);
		else if (lesson?.kind === "chord") next = makeChordQuiz(quiz.lessonId, round, quiz.score);
		else next = makeIdentifyQuiz(quiz.lessonId, s, round, quiz.score);
		set({
			quiz: next,
			selectedChordId: next.chordId ?? s.selectedChordId
		});
		if (next.kind === "identify" || next.kind === "play-along") {
			pluck(next.midi, next.stringIndex);
			set({ lastPlayed: {
				stringIndex: next.stringIndex,
				fret: next.fret,
				midi: next.midi,
				at: Date.now()
			} });
		}
	},
	setMetronomeOn: (metronomeOn) => set({ metronomeOn }),
	setBpm: (bpm) => set({ bpm })
}));
function hydrateStudio() {
	const saved = loadPersist();
	useStudio.setState(saved);
	setMasterVolume(saved.volume);
	setMuted(saved.muted);
}
function midiAt(stringIndex, fret, tuningId, capo) {
	const open = getTuning(tuningId).midi[stringIndex];
	if (open == null) return null;
	return soundingMidi(open, fret, capo);
}
function clampPos(pos) {
	if (!Number.isFinite(pos)) return 0;
	return Math.min(12, Math.max(0, pos));
}
function anyHeld(held) {
	return held.some((h) => h != null);
}
/**
* Fractional sounding MIDI for a (possibly sliding) finger. Behind the capo the
* string sounds at the capo; open (null/0) is the open string plus capo.
*/
function heldMidi(stringIndex, pos, tuningId, capo) {
	const open = getTuning(tuningId).midi[stringIndex];
	if (open == null) return null;
	if (pos == null || pos <= 0) return open + capo;
	return open + Math.max(pos, capo);
}
/** All six strings: held ones at their (fractional) position, the rest open. */
function heldNotes(held, tuningId, capo) {
	const notes = [];
	for (let stringIndex = 0; stringIndex < 6; stringIndex++) {
		const midi = heldMidi(stringIndex, held[stringIndex] ?? null, tuningId, capo);
		if (midi != null) notes.push({
			midi,
			stringIndex
		});
	}
	return notes;
}
/** Does the held shape voice this chord? Muted (X) strings are ignored. */
function heldMatchesChord(held, chord) {
	for (let stringIndex = 0; stringIndex < 6; stringIndex++) {
		const want = chord.frets[stringIndex];
		if (want == null) continue;
		const pos = held[stringIndex];
		if ((pos == null ? 0 : Math.round(pos)) !== want) return false;
	}
	return true;
}
/** Best named chord for the held shape (most strings specified wins). */
function matchHeldChord(held) {
	if (!held.some((h) => h != null && Math.round(h) > 0)) return void 0;
	let best;
	let bestCount = -1;
	for (const chord of CHORDS) {
		if (!heldMatchesChord(held, chord)) continue;
		const count = chord.frets.filter((f) => f != null).length;
		if (count > bestCount) {
			best = chord;
			bestCount = count;
		}
	}
	return best;
}
var MODES$1 = [
	{
		id: "opens",
		label: "Opens"
	},
	{
		id: "fingers",
		label: "Fingers"
	},
	{
		id: "tapes",
		label: "Tapes"
	},
	{
		id: "one-string",
		label: "Scale"
	},
	{
		id: "twinkle",
		label: "Twinkle"
	},
	{
		id: "free",
		label: "Free"
	}
];
function Slayer({ onExit }) {
	const [started, setStarted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => bindVisibilityResume(), []);
	(0, import_react.useEffect)(() => {
		return () => stopAllBows();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "guise-violin relative min-h-dvh text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneLayers, {
				started,
				pieces: SLAYER_ART
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateHint, {}),
			started ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlayerMain, { onExit: () => {
				stopAllBows();
				onExit();
			} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlayerGate, { onStart: () => {
				unlockAudio();
				lockLandscape();
				setStarted(true);
			} })
		]
	});
}
function SlayerGate({ onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative flex min-h-dvh flex-col overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "start-copy relative z-10 flex flex-1 flex-col justify-end px-5 pb-8 pt-8 sm:justify-center sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter-1 font-mono text-xs uppercase tracking-widest text-primary",
					children: "Violin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "enter-1 mt-3 font-display text-5xl uppercase leading-[0.9] tracking-tight text-fg sm:text-7xl",
					children: ["Golden", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-bone",
						children: "Notes"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter-2 mt-4 max-w-md text-base leading-relaxed text-muted",
					children: "Four strings. Put a finger on a tape, then draw the bow. The note holds until you lift."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "enter-2 mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						onPointerDown: unlockAudio,
						onClick: onStart,
						children: "Draw the bow"
					})
				})
			]
		})
	});
}
function SlayerMain({ onExit }) {
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
	const [railOpen, setRailOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMetronome(metronomeOn, bpm);
		return () => setMetronome(false, bpm);
	}, [metronomeOn, bpm]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("studio-shell", railOpen && "rail-open"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "studio-top flex flex-nowrap items-center gap-2 rounded-xl border border-border bg-surface/75 px-3 py-1.5 backdrop-blur-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 pr-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg uppercase leading-none tracking-wide",
							children: "Golden Notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "studio-kicker font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted",
							children: "Violin"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex min-w-0 flex-1 flex-nowrap gap-1 overflow-x-auto",
						"aria-label": "Violin modes",
						children: MODES$1.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: lesson === mode.id ? "primary" : "ghost",
							onClick: () => setLesson(mode.id),
							children: mode.label
						}, mode.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: onExit,
								children: "Games"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: railOpen ? "primary" : "ghost",
								className: "rail-toggle",
								onClick: () => setRailOpen((open) => !open),
								children: railOpen ? "Neck" : "Lessons"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								"aria-label": muted ? "Unmute" : "Mute",
								onClick: () => {
									unlockAudio();
									toggleMute();
								},
								children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted",
								children: ["Vol", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 0,
									max: 1,
									step: .01,
									value: volume,
									onChange: (e) => setVolume(Number(e.target.value)),
									className: "h-1 w-20 accent-primary"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "studio-neck",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViolinBoard, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "studio-rail",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-xl border border-border bg-surface/75 p-3 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViolinPanel, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-xl border border-border bg-surface/75 p-3 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted",
						children: "Setup"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center justify-between gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Metronome" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: metronomeOn,
								onChange: (e) => {
									unlockAudio();
									setMetronomeOn(e.target.checked);
								},
								className: "size-4 accent-primary"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-1 block text-muted",
								children: [
									"Tempo ",
									bpm,
									" BPM"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 50,
								max: 160,
								step: 1,
								value: bpm,
								onChange: (e) => setBpm(Number(e.target.value)),
								className: "h-1 w-full accent-primary"
							})]
						})]
					})]
				})]
			})
		]
	});
}
var SLIDE_DEADZONE_PX = 5;
function Fretboard() {
	const mode = useStudio((s) => s.mode);
	const tuningId = useStudio((s) => s.tuningId);
	const capo = useStudio((s) => s.capo);
	const showNotes = useStudio((s) => s.showNotes);
	const showDegrees = useStudio((s) => s.showDegrees);
	const accidental = useStudio((s) => s.accidental);
	const leftHanded = useStudio((s) => s.leftHanded);
	const lastPlayed = useStudio((s) => s.lastPlayed);
	const selectedChordId = useStudio((s) => s.selectedChordId);
	const selectedScaleId = useStudio((s) => s.selectedScaleId);
	const selectedKey = useStudio((s) => s.selectedKey);
	const atlasPc = useStudio((s) => s.atlasPc);
	const quiz = useStudio((s) => s.quiz);
	const playFret = useStudio((s) => s.playFret);
	const held = useStudio((s) => s.held);
	const pressFret = useStudio((s) => s.pressFret);
	const slideFret = useStudio((s) => s.slideFret);
	const holdAt = useStudio((s) => s.holdAt);
	const releaseFret = useStudio((s) => s.releaseFret);
	const releaseAll = useStudio((s) => s.releaseAll);
	const gestures = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const orderSeq = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const map = gestures.current;
		const drop = () => {
			map.clear();
			releaseAll();
		};
		window.addEventListener("blur", drop);
		return () => {
			window.removeEventListener("blur", drop);
			drop();
		};
	}, [releaseAll]);
	const onFingerDown = (e, stringIndex) => {
		const cell = e.target.closest("[data-fret]");
		if (!cell || cell.disabled) return;
		unlockAudio();
		e.preventDefault();
		const row = e.currentTarget;
		try {
			row.setPointerCapture(e.pointerId);
		} catch {}
		const fret = Number(cell.dataset.fret);
		if (!Number.isFinite(fret)) return;
		orderSeq.current += 1;
		gestures.current.set(e.pointerId, {
			stringIndex,
			row,
			startFret: fret,
			startCont: continuousFret(row, e.clientX),
			startX: e.clientX,
			pos: fret,
			moved: false,
			order: orderSeq.current
		});
		pressFret(stringIndex, fret);
	};
	const onFingerMove = (e) => {
		const gesture = gestures.current.get(e.pointerId);
		if (!gesture) return;
		if (!gesture.moved && Math.abs(e.clientX - gesture.startX) < SLIDE_DEADZONE_PX) return;
		gesture.moved = true;
		const cont = continuousFret(gesture.row, e.clientX);
		const pos = clampPos(gesture.startFret + (cont - gesture.startCont));
		if (pos === gesture.pos) return;
		gesture.pos = pos;
		slideFret(gesture.stringIndex, pos);
	};
	const onFingerUp = (e) => {
		const gesture = gestures.current.get(e.pointerId);
		if (!gesture) return;
		gestures.current.delete(e.pointerId);
		let other;
		for (const g of gestures.current.values()) if (g.stringIndex === gesture.stringIndex && (!other || g.order > other.order)) other = g;
		if (other) holdAt(gesture.stringIndex, other.pos);
		else releaseFret(gesture.stringIndex);
	};
	const tuning = getTuning(tuningId);
	const chord = mode === "chords" || quiz?.kind === "chord" ? CHORDS.find((c) => c.id === (quiz?.chordId ?? selectedChordId)) : void 0;
	const scale = SCALES.find((s) => s.id === selectedScaleId);
	const rootPc = keyToPc(selectedKey);
	const scaleSet = (0, import_react.useMemo)(() => scale ? scalePitchClasses(rootPc, scale.intervals) : /* @__PURE__ */ new Set(), [scale, rootPc]);
	const columns = [
		"2.8rem",
		"minmax(2.1rem, 0.7fr)",
		...FRET_FRACTIONS.map((f) => `${(f * 100).toFixed(3)}fr`)
	].join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-stretch gap-2",
		children: [
			leftHanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StrumBar, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-held": JSON.stringify(held.map((h) => h == null ? null : Math.round(h * 1e3) / 1e3)),
					className: "fretboard-wood relative w-full rounded-l-xl border border-border p-1.5 shadow-[0_20px_50px_rgb(0_0_0_/_0.45)]",
					style: { direction: leftHanded ? "rtl" : "ltr" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 grid",
							style: { gridTemplateColumns: columns },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center font-mono text-xs text-bone",
									children: "0"
								}),
								Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center font-mono text-xs text-muted tabular-nums",
									children: i + 1
								}, i + 1))
							]
						}),
						DISPLAY_STRINGS.map((stringIndex) => {
							const meta = STRING_LABELS[stringIndex];
							const holdPos = held[stringIndex] ?? null;
							const ringing = lastPlayed && lastPlayed.stringIndex === stringIndex && Date.now() - lastPlayed.at < 700;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-string-row": stringIndex,
								className: "guitar-string-row relative isolate grid",
								style: { gridTemplateColumns: columns },
								onPointerDown: (e) => onFingerDown(e, stringIndex),
								onPointerMove: onFingerMove,
								onPointerUp: onFingerUp,
								onPointerCancel: onFingerUp,
								onLostPointerCapture: onFingerUp,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-end justify-start pr-2 pt-1 text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-bone",
											children: tuning.midi[stringIndex] != null ? noteName(tuning.midi[stringIndex], accidental) : ""
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-muted",
											children: meta.number
										})]
									}),
									Array.from({ length: 13 }, (_, fret) => {
										const midi = midiAt(stringIndex, fret, tuningId, capo);
										const dead = midi == null;
										const pc = midi != null ? pitchClass(midi) : -1;
										const isOpen = fret === 0;
										const chordFret = chord?.frets[stringIndex];
										const inChord = Boolean(chord) && chordFret === fret;
										const mutedString = Boolean(chord) && chordFret == null && isOpen;
										const inScale = mode === "scales" && midi != null && scaleSet.has(pc);
										const isRoot = inScale && pc === rootPc;
										const inAtlas = mode === "notes" && atlasPc != null && pc === atlasPc;
										const quizTarget = quiz && (quiz.kind === "identify" || quiz.kind === "play-along") && quiz.stringIndex === stringIndex && quiz.fret === fret;
										const findHit = quiz?.kind === "find" && quiz.found.includes(`${stringIndex}:${fret}`);
										const findTarget = quiz?.kind === "find" && pc === quiz.targetPc;
										const played = lastPlayed?.stringIndex === stringIndex && lastPlayed.fret === fret;
										const finger = inChord ? chord?.fingers[stringIndex] : null;
										const showDigit = !dead && (showNotes || inChord || mutedString || inScale || inAtlas || Boolean(quizTarget) || Boolean(findHit) || Boolean(played));
										const showDot = inChord || mutedString || Boolean(quizTarget) || Boolean(findHit) || Boolean(played) || inScale && isRoot || inAtlas;
										let digit = "";
										if (mutedString) digit = "X";
										else if (midi != null && showDegrees && (inScale || inChord)) digit = intervalFrom(rootPc, midi);
										else if (midi != null) digit = noteName(midi, accidental);
										let dotLabel = "";
										if (mutedString) dotLabel = "X";
										else if (inChord && isOpen && chordFret === 0) dotLabel = "O";
										else if (finger) dotLabel = String(finger);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: dead,
											"data-fret": fret,
											onClick: (e) => {
												if (e.detail === 0 && !dead) playFret(stringIndex, fret);
											},
											"aria-label": midi == null ? `Muted ${meta.name}` : `${noteName(midi, accidental)} string ${meta.number} fret ${fret}`,
											className: cn("relative z-10 fret-cell", isOpen && "border-r-2 border-r-nut bg-nut/12", INLAY_FRETS.has(fret) && stringIndex === 2 && "after:absolute after:top-2 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:rounded-full after:bg-bone/50", fret === 12 && stringIndex === 1 && "after:absolute after:top-0.5 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:rounded-full after:bg-bone/50", dead && "opacity-30", (inChord || quizTarget || inAtlas) && "bg-primary/10", findTarget && quiz?.kind === "find" && "bg-ember/10"),
											children: [
												fret > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 w-px bg-fretwire/80" }) : null,
												showDot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("finger-dot", (isRoot || quizTarget || played || findHit) && "is-root"),
													children: dotLabel
												}) : null,
												showDigit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("note-digit", (isRoot || quizTarget || findHit) && "is-root", played && "is-played", mutedString && "is-mute"),
													children: digit
												}) : null
											]
										}, fret);
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("string-wire", ringing && "is-ringing", holdPos != null && "is-fretted"),
										style: { ["--gauge"]: `${meta.gauge}px` }
									}),
									holdPos != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeldMarker, {
										stringIndex,
										pos: holdPos,
										leftHanded,
										label: (() => {
											const m = heldMidi(stringIndex, holdPos, tuningId, capo);
											return m == null ? "" : noteName(Math.round(m), accidental);
										})()
									}) : null
								]
							}, stringIndex);
						}),
						capo > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute top-7 bottom-2 z-20 rounded-sm bg-ember/80 shadow-[0_0_12px_rgb(232_93_58_/_0.55)]",
							style: {
								left: leftHanded ? "auto" : `calc(2.8rem + 2.1rem + ${(FRET_FRACTIONS.slice(0, capo - 1).reduce((a, b) => a + b, 0) * 100).toFixed(2)}%)`,
								right: leftHanded ? `calc(2.8rem + 2.1rem + ${(FRET_FRACTIONS.slice(0, capo - 1).reduce((a, b) => a + b, 0) * 100).toFixed(2)}%)` : "auto",
								width: `${((FRET_FRACTIONS[capo - 1] ?? .08) * 18).toFixed(2)}%`
							}
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "fret-legend mt-2 px-1 font-mono text-xs uppercase tracking-widest text-muted",
							children: ["Steeley Strings · nut left, body right", openMidiHint(tuning.midi.map((m) => noteName(m, accidental)))]
						})
					]
				})
			}),
			leftHanded ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuitarBody, {}),
			leftHanded ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StrumBar, {})
		]
	});
}
/** Glowing fingertip that sits at the continuous held position on its string. */
function HeldMarker({ stringIndex, pos, label, leftHanded }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const place = () => {
			const el = ref.current;
			const row = el?.parentElement;
			if (!el || !row) return;
			const x = fretToX(row, pos);
			if (x != null) el.style.left = `${x}px`;
		};
		place();
		window.addEventListener("resize", place);
		return () => window.removeEventListener("resize", place);
	}, [pos, leftHanded]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "held-marker",
		"data-held-string": stringIndex,
		"data-held-pos": pos.toFixed(3),
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "held-marker-dot",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "held-marker-pos",
			children: pos.toFixed(1)
		})]
	});
}
/** Guitar Hero style strum area: tap = down strum, swipe back and forth = alternate strums. */
function StrumBar() {
	const held = useStudio((s) => s.held);
	const strumNow = useStudio((s) => s.strumNow);
	const swipes = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const [flash, setFlash] = (0, import_react.useState)(null);
	const flashTimer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => () => {
		if (flashTimer.current != null) window.clearTimeout(flashTimer.current);
	}, []);
	const fire = (dir) => {
		strumNow(dir === "down");
		setFlash((f) => ({
			dir,
			n: (f?.n ?? 0) + 1
		}));
		if (flashTimer.current != null) window.clearTimeout(flashTimer.current);
		flashTimer.current = window.setTimeout(() => setFlash(null), 220);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("strum-bar", flash && `is-strum-${flash.dir}`),
		"data-strum-bar": true,
		role: "button",
		tabIndex: 0,
		"aria-label": "Strum bar: tap or swipe to strum the held shape",
		onKeyDown: (e) => {
			if (e.key === "Enter") {
				e.preventDefault();
				fire("down");
			}
		},
		onPointerDown: (e) => {
			unlockAudio();
			e.preventDefault();
			try {
				e.currentTarget.setPointerCapture(e.pointerId);
			} catch {}
			swipes.current.set(e.pointerId, {
				anchor: e.clientY,
				dir: "down"
			});
			fire("down");
		},
		onPointerMove: (e) => {
			const swipe = swipes.current.get(e.pointerId);
			if (!swipe) return;
			const dy = e.clientY - swipe.anchor;
			if (swipe.dir === "down") {
				if (dy > 0) swipe.anchor = e.clientY;
				else if (dy < -22) {
					swipe.dir = "up";
					swipe.anchor = e.clientY;
					fire("up");
				}
			} else if (dy < 0) swipe.anchor = e.clientY;
			else if (dy > 22) {
				swipe.dir = "down";
				swipe.anchor = e.clientY;
				fire("down");
			}
		},
		onPointerUp: (e) => swipes.current.delete(e.pointerId),
		onPointerCancel: (e) => swipes.current.delete(e.pointerId),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "strum-label",
				children: "Strum"
			}),
			DISPLAY_STRINGS.map((stringIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("strum-lane", held[stringIndex] != null && "is-held"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "strum-lane-wire" })
			}, stringIndex)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "strum-hint",
				children: flash?.dir === "up" ? "▲" : "▼"
			})
		]
	});
}
/** Centers of the fret cells in a string row, indexed by fret number. */
function fretCenters(row) {
	const centers = [];
	row.querySelectorAll("[data-fret]").forEach((cell) => {
		const fret = Number(cell.dataset.fret);
		const box = cell.getBoundingClientRect();
		centers[fret] = box.left + box.width / 2;
	});
	return centers;
}
/** Continuous fret number under clientX (center of cell N = N). Works for left-handed (rtl) too. */
function continuousFret(row, clientX) {
	const c = fretCenters(row);
	if (c.length < 2) return 0;
	for (let f = 0; f < c.length - 1; f++) {
		const a = c[f];
		const b = c[f + 1];
		if (clientX >= Math.min(a, b) && clientX <= Math.max(a, b)) return f + (clientX - a) / (b - a);
	}
	const first = c[0];
	const last = c[c.length - 1];
	return Math.abs(clientX - first) < Math.abs(clientX - last) ? 0 : c.length - 1;
}
/** X offset (px, relative to the row) of a continuous fret position. */
function fretToX(row, pos) {
	const c = fretCenters(row);
	if (c.length < 2) return null;
	const f = Math.min(c.length - 2, Math.max(0, Math.floor(pos)));
	const t = pos - f;
	return c[f] + t * (c[f + 1] - c[f]) - row.getBoundingClientRect().left;
}
function GuitarBody() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 220",
		className: "hidden h-auto w-24 shrink-0 self-center sm:block",
		"aria-label": "Steel-string guitar body",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "soundhole",
				cx: "50%",
				cy: "45%",
				r: "50%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#070a09"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "70%",
						stopColor: "#1a100c"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#c4a574"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "steelbody",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#6a3a22"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "45%",
						stopColor: "#3a2218"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#1a0e0a"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 8c18 0 28 10 32 22 6 18 8 28 8 48 0 22-6 36-16 48-8 10-10 22-8 40 2 16-6 28-24 34-10 4-16 4-24 0-18-6-26-18-24-34 2-18 0-30-8-40C-6 114-12 100-12 78c0-20 2-30 8-48C0 18 14 8 32 8h16z",
				transform: "translate(28 0)",
				fill: "url(#steelbody)",
				stroke: "#d4c4a8",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "92",
				r: "22",
				fill: "url(#soundhole)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "92",
				r: "14",
				fill: "none",
				stroke: "#e8d7b0",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "46",
				y: "148",
				width: "28",
				height: "8",
				rx: "2",
				fill: "#e6dcc8"
			}),
			Array.from({ length: 6 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: 40 + index * 8,
				cy: "152",
				r: "1.6",
				fill: "#1a100c"
			}, index)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 8v150",
				stroke: "#d7d3c8",
				strokeWidth: "1.2",
				opacity: "0.7"
			})
		]
	});
}
function openMidiHint(names) {
	return ` · open ${[...names].reverse().join(" ")}`;
}
var GROUPS = [
	"open",
	"seventh",
	"barre",
	"power"
];
function SidePanel() {
	const mode = useStudio((s) => s.mode);
	if (mode === "chords") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChordPanel, {});
	if (mode === "scales") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScalePanel, {});
	if (mode === "notes") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesPanel, {});
	if (mode === "train") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainPanel, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayPanel, {});
}
function PlayPanel() {
	const lastPlayed = useStudio((s) => s.lastPlayed);
	const accidental = useStudio((s) => s.accidental);
	const strumOpen = useStudio((s) => s.strumOpen);
	const strumHeld = useStudio((s) => s.strumHeld);
	const showNotes = useStudio((s) => s.showNotes);
	const toggleShowNotes = useStudio((s) => s.toggleShowNotes);
	const holding = useStudio((s) => anyHeld(s.held));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Free play",
				kicker: "Tap a fret to hear it. Hold it, slide it, strum the bar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeldReadout, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-border bg-surface/80 p-4",
				children: lastPlayed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-5xl tracking-tight text-primary",
					children: [noteName(lastPlayed.midi, accidental), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1 text-2xl text-bone",
						children: noteLabel(lastPlayed.midi, accidental).replace(noteName(lastPlayed.midi, accidental), "")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-mono text-sm text-muted tabular-nums",
					children: [
						"String ",
						6 - lastPlayed.stringIndex,
						" · fret",
						" ",
						lastPlayed.pos != null && Math.abs(lastPlayed.pos - lastPlayed.fret) > .04 ? lastPlayed.pos.toFixed(2) : lastPlayed.fret,
						" ",
						"· ",
						midiToFreq(lastPlayed.exact ?? lastPlayed.midi).toFixed(1),
						" Hz"
					]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Strike a string to pin a note here."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => holding ? strumHeld(true) : strumOpen(),
						children: holding ? "Strum held shape" : "Strum open strings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => strumHeld(false),
						children: "Strum up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: toggleShowNotes,
						children: showNotes ? "Hide note names" : "Show note names"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Press and hold frets to fret strings — several fingers make a chord. Drag a held finger along its string to slide the pitch. Strum with the bar beside the neck, the buttons, or Space. Keys 1–6 pick single strings (1 is high E) at the held position."
			})
		]
	});
}
function ChordPanel() {
	const selectedChordId = useStudio((s) => s.selectedChordId);
	const setChord = useStudio((s) => s.setChord);
	const strumChord = useStudio((s) => s.strumChord);
	const chord = CHORDS.find((c) => c.id === selectedChordId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: chord ? chord.name : "Chords",
				kicker: chord ? `${chord.quality} · ${chord.group}` : "Pick a shape"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeldReadout, { idle: "No fingers down — Strum plays the selected shape." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => strumChord(true),
					children: "Strum down"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => strumChord(false),
					children: "Strum up"
				})]
			}),
			GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted",
				children: group
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: CHORDS.filter((c) => c.group === group).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: c.id === selectedChordId ? "primary" : "ghost",
					onClick: () => setChord(c.id),
					children: c.name
				}, c.id))
			})] }, group)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Numbers on the board are fingers: 1 index, 2 middle, 3 ring, 4 pinky. O is open. X is mute. Hold the dots (multi-touch), then strum — with no fingers down, Strum plays the selected shape."
			})
		]
	});
}
function ScalePanel() {
	const selectedScaleId = useStudio((s) => s.selectedScaleId);
	const selectedKey = useStudio((s) => s.selectedKey);
	const setScale = useStudio((s) => s.setScale);
	const setKey = useStudio((s) => s.setKey);
	const showDegrees = useStudio((s) => s.showDegrees);
	const toggleShowDegrees = useStudio((s) => s.toggleShowDegrees);
	const scale = SCALES.find((s) => s.id === selectedScaleId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: scale?.name ?? "Scales",
				kicker: scale?.hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted",
				children: "Key"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: ALL_KEYS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: k === selectedKey ? "primary" : "ghost",
					onClick: () => setKey(k),
					className: "min-w-10 px-2",
					children: k
				}, k))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: SCALES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: s.id === selectedScaleId ? "primary" : "ghost",
					onClick: () => setScale(s.id),
					children: s.name
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: toggleShowDegrees,
				children: showDegrees ? "Show note names" : "Show scale degrees"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Glowing orbs are in the scale. Ember marks the root. Walk the dots slowly — that is the map of the key."
			})
		]
	});
}
function NotesPanel() {
	const accidental = useStudio((s) => s.accidental);
	const setAccidental = useStudio((s) => s.setAccidental);
	const atlasPc = useStudio((s) => s.atlasPc);
	const setAtlasPc = useStudio((s) => s.setAtlasPc);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Twelve notes",
				kicker: "The whole language. Click a letter."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: accidental === "sharp" ? "primary" : "ghost",
					onClick: () => setAccidental("sharp"),
					children: "Sharps"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: accidental === "flat" ? "primary" : "ghost",
					onClick: () => setAccidental("flat"),
					children: "Flats"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-6 gap-2 sm:grid-cols-12",
				children: (accidental === "flat" ? FLAT_NAMES : SHARP_NAMES).map((n, pc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setAtlasPc(pc);
						pluck(60 + pc, 3, .7);
					},
					className: cn("flex h-12 items-center justify-center rounded-md border text-sm font-semibold transition-[background-color,border-color,transform] duration-150 active:scale-[0.96]", atlasPc === pc ? "border-primary bg-primary text-primary-fg" : "border-border bg-surface-2/80 text-fg hover:border-primary/50"),
					children: n
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "A through G, plus the sharps and flats between most of them. There is no sharp between E and F, or between B and C. Select a letter to light every matching place on the neck."
			})
		]
	});
}
function TrainPanel() {
	const quiz = useStudio((s) => s.quiz);
	const completed = useStudio((s) => s.completedLessons);
	const startLesson = useStudio((s) => s.startLesson);
	const answerQuiz = useStudio((s) => s.answerQuiz);
	const nextRound = useStudio((s) => s.nextRound);
	const strumChord = useStudio((s) => s.strumChord);
	if (!quiz) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			title: "Train",
			kicker: "Short drills. Real notes."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: LESSONS.map((lesson) => {
				const done = completed.includes(lesson.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => startLesson(lesson.id),
					className: "flex w-full items-start gap-3 rounded-lg border border-border bg-surface/80 p-3 text-left transition-[border-color,background-color] duration-150 hover:border-primary/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border", done ? "border-primary bg-primary text-primary-fg" : "border-border text-muted"),
							children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : null
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: lesson.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm text-muted",
								children: lesson.blurb
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "mt-1 size-4 text-muted" })
					]
				}) }, lesson.id);
			})
		})]
	});
	const lesson = LESSONS.find((l) => l.id === quiz.lessonId);
	const finished = quiz.round >= quiz.total && quiz.feedback !== "idle";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: lesson?.title ?? "Drill",
				kicker: `Round ${Math.min(quiz.round, quiz.total)} / ${quiz.total} · ${quiz.score} correct`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-fg",
				children: quiz.prompt
			}),
			lesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: lesson.detail
			}) : null,
			quiz.kind === "identify" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: quiz.choices.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: quiz.feedback !== "idle" && c === quiz.correct ? "primary" : quiz.feedback === "bad" && c !== quiz.correct ? "ghost" : "ghost",
					onClick: () => answerQuiz(c),
					disabled: quiz.feedback !== "idle",
					children: c
				}, c))
			}) : null,
			quiz.kind === "chord" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeldReadout, { idle: "Hold the glowing dots on the neck, then strum." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => strumChord(true),
				children: ["Strum ", quiz.correct]
			})] }) : null,
			quiz.kind === "find" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-sm text-bone tabular-nums",
				children: [
					"Found ",
					quiz.found.length,
					" / ",
					quiz.needed
				]
			}) : null,
			quiz.feedback === "good" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-primary",
				children: [
					"Right. That is ",
					quiz.correct,
					"."
				]
			}) : null,
			quiz.feedback === "bad" && quiz.kind === "identify" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-ember",
				children: [
					"That one is ",
					quiz.correct,
					"."
				]
			}) : null,
			quiz.feedback === "bad" && quiz.kind === "chord" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-ember",
				children: [
					"That shape is not ",
					quiz.correct,
					". Hold the glowing dots, then strum."
				]
			}) : null,
			quiz.feedback === "bad" && quiz.kind !== "identify" && quiz.kind !== "chord" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-ember",
				children: "Not that string. Try the highlighted target."
			}) : null,
			quiz.feedback !== "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: nextRound,
				children: finished || quiz.round >= quiz.total ? "Finish drill" : "Next"
			}) : null
		]
	});
}
/** Live view of the fretting hand: which strings are held, where, and the chord it makes. */
function HeldReadout({ idle = "No fingers down — strums ring open." }) {
	const held = useStudio((s) => s.held);
	const holding = anyHeld(held);
	const shape = matchHeldChord(held);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border border-border bg-surface/80 px-3 py-2 font-mono text-xs text-muted tabular-nums",
		"data-held-readout": true,
		children: holding ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			"Holding",
			" ",
			held.map((h, stringIndex) => h == null ? null : `str ${6 - stringIndex} @ fret ${h.toFixed(2)}`).filter(Boolean).join(" · "),
			shape ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ml-2 text-primary",
				children: ["= ", shape.name]
			}) : null
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: idle })
	});
}
function Header({ title, kicker }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-3xl tracking-tight text-fg",
		children: title
	}), kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm text-muted",
		children: kicker
	}) : null] });
}
function StartGate() {
	const start = useStudio((s) => s.start);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative flex min-h-dvh flex-col overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "start-copy relative z-10 flex flex-1 flex-col justify-end px-5 pb-8 pt-8 sm:justify-center sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter-1 font-mono text-xs uppercase tracking-widest text-primary",
					children: "Guitar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "enter-1 mt-3 font-display text-5xl uppercase leading-[0.9] tracking-tight text-fg sm:text-7xl",
					children: ["Steeley", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-bone",
						children: "Strings"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter-2 mt-4 max-w-md text-base leading-relaxed text-muted",
					children: "Lay the phone on its side. Tap the neck, hear steel, read the note under each string."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "enter-2 mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						onPointerDown: () => {
							unlockAudio();
							lockLandscape();
						},
						onClick: () => {
							unlockAudio();
							lockLandscape();
							start();
						},
						children: "Pick a string"
					})
				})
			]
		})
	});
}
var MODES = [
	{
		id: "play",
		label: "Play"
	},
	{
		id: "notes",
		label: "Notes"
	},
	{
		id: "chords",
		label: "Chords"
	},
	{
		id: "scales",
		label: "Scales"
	},
	{
		id: "train",
		label: "Train"
	}
];
function Studio({ onExit }) {
	const started = useStudio((s) => s.started);
	(0, import_react.useEffect)(() => bindVisibilityResume(), []);
	(0, import_react.useEffect)(() => {
		hydrateStudio();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!started) return;
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
			const state = useStudio.getState();
			if (e.code === "Space") {
				e.preventDefault();
				if (e.repeat) return;
				unlockAudio();
				state.strumNow(true);
				return;
			}
			const stringIndex = {
				Digit1: 5,
				Digit2: 4,
				Digit3: 3,
				Digit4: 2,
				Digit5: 1,
				Digit6: 0
			}[e.code];
			if (stringIndex != null) {
				e.preventDefault();
				unlockAudio();
				state.pickString(stringIndex);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [started]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "guise-guitar relative min-h-dvh text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneLayers, { started }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateHint, {}),
			started ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioMain, { onExit }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartGate, {})
		]
	});
}
function StudioMain({ onExit }) {
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
	const [railOpen, setRailOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMetronome(metronomeOn, bpm);
		return () => setMetronome(false, bpm);
	}, [metronomeOn, bpm]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("studio-shell", railOpen && "rail-open"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "studio-top flex flex-nowrap items-center gap-2 rounded-xl border border-border bg-surface/75 px-3 py-1.5 backdrop-blur-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 pr-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg uppercase leading-none tracking-wide",
							children: "Steeley Strings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "studio-kicker font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted",
							children: "Steel-string studio"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex min-w-0 flex-1 flex-nowrap gap-1 overflow-x-auto",
						"aria-label": "Studio modes",
						children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: mode === m.id ? "primary" : "ghost",
							onClick: () => setMode(m.id),
							children: m.label
						}, m.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: onExit,
								children: "Games"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: railOpen ? "primary" : "ghost",
								className: "rail-toggle",
								onClick: () => setRailOpen((open) => !open),
								children: railOpen ? "Neck" : "Lessons"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								"aria-label": muted ? "Unmute" : "Mute",
								onClick: () => {
									unlockAudio();
									toggleMute();
								},
								children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted",
								children: ["Vol", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 0,
									max: 1,
									step: .01,
									value: volume,
									onChange: (e) => setVolume(Number(e.target.value)),
									className: "h-1 w-20 accent-primary"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "studio-neck",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fretboard, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "studio-rail",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-xl border border-border bg-surface/75 p-3 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidePanel, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-xl border border-border bg-surface/75 p-3 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted",
						children: "Setup"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-muted",
									children: "Tuning"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: tuningId,
									onChange: (e) => setTuning(e.target.value),
									className: "h-11 w-full rounded-md border border-border bg-surface-2 px-3 text-fg",
									children: TUNINGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t.id,
										children: t.name
									}, t.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mb-1 block text-muted",
									children: ["Capo · fret ", capo || "off"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 0,
									max: 7,
									step: 1,
									value: capo,
									onChange: (e) => setCapo(Number(e.target.value)),
									className: "h-1 w-full accent-ember"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center justify-between gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Left-handed neck" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: leftHanded,
									onChange: toggleLeftHanded,
									className: "size-4 accent-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center justify-between gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Metronome" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: metronomeOn,
									onChange: (e) => {
										unlockAudio();
										setMetronomeOn(e.target.checked);
									},
									className: "size-4 accent-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mb-1 block text-muted",
									children: [
										"Tempo ",
										bpm,
										" BPM"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 50,
									max: 160,
									step: 1,
									value: bpm,
									onChange: (e) => setBpm(Number(e.target.value)),
									className: "h-1 w-full accent-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								variant: "outline",
								onClick: () => {
									unlockAudio();
									strumChord(true);
								},
								children: "Strum current chord"
							})
						]
					})]
				})]
			})
		]
	});
}
function Home() {
	const [game, setGame] = (0, import_react.useState)("slayer");
	if (game === "steeley") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, { onExit: () => setGame(null) });
	if (game === "slayer") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slayer, { onExit: () => setGame(null) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arcade, { onPick: setGame });
}
//#endregion
export { Home as component };
