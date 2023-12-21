// Unknown 타입 (전체 집합)
function unknownExam() {
  // 모든 타입이 업 캐스팅 될 수 있음
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운 캐스팅은 안됨
  // let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let boo: boolean = unknownVar;
}

// never 타입 (불가능, 모순을 의미 - 공집합 & 모든 집합의 부분 집합)
function neverExam() {
  // 반환값이 아무 것도 없다
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let boo: boolean = neverFunc();

  // 다운 캐스팅은 안됨
  // let never1: never = 10;
  // let never2: never = 'string';
  // let never3: never = true;
}

// void 타입 (반환값이 없는 경우. undefined의 슈퍼 타입임)
function voidExam() {
  function voidFunc(): void {
    console.log('hi');
    // return undefined (가능)
  }

  let voidVar: void = undefined;
}

// any 타입 (타입 계층 무시. 치트키. 모든 타입의 슈퍼 타입이자 모든 타입의 서브 타입임(never 제외))
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // any 타입에 한정해서 unknown 타입이 다운 캐스팅 됨
  undefinedVar = anyVar; // any 타입은 자기한테 오는 다운 캐스팅, 자기가 다운 캐스팅도 됨
  // neverVar = anyVar; // 이건 안됨 (never는 순수한 공집합이기 때문에 어떤 타입도 다운 캐스팅 안됨)
}
