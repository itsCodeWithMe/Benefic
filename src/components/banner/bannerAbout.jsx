import React from 'react'
import BannerImage from '../../favicons/BannerImageAbout.png'
import JSON from "../../json/banner.json";
import { Division } from "../Heading_Para";

function bannerAbout() {
  return (
    <section className="banner_about bg-green py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="card-body">
            <h1 className="card-title text-white fw-500">
            <Division Text={JSON.AboutPageAttributes.heading} />
            </h1>
            <p className="card-text text-white my-4 fw-500">
            <Division Text={JSON.AboutPageAttributes.para} />
            </p>
            <a href="#" className="btn text-white mt-3 p-2 px-4">
              Get Started
            </a>
          </div>
        </div>
      
      <div className="col-md-6">
          <div className="image">
            <img className="w-100" src={BannerImage} alt="" />
          </div>
        </div>
    </div>
    </div>
  </section>
  )
}

export default bannerAbout