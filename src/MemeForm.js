import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import "./MemeForm.css";

const MemeForm = () => {
  const INITIAL_STATE = {
    top: "",
    bottom: "",
    photo_url: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_MEME", payload: { ...formData, id: uuid() } });
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <h1>MEME GENERATOR</h1>
      <form className="MemeForm" onSubmit={handleSubmit}>
        <div className="MemeForm-inputs">
          <label htmlFor="top">Top Text</label>
          <input
            type="text"
            name="top"
            id="top"
            value={formData.top}
            onChange={handleChange}
          />
          <label htmlFor="bottom">Bottom Text</label>
          <input
            type="text"
            name="bottom"
            id="bottom"
            value={formData.bottom}
            onChange={handleChange}
          />
          <label htmlFor="photo_url">Photo URL</label>
          <input
            type="text"
            name="photo_url"
            id="photo_url"
            value={formData.photo_url}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Add Meme</button>
      </form>
    </div>
  );
};

export default MemeForm;
