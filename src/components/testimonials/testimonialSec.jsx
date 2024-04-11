import React from "react";
import TestimonialsSlider from "./testimonialCard";
import Heading_Para from "../Heading_Para";
import JSON from "../../json/testimonials.json";
import OwlCarousel from "react-owl-carousel";

function TestimonialSec() {
  return (
    <section className="testimonialSection">
      <div className="container">
        <Heading_Para Heading={JSON.Attributes.Heading}></Heading_Para>
        <p className="testimonialPara">{JSON.Attributes.Para}</p>
        <OwlCarousel
          className="owl-carousel owl-theme testimonials mt-5 text-center"
          loop
          margin={20}
          nav="true"
          dots="true"
          items={2}
          responsive={{
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1200: {
              items: 2,
            },
          }}
        >
          {Object.keys(JSON.Cards).map((key) => (
            <TestimonialsSlider
              key={key}
              heading={JSON.Cards[key].heading}
              span={JSON.Cards[key].span}
              para={JSON.Cards[key].para}
            />
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}

export default TestimonialSec;
