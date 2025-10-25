import { useState, useRef } from "react";
// import TodoList from "./TodoList.jsx";
// import DoneList from "./DoneList.jsx";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [doneList, setDoneList] = useState([]);

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

  // 完了ボタン
  const handleAddDone = (id) => {
    const unDoneList = taskList.filter((task) => task.id !== id);
    setTaskList(unDoneList);

    setDoneList([
      ...doneList,
      {
        id: complete.id,
        todo: complete.todo,
      },
    ]);
  };

  // 戻すボタン
  const handleReturn = (id) => {
    // 未完了に追加
    const back = doneList.find((task) => task.id === id);
    setTaskList([
      ...taskList,
      {
        id: back.id,
        todo: back.todo,
      },
    ]);

    // 完了から削除
    const removeDone = doneList.filter((task) => task.id !== id);
    setDoneList(removeDone);
  };

  return (
    <>
      <form className="bg-orange-200 rounded-md m-5 p-3">
        <input
          type="text"
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

        <div>
          {taskList.map((done) => (
            <div key={done.id}>
              <li className="ml-7">
                {done.todo}
                <button
                  onClick={() => handleAddDone(done.id)}
                  className="ml-2 border-solid rounded-xl bg-gray-200 pt-0.5 pb-0.5 pl-1 pr-1 "
                >
                  完了
                </button>
                <button
                  onClick={() => handleDelete(done.id)}
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
        <span className="text-gray-500 font-bold text-l flex justify-center">
          完了のTODO
        </span>
        <div>
          {doneList.map((done) => (
            <div key={done.id}>
              <li className="ml-7">
                {done.todo}
                <button
                  onClick={() => handleReturn(done.id)}
                  className="ml-2 border-solid rounded-xl bg-gray-200 pt-0.5 pb-0.5 pl-1 pr-1 "
                >
                  戻す
                </button>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
