import React from 'react'
import { Division } from '../Heading_Para';
import createidentity from '../../favicons/create_identity.webp'
import JSON from "../../json/servicepage.json"
import Cards from "../services/service_card_rendering"


function Serviceidentity() {
  return (
    <section className="about_EEE serviceidentity pb-5">
    <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <img className="w-100"  src={createidentity} alt="" />
                </div>
                <div className="col-md-7 ps-5">
                    <h2 className='EEE_heading fw-500 text-white text-uppercase'>
                    <Division Text={JSON.createidentity.heading}></Division></h2>
                    <p className='EEE_para pt-3 text-white'>{JSON.createidentity.para}</p>
                </div>
            </div>
            <div className="cards_services">
                <Cards></Cards>
            </div>
        </div>
    </section>
  )
}

export default Serviceidentity