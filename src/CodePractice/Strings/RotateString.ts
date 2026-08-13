export {};

const value = "abcdef",
  positions = 2;

function withFor(text: string, count: number): string {
  const shift = count % text.length;
  let result = "";
  for (let index = text.length - shift; index < text.length; index++)
    result += text[index];
  for (let index = 0; index < text.length - shift; index++)
    result += text[index];
  return result;
}

// rotate the string to the above program give one more for loop example
function withForLoopExample(text: string, count: number): string {
  const shift = count % text.length;
  let result = "";
  for (let index = 0; index < text.length; index++) {
    if (index >= text.length - shift) {
      result += text[index];
    }
  }
  for (let index = 0; index < text.length; index++) {
    if (index < text.length - shift) {
      result += text[index];
    }
  }
  return result;
}



function withForOf(text: string, count: number): string {
  const shift = count % text.length;
  let result = "",
    index = 0;
  for (const character of text)
    if (index++ >= text.length - shift) result += character;
  index = 0;
  for (const character of text)
    if (index++ < text.length - shift) result += character;
  return result;
}
function withoutLoop(text: string, count: number): string {
  const shift = count % text.length;
  return text.slice(-shift) + text.slice(0, -shift);
}
function withWhile(text: string, count: number): string {
  const shift = count % text.length;
  let result = "",
    index = text.length - shift;
  while (index < text.length) result += text[index++];
  index = 0;
  while (index < text.length - shift) result += text[index++];
  return result;
}

console.log(
  withFor(value, positions),
  withForOf(value, positions),
  withoutLoop(value, positions),
  withWhile(value, positions),
);
