import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import "./MemeBox.css";
import Meme from "./Meme";

const MemeBox = () => {
  const memes = useSelector((store) => store.memes);
  return (
    <div className={memes.length > 0 ? "MemeBox" : ""}>
      {memes.map((meme) => (
        <Meme key={uuid()} meme={meme} />
      ))}
    </div>
  );
};

export default MemeBox;
