import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
    { id: 3, text: "Task 3", completed: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newId = todos.length + 1;
    const newTodo = { id: newId, text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do App</h2>

        <ToDoList
          todos={todos}
          onToggle={handleToggle}
          className="to-do-list"
        />
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </header>
    </div>
  );
}

export default App;
