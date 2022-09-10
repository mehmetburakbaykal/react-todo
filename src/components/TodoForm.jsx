import React, { useState, useEffect } from "react";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  return (
    <form action="" id="todo-form">
      <input
        type="text"
        id="form-input"
        placeholder="Please Enter Your Todo"
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button>
        <i class="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default TodoForm;
