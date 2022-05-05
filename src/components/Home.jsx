import React from "react";
import Cards from "./Cards";
import { HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import s from "./Home.module.css";

function Home(props) {

  return (
    <div>
      <h1 className="headerText">Photowall</h1>
      <nav>
        <Link to="/AddPhoto">
          <HiPlusCircle className="linkClass" size={70} />
        </Link>
      </nav>

      <Cards itemObj={props.itemObject}/>
    </div>
  );
}

export default Home;
