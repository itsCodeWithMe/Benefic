import React from 'react'
import BannerImage from '../../favicons/Service_Banner1.webp'
import JSON from "../../json/banner.json";
import { Division } from "../Heading_Para";
import Slideshow from "../banner/image_slideshow";


function Bannerservice() {
  return (
    <section className="banner_about banner_service py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="card-body">
            <h1 className="card-title fw-600">

            <Division Text={JSON.ServicesPageAttr.heading} />
            </h1>
            <p className="card-text my-4 fw-500">
            <Division Text={JSON.ServicesPageAttr.para} />
            </p>
            <a href="#" className="btn text-white mt-3 p-2 px-4">
             Get Started
            </a>
          </div>
        </div>
      
      <div className="col-md-6">
          <div className="image">
            {/* <img className="w-100" src={BannerImage} alt="Service" /> */}
            <Slideshow></Slideshow>

          </div>
        </div>
    </div>
    </div>
  </section>
  )
}

export default Bannerservice;