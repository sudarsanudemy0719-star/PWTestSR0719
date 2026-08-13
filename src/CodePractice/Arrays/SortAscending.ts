export {};

const numbers = [5, 1, 4, 2, 3];

function withFor(values: number[]): number[] {
  const result = [...values];
  for (let i = 0; i < result.length; i++)
    for (let j = 0; j < result.length - i - 1; j++)
      if (result[j] > result[j + 1])
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
  return result;
}

function withForOf(values: number[]): number[] {
  const result: number[] = [];
  for (const value of values) {
    const index = result.findIndex((item) => item > value);
    index < 0 ? result.push(value) : result.splice(index, 0, value);
  }
  return result;
}

function withoutLoop(values: number[]): number[] {
  return [...values].sort((a, b) => a - b);
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
