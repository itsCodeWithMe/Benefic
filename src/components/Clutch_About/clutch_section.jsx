import React from 'react'
import Clutch_img from "../../favicons/Clutch.png"
import Img from "../../favicons/Clutch_Rating.png"
import Clutch_Testimonial from './Clutch_Testimonial'
import JSON from "../../json/Clutch.json"

function Clutch_section() {
  return (
    <section className="clutchSec p-5 text-white mx-5 mb-5">
        <div className="container py-5">
        <div className="backGroundClutch">
            <div className="row">
            <div className="col-md-8">
                <img className='bgClutchImage' src={Clutch_img} alt="" />
                <p className='clutch_para fw-600 py-2'>{JSON.para}</p>
                <div className="row">
                    <div className="col-md-6">
                    <Clutch_Testimonial para={JSON.testimonials.testimonial1}></Clutch_Testimonial>
                    </div>
                    <div className="col-md-6">   <Clutch_Testimonial para={JSON.testimonials.testimonial2}></Clutch_Testimonial></div>
                </div>
               
             
            </div>
            <div className="col-md-4 text-end">
                <img className="pb-5 clutchImg"  src={Img} alt="" />
                <p className='pt-5 ReadMorePara position-relative'>Read More Clutch</p>
                

            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Clutch_section