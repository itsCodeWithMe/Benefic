import React from "react";
import Service_card from "./service_card";
import JSON from "../../json/services.json";
import { Division } from "../Heading_Para";
import DigiImage from "../../favicons/Digital_Marketing.svg"

const itemsPerRow = 3;
const array1 = Object.keys(JSON.Cards);
const array2 = Object.values(JSON.Cards).map((card) => card.para);
// const array3 = Object.values(JSON.Cards).map(
//   (card, index) => `image${index + 1}.jpg`
// );


function Service_card_rendering() {
  return (
    <>
      {[...Array(Math.ceil(array1.length / itemsPerRow))].map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {array1
            .slice(rowIndex * itemsPerRow, rowIndex * itemsPerRow + itemsPerRow)
            .map((item, colIndex) => (
              <div key={colIndex} className="col-md-4">
                <Service_card
                  Card_title={<Division Text={JSON.Cards[item].heading} />}
                  Card_para={array2[rowIndex * itemsPerRow + colIndex]}
                  image={DigiImage}
                />
              </div>
            ))}
        </div>
      ))}
    </>
  );
}

export default Service_card_rendering;
