export {};

const numbers = [1, 2, 3, 4, 5];
const steps = 2;

function withFor(values: number[], count: number): number[] {
  const result = [...values];
  for (let step = 0; step < count % values.length; step++)
    result.unshift(result.pop()!);
  return result;
}

function withForOf(values: number[], count: number): number[] {
  const result: number[] = [];
  for (const value of values) result.push(value);
  for (let step = 0; step < count % result.length; step++)
    result.unshift(result.pop()!);
  return result;
}

function withoutLoop(values: number[], count: number): number[] {
  const offset = ((count % values.length) + values.length) % values.length;
  return values.slice(-offset).concat(values.slice(0, -offset));
}

console.log(
  withFor(numbers, steps),
  withForOf(numbers, steps),
  withoutLoop(numbers, steps),
);
