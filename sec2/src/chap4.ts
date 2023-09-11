type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '썸머몽',
  nickname: 'summermong',
  birth: '1997',
  bio: 'hi',
  location: 'suwon',
};

// 인덱스 시그니처

type countryCodes = {
  [key: string]: string;
};

let countryCodes: countryCodes = {
  korea: 'ko',
  usa: 'us',
  uk: 'uk',
};

/*
type countryNums = {
  [key: string]: number;
  korea: string;
};

let countryNums: countryNums = {};
*/
