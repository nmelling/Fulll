import { describe, expect, test } from "bun:test";
import { fizzbuzz } from "..";
import { BUZZ, FIZZ, FIZZBUZZ } from "../constants";

describe("FizzBuzz basic behaviour", () => {
  test("If number can be divided by 3 AND 5: display FizzBuzz", () => {
    const res = fizzbuzz(15);
    expect(res).toBe(FIZZBUZZ);
  });
  test("If number can be divided by 3 AND NOT by 5: display Fizz", () => {
    const res = fizzbuzz(3);
    expect(res).toBe(FIZZ);
  });
  test("If number can be divided by 5 AND NOT by 3: display Buzz", () => {
    const res = fizzbuzz(5);
    expect(res).toBe(BUZZ);
  });
  test("Else: display the number", () => {
    const NUM = 2;
    const res = fizzbuzz(NUM);
    expect(res).toBe(NUM);
  });
});

describe("FizzBuzz incorrect entry", () => {
  test("Any number below 1 not allowed", () => {
    expect(() => fizzbuzz(0)).toThrow();
    expect(() => fizzbuzz(-1)).toThrow();
  });
  test("Float number not allowed", () => {
    expect(() => fizzbuzz(3.14)).toThrow();
  });
});
