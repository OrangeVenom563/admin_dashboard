import React from "react";
import LeftColorCard from "../left_color_card/left_color_card.component";
import ItemsData from "./itemsdata";

const RowContainer = () => {
  return (
    <div className="row">
      {ItemsData.map((item, idx) => (
        <LeftColorCard id={idx} {...item} />
      ))}
    </div>
  );
};

export default RowContainer;
