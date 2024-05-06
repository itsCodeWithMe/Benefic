import React from 'react';
import BannerImage from '../../favicons/BannerImageAbout.png';
import UIUXBannerImage from '../../favicons/UIUX _Design.svg';
import JSON from "../../json/banner.json";
import { Division } from "../Heading_Para";
import { useLocation } from 'react-router-dom';

function BannerAbout() {
  const location = useLocation();
  const slug = location.pathname;
  const aboutBool = (slug === "/about");
  const uiuxBool = (slug === "/ui-ux-designer");

  return (
    <section className={`banner_about ${uiuxBool ? "banner_uiux" : ""} bg-green py-5`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title text-white fw-500">
                {aboutBool && <Division Text={JSON.AboutPageAttributes.heading} />}
                {uiuxBool && <Division Text={JSON.UIUX.heading} />}
              </h1>
              <h4 className='text-white pt-4 fst-italic'>{uiuxBool && <Division Text={JSON.UIUX.subtext} />}</h4>
              <p className="card-text text-white my-4 fw-500">
                {aboutBool && <Division Text={JSON.AboutPageAttributes.para} />}
                {uiuxBool && <Division Text={JSON.UIUX.para} />}
              </p>
              <a href="javascript:void(0)" className="btn text-white mt-3 p-2 px-4">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              {aboutBool && <img className="w-100" src={BannerImage} alt="" />}
              {uiuxBool && <img className="w-100" src={UIUXBannerImage} alt="" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerAbout;
