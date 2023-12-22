/**
 * 접근 제어자 (access modifier)
 * => public, private, protected
 */

class Employee {
  // 필드
  // private name: string;
  // protected age: number;
  position: string;

  // 생성자 : 생성자에 접근 제어자를 만들면 자동으로 필드를 만들어줌
  constructor(private name: string, protected age: number, position: string) {
    // this.name = name;
    // this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name}이 일한다.`);
  }
}

const employee = new Employee('summermong', 27, 'developer');
// employee.name = 'wintermong'; // Employee 메서드에서만 사용
// employee.age = 30;
employee.position = 'designer';

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    //this.name; // Employee 내에서만 접근사용 가능
    this.age; // protected로 파생된 클래스에서는 사용 가능
  }
}

console.log(employee);
