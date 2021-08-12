import React from "react";
import AreaChart from "./area_chart.component";
import PieChart from "./pie_chart.component";

const ChartsContainer = () => {
  return (
    <div className="row">
      <AreaChart />
      <PieChart />
    </div>
  );
};

export default ChartsContainer;
