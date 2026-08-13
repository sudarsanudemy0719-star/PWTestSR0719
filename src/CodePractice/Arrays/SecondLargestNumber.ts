export {};

const numbers = [12, 5, 19, 7, 19];

function withFor(values: number[]): number | undefined {
  let largest: number | undefined;
  let second: number | undefined;
  for (let index = 0; index < values.length; index++) {
    const value = values[index];
    if (value === largest || value === second) continue;
    if (largest === undefined || value > largest) {
      second = largest;
      largest = value;
    } else if (second === undefined || value > second) second = value;
  }
  return second;
}

function withForOf(values: number[]): number | undefined {
  const unique = [...new Set(values)];
  let largest: number | undefined;
  let second: number | undefined;
  for (const value of unique) {
    if (largest === undefined || value > largest) {
      second = largest;
      largest = value;
    } else if (second === undefined || value > second) second = value;
  }
  return second;
}

function withoutLoop(values: number[]): number | undefined {
  return [...new Set(values)].sort((a, b) => b - a)[1];
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
