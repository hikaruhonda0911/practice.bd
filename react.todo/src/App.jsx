import { useState, useRef } from "react";
import TodoList from "./TodoList.jsx";
// import DoneList from "./DoneList.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "タスク名", completed: false },
  ]);

  const todoNameref = useRef();

  const handleAddTodo = () => {
    // タスクを追加する
    const name = todoNameref.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameref.current.value = null;
  };

  return (
    <>
      <input type="text" ref={todoNameref} />
      <button onClick={handleAddTodo}>追加</button>
      <div>TodoList</div>
      <TodoList todos={todos} />
      <div>残りのタスク：０</div>
      <div>完了したタスク</div>
      {/* <DoneList dones={dones} /> */}
    </>
  );
}

export default App;
