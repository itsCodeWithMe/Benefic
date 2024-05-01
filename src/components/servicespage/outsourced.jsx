import React from 'react'
import JSON from "../../json/servicepage.json"
import { Division } from '../Heading_Para';


function Outsourceservices() {
  return (
    <section className="High_Quality outsource text-center py-5 bg-white">
        <div className="container">
                
            <h2 className='fw-600 pt-5 text-white'>
                <Division Text={JSON.outsourceservice.heading}/></h2>
                <p className="text-white max_width"><Division Text={JSON.outsourceservice.para}/></p>
            <a href="#" className="btn text-white mt-3 p-2 px-4 mb-5 bg-green">
             Get started
            </a>
        </div>

    </section>
  )
}

export default Outsourceservices