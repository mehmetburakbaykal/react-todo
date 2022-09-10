import React from 'react'

const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
        {todos.map((todo, index) => (
            <div key={index} className="todo-items">
                <p>{todo}</p>
            </div>
        ))}
    </div>
  )
}

export default TodoList