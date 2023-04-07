interface Pair<T, U> {
  first: T;
  second: U;
}

function getFirst<T, U>(pair: Pair<T, U>): T {
  return pair.first;
}

const pair: Pair<string, number> = { first: 'hello', second: 123 };
const first: string = getFirst(pair);

console.log(first); // 输出 "hello"