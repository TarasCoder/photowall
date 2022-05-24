import React from "react";
import Card from "./Card";

function Cards(props) {

const showId = (id) => {
  props.removeBtn(id);
}
const imageId = (id) => {
  props.imageId(id);
}


  return (
    <div>
      <div className="cardWrapper">
        {props.itemObj.map((item, index) => (
          <Card descr={item.descr} img={item.link} id={index} imageId={imageId} removeBtn={showId} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
