import MathAll from "./dist/index.js";

// Positive number test cases

test("round to the fifth decimal place", () => {
  expect(MathAll.round(14321.12345, -5)).toEqual(14321.12345);
});

test("round to the fourth decimal place", () => {
  expect(MathAll.round(14321.12345, -4)).toEqual(14321.1235);
});

test("round to the third decimal place", () => {
  expect(MathAll.round(14321.12345, -3)).toEqual(14321.123);
});

test("round to the second decimal place", () => {
  expect(MathAll.round(14321.12344, -2)).toEqual(14321.12);
});

test("round to the first decimal place", () => {
  expect(MathAll.round(14321.12345, -1)).toEqual(14321.1);
});

test("round to the nearest integer", () => {
  expect(MathAll.round(14321, 0)).toEqual(14321);
});

test("round to the nearest ten", () => {
  expect(MathAll.round(14321, 1)).toEqual(14320);
});

test("round to the nearest hundred", () => {
  expect(MathAll.round(14321, 2)).toEqual(14300);
});

test("round to the nearest thousand", () => {
  expect(MathAll.round(14321, 3)).toEqual(14000);
});

test("round 3.5 to the nearest integer", () => {
  expect(MathAll.round(3.5, 0)).toEqual(4);
});

test("round 3.6 to the nearest integer", () => {
  expect(MathAll.round(3.6, 0)).toEqual(4);
});

// Negative number test cases

test("round negative number to the fifth decimal place", () => {
  expect(MathAll.round(-14321.12345, -5)).toEqual(-14321.12345);
});

test("round negative number to the fourth decimal place", () => {
  expect(MathAll.round(-14321.12345, -4)).toEqual(-14321.1235);
});

test("round negative number to the third decimal place", () => {
  expect(MathAll.round(-14321.12345, -3)).toEqual(-14321.123);
});

test("round negative number to the second decimal place", () => {
  expect(MathAll.round(-14321.12344, -2)).toEqual(-14321.12);
});

test("round negative number to the first decimal place", () => {
  expect(MathAll.round(-14321.12345, -1)).toEqual(-14321.1);
});

test("round negative number to the nearest integer", () => {
  expect(MathAll.round(-14321, 0)).toEqual(-14321);
});

test("round negative number to the nearest ten", () => {
  expect(MathAll.round(-14321, 1)).toEqual(-14320);
});

test("round negative number to the nearest hundred", () => {
  expect(MathAll.round(-14321, 2)).toEqual(-14300);
});

test("round negative number to the nearest thousand", () => {
  expect(MathAll.round(-14321, 3)).toEqual(-14000);
});

test("round -2.5 to the nearest integer", () => {
  expect(MathAll.round(-2.5, 0)).toEqual(-3);
});

test("round -2.9 to the nearest integer", () => {
  expect(MathAll.round(-2.9, 0)).toEqual(-3);
});

test("round -3.6 to the nearest integer", () => {
  expect(MathAll.round(-3.6, 0)).toEqual(-4);
});
