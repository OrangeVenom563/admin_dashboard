import React from "react";
import AreaChart from "./area_chart.component";
import PieChart from "./pie_chart.component";

// container for area and pie chart components
const ChartsContainer = () => {
  return (
    <div className="row">
      <AreaChart />
      <PieChart />
    </div>
  );
};

export default ChartsContainer;
