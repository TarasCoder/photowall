import React from "react";
import Card from "./Card";

function Cards(props) {

  return (
    <div>
      <div className="cardWrapper">
        {props.itemObj.map((item) => (
          <Card descr={item.descr} img={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
