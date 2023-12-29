/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>; // 한번씩 분리되어 들어감
let d: StringNumberSwitch<boolean | number | string>;

/**
 * 예제
 */

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>; // never(공집합)는 사라짐

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
