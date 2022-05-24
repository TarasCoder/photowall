import React from "react";
import Cards from "./Cards";
import { HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import s from "./Home.module.css";

function Home(props) {

const removeBtn = (id) =>{
  props.removeBtn(id);
}
const imageId = (id) =>{
  props.imageId(id);
}

  return (
    <div>
      <h1 className="headerText">Photowall</h1>
      <nav>
        <Link to="/AddPhoto">
          <HiPlusCircle className="linkClass" size={70} />
        </Link>
      </nav>

      <Cards itemObj={props.itemObject} imageId={imageId} removeBtn={removeBtn} />
    </div>
  );
}

export default Home;
