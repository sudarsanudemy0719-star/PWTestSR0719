export {};

const nested: unknown[] = [1, [2, [3, 4]], 5];

function withFor(values: unknown[]): unknown[] {
  const result: unknown[] = [];
  for (let index = 0; index < values.length; index++)
    Array.isArray(values[index])
      ? result.push(...withFor(values[index] as unknown[]))
      : result.push(values[index]);
  return result;
}

function withForOf(values: unknown[]): unknown[] {
  const result: unknown[] = [];
  for (const value of values)
    Array.isArray(value)
      ? result.push(...withForOf(value))
      : result.push(value);
  return result;
}

function withoutLoop(values: unknown[]): unknown[] {
  return values.flat(Infinity);
}

console.log(withFor(nested), withForOf(nested), withoutLoop(nested));
