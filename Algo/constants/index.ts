export const FIZZBUZZ = "FizzBuzz";
export const FIZZ = "Fizz";
export const BUZZ = "Buzz";

const values = [FIZZBUZZ, FIZZ, BUZZ] as const;
export type Fizzbuzz = (typeof values)[number];
