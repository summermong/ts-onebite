// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = 'summermong';
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '주몽',
  color: 'brown',
  breed: '시츄',
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <= A as B일 때 A가 B의 슈퍼 타입, 또는 A가 B의 서브타입이어야 함

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const;

/**
 * non null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '1',
  author: 'summermong',
};

const len: number = post.author!.length;
