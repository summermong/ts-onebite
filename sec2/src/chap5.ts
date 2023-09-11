// enum 타입 (열거형 타입)
// 값들에 이름을 부여해 열거하여 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: 'summermong',
  role: Role.ADMIN, // 0이 저장됨
  language: Language.korean,
};

const user2 = {
  name: 'autumnmong',
  role: Role.USER,
  language: Language.english,
};

const user3 = {
  name: 'wintermong',
  role: Role.GUEST,
  language: Language.korean,
};

console.log(user1, user2, user3);
