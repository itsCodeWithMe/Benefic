import Heading_Para from "../Heading_Para";
import JSON from "../../json/services.json";
import SCR from "./service_card_rendering";

function Services() {
  return (
    <section className="servicesCarding">
      <div className="container">
        <Heading_Para
          className="my-4"
          Heading={JSON.Attributes.heading}
          Para={JSON.Attributes.para}
        ></Heading_Para>
        <SCR></SCR>
      </div>
    </section>
  );
}

export default Services;
