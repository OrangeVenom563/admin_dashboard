import react from "react";
import ProjectPercent from "./projects_percentage.component";
import projectsDetails from "./projects.data";
import CardHeading from "../cards_heading/card_heading.component";
import ColorCardsContainer from "../color_cards_container/color_cards_container";

// container for project field percentage components
const ProjectsContainer = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <CardHeading title="Projects" />
        <div className="card-body">
          {projectsDetails.map((item, idx) => (
            <ProjectPercent id={idx} {...item} />
          ))}
        </div>
      </div>

      {/* <!-- Color System --> */}
      <ColorCardsContainer/>
    </div>
  );
};

export default ProjectsContainer;
