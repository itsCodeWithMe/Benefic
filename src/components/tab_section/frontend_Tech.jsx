import React from "react";
import MongoDB from "../../favicons/images/magento.png";
import OwlCarousel from "react-owl-carousel";

function Frontend_tech() {
  return (
    <div
      className="tab-pane fade show active"
      id="nav-frontend"
      role="tabpanel"
      aria-labelledby="nav-frontend-tab"
    >
      <OwlCarousel
        className="owl-carousel owl-theme tech_slider"
        margin={10}
        autoPlay
        loop
        items={3}
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
          <img src={MongoDB} />
          <h4>Mongo DB</h4>
        </div>

        <div className="item">
          <img src={MongoDB} />
          <h4>Mongo DB</h4>
        </div>

        <div className="item">
          <img src={MongoDB} />
          <h4>Mongo DB</h4>
        </div>

        <div className="item">
          <img src={MongoDB} />
          <h4>Mongo DB</h4>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Frontend_tech;
