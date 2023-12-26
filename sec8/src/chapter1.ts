/**
 * 인덱스드 엑세스 타입
 * 객체 배열 튜플에 적용 가능
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// ['author']['id']처럼 이중으로 뽑아올 수 있음!
function printAuthorInfo(author: PostList[0]['author']) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
  title: '제목',
  content: '본문',
  author: {
    id: 1,
    name: 'summermong',
    age: 27,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];
