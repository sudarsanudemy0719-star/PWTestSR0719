export {};

const value = "babad";

function isPalindrome(text: string): boolean {
  return text === text.split("").reverse().join("");
}
function withFor(text: string): string {
  let longest = "";
  for (let start = 0; start < text.length; start++)
    for (let end = start + 1; end <= text.length; end++)
      if (end - start > longest.length && isPalindrome(text.slice(start, end)))
        longest = text.slice(start, end);
  return longest;
}
function withForOf(text: string): string {
  let longest = "";
  for (const [index] of text.split("").entries())
    for (const [left, right] of [
      [index, index],
      [index, index + 1],
    ]) {
      let start = left,
        end = right;
      while (start >= 0 && end < text.length && text[start] === text[end]) {
        if (end - start + 1 > longest.length)
          longest = text.slice(start, end + 1);
        start--;
        end++;
      }
    }
  return longest;
}
function withoutLoop(text: string): string {
  return [...text]
    .map((_, index) =>
      text
        .slice(index)
        .split("")
        .reduce((best, _, end) => {
          const candidate = text.slice(index, index + end + 1);
          return isPalindrome(candidate) && candidate.length > best.length
            ? candidate
            : best;
        }, ""),
    )
    .reduce(
      (best, candidate) => (candidate.length > best.length ? candidate : best),
      "",
    );
}
function withWhile(text: string): string {
  let longest = "",
    start = 0;
  while (start < text.length) {
    let end = start + 1;
    while (end <= text.length) {
      const candidate = text.slice(start, end++);
      if (candidate.length > longest.length && isPalindrome(candidate))
        longest = candidate;
    }
    start++;
  }
  return longest;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
