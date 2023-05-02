import React, { useState } from "react";

const AddTodo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoItemList, setTodoItemList] = useState<string[]>([]);
  // const handleOnChange () => {

  // };
  const addTodo = () => {
    setTodoItemList([...todoItemList, todoItem]);
    setTodoItem("");
  };
  console.log("todoItemList", todoItemList);

  return (
    <>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        placeholder="Enter Item"
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
};

export default AddTodo;
