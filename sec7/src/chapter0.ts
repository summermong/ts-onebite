/**
 * 제네릭
 */

function func<T>(value: T): T {
  return value;
}

// 해당 함수의 리턴값을 반환하는데 value의 타입이 any라
// 무슨 매개변수가 들어가도 any 타입으로 추론됨

let num = func(10);
//num.toUpperCase(); // any면 오류 안 남 & unknown이면 남
// num.toFixed(); // unknown이면 메서드 사용 불가... 타입 가드 써야함

let bool = func(true);
let str = func('string');
