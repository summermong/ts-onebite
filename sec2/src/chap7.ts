// Void
function func1(): string {
  return 'hello';
}

function func2(): null {
  console.log('hi');
  return null;
}

// never (불가능한, 존재하지 않는 타입)
// 무한 루프의 경우

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

/*
let a: never;
a = 1;
a = {};
a = undefined;
a = null;
*/
