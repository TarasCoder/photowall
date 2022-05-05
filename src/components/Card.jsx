import React from "react";
import s from "./Card.module.css";
import { FiMessageCircle } from "react-icons/fi";

function Card(props) {
  return (
    <div className={s.wrapper}>
      <img
        className={s.img}
        src={props.img}
        alt="img"
      />
      <p>{props.descr}</p>
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
