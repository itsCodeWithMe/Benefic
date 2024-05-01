import React from "react";

export const Division = ({ Text }) => {
  const words = Text?.split("<br/>");
  const elements = words?.map((word, index) => (
    <React.Fragment key={index}>
      {word}
      {index !== words.length - 1 && <br />}
    </React.Fragment>
  ));
  return elements;
};

 function Heading_Para({ Heading, Para }) {
  return (
    <div className="Heading_Para my-4">
      <h2 className="mb-md-3 fw-600">{<Division Text={Heading} />}</h2>
      <p className="m-0 fw-500">{<Division Text={Para} />}</p>
    </div>
  );
}

export default Heading_Para;
