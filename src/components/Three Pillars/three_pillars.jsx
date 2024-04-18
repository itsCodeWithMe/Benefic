import React from "react";
import AnimationSection from "./Animation_section.jsx";
import JSON from "../../json/Three_Pillars.json"
import image1 from "../../favicons/Three_Pillars_Img1.png"
import image2 from "../../favicons/Three_Pillars_Img2.png"
import image3 from "../../favicons/Three_Pillars_Img3.png"
import Three_Pillars_Values from "./Three_Pillars_Values.jsx";
import { Division } from "../Heading_Para.jsx";


function Three_pillars() {
    const images = [image1, image2, image3];
  return (
         <section className="three_pillars">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6">
                     <AnimationSection />  

                </div>
                <div className="col-md-6">
                {/* <h2>{JSON.Attributes.heading}</h2> */}
                <h2 className="pb-4"><Division Text={JSON.heading}/></h2>

                {Object.keys(JSON.Points).map((key, index) => {
  console.log(index);
  return (
    <Three_Pillars_Values
      key={index}
      image={images[index]}
      heading={JSON.Points[key].heading}
      para={JSON.Points[key].para}
    />
  );
})}


                </div>
            </div>
        </div>
      </section>
  );
}

export default Three_pillars;
