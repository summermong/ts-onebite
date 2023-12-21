type A = () => number;
type B = () => 10;

let a: A = () => 10; // 반환값 타입 number
let b: B = () => 10; // 반환값 타입 number literal 10

a = b;
// b = a; (다운 캐스팅되면 호환 불가)

// 매개변수가 호환되는가 (1. 개수가 같은가 / 2. 개수가 다른가)

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; (업 캐스팅인데 안됨 - 매개변수를 기준으로 할 때는 안됨)
d = c; // (다운 캐스팅인데 됨)

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; (Animal이 더 큼)
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수가 호환되는가 (개수 다름)

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 2개에서 1개로
// func2 = func1; // 1개에서 2개로
