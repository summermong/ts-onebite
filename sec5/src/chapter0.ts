/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; // 메서드 정의 가능. sayHi(): void(호출 시그니처) 처럼 쓸 수도 있음
  sayHi(a: number, b: number): void;
} // & number

const person: Person | number = {
  name: 'summermong',
  sayHi: function () {
    console.log('hi');
  }, // 메서드
};

// person.name = "wintermong"; // 읽기 전용이라 불가

person.sayHi();
person.sayHi(1, 2);

// 함수 타입 표현식 쓰면 안되고 호출 시그니처를 써야 함
// 오버로드를 못 알아 듣고 중복된다고 함

// 인터페이스에서는 유니온이나 인터섹션 만들 수 없음
// 타입 별칭에 하거나 타입 주석에 써야 함

type Type1 = number | string | Person;
type Type2 = number & string & Person;

// 인터페이스 이름은 대부분 I를 붙이는 관습 (헝가리안 표기법)
// JS는 파스칼, 카멜, 스네이크를 써서 헝가리안은 굳이... 안 씀
