export {};

const numbers = [2, 7, 11, 15];
const target = 9;

function withFor(values: number[], wanted: number): number[] {
  for (let i = 0; i < values.length; i++)
    for (let j = i + 1; j < values.length; j++)
      if (values[i] + values[j] === wanted) return [values[i], values[j]];
  return [];
}

function withForOf(values: number[], wanted: number): number[] {
  const seen = new Set<number>();
  for (const value of values) {
    if (seen.has(wanted - value)) return [wanted - value, value];
    seen.add(value);
  }
  return [];
}

function withoutLoop(values: number[], wanted: number): number[] {
  return values
    .flatMap((value, index) => {
      const other = values
        .slice(index + 1)
        .find((item) => item + value === wanted);
      return other === undefined ? [] : [value, other];
    })
    .slice(0, 2);
}

console.log(
  withFor(numbers, target),
  withForOf(numbers, target),
  withoutLoop(numbers, target),
);
