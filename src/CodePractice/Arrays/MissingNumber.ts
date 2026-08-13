export {};

const numbers = [1, 2, 4, 5];
const limit = 5;

function withFor(values: number[], max: number): number {
  let expected = (max * (max + 1)) / 2;
  for (let index = 0; index < values.length; index++) expected -= values[index];
  return expected;
}

function withForOf(values: number[], max: number): number {
  let expected = (max * (max + 1)) / 2;
  for (const value of values) expected -= value;
  return expected;
}

function withoutLoop(values: number[], max: number): number {
  return (max * (max + 1)) / 2 - values.reduce((sum, value) => sum + value, 0);
}

console.log(
  withFor(numbers, limit),
  withForOf(numbers, limit),
  withoutLoop(numbers, limit),
);
