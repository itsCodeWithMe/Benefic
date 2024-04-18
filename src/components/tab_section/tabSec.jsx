import Techarrow from "../../favicons/images/techarrow.svg";
import TabSec_JSON from "../../json/tabSec.json";
import {useLocation} from "react-router-dom"
import Homepage_tabs from "./Homepage_tabs";
import Aboutpage_tabs from "./Aboutpage_tabs";
import Background from "../../favicons/Background_Our_Focus.png"
function TabSec() {
  const urlSlugLocation=useLocation();
  const slug=urlSlugLocation.pathname;
  const heading = slug === "/" ? TabSec_JSON.HomePage.Heading : TabSec_JSON.AboutPage.Heading;
  const Tabs = slug === "/" ? TabSec_JSON.HomePage.Tabs : TabSec_JSON.AboutPage.Tabs;

  return (
    <>
    {slug==="/about" && <section className="imageForAbout">
      <img className="w-100"src={Background} alt="" />
    </section>
    }
    <section className={`tech_sec ${slug==="/about"&&`tech_sec_about`} py-5 nopadding`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center fw-600 pb-5 text-black text-uppercase">
              {heading}
            </h2>
            <div className="tabbing">
              <nav>
                <div
                  className="nav nav-tabs pb-5 mb-4 justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  {Object.values(Tabs).map(tab => (
                    <button
                      key={tab.id}
                      className={tab.className}
                      id={tab.id}
                      data-bs-toggle="tab"
                      data-bs-target={tab.dataBsTarget}
                      type="button"
                      role="tab"
                      aria-controls={tab.ariaControls}
                      aria-selected={tab.ariaSelected}
                    >
                      {tab.label}
                      <img src={Techarrow} />
                    </button>
                  ))}
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                {slug==="/"&&<Homepage_tabs></Homepage_tabs>}
                {slug==="/about"&&<Aboutpage_tabs></Aboutpage_tabs>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default TabSec;
