import React from "react";
import DropDown from '../dropdown/dropdown.component';
import sampleDropMenu from './chartsDropdata';

const PieChart = () => {
  return (
    <div className="col-xl-4 col-lg-5">
      <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
          <DropDown dropMenu={sampleDropMenu} />
        </div>
        {/* <!-- Card Body --> */}
        <div className="card-body">
          <div className="chart-pie pt-4 pb-2">
            <canvas id="myPieChart"></canvas>
          </div>
          <div className="mt-4 text-center small">
            <span className="mr-2">
              <i className="fas fa-circle text-primary"></i> Direct
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-success"></i> Social
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-info"></i> Referral
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;