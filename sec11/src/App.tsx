import './App.css';
import { useState, useRef, useEffect, useReducer } from 'react';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';

// TS에서 reducer 쓸 때 서로소 타입
type Action =
  | {
      type: 'CREATE';
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: 'DELETE';
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data];
    }
    case 'DELETE': {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

function App() {
  // setText는 제네릭 함수
  // useState에 아무것도 안 넣으면 undefined로 추론됨
  // 넣을 게 없으면 useState<string>() 이런 식으로 정해줘야 함
  // 그래서 초기값을 넣는 게 더 낫다

  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>To do</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
