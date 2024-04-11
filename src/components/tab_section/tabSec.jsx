import React from "react";
import TechnologyTabs from "./technologyTabs";
import UxTabs from "./uxTabs";
import Techarrow from "../../favicons/images/techarrow.svg";
import TabSec_JSON from "../../json/tabSec.json";

function TabSec() {
  return (
    <section className="tech_sec py-5 nopadding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center fw-600 pb-5 text-black text-uppercase">
              {TabSec_JSON.Attributes.Heading}
            </h2>
            <div className="technology_tabs">
              <nav>
                <div
                  className="nav nav-tabs pb-5 mb-4 justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active text-black fw-500"
                    id="nav-tech-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-tech"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Technology Expertise
                    <img src={Techarrow} />
                  </button>
                  <button
                    className="nav-link text-black fw-500"
                    id="nav-expertise-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-expertise"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    UX Expertise <img src={Techarrow} />
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <TechnologyTabs></TechnologyTabs>
                <UxTabs></UxTabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabSec;
