export {};

const value = "aaabbc";

function withFor(text: string): string {
  if (!text) return "";
  let result = "",
    count = 1;
  for (let index = 1; index <= text.length; index++) {
    if (text[index] === text[index - 1]) count++;
    else {
      result += `${text[index - 1]}${count}`;
      count = 1;
    }
  }
  return result;
}
function withForOf(text: string): string {
  let result = "",
    previous = "",
    count = 0;
  for (const character of `${text}\0`) {
    if (character === previous) count++;
    else {
      if (previous) result += `${previous}${count}`;
      previous = character;
      count = 1;
    }
  }
  return result;
}
function withoutLoop(text: string): string {
  return text.replace(/(.)\1*/g, (group) => `${group[0]}${group.length}`);
}
function withWhile(text: string): string {
  let result = "",
    index = 0;
  while (index < text.length) {
    let end = index + 1;
    while (text[end] === text[index]) end++;
    result += `${text[index]}${end - index}`;
    index = end;
  }
  return result;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
