export {};

const value = "Level";

function withFor(text: string): boolean {
  const value = text.toLowerCase();
  for (let left = 0, right = value.length - 1; left < right; left++, right--)
    if (value[left] !== value[right]) return false;
  return true;
}
function withForOf(text: string): boolean {
  const value = text.toLowerCase();
  let index = 0;
  for (const character of value)
    if (character !== value[value.length - 1 - index++]) return false;
  return true;
}
function withoutLoop(text: string): boolean {
  const value = text.toLowerCase();
  return value === value.split("").reverse().join("");
}
function withWhile(text: string): boolean {
  const value = text.toLowerCase();
  let left = 0,
    right = value.length - 1;
  while (left < right) if (value[left++] !== value[right--]) return false;
  return true;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
