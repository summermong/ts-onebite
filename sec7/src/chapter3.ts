/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 1,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1'],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 1,
  key2: 2,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: 'hi',
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let map2: Map2<string> = {
  key: '1',
};

/**
 * 제네릭 인터페이스 활용
 */

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  //   if (user.profile.type !== 'student') {
  //     console.log('잘못 옴');
  //     return;
  //   }
  const school = user.profile.school;
  console.log(`${school}로 등교 ㄱㄱ!`);
}

const studentUser: User<Student> = {
  name: 'wintermong',
  profile: {
    type: 'student',
    school: 'inha',
  },
};

// goToSchool(developerUser)
goToSchool(studentUser);

const developerUser: User<Developer> = {
  name: 'summermong',
  profile: {
    type: 'developer',
    skill: 'TS',
  },
};
