/**
 * 함수 오버로딩
 */

// 함수에 어떤 버전들이 있는지 알려줘야 함
// 선언식만 써놓은 것을 오버로드 시그니처라고 함
// 함수를 오버로딩 하려고 다른 버전으로 적어놓는 것
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실 구현부 만들기
// 구현 시그니처
// 오버로드 시그니처를 갖고 있으면 이 함수를 호출할 때 인수의 타입, 개수가 실제 구현부에 따르지 않고 오버로드 시그니처 타입 중 하나를 따르게 됨
// 필수 파라미터가 3개가 되면 첫 번째 오버로드 시그니처의 의미가 없어지므로 ?를 붙여줌
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);
