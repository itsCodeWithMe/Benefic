import React from 'react'
import * as Imports from "../components/Imports"
function Homepage() {
  return (
   <>

   <Imports.Banner></Imports.Banner>
      <Imports.Services></Imports.Services>
      <Imports.Goals_About_Template classe="about" image={Imports.AboutUsImg} />
      <Imports.Goals_About_Template classe="our_goals flex-row-reverse" image={Imports.OurGoalsImg} />
      <Imports.TabSec></Imports.TabSec>
      <Imports.Serving_globally></Imports.Serving_globally>
      <Imports.Cards></Imports.Cards>
      <Imports.TestimonialSec></Imports.TestimonialSec>
      <Imports.Client></Imports.Client>
      <Imports.Form_section></Imports.Form_section>
   </>
  )
}

export default Homepage;