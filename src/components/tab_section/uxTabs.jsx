import React from "react";
import OwlCarousel from "react-owl-carousel";
import Figma from "../../favicons/images/figma.png";

function UxTabs() {
  return (
    <div
      className="tab-pane fade"
      id="nav-ui-expertise"
      role="tabpanel"
      aria-labelledby="nav-expertise-tab"
    >
      <OwlCarousel
        className="owl-carousel owl-theme ui_slider"
        margin={10}
        autoPlay
        loop
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 3,
          },
          1200: {
            items: 5,
          },
        }}
      >
        <div className="item">
          <img src={Figma} />
          <h4>Mongo DB</h4>
        </div>

        <div className="item">
          <img src={Figma} />
          <h4>Mongo DB</h4>
        </div>

        <div className="item">
          <img src={Figma} />
          <h4>Mongo DB</h4>
        </div>

        <div className="item">
          <img src={Figma} />
          <h4>Mongo DB</h4>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default UxTabs;
