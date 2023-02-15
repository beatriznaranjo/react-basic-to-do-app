import React from "react";
import ToDoItem from "../components/ToDoItem";

const ToDoList = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
