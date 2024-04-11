import React from "react";
import MongoDB from "../../favicons/images/mongodb.png";
import OwlCarousel from "react-owl-carousel";

function TechnologyTabs() {
  return (
    <div
      className="tab-pane fade show active"
      id="nav-tech"
      role="tabpanel"
      aria-labelledby="nav-tech-tab"
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

export default TechnologyTabs;
