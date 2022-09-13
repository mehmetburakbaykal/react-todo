import React from "react";

const TodoItem = ({ todo, deleteTodo, id }) => {
  return (
    <div className="todo-items">
      <p>{todo}</p>
      <i
        class="fa-sharp fa-solid fa-circle-minus"
        onClick={() => {
          deleteTodo(id);
        }}
      ></i>{" "}
    </div>
  );
};

export default TodoItem;
