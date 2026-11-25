import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync(
  "/output/entry.txt",
  "Someone hit reply-all to say stop hitting reply-all, and now 400 people agree, one email at a time.\n",
  "utf8"
);
