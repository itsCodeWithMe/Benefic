import React from "react";
import { useState } from "react";
function Form() {
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  return (
    <form className="form">
      <div className="container">
      <div className="row mb-4">
        <div className="col-6">
          <input
            type="text"
            className="w-100 rounded-pill py-3 px-4 border-0"
            placeholder="First Name"
            id="First_Name"
            value={Firstname}
            onChange={(e) => {
              console.log(e.target.value);
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="col-6">
          {" "}
          <input
            type="text"
            className="w-100  rounded-pill py-3 px-4 border-0"
            placeholder="Last Name"
            id="Last_Name"
            value={Lastname}
            onChange={(e) => {
              console.log(e.target.value);
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 mb-4">
          <input
            type="email"
            className="w-100  rounded-pill py-3 px-4 border-0 "
            placeholder="Email"
            id="Email"
            value={Email}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <textarea
            className="w-100  py-3 px-4 border-0"
            placeholder="Your Message"
            value={Message}
            id="Msgbox"
            onChange={(e) => {
              console.log(e.target.value);
              setMessage(e.target.value);
            }}
          />
        </div>
      </div>
      <a href="#" className="btn text-white mt-3 p-2 px-4">
        Send Message
      </a>
      </div>
    </form>
  );
}

export default Form;
