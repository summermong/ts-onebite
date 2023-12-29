/**
 * 특정 타입만 추론하기
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
type C = ReturnType<number>;


// type PromiseUnpack<T> = any;

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

// T는 Promise 타입이어야 한다.
// Promise 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number;

type PromiseB = PromiseUnpack<Promise<string>>;
// string;

