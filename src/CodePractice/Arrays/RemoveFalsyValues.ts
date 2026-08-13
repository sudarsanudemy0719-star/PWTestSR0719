export {};

const values: unknown[] = [0, 1, false, "hello", "", null, undefined, 2];

function withFor(items: unknown[]): unknown[] {
  const result: unknown[] = [];
  for (let index = 0; index < items.length; index++)
    if (items[index]) result.push(items[index]);
  return result;
}

function withForOf(items: unknown[]): unknown[] {
  const result: unknown[] = [];
  for (const item of items) if (item) result.push(item);
  return result;
}

function withoutLoop(items: unknown[]): unknown[] {
  return items.filter(Boolean);
}

console.log(withFor(values), withForOf(values), withoutLoop(values));
