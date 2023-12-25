/**
 * 제네릭 응용
 */

import { get } from 'http';

// 타입 변수를 여러 개 사용할 수 있다.
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);

// 뭔소리야
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue([1, 'a', 'b']);

//
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('12345');
let var3 = getLength({ length: 10 });
//let var4 = getLength(10); // 안됨
