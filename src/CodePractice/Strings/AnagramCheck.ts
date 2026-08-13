export {};

const first = "listen",
  second = "silent";

function withFor(left: string, right: string): boolean {
  if (left.length !== right.length) return false;
  const counts: Record<string, number> = {};
  for (let index = 0; index < left.length; index++) {
    counts[left[index]] = (counts[left[index]] ?? 0) + 1;
    counts[right[index]] = (counts[right[index]] ?? 0) - 1;
  }
  return Object.values(counts).every((count) => count === 0);
}

 
function withoutLoop(left: string, right: string): boolean {
  return [...left].sort().join("") === [...right].sort().join("");
}
function withWhile(left: string, right: string): boolean {
  if (left.length !== right.length) return false;
  const a = [...left].sort(),
    b = [...right].sort();
  let index = 0;
  while (index < a.length) if (a[index] !== b[index++]) return false;
  return true;
}

console.log(
  withFor(first, second),
  withForOf(first, second),
  withoutLoop(first, second),
  withWhile(first, second),
);
