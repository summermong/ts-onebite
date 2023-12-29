// /**
//  * 조건부 타입
//  * 삼항연산자를 이용해 조건에 따라 타입을 결정함
//  */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// /**
//  * 제네릭이랑 쓰기
//  */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// function removeSpaces(text: string | undefined | null) {
//   if (typeof text === 'string') {
//     return text.replaceAll(' ', '');
//   } else {
//     return undefined;
//   }
// }

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces('hi im www');
result.toUpperCase(); // result?. 로 쓰거나 위에 as string으로 타입 단언 해줘야함
console.log(result);

let result2 = removeSpaces(undefined as undefined);
