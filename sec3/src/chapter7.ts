/**
 * 타입 좁히기
 * 조건문 등을 이용해 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed()); // number
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()); // string
  } else if (value instanceof Date) {
    console.log(value.getTime()); // object를 좀 더 좁혀야함 null도 통과함
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }
}
