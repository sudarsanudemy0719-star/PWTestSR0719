export {};

const numbers = [0, 1, 0, 3, 12];

function withFor(values: number[]): number[] {
  const result = [...values];
  let position = 0;
  for (let index = 0; index < result.length; index++)
    if (result[index] !== 0) result[position++] = result[index];
  for (; position < result.length; position++) result[position] = 0;
  return result;
}

function withForOf(values: number[]): number[] {
  const nonZero: number[] = [];
  let zeroCount = 0;
  for (const value of values) value === 0 ? zeroCount++ : nonZero.push(value);
  return nonZero.concat(Array(zeroCount).fill(0));
}

function withoutLoop(values: number[]): number[] {
  return [...values.filter(Boolean), ...values.filter((value) => value === 0)];
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
