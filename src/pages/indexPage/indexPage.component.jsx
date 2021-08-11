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

const IndexPage = () => {
  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />

            <div className="container-fluid">
              <PageHeading />

              <ColorBorderCardsContainer />

              <ChartsContainer />
              
              <div className="row">
                
                <ProjectsContainer/>

                <div className="col-lg-6 mb-4">
                 
                 <Illustrations/>
                  {/* <!-- Approach --> */}
                <Approach/>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
         <Footer/>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
