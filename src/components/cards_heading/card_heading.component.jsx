import React from "react";

const CardHeading = ({title}) => {
  return (
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">
        {title}
      </h6>
    </div>
  );
};

export default CardHeading;