import React from "react";

function PrivacyandTerms() {
  return (
    <section className="PrivacyandTerms text-white py-2">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <p className="mb-0 fw-500">
              Copyright © 2021. Benefic Business Solutions. All Rights Reserved
            </p>
          </div>
          <div className="col-md-5">
            <div className="row justify-content-end ">
              <div className="col-md-6 text-right">
                <p className="make_center text-end mb-0 fw-500">
                  Terms and Conditions
                </p>
              </div>
              <div className="col-md-5">
                <p className="make_center text-end mb-0 fw-500">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyandTerms;
