import React from 'react'
import EEE_image from "../../favicons/EEE.png"
import JSON from "../../json/about_EEE_WWA.json"
import RightArrow from "../../favicons/Group 9333.png";
import { Division } from '../Heading_Para';
import { useLocation } from 'react-router-dom';


function about_EEE() {
  const location = useLocation();
  const slug = location.pathname;
  const aboutBool = (slug === "/about");
  const uiuxBool = (slug === "/ui-ux-designer");
  return (
    <section className="about_EEE py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className="w-100" src={EEE_image} alt="" />
                </div>
                <div className="col-md-6">
                    <p className='EEE_span fw-600'>
                        {JSON.EEE.span}
                    </p>
                    <h2 className='EEE_heading fw-600'>
                    <Division Text={JSON.EEE.heading}></Division></h2>
                    <p className='EEE_para pt-3'>{JSON.EEE.para}</p>
                   {aboutBool    &&  <button
                  type="button"
                  className="show_more d-flex align-items-center my-5 btn text-white"
                >
                  Get a Qoute &nbsp;&nbsp;
                  <img className="arrow_image" src={RightArrow} alt="" />
                </button>}
                </div>
            </div>
        </div>
    </section>
  )
}

export default about_EEE