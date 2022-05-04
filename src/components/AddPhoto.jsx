import React from "react";
import s from "./AddPhoto.module.css";

function AddPhoto() {
  const addPost = (ev) => {
    ev.preventDefault();
    console.log("New Post");
  };

  return (
    <div>
      <h1 className="headerText">Photowall</h1>
      <form className={s.formGroup}>
        <input type="text" placeholder="Link" />
        <input type="text" placeholder="Description" />
        <button className={s.addPostBtn} onClick={addPost}>POST</button>
      </form>
    </div>
  );
}

export default AddPhoto;
