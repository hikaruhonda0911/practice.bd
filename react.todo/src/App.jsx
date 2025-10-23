import { useState, useRef } from "react";
// import TodoList from "./TodoList.jsx";
// import DoneList from "./DoneList.jsx";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  // const handleAddTodo = () => {
  //   // タスクを追加する
  // //   const name = todoNameref.current.value;
  // //   setTodos((prevTodos) => {
  // //     return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
  // //   });
  // //   todoNameref.current.value = null;
  // // };

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // TODO追加ボタン
  const handleAddTodo = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        todo: inputText,
      },
    ]);
    setInputText("");
  };

  // 削除ボタン
  const handleDelete = (id) => {
    const Remove = taskList.filter((task) => task.id !== id);
    setTaskList(Remove);
  };

  return (
    <>
      <form className="bg-orange-200 rounded-md m-5 p-3">
        <input
          type="text"
          ref={inputRef}
          placeholder="TODOを入力"
          className="rounded-md p-2 bg-white mr-3 text-gray-400"
          value={inputText}
          onChange={handleChange}
        />
        <button
          onClick={handleAddTodo}
          className="bg-gray-200 pl-3 pr-3 pt-1 pb-1 rounded-xl"
        >
          追加
        </button>
      </form>
      <div className="border-2 border-solid rounded-md border-orange-300 m-5 p-3">
        <span className="text-gray-500 font-bold text-l flex justify-center">
          未完了のTODO
        </span>
        {/* <TodoList todos={todos} /> */}
        {/* todoリストを作成 */}
        <div>
          {taskList.map((item) => (
            <div key={item.id}>
              <li className="ml-7">
                {item.todo}
                <button
                  onClick={() => handleAddDone(item.id)}
                  className="ml-2 border-solid rounded-xl bg-gray-200 pt-0.5 pb-0.5 pl-1 pr-1 "
                >
                  完了
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="ml-2 border-solid rounded-xl bg-gray-200 pt-0.5 pb-0.5 pl-1 pr-1 "
                >
                  削除
                </button>
              </li>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-solid rounded-md border-orange-300 m-5 p-3 bg-orange-100">
        <div className="text-gray-500 font-bold text-l flex justify-center">
          完了のTODO
        </div>
      </div>
    </>
  );
};

export default App;
