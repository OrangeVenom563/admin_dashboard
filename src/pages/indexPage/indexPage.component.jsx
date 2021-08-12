import React from "react";
import ChartsContainer from "../../components/charts_container/charts_container.component";
import PageHeading from "../../components/pageheading/pageheading.component";
import ColorBorderCardsContainer from "../../components/color_border_cards_container/color_border_cards_container";
import Sidebar from "../../components/sidebar/sidebar.component";
import TopBar from "../../components/topbar/topbar.component";
import ProjectsContainer from "../../components/projects_container/projects_container.component";
import Illustrations from "../../components/illustrations/illustrations.component";
import Approach from "../../components/approach/approach.component";
import Footer from "../../components/footer/footer.component";
import LogoutModal from "../../components/logout_modal/logout_modal.component";

const IndexPage = () => {
  return (
    <div className="page-top">
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />

            <div className="container-fluid">
              <PageHeading/>

              <ColorBorderCardsContainer />

              <ChartsContainer />
              
              <div className="row">
                <ProjectsContainer />
              

                <div className="col-lg-6 mb-4">
                  <Illustrations />
                  
                  <Approach />
                
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <LogoutModal />
    </div>
  );
};

export default IndexPage;
