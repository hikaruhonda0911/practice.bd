import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        {todo.name}
        <input type="button" value="完了" onClick={todo.completed} />
      </label>
    </div>
  );
};

export default Todo;
