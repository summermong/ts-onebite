import './App.css';
import { useState, useRef, useEffect } from 'react';
import Editor from './components/Editor';

interface Todo {
  id: number;
  content: string;
}

function App() {
  // setText는 제네릭 함수
  // useState에 아무것도 안 넣으면 undefined로 추론됨
  // 넣을 게 없으면 useState<string>() 이런 식으로 정해줘야 함
  // 그래서 초기값을 넣는 게 더 낫다

  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>To do</h1>
      <Editor onClickAdd={onClickAdd} />
      {/*<div>child</div>*/}
    </div>
  );
}

export default App;
