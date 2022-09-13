import React, { useState } from "react";

const TodoForm = ({ setTodos, todos }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    if (todoValue === "") {
      alert("Please enter a todo!");
    } else if (todos.includes(todoValue)) {
      alert("Todo already exist!");
    } else if (todoValue.length < 3) {
      alert("Todo must be at least 3 characters long!");
    } else {
      setTodos([...todos, todoValue]);
    }
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
