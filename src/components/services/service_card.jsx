import React from "react";

function Service_card({ image, Card_title, Card_para }) {
  return (
    <div className="card services py-4 px-2 mt-4">
      <div className="service_card d-flex align-items-center">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <h5 className="card-title text-capitalize text-black fw-600">
          {Card_title}
        </h5>
      </div>
      <div className="card-body p-0">
        <p className="card-text mt-4">{Card_para}</p>
      </div>
    </div>
  );
}

export default Service_card;
