/**
 * 함수 타입 정의
 */

// 함수를 가장 잘 설명하는 방법
// 어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입 정의하기
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 기본값은 string인데 name의 타입을 number로 주면 오류남
// 함수 호출 시 자동 추론된 매개변수의 타입과 다른 타입을 주면 오류남 introduce(1)
function introduce(name = 'summermong', tall?: number) {
  console.log(`name: ${name}`);

  if (typeof tall === 'number') {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce('summermong', 165);
introduce('summermong'); // 오류 (tall 생략하고 싶으면 tall?:number 하면 됨)
// 선택적 매개변수는 필수 매개변수 앞에 올 수 없음

// 나머지 매개변수
function getSum(...rest: number[]) {
  // 튜플로 [number, number, number] 해도 됨
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
