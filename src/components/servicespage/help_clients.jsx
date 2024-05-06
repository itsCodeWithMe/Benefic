import React from "react";
import Allcode from "../../favicons/Allcode.png";
import Godaddy from "../../favicons/Godaddy.png";
import Microsoft from "../../favicons/Microsoft.png";
import JSON from "../../json/servicepage.json"

function Helpclient() {
  return (
    <section className="client mb-md-5 py-5 help_client">
      <div className="container py-5">
      <h2 className="text-black fw-600 text-center pb-4 ">{JSON.helpclients.heading}</h2>        
      <div className="row align-items-center py-4 text-center">
          <div className="col-6 col-lg-3">
            <img className="w-75" src={Allcode} alt="" />
          </div>
          <div className="col-6 col-lg-3">
            <img className="w-75" src={Godaddy} alt="" />
          </div>
          <div className="col-6 col-lg-3">
            <img className="w-75" src={Microsoft} alt="" />
          </div>
          <div className="col-6 col-lg-3">
            <img className="w-75" src={Godaddy} alt="" />
          </div>
        </div>
      </div>
    </section>

  );
}

export default Helpclient;
