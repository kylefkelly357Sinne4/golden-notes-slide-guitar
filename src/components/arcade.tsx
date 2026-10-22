export function Arcade({ onPick }: { onPick: (game: "steeley" | "slayer") => void }) {
  return (
    <div className="grid min-h-dvh md:grid-cols-2">
      <button
        type="button"
        onClick={() => onPick("steeley")}
        className="guise-guitar relative flex min-h-[50dvh] flex-col justify-end overflow-hidden border-b-4 border-primary p-6 text-left md:min-h-dvh md:border-r-4 md:border-b-0"
      >
        <img
          src="/art/bg-guitar.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />
        <span className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Guitar</span>
          <span className="mt-2 block font-display text-5xl uppercase leading-[0.9] text-fg">
            Steeley
            <span className="block">Strings</span>
          </span>
        </span>
      </button>
      <button
        type="button"
        onClick={() => onPick("slayer")}
        className="guise-violin relative flex min-h-[50dvh] flex-col justify-end overflow-hidden border-b-4 border-primary p-6 text-left md:min-h-dvh md:border-b-0"
      >
        <img
          src="/art/slayer-visor.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />
        <span className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Violin</span>
          <span className="mt-2 block font-display text-5xl uppercase leading-[0.9] text-fg">
            Golden
            <span className="block">Notes</span>
          </span>
        </span>
      </button>
    </div>
  );
}
