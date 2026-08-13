export {};

const first = [1, 3, 5];
const second = [2, 4, 6];

function withFor(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;
  for (; i < left.length || j < right.length;)
    result.push(
      j === right.length || (i < left.length && left[i] <= right[j])
        ? left[i++]
        : right[j++],
    );
  return result;
}

function withForOf(left: number[], right: number[]): number[] {
  const result = [...left];
  for (const value of right) {
    let index = 0;
    while (index < result.length && result[index] <= value) index++;
    result.splice(index, 0, value);
  }
  return result;
}

function withoutLoop(left: number[], right: number[]): number[] {
  return [...left, ...right].sort((a, b) => a - b);
}

console.log(
  withFor(first, second),
  withForOf(first, second),
  withoutLoop(first, second),
);
