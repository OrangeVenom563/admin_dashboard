import react from "react";
import ProjectPercent from "./projects_percentage.component";
import projectsDetails from "./projects.data";

const ProjectsContainer = () => {
  return (
    <div className="col-lg-6 mb-4">
      {/* <!-- Project Card Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
          {projectsDetails.map((item, idx) => (
            <ProjectPercent id={idx} {...item} />
          ))}
        </div>
      </div>

      {/* <!-- Color System --> */}
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card bg-primary text-white shadow">
            <div className="card-body">
              Primary
              <div className="text-white-50 small">#4e73df</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-success text-white shadow">
            <div className="card-body">
              Success
              <div className="text-white-50 small">#1cc88a</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-info text-white shadow">
            <div className="card-body">
              Info
              <div className="text-white-50 small">#36b9cc</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-warning text-white shadow">
            <div className="card-body">
              Warning
              <div className="text-white-50 small">#f6c23e</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-danger text-white shadow">
            <div className="card-body">
              Danger
              <div className="text-white-50 small">#e74a3b</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-secondary text-white shadow">
            <div className="card-body">
              Secondary
              <div className="text-white-50 small">#858796</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-light text-black shadow">
            <div className="card-body">
              Light
              <div className="text-black-50 small">#f8f9fc</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
              Dark
              <div className="text-white-50 small">#5a5c69</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
