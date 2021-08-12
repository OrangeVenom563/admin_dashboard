import React from "react";
import cardsData from "./cards_data";
import ColorCard from "./color_card.component";

// container for cards filled with color
const ColorCardsContainer = () => {
  return (
    <div className="row">
      {cardsData.map((item, idx) => {
        console.log(item);
        return <ColorCard id={idx} {...item} />;
      })}
    </div>
  );
};

export default ColorCardsContainer;
