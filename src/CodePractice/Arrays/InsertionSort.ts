export {};

const numbers = [5, 1, 4, 2, 3];

function withFor(values: number[]): number[] {
  const result = [...values];
  for (let index = 1; index < result.length; index++) {
    const value = result[index];
    let position = index - 1;
    for (; position >= 0 && result[position] > value; position--)
      result[position + 1] = result[position];
    result[position + 1] = value;
  }
  return result;
}

function withForOf(values: number[]): number[] {
  const result: number[] = [];
  for (const value of values) {
    const position = result.findIndex((item) => item > value);
    position < 0 ? result.push(value) : result.splice(position, 0, value);
  }
  return result;
}

function withoutLoop(values: number[]): number[] {
  return [...values].sort((a, b) => a - b);
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
