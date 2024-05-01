import React from 'react'
import { Division } from '../Heading_Para';
import brandfirst from '../../favicons/brand-first.webp';
import JSON from '../../json/servicepage.json'

function Brandfirst() {
  return (
    <section className="about_EEE brandfirst py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-5 pe-5">
                    <img className="w-100" src={brandfirst} alt="" />
                </div>
                <div className="col-md-7 ps-5">
                    <h2 className='EEE_heading fw-600 text-uppercase'>
                    <Division Text={JSON.brandfirst.heading}></Division></h2>
                    <p className='EEE_span text-black fw-400 py-3'>
                        {JSON.brandfirst.span}
                    </p>
                    <p className='EEE_para pt-3'>{JSON.brandfirst.para}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brandfirst