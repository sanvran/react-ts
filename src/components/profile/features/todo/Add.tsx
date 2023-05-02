import React, { useState } from "react";
import Todos from ".";
import List from "./List";

const AddTodo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoItemList, setTodoItemList] = useState<string[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodoItem(e.target.value);
  };

  const addTodo = () => {
    setTodoItemList([...todoItemList, todoItem]);
    setTodoItem("");
  };

  return (
    <>
      <input
        type="text"
        value={todoItem}
        onChange={handleOnChange}
        placeholder="Enter Item"
      />
      <button onClick={addTodo}>Add</button>
      <List {...{ todoItemList }} />
    </>
  );
};

export default AddTodo;
