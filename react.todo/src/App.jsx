import { useState } from "react";
import "tailwindcss";
import TodoList from "./TodoList.jsx";

function App() {
  const [todos, setCount] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  return (
    <>
      <input type="text" />
      <button>追加</button>
      <div>TodoList</div>
      <TodoList todos={todos} />
      <div>残りのタスク：０</div>
    </>
  );
}

export default App;
