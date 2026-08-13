export {};

const numbers = [3, 2, 1, 5, 6, 4];
const k = 2;

function withFor(values: number[], position: number): number | undefined {
  const sorted = [...values];
  for (let index = 0; index < sorted.length; index++)
    for (let scan = 0; scan < sorted.length - index - 1; scan++)
      if (sorted[scan] < sorted[scan + 1])
        [sorted[scan], sorted[scan + 1]] = [sorted[scan + 1], sorted[scan]];
  return sorted[position - 1];
}

function withForOf(values: number[], position: number): number | undefined {
  const sorted: number[] = [];
  for (const value of values) {
    const index = sorted.findIndex((item) => item < value);
    index < 0 ? sorted.push(value) : sorted.splice(index, 0, value);
  }
  return sorted[position - 1];
}

function withoutLoop(values: number[], position: number): number | undefined {
  return [...values].sort((a, b) => b - a)[position - 1];
}

console.log(
  withFor(numbers, k),
  withForOf(numbers, k),
  withoutLoop(numbers, k),
);
