/**
 * 템플릿 리터럴 타입
 * string 리터럴 타입을 기반으로 특정 패턴을 갖는 문자열 타입을 만듬
 */

type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = 'black-cat';
