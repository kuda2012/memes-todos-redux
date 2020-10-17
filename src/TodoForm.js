import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import "./TodoForm.css";

const TodoForm = () => {
  const INITIAL_STATE = {
    todo: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { ...formData, id: uuid() } });
    setFormData(INITIAL_STATE);
  };
  return (
    <div>
      <h1>To-do's</h1>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <div className="TodoForm-inputs">
          <label htmlFor="todo">Add Todo</label>
          <input
            type="text"
            name="todo"
            id="todo"
            value={formData.todo}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Add To-do</button>
      </form>
    </div>
  );
};

export default TodoForm;
