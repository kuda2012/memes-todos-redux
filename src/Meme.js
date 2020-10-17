import React from "react";
import { useDispatch } from "react-redux";
import defaultImg from "./defaultImg";
import "./Meme.css";

const Meme = ({ meme }) => {
  const dispatch = useDispatch();
  const removeMeme = (id) => {
    dispatch({ type: "REMOVE_MEME", payload: id });
  };
  return (
    <div className="Meme">
      <button className="Meme-button" onClick={() => removeMeme(meme.id)}>
        <b>X</b>
      </button>
      <p className="Meme-top">{meme.top}</p>
      <img src={meme.photo_url || defaultImg} alt={`meme ${meme.id}`} />
      <p className="Meme-bottom">{meme.bottom}</p>
    </div>
  );
};

export default Meme;
