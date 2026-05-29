import { BUZZ, FIZZ, FIZZBUZZ, type Fizzbuzz } from "./constants";

export function isMultipleOf3(num: number): boolean {
  return !(num % 3);
}

export function isMultipleOf5(num: number): boolean {
  return !(num % 5);
}

type FizzbuzzOutput = number | Fizzbuzz;

export function fizzbuzz(num: number): FizzbuzzOutput {
  if (num < 1) throw new Error("ONLY_POSITIVE_NUMBER_ARE_ALLOWED");
  if (!Number.isSafeInteger(num)) throw new Error("ONLY_INTEGER_NUMBER_ARE_ALLOWED");

  if (isMultipleOf3(num) && isMultipleOf5(num)) return FIZZBUZZ;
  if (isMultipleOf3(num)) return FIZZ;
  if (isMultipleOf5(num)) return BUZZ;
  return num;
}

export function fizzbuzzLooper(max: number): FizzbuzzOutput[] {
  if (max < 1 || !Number.isSafeInteger(max)) return [];
  return new Array(max).fill(null).map((_, index) => fizzbuzz(index + 1));
}

function main() {
  const max = Number(Bun.argv[2]);
  if (Number.isNaN(max)) throw new Error("Please provide a limit as argument");
  if (!Number.isSafeInteger(max) || max < 1) throw new Error("Please provide positive integer");

  const res = fizzbuzzLooper(max);
  return res;
}

// biome-ignore lint/suspicious/noConsole: For console user output
console.log(main());
