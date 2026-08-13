export {};

const password = "Strong@123";

function withFor(text: string): boolean {
  let upper = false,
    lower = false,
    digit = false,
    special = false;
  for (let index = 0; index < text.length; index++) {
    upper ||= /[A-Z]/.test(text[index]);
    lower ||= /[a-z]/.test(text[index]);
    digit ||= /\d/.test(text[index]);
    special ||= /[^A-Za-z0-9]/.test(text[index]);
  }
  return text.length >= 8 && upper && lower && digit && special;
}
function withForOf(text: string): boolean {
  let upper = false,
    lower = false,
    digit = false,
    special = false;
  for (const character of text) {
    upper ||= /[A-Z]/.test(character);
    lower ||= /[a-z]/.test(character);
    digit ||= /\d/.test(character);
    special ||= /[^A-Za-z0-9]/.test(character);
  }
  return text.length >= 8 && upper && lower && digit && special;
}
function withoutLoop(text: string): boolean {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(text);
}
function withWhile(text: string): boolean {
  let upper = false,
    lower = false,
    digit = false,
    special = false,
    index = 0;
  while (index < text.length) {
    const character = text[index++];
    upper ||= /[A-Z]/.test(character);
    lower ||= /[a-z]/.test(character);
    digit ||= /\d/.test(character);
    special ||= /[^A-Za-z0-9]/.test(character);
  }
  return text.length >= 8 && upper && lower && digit && special;
}

console.log(
  withFor(password),
  withForOf(password),
  withoutLoop(password),
  withWhile(password),
);
