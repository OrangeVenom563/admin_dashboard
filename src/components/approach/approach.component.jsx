import React from "react";
import CardHeading from "../cards_heading/card_heading.component";

// approach component
const Approach = () => {
  return (
    <div className="card shadow mb-4">
      <CardHeading title="Development Approach" />
      <div className="card-body">
        <p>
          SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in
          order to reduce CSS bloat and poor page performance. Custom CSS
          classNamees are used to create custom components and custom utility
          classNamees.
        </p>
        <p className="mb-0">
          Before working with this theme, you should become familiar with the
          Bootstrap framework, especially the utility classNamees.
        </p>
      </div>
    </div>
  );
};

export default Approach;
