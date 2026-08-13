export {};

const numbers = [12, 5, 19, 7];

function withFor(values: number[]): number {
  let maximum = values[0];
  for (let index = 1; index < values.length; index++)
    if (values[index] > maximum) maximum = values[index];
  return maximum;
}

function withForOf(values: number[]): number {
  let maximum = values[0];
  for (const value of values) if (value > maximum) maximum = value;
  return maximum;
}

function withoutLoop(values: number[]): number {
  return Math.max(...values);
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
