import React from "react";
import bannerImage3 from "../../favicons/bannerImage3.png";
import JSON from "../../json/banner.json";
import { Division } from "../Heading_Para";

function Banner() {
  return (
    <section className="banner_section py-3 pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="image">
              <img className="w-100" src={bannerImage3} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title text-white fw-500">
                <Division Text={JSON.HomepageAttributes.heading} />
                <span className="fw-500 fst-italic">
                  {JSON.HomepageAttributes.span}
                </span>
              </h1>
              <p className="card-text text-white my-4 fw-500">
                {JSON.HomepageAttributes.para}
              </p>
              <a href="#" className="btn text-white mt-3 p-2 px-4">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
