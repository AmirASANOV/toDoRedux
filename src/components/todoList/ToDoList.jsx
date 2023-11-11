import React from "react";
import ToDoItem from "../todoItem/ToDoItem";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
