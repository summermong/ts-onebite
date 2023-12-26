/**
 * keyof 연산자
 * 객체 타입에 적용하는 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

// keyof 연산자는 뒤에 타입이 와야 한다.
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: 'summermong',
  age: 27,
};

getPropertyKey(person, 'name');
