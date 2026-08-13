export {};

const numbers = [1, 2, 3, 4, 5];
const target = 9;

function withFor(values: number[], wanted: number): number[] {
  for (let i = 0; i < values.length; i++)
    for (let j = i + 1; j < values.length; j++)
      for (let k = j + 1; k < values.length; k++)
        if (values[i] + values[j] + values[k] === wanted)
          return [values[i], values[j], values[k]];
  return [];
}

function withForOf(values: number[], wanted: number): number[] {
  for (const first of values)
    for (const second of values) {
      const third = wanted - first - second;
      if (third !== first && third !== second && values.includes(third))
        return [first, second, third];
    }
  return [];
}

function withoutLoop(values: number[], wanted: number): number[] {
  return values
    .flatMap((value, index) =>
      values.slice(index + 1).flatMap((next, nextIndex) => {
        const third = wanted - value - next;
        return values.slice(index + nextIndex + 2).includes(third)
          ? [value, next, third]
          : [];
      }),
    )
    .slice(0, 3);
}

console.log(
  withFor(numbers, target),
  withForOf(numbers, target),
  withoutLoop(numbers, target),
);
