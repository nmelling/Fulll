import { fizzbuzzLooper } from "./domain";

function main() {
  const max = Number(Bun.argv[2]);
  if (Number.isNaN(max)) throw new Error("Please provide a limit as argument");
  if (!Number.isSafeInteger(max) || max < 1) throw new Error("Please provide positive integer");

  const res = fizzbuzzLooper(max);
  return res;
}

// biome-ignore lint/suspicious/noConsole: For console user output
console.log(main());
