export {};

const numbers = [1, 2, 3, 4];

function withFor(values: number[]): number[] {
  const result: number[] = [];
  for (let index = 0; index < values.length; index++) {
    let product = 1;
    for (let scan = 0; scan < values.length; scan++)
      if (scan !== index) product *= values[scan];
    result.push(product);
  }
  return result;
}

function withForOf(values: number[]): number[] {
  const result: number[] = [];
  for (const value of values) {
    let product = 1;
    let skipped = false;
    for (const item of values) {
      if (item === value && !skipped) skipped = true;
      else product *= item;
    }
    result.push(product);
  }
  return result;
}

function withoutLoop(values: number[]): number[] {
  const product = values.reduce((total, value) => total * value, 1);
  return values.map((value) => product / value);
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
