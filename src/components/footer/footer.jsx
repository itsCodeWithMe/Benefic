import React from "react";
import FooterLogo from "../../favicons/footerLogo.png";
import Location from "../../favicons/Location.png";
import Phone from "../../favicons/phone.png";
import facebook from "../../favicons/facebook.svg";
import instagram from "../../favicons/instagram.svg";
import linkedIn from "../../favicons/linkedin.svg";
import footerDivider from "../../favicons/footerDivider.png";
function Footer() {
  const location = "Bestech Business Towers, Sector-66, Mohali, India";
  return (
    <>
      <footer className="footer bg-green text-white p-4 pt-0">
        <div className="container">
          <div className="row justify-content-between pb-3">
            <div className="col-md-3 col-sm-4">
              <div className="footerLogo">
                <img
                  src={FooterLogo}
                  alt="Logo"
                  className="footer-logo mb-5 w-100"
                />
                <p className="mb-0">
                  Benefic values your privacy. If we ask you for personal
                  information, you can be confident that it will only be used in
                  compliance with our privacy policy.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <h5 className="footer-heading mb-4 fw-500">Quick Links</h5>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <h5 className="footer-heading mb-4 fw-500">
                Contact Information
              </h5>
              <div className="phoneLocation d-flex align-items-start">
                <img src={Phone} alt="" />
                <p>Phone: 123-456-7890</p>
              </div>
              <div className="phoneLocation d-flex align-items-start">
                <img src={Location} alt="" />
                <p>{location}</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <h5 className="footer-heading mb-4 fw-500">Follow Us</h5>
              <div className="footer-links d-flex">
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
                <a href="#">
                  <img src={linkedIn} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
