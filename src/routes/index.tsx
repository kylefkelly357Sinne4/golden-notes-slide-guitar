import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Arcade } from "@/components/arcade";
import { Slayer } from "@/components/slayer/shell";
import { Studio } from "@/components/studio/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [game, setGame] = useState<"steeley" | "slayer" | null>("slayer");
  if (game === "steeley") return <Studio onExit={() => setGame(null)} />;
  if (game === "slayer") return <Slayer onExit={() => setGame(null)} />;
  return <Arcade onPick={setGame} />;
}
