export {};

const numbers = [12, 5, 19, 7, 22, 19];

function withFor(values: number[]): number | undefined {
  const unique = [...new Set(values)];
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;
  for (let index = 0; index < unique.length; index++) {
    const value = unique[index];
    if (value > first) {
      third = second;
      second = first;
      first = value;
    } else if (value > second) {
      third = second;
      second = value;
    } else if (value > third) third = value;
  }
  return third === -Infinity ? undefined : third;
}

function withForOf(values: number[]): number | undefined {
  const unique = [...new Set(values)].sort((a, b) => b - a);
  let position = 0;
  for (const value of unique) {
    if (position++ === 2) return value;
  }
  return undefined;
}

function withoutLoop(values: number[]): number | undefined {
  return [...new Set(values)].sort((a, b) => b - a)[2];
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
