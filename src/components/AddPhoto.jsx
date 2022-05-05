import React from "react";
import s from "./AddPhoto.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddPhoto(props) {
  const [data, setData] = useState({
    link: "",
    descr: "",
  });

  const handleInput = (ev) => {
    const { value, name } = ev.target;
    setData({ ...data, [name]: value });
  };

  const addPost = () => {
    console.log("New Post", data);
    props.itemObj(data);
  };

  return (
    <div>
      <h1 className="headerText">Photowall</h1>
      <form className={s.formGroup}>
        <input
          type="text"
          value={data.link}
          name="link"
          onChange={handleInput}
          placeholder="Link"
        />
        <input
          type="text"
          value={data.descr}
          name="descr"
          onChange={handleInput}
          placeholder="Description"
        />
        <Link to="/">
          <button className={s.addPostBtn} onClick={addPost}>
            POST
          </button>
        </Link>
      </form>
    </div>
  );
}

export default AddPhoto;
