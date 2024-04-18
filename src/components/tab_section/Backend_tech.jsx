import React from 'react'
import MongoDB from "../../favicons/images/miro.png";
import OwlCarousel from "react-owl-carousel";

function Backend_tech() {
  return (
    <div
      className="tab-pane fade show"
      id="nav-backend"
      role="tabpanel"
      aria-labelledby="nav-backend-tab"
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
  )
}

export default Backend_tech