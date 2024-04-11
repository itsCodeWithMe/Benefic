import React from "react";
import Heading_Para from "../Heading_Para";
import Allcode from "../../favicons/Allcode.png";
import Godaddy from "../../favicons/Godaddy.png";
import Microsoft from "../../favicons/Microsoft.png";
import Client_JSON from "../../json/client.json";

function Client() {
  return (
    <section className="client mb-md-5">
      <div className="container">
        <Heading_Para
          Heading={Client_JSON.Attributes.Heading}
          Para={Client_JSON.Attributes.Para}
        ></Heading_Para>

        <div className="row align-items-center py-4 text-center">
          <div className="col-6 col-lg-3">
            <img className="w-100" src={Allcode} alt="" />
          </div>
          <div className="col-6 col-lg-3">
            <img className="w-100" src={Godaddy} alt="" />
          </div>
          <div className="col-6 col-lg-3">
            <img className="w-100" src={Microsoft} alt="" />
          </div>
          <div className="col-6 col-lg-3">
            <img className="w-100" src={Godaddy} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
