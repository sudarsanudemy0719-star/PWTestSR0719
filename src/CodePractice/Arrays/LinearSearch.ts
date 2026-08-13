export {};

const numbers = [4, 8, 2, 9, 6];
const target = 9;

function withFor(values: number[], wanted: number): number {
  for (let index = 0; index < values.length; index++)
    if (values[index] === wanted) return index;
  return -1;
}

function withForOf(values: number[], wanted: number): number {
  let index = 0;
  for (const value of values) {
    if (value === wanted) return index;
    index++;
  }
  return -1;
}

function withoutLoop(values: number[], wanted: number): number {
  return values.indexOf(wanted);
}

console.log(
  withFor(numbers, target),
  withForOf(numbers, target),
  withoutLoop(numbers, target),
);
