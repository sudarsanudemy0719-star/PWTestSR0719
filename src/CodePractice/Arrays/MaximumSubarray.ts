export {};

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function withFor(values: number[]): number {
  let best = values[0],
    current = values[0];
  for (let index = 1; index < values.length; index++) {
    current = Math.max(values[index], current + values[index]);
    best = Math.max(best, current);
  }
  return best;
}

function withForOf(values: number[]): number {
  let best = -Infinity,
    current = 0;
  for (const value of values) {
    current = Math.max(value, current + value);
    best = Math.max(best, current);
  }
  return best;
}

function withoutLoop(values: number[]): number {
  return values.reduce(
    (state, value) => ({
      current: Math.max(value, state.current + value),
      best: Math.max(state.best, Math.max(value, state.current + value)),
    }),
    { current: 0, best: -Infinity },
  ).best;
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
