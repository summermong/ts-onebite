/**
 * mapped 타입
 * 객체 타입을 조작하는 기능
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 유저 한 명 정보 불러 오기
function fecthUser(): ReadonlyUser {
  return {
    id: 1,
    name: 'summermong',
    age: 27,
  };
}

type BooleanUser = {
  //[key in 'id' | 'name' | 'age']: boolean;
  [key in keyof User]: boolean;
};

// 유저 한 명 정보 수정하기
function updateUser(user: PartialUser) {}

// 이름만 바꿀 건데 모든 객체를 다 줘야 함
// 이유는 매개변수의 타입이 User이기 때문에
// 따라서 선택적 프로퍼티를 갖는 PartialUser 같은 타입 만들어야 함

updateUser({
  //id: 1,
  name: 'wintermong',
  //age: 27,
});
