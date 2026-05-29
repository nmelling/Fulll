import { BUZZ, FIZZ, FIZZBUZZ, type FizzbuzzOutput } from "./constants";

export function isMultipleOf3(num: number): boolean {
  return !(num % 3);
}

export function isMultipleOf5(num: number): boolean {
  return !(num % 5);
}

export function fizzbuzz(num: number): number | FizzbuzzOutput {
  if (num < 1) throw new Error("ONLY_POSITIVE_NUMBER_ARE_ALLOWED");
  if (!Number.isSafeInteger(num)) throw new Error("ONLY_INTEGER_NUMBER_ARE_ALLOWED");

  if (isMultipleOf3(num) && isMultipleOf5(num)) return FIZZBUZZ;
  if (isMultipleOf3(num)) return FIZZ;
  if (isMultipleOf5(num)) return BUZZ;
  return num;
}
