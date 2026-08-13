export {};

const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function withFor(left: number[], right: number[]): number[] {
  const result: number[] = [];
  for (let index = 0; index < left.length; index++)
    if (right.includes(left[index]) && !result.includes(left[index]))
      result.push(left[index]);
  return result;
}

function withForOf(left: number[], right: number[]): number[] {
  const result: number[] = [];
  for (const value of left)
    if (right.includes(value) && !result.includes(value)) result.push(value);
  return result;
}

function withoutLoop(left: number[], right: number[]): number[] {
  return [...new Set(left)].filter((value) => right.includes(value));
}

console.log(
  withFor(first, second),
  withForOf(first, second),
  withoutLoop(first, second),
);
