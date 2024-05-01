import React from "react";
import JSON from "../../json/client_about.json";

function client_about() {
  return (
    <section className="about_client py-5 my-4 mt-5 ">
      <div className="container">
        <div className="row justify-content-evenly px-5">
            
          {Object.entries(JSON).map(([key, value]) => {
            const number = key.replace("Card", "");
            return (
              <div key={key} className={`col-md-2 position-relative ${number === "5" ? "" : "client_about_border"}`}>
                <p className="client_about_head fw-600">{value.head}</p>
                <p className="client_about_para fw-600">{value.para}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

export default client_about;
