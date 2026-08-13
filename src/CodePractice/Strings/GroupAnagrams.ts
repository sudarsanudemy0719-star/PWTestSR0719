export {};

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

type Groups = string[][];
function withFor(items: string[]): Groups {
  const groups: Record<string, string[]> = {};
  for (let index = 0; index < items.length; index++) {
    const key = [...items[index]].sort().join("");
    (groups[key] ??= []).push(items[index]);
  }
  return Object.values(groups);
}
function withForOf(items: string[]): Groups {
  const groups = new Map<string, string[]>();
  for (const item of items) {
    const key = [...item].sort().join("");
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }
  return [...groups.values()];
}
function withoutLoop(items: string[]): Groups {
  return Object.values(
    items.reduce<Record<string, string[]>>((groups, item) => {
      const key = [...item].sort().join("");
      (groups[key] ??= []).push(item);
      return groups;
    }, {}),
  );
}
function withWhile(items: string[]): Groups {
  const groups: Record<string, string[]> = {};
  let index = 0;
  while (index < items.length) {
    const key = [...items[index]].sort().join("");
    (groups[key] ??= []).push(items[index++]);
  }
  return Object.values(groups);
}

console.log(
  withFor(words),
  withForOf(words),
  withoutLoop(words),
  withWhile(words),
);
