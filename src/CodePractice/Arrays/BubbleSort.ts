export {};

const numbers = [5, 1, 4, 2, 3];

function withFor(values: number[]): number[] {
  const result = [...values];
  for (let end = result.length - 1; end > 0; end--) {
    for (let index = 0; index < end; index++) {
      if (result[index] > result[index + 1]) {
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
      }
    }
  }
  return result;
}

function withForOf(values: number[]): number[] {
  const result = [...values];
  let changed = true;
  for (const _ of result) {
    if (!changed) break;
    changed = false;
    for (let index = 0; index < result.length - 1; index++)
      if (result[index] > result[index + 1]) {
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
        changed = true;
      }
  }
  return result;
}

function withoutLoop(values: number[]): number[] {
  return [...values].sort((a, b) => a - b);
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));

//write a program to sort an array of numbers in ascending order using bubble sort algorithm with for loop.
function bubbleSort(values: number[]): number[] {
  const result = [...values];
  for (let end = result.length - 1; end > 0; end--) {
    for (let index = 0; index < end; index++) {
      if (result[index] > result[index + 1]) {
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
      }
    }
  }
  return result;
}
