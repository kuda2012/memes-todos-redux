import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector((store) => store.todos);
  return (
    <ul className="Todos">
      {todos.map((todo) => (
        <Todo key={uuid()} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
