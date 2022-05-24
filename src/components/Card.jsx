import React from "react";
import s from "./Card.module.css";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Card(props) {
  useEffect(() => {
    let imgId = props.items;
    console.log("Card component: ", props.items);
  }, []);

  const showIndex = () => {
    props.removeBtn(props.id);
  };
  const imageId = () => {
    props.imageId(props.id);
  };

  return (
    <div className={s.wrapper}>
      <nav>
        <Link to="/DetailedCard">
          <img 
          className={s.img} 
          src={props.img ? props.img : props.items.arr[props.items.imageId].link}
          alt="img" 
          onClick={imageId} 
          />
        </Link>
      </nav>

      <p>{props.descr}</p>
      <div className={s.btnGroup}>
        <button className={s.removeBtn} onClick={showIndex}>
          Remove
        </button>
        <button className={s.commentsBtn}>
          <FiMessageCircle /> 1
        </button>
      </div>
    </div>
  );
}

export default Card;
