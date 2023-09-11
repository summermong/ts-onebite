// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['a', 'b', 'c'];

let boolArr: boolean[] = [true, false];
let boolArr2: Array<boolean> = [true, false]; // 제네릭 문법

let multiArr: (string | number)[] = [1, 'hi'];
let multiArr2: Array<string | number> = [1, 'hi'];

// 다차원 배열의 타입
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let tripleArr: (number | number[])[][] = [
  [1, 2, [3]],
  [4, 5, 6],
  [7, 8, 9],
];

// 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, 'hi', true];
let users: [string, number][] = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  // [4, 'd']
];
