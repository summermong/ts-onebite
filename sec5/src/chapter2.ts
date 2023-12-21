/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: '',
  age: 27,
};
