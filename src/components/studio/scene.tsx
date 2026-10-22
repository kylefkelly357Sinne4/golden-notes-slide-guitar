import { cn } from "@/lib/utils";

type Piece = { src: string; tilt: string; crop: string };

const GUITAR: Piece[] = [
  { src: "/art/bg-jungle.jpg", tilt: "-5deg", crop: "object-top" },
  { src: "/art/fg-duel.jpg", tilt: "4deg", crop: "object-center" },
  { src: "/art/bg-orbs.jpg", tilt: "-3deg", crop: "crop-orbs" },
  { src: "/art/fg-photo.jpg", tilt: "6deg", crop: "object-top" },
  { src: "/art/bg-guitar.jpg", tilt: "-4deg", crop: "object-center" },
  { src: "/art/bg-ember.jpg", tilt: "5deg", crop: "crop-orbs" },
];

/** Cabin visor, yearbook, roses, close-up, pixel board, dock. Silent Slayer only. */
export const SLAYER_ART: Piece[] = [
  { src: "/art/slayer-visor.png", tilt: "-4deg", crop: "object-center" },
  { src: "/art/slayer-yearbook.jpg", tilt: "3deg", crop: "object-top" },
  { src: "/art/slayer-roses.jpg", tilt: "-2deg", crop: "object-center" },
  { src: "/art/slayer-close.jpg", tilt: "5deg", crop: "object-center" },
  { src: "/art/slayer-pixel.jpg", tilt: "-3deg", crop: "object-center" },
  { src: "/art/slayer-dock.jpg", tilt: "4deg", crop: "object-center" },
];

export function SceneLayers({
  started,
  pieces = GUITAR,
}: {
  started: boolean;
  pieces?: Piece[];
}) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg" aria-hidden>
      <div className="collage-wall">
        {pieces.map((piece) => (
          <figure
            key={piece.src}
            className="collage-piece"
            style={{ ["--tilt" as string]: piece.tilt }}
          >
            <img src={piece.src} alt="" className={piece.crop} />
          </figure>
        ))}
      </div>
      <div className={cn("absolute inset-0", started ? "scene-scrim" : "scene-scrim-soft")} />
    </div>
  );
}

export function RotateHint() {
  return (
    <p className="rotate-hint" role="status">
      Turn the phone on its side — the neck sits left to right.
    </p>
  );
}
