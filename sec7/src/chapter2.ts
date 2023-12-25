/**
 * map 메서드
 */

// map

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
map([1, 2], (it) => it.toString());
console.log(map([1, 2], (it) => it.toString()));

// forEach

const arr2 = [1, 2, 3];
const newArr2 = arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(['123', '456'], (it) => {
  it.split('');
});
