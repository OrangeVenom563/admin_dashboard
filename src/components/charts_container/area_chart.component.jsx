import React from "react";
import DropDown from '../dropdown/dropdown.component';
import sampleDropMenu from './chartsDropdata';

const AreaChart = () => {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Earnings Overview
          </h6>
          <DropDown dropMenu={sampleDropMenu} fromChart/>
        </div>
        {/* <!-- Card Body --> */}
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
