import React from 'react'
import { Helmet } from 'react-helmet';
import * as Imports from "../components/Imports"
function Homepage() {
  return (
   <>
   <Helmet>
      {/* <title>{Metadata.Homepage.title}</title> */}
      <title>BENEFIC
MARKETING & DESIGN
THAT WORKS</title>
      <meta name="description" content="Description for the home page" />
    </Helmet>
   <Imports.Banner></Imports.Banner>
      <Imports.Services></Imports.Services>
      <Imports.Goals_About_Template classe="about" image={Imports.AboutUsImg} />
      <Imports.Goals_About_Template classe="our_goals flex-row-reverse" image={Imports.OurGoalsImg} />
      <Imports.TabSec></Imports.TabSec>
      <Imports.Serving_globally></Imports.Serving_globally>
      <Imports.Cards></Imports.Cards>
      <Imports.Client></Imports.Client>
      <Imports.TestimonialSec></Imports.TestimonialSec>
      <Imports.Form_section></Imports.Form_section>
   </>
  )
}

export default Homepage;