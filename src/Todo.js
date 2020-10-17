import React from "react";
import { useDispatch } from "react-redux";
import "./Todo.css";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  return (
    <li className="Todo">
      <span>{todo.todo}</span>
      <button className="Todo-delete" onClick={() => removeTodo(todo.id)}>
        <b>X</b>
      </button>
    </li>
  );
};

export default Todo;
