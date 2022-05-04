import React from "react";
import Card from "./Card"
import { useState } from 'react';

function Cards() {

  const [allCards, setCards] = useState([1,5,2]);

  return (
    <div>
      <div className="cardWrapper">
        {allCards.map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default Cards;
