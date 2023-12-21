type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '주몽',
  color: 'brown',
  breed: '시츄',
};

animal = dog;

let animal2: Animal = {
  name: '몽구',
  color: 'black',
  //breed: '포메라니안'
};

let animal3: Animal = dog;
function func(animal: Animal) {}
func({
  name: '몽구',
  color: 'black',
  //breed: '포메라니안'
});

func(dog);

// dog = animal; // Property 'breed' is missing in type 'Animal' but required in type 'Dog'.
// 프로퍼티를 기준으로 계층 기준을 가짐
// 조건이 더 적은 쪽이 슈퍼 타입이 됨

// 초과 프로퍼티 검사
// 변수를 초기화할 때 객체 리터럴을 쓰면 발동함. 실제 타입엔 정의하지 않은 초과 프로퍼티를 적어 놓으면 이걸 막음... 객체 리터럴로 쓸거면 딱 맞게 프로퍼티를 해야하고, 매개변수로 추가할때도 동일함
