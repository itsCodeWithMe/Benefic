import React from "react";
import RightArrow from "../../favicons/Group 9333.png";
import Card from "./Card";
import Heading_Para from "../Heading_Para";
import JSON from "../../json/ourlatestinsight.json";
import OwlCarousel from "react-owl-carousel";

function Cards() {
  return (
    <section className="Card">
      <div className="container">
        <Heading_Para
          Heading={JSON.OurlatestInsight.heading}
          Para={JSON.OurlatestInsight.para}
        ></Heading_Para>
        <div className="row mb-2">
          <OwlCarousel
            className="owl-carousel owl-theme blogslider"
            loop
            margin={20}
            nav
            items={3}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 2,
              },
              1200: {
                items: 3,
              },
            }}
          >
            <div className="item">
              <Card
                image={JSON.Cards.card1.image}
                contentHeading={JSON.Cards.card1.heading}
                contentPara={JSON.Cards.card1.para}
              ></Card>
            </div>
            <div className="item">
              <Card
                image={JSON.Cards.card1.image}
                contentHeading={JSON.Cards.card2.heading}
                contentPara={JSON.Cards.card2.para}
              ></Card>
            </div>
          </OwlCarousel>
        </div>

        <button type="button" className="show_more my-5 btn text-white">
          Show More&nbsp; &nbsp; <img src={RightArrow} alt="" />
        </button>
      </div>
    </section>
  );
}

export default Cards;
