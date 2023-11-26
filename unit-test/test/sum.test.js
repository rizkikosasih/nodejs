import { sum } from "./../src/sum";

test("test sum js", () => {
  const result = sum(1, 2);
  expect(result).toBeGreaterThanOrEqual(3);
});

test("test sum js 2", () => {
  const result = sum(1, 2);
  expect(result).toBeGreaterThan(2);
});

test("test sum js 3", () => {
  const result = sum(1, 2);
  expect(result).toBeLessThan(4);
});
