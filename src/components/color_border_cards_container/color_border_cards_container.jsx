import React from "react";
import ColorBorderCard from "../color_border_card/color_border_card.component";
import ItemsData from "./itemsdata";

const ColorBorderCardsContainer = () => {
  return (
    <div className="row">
      {ItemsData.map((item, idx) => (
        <ColorBorderCard id={idx} {...item} />
      ))}
    </div>
  );
};

export default ColorBorderCardsContainer;
