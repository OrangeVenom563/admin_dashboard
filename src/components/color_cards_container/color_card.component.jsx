import React from "react";

const ColorCard = ({ colorName, colorCode, textColor }) => {
  return (
    <div className="col-lg-6 mb-4">
       <div className={`card ${!textColor? 'text-white' : 'text-black'} bg-${colorName.toLowerCase()} shadow`}>
        <div className="card-body">
          {colorName}
          <div className={!textColor ? "text-white-50" : `${textColor}-50`}>
            {colorCode}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ColorCard;

<div class="col-lg-6 mb-4">
  <div class="card bg-primary text-white shadow">
    <div class="card-body">
      Primary
      <div class="text-white-50 small">#4e73df</div>
    </div>
  </div>
</div>;
