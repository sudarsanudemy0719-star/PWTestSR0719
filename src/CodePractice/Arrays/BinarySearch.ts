export {};

const numbers = [1, 3, 5, 7, 9];
const target = 7;

function withFor(values: number[], wanted: number): number {
  for (let left = 0, right = values.length - 1; left <= right;) {
    const middle = Math.floor((left + right) / 2);
    if (values[middle] === wanted) return middle;
    values[middle] < wanted ? (left = middle + 1) : (right = middle - 1);
  }
  return -1;
}

function withForOf(values: number[], wanted: number): number {
  let left = 0,
    right = values.length - 1;
  for (const _ of values) {
    if (left > right) break;
    const middle = Math.floor((left + right) / 2);
    if (values[middle] === wanted) return middle;
    values[middle] < wanted ? (left = middle + 1) : (right = middle - 1);
  }
  return -1;
}

function withoutLoop(values: number[], wanted: number): number {
  return values.includes(wanted) ? values.indexOf(wanted) : -1;
}

console.log(
  withFor(numbers, target),
  withForOf(numbers, target),
  withoutLoop(numbers, target),
);
