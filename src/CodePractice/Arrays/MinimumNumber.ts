export {};

const numbers = [12, 5, 19, 7];

function withFor(values: number[]): number {
  let minimum = values[0];
  for (let index = 1; index < values.length; index++)
    if (values[index] < minimum) minimum = values[index];
  return minimum;
}

function withForOf(values: number[]): number {
  let minimum = values[0];
  for (const value of values) if (value < minimum) minimum = value;
  return minimum;
}

function withoutLoop(values: number[]): number {
  return Math.min(...values);
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
