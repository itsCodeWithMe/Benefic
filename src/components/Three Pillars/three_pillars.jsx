import React from "react";
import AnimationSection from "./Animation_section.jsx";

import image1 from "../../favicons/Rectangle 1248.png"
import Three_Pillars_Values from "./Three_Pillars_Values.jsx";
function Three_pillars() {
  return (
    <div className="App">
      <section className="three_pillars">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                     <AnimationSection />  

                </div>
                <div className="col-md-6">
                {/* <h2>{JSON.Attributes.heading}</h2> */}
                <h2 className="pb-4">My random heading</h2>

                    <Three_Pillars_Values image={image1}></Three_Pillars_Values>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  );
}

export default Three_pillars;
