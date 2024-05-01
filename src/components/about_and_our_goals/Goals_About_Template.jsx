import Heading_Para from "../Heading_Para";
import RightArrow from "../../favicons/Group 9333.png";
import JSON from "../../json/goalsandabouttemplate.json";

function Goals_About_Template({classe, image }) {
  return (
    <section className="goalsandaboutTemplate my-5">
      <div className="container">
        <div
          className={`${classe} position-relative row justify-content-between align-items-center`}
        >
          {classe === "about" && (
            <>
              {" "}
              <div className="col-md-5 mb-3">
                <img className="w-100" src={image} alt="" />
              </div>
              <div className="col-md-6">
                <Heading_Para
                  Heading={JSON.about.heading}
                  Para={JSON.about.subPara}
                />
                <p className="GoalsandAboutPara text-black mb-3">
                  {JSON.about.Para}
                </p>
                <button
                  type="button"
                  className="show_more d-flex align-items-center fw-500 my-5 btn text-white"
                >
                  Show More &nbsp;&nbsp;
                  <img className="arrow_image" src={RightArrow} alt="" />
                </button>
              </div>
            </>
          )}
          {classe === "our_goals flex-row-reverse" && (
            <>
              <div className="col-md-5 mb-3">
                <img className="w-100" src={image} alt="" />
              </div>
              <div className="col-md-6">
                <Heading_Para
                  Heading={JSON.goals.heading}
                  Para={JSON.goals.subPara}
                />
                <p className="GoalsandAboutPara text-black mb-3">
                  {JSON.goals.Para}
                </p>
                <button
                  type="button"
                  className="show_more d-flex align-items-center fw-500 my-5 btn text-white"
                >
                  Show More &nbsp;&nbsp;
                  <img className="arrow_image" src={RightArrow} alt="" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Goals_About_Template;
