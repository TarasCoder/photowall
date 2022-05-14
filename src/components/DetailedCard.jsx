import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import s from "./DetailedCard.module.css";

function DetailedCard() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [msgCount, setMsgCount] = useState(1);
  
  const comment = (ev) => {
    setMsg(ev.target.value);
  };

  const enterData = (ev) => {
    ev.preventDefault();
    setMsgs([...msgs, msg]);
    setMsg("");
    setMsgCount(msgCount + 1);
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <h1 className="headerText">Photowall</h1>
        </Link>
      </nav>
      <div className={s.wrapper}>
        <div className={s.cardWrapper}>
          <Card />
        </div>
        <div className={s.comments}>
          {msgs.map((item) => (
            <p>Hi there {item}</p>
          ))}
          <form onSubmit={enterData}>
            <input
              className={s.inputComment}
              type="text"
              value={msg}
              placeholder="Comment"
              onChange={comment}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetailedCard;
