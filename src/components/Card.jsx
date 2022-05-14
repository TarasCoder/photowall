import React from "react";
import s from "./Card.module.css";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

function Card(props) {

  const showIndex = () => {
    props.removeBtn(props.id);
  }

  return (

       
    <div className={s.wrapper}>
      <nav>
        <Link to="/DetailedCard">
          <img
            className={s.img}
            src={props.img}
            alt="img"
          />
        </Link>
      </nav>

      <p>{props.descr}</p>
      <div className={s.btnGroup}>
        <button className={s.removeBtn} onClick={showIndex}>Remove</button>
        <button className={s.commentsBtn}>
          <FiMessageCircle /> 1
        </button>
      </div>
    </div>
  );
}

export default Card;
