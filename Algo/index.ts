import type { FizzbuzzOutput } from "./constants";

export function isMultipleOf3(num: number): boolean {
  return !(num % 3);
}

export function isMultipleOf5(num: number): boolean {
  return !(num % 5);
}

export function fizzbuzz(num: number): number | FizzbuzzOutput {
  return num;
}
