// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입 (합집합/교집합 타입)

// 합집합 (union 타입)
let a: string | number;
a = 10;
a = 'a';

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
};

let union2: Union1 = {
  name: '',
  language: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// let union4: Union1 = {
//    name: "",
// }
// 하나만 넣는 경우는 안됨 얜 어디로 가야 하는데?

// 교집합 - intersection

let variable: number & string; // never - 불가능 공집합, 보통 객체에서 많이 씀

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};

// 하나라도 빠지면 안됨!
