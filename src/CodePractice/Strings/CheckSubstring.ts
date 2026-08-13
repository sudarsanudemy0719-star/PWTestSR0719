export {};

const text = "TypeScript is powerful",
  search = "power";

function withFor(text: string, search: string): boolean {
  for (let index = 0; index <= text.length - search.length; index++) {
    let match = true;
    for (let offset = 0; offset < search.length; offset++)
      if (text[index + offset] !== search[offset]) match = false;
    if (match) return true;
  }
  return false;
}
function withForOf(text: string, search: string): boolean {
  let index = 0;
  for (const character of text) {
    if (text.slice(index, index + search.length) === search) return true;
    index++;
  }
  return false;
}
function withoutLoop(text: string, search: string): boolean {
  return text.includes(search);
}
function withWhile(text: string, search: string): boolean {
  let index = 0;
  while (index <= text.length - search.length) {
    if (text.slice(index, index + search.length) === search) return true;
    index++;
  }
  return false;
}

console.log(
  withFor(text, search),
  withForOf(text, search),
  withoutLoop(text, search),
  withWhile(text, search),
);
