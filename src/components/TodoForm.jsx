import React, { useState, useEffect } from "react";

const TodoForm = ({ setTodos, todos }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    setTodos([...todos, todoValue]);
  };

  return (
    <form action="" id="todo-form">
      <input
        type="text"
        id="form-input"
        placeholder="Please Enter Your Todo"
        onChange={(e) => setTodoValue(e.target.value)} // inputu yazarken değerini bir state in içine atıyorum
        value={todoValue}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          setTodoValue("");
        }}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default TodoForm;
