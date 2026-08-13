export {};

const numbers = [1, 2, 3, 4, 5, 6];

function withFor(values: number[]): number[] {
  const result: number[] = [];
  for (let index = 0; index < values.length; index++)
    if (values[index] % 2 === 0) result.push(values[index]);
  for (let index = 0; index < values.length; index++)
    if (values[index] % 2 !== 0) result.push(values[index]);
  return result;
}

function withForOf(values: number[]): number[] {
  const even: number[] = [],
    odd: number[] = [];
  for (const value of values) (value % 2 === 0 ? even : odd).push(value);
  return [...even, ...odd];
}

function withoutLoop(values: number[]): number[] {
  return [
    ...values.filter((value) => value % 2 === 0),
    ...values.filter((value) => value % 2 !== 0),
  ];
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
