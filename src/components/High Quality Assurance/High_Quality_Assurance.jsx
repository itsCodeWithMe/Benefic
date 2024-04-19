import React from 'react'
import JSON from "../../json/High_Quality_Assurance.json"
import { Division } from '../Heading_Para'
function High_Quality_Assurance() {
  return (
    <section className="High_Quality text-center py-5">
        <div className="container">
            <h2 className='fw-600 py-5'>
                <Division Text={JSON.heading}/></h2>

            <div className="project_assurance">
                <h3 className='fw-600 pt-5 pb-3'><Division Text={JSON.subHeading}/></h3>
                <p><Division Text={JSON.para}/></p>
            </div>
            <a href="#" className="btn text-white mt-3 p-2 px-4 mb-5">
              Contact Us
            </a>
        </div>

    </section>
  )
}

export default High_Quality_Assurance