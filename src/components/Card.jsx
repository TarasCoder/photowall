import React from "react";
import s from "./Card.module.css";
import { FiMessageCircle } from "react-icons/fi";

function Card() {
  return (
    <div className={s.wrapper}>
      <img
        className={s.img}
        src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
      />
      <p>Description</p>
      <div className={s.btnGroup}>
        <button className={s.removeBtn}>Remove</button>
        <button className={s.commentsBtn}>
          <FiMessageCircle /> 2
        </button>
      </div>
    </div>
  );
}

export default Card;
