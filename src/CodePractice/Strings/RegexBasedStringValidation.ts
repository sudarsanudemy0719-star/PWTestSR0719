export {};

const email = "developer@example.com";

function withFor(text: string): boolean {
  let at = 0,
    dots = 0;
  for (let index = 0; index < text.length; index++) {
    if (text[index] === "@") at++;
    if (text[index] === ".") dots++;
  }
  return at === 1 && dots >= 1 && !text.startsWith("@") && !text.endsWith(".");
}
function withForOf(text: string): boolean {
  let valid = true;
  for (const character of text) if (!/[\w.@+-]/.test(character)) valid = false;
  return valid && /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(text);
}
function withoutLoop(text: string): boolean {
  return /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(text);
}
function withWhile(text: string): boolean {
  let index = 0;
  while (index < text.length) if (!/[\w.@+-]/.test(text[index++])) return false;
  return /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(text);
}

console.log(
  withFor(email),
  withForOf(email),
  withoutLoop(email),
  withWhile(email),
);
