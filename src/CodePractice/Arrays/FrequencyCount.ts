export {};

const values = ["a", "b", "a", "c", "b", "a"];

function withFor(items: string[]): Record<string, number> {
  const result: Record<string, number> = {};
  for (let index = 0; index < items.length; index++)
    result[items[index]] = (result[items[index]] ?? 0) + 1;
  return result;
}

function withForOf(items: string[]): Record<string, number> {
  const result: Record<string, number> = {};
  for (const item of items) result[item] = (result[item] ?? 0) + 1;
  return result;
}

function withoutLoop(items: string[]): Record<string, number> {
  return items.reduce<Record<string, number>>(
    (result, item) => ({ ...result, [item]: (result[item] ?? 0) + 1 }),
    {},
  );
}

console.log(withFor(values), withForOf(values), withoutLoop(values));
