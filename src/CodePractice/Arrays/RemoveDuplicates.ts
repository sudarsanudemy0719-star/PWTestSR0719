export {};

const numbers = [1, 2, 2, 3, 1];

function withFor(values: number[]): number[] {
  const result: number[] = [];
  for (let index = 0; index < values.length; index++) {
    if (!result.includes(values[index])) result.push(values[index]);
  }
  return result;
}

function withForOf(values: number[]): number[] {
  const result: number[] = [];
  for (const value of values) {
    if (!result.includes(value)) result.push(value);
  }
  return result;
}

function withoutLoop(values: number[]): number[] {
  return [...new Set(values)];
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
