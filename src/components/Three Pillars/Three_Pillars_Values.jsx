import React from "react";

// function Three_Pillars_Values({heading,para,image}) {
//   return (
//   <div className="value-card">
//     <img src={image} alt="" />
//     <div className="card-text-value">
//         <h3>{heading}</h3>
//         <p>{para}</p>
//     </div>
//   </div>
//   )
// }
function Three_Pillars_Values({ heading, para, image }) {
  return (
    <div className="value-card position-relative">
            <h3>This is the heading</h3>
            <p>This is the para for the given heading</p>
    </div>
  );
}
export default Three_Pillars_Values;
