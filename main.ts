// Why this joke: every trader I know has a stop-loss horror story.
// You place it to feel responsible, price wicks down for a heartbeat,
// dumps you out at the very bottom, then rockets away without you.
// The sting is not even the loss — it is watching strangers celebrate
// the entry you just handed them. That mix of discipline punished and
// instant regret felt like the most honest, repeatable laugh in
// trading life, so I built the whole line around that one cruel wick
// and saved the group-chat twist for the very end.

import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I set a stop-loss to save my bag. It sold the exact bottom, the chart bounced instantly, and the group chat called it a perfect entry — for whoever bought my coins.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
