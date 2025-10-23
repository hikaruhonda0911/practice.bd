import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        {todo.name}
        <input type="button" value="完了" checked={todo.completed} readOnly />
      </label>
    </div>
  );
};

export default Todo;
