import React from "react";
import Woman from "../../favicons/woman_form_img.png";
import Form from "./form";
import { Division } from "../Heading_Para";
import Form_JSON from "../../json/form_section.json";

function Form_section() {
  return (
    <section className="formSection pt-md-5 my-md-5">
      <div className="container">
        <div className="text pb-5">
          <h2 className="form_main_heading fw-600 text-black text-center text-capitalize mb-3">
            {Form_JSON.Attributes.Heading}
          </h2>
          <p className="form_main_para text-black text-center">
            <Division Text={Form_JSON.Attributes.Para} />
          </p>
        </div>
        <div className="row mt-md-5 justify-content-between">
          <div className="col-md-6">
            <Form></Form>
          </div>
          <div className="col-md-5">
            <img className="w-100 rounded" src={Woman} alt="WomanPortrait" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form_section;
