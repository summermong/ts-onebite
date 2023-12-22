/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 인터페이스로 클래스를 구현하다
// 인터페이스는 무조건 pubulic
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
