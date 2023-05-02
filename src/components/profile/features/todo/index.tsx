import React from "react";
import AddTodo from "./Add";
import List from "./List";

const Todos = () => {
  return (
    <>
      <h2>Todos</h2>
      <AddTodo />
      <List />
    </>
  );
};

export default Todos;
