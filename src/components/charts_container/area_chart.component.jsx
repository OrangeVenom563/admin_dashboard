import React from "react";
import CardHeading from "../cards_heading/card_heading.component";
import DropDown from "../dropdown/dropdown.component";
import sampleDropMenu from "./chartsDropdownData";

// areachart component?
const AreaChart = () => {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
       
        <CardHeading
          title="Earnings Overview"
          menu={<DropDown dropMenu={sampleDropMenu} fromChart />}
        />
        
        <div className="card-body">
          <div className="chart-area">
            <canvas id="myAreaChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
