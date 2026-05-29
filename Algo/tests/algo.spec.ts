import { describe, expect, test } from "bun:test";
import { BUZZ, FIZZ, FIZZBUZZ } from "../constants";
import { fizzbuzz, fizzbuzzLooper, isMultipleOf3, isMultipleOf5 } from "../domain";

const NUM_FIZZBUZZ = 15;
const NUM_FIZZ = 3;
const NUM_BUZZ = 5;
const NOT_MULTIPLE_NUM = 2;
const NEGATIVE_NUM = -1;
const FLOAT_NUM = 3.14;
const ZERO = 0;

describe("isMultipleOf3 behaviour", () => {
  test("Returns true if provided number is multiple of 3", () => {
    expect(isMultipleOf3(NUM_FIZZ)).toBe(true);
    expect(isMultipleOf3(NUM_FIZZBUZZ)).toBe(true);
    expect(isMultipleOf3(ZERO)).toBe(true);
    expect(isMultipleOf3(NUM_FIZZBUZZ * -1)).toBe(true);
  });
  test("Returns false if provided number is not a multiple of 3", () => {
    expect(isMultipleOf3(NUM_BUZZ)).toBe(false);
    expect(isMultipleOf3(NOT_MULTIPLE_NUM)).toBe(false);
    expect(isMultipleOf3(FLOAT_NUM)).toBe(false);
  });
});
describe("isMultipleOf5 behaviour", () => {
  test("Returns true if provided number is multiple of 3", () => {
    expect(isMultipleOf5(NUM_BUZZ)).toBe(true);
    expect(isMultipleOf5(NUM_FIZZBUZZ)).toBe(true);
    expect(isMultipleOf5(ZERO)).toBe(true);
    expect(isMultipleOf5(NUM_FIZZBUZZ * -1)).toBe(true);
  });
  test("Returns false if provided number is not a multiple of 3", () => {
    expect(isMultipleOf5(NUM_FIZZ)).toBe(false);
    expect(isMultipleOf5(NOT_MULTIPLE_NUM)).toBe(false);
    expect(isMultipleOf5(FLOAT_NUM)).toBe(false);
  });
});

describe("FizzBuzz", () => {
  describe("FizzBuzz basic behaviour", () => {
    test("If number can be divided by 3 AND 5: display FizzBuzz", () => {
      const res = fizzbuzz(NUM_FIZZBUZZ);
      expect(res).toBe(FIZZBUZZ);
    });
    test("If number can be divided by 3 AND NOT by 5: display Fizz", () => {
      const res = fizzbuzz(NUM_FIZZ);
      expect(res).toBe(FIZZ);
    });
    test("If number can be divided by 5 AND NOT by 3: display Buzz", () => {
      const res = fizzbuzz(NUM_BUZZ);
      expect(res).toBe(BUZZ);
    });
    test("Else: display the number", () => {
      const res = fizzbuzz(NOT_MULTIPLE_NUM);
      expect(res).toBe(NOT_MULTIPLE_NUM);
    });
  });

  describe("FizzBuzz incorrect entry", () => {
    test("Any number below 1 not allowed", () => {
      expect(() => fizzbuzz(ZERO)).toThrow();
      expect(() => fizzbuzz(NEGATIVE_NUM)).toThrow();
    });
    test("Float number not allowed", () => {
      expect(() => fizzbuzz(FLOAT_NUM)).toThrow();
    });
  });
});

describe("FizzbuzzLooper behaviour", () => {
  describe("FizzbuzzLooper correct entry", () => {
    test("Check behaviour until 15", () => {
      const res = fizzbuzzLooper(15);
      expect(res).toEqual([1, 2, FIZZ, 4, BUZZ, FIZZ, 7, 8, FIZZ, BUZZ, 11, FIZZ, 13, 14, FIZZBUZZ]);
    });
  });

  describe("FizzBuzz incorrect entry", () => {
    test("Any number below 1 or float number should returns an empty array", () => {
      expect(fizzbuzzLooper(ZERO)).toEqual([]);
      expect(fizzbuzzLooper(NEGATIVE_NUM)).toEqual([]);
      expect(fizzbuzzLooper(FLOAT_NUM)).toEqual([]);
    });
  });
});
