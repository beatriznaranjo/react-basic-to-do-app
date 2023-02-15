import React from "react";

const ToDoItem = ({ id, text, completed, onToggle }) => {
  const handleCheckboxClick = () => {
    onToggle(id);
  };

  return (
    <ul>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxClick}
      />
      <span>{text}</span>
    </ul>
  );
};

export default ToDoItem;
