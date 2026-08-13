export {};

const first = [1, 2, 3];
const second = [3, 4, 5];

function withFor(left: number[], right: number[]): number[] {
  const result: number[] = [];
  for (let index = 0; index < left.length; index++)
    if (!result.includes(left[index])) result.push(left[index]);
  for (let index = 0; index < right.length; index++)
    if (!result.includes(right[index])) result.push(right[index]);
  return result;
}

function withForOf(left: number[], right: number[]): number[] {
  const result: number[] = [];
  for (const value of [...left, ...right])
    if (!result.includes(value)) result.push(value);
  return result;
}

function withoutLoop(left: number[], right: number[]): number[] {
  return [...new Set([...left, ...right])];
}

console.log(
  withFor(first, second),
  withForOf(first, second),
  withoutLoop(first, second),
);
