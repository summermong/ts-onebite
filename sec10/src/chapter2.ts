/**
 * pick<T, K>
 * => 뽑다, 고르다
 * => 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// K 타입 변수에 T 타입 안에 있는 거만 전달할 수 있다고
// 제한 해주지 않으면 에러 발생

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL' (O)
  // number extends 'title' | 'tags' | 'content' | 'thumbnailURL' (X)
  [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 콘텐츠',
};

// const la: Partial<Post> = {
//     title: '옛날 글',
//     content: '옛날 콘텐츠',
// }

/**
 * omit
 * => 생략하다
 * => 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// pick 써도 되는데 프로퍼티가 많아지면 힘들다.
// const noTitlePost: Pick<Post, 'content' | 'tags' | 'thumbnailURL'> = {
//   content: '',
//   tags: [],
//   thumbnailURL: '',
// };

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

/**
 * Recode<K, V>
 * =>
 */

// 중복이 많다.
// type ThumbnailLegacy = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
// };

// 무슨 타입일지 모르겠지만 K에 들어오는 타입은 어떤 객체의 프로퍼티 키 타입이라고 제약을 걸어준다.
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// 첫 번째 타입 변수로는 객체의 프로퍼티 키를 유니언으로 받고
// 두 번째 타입 변수로는 해당 키들의 밸류 값을 받는다.
type Thumbnail = Record<
  'large' | 'medium' | 'small' | 'watch',
  { url: string; size: number }
>;
