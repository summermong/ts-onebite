/**
 * 클래스
 */

let studentA = {
  name: 'summermong',
  grade: 'A+',
  age: 27,
  study() {
    console.log('열심 공부');
  },
  introduce() {
    console.log('hi');
  },
};

class Student {
  // 필드 (클래스가 만들 객체 프로퍼티)
  name;
  grade;
  age;

  // 생성자 (클래스 호출 시 객체를 생성하는 역할을 하는 함수 = 메서드)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심 공부');
  }

  introduce() {
    console.log(`안녕하세요, ${this.name}입니다.`);
  }
}

let studentB = new Student('wintermong', 'A', 27);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 개발함`);
  }
}

const studentDeveloper = new StudentDeveloper('fallmong', 'B+', 27, 'React');
//console.log(studentDeveloper);
//studentDeveloper.programming();
