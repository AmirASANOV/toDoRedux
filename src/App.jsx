import React, { useState } from "react";
import ToDoList from "./components/todoList/ToDoList";
import InputField from "./components/inputField/InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <ToDoList />
    </div>
  );
};

export default App;
