import React from 'react'
import { Helmet } from 'react-helmet';
import * as Imports from "../components/Imports"

function ContactPage() {
  return (
   <>
    <Helmet>
      <title>Contact Page Title </title>
      <meta name="description" content="Description for the Contact Page" />
    </Helmet>
    <Imports.Banner></Imports.Banner>
      <Imports.TestimonialSec></Imports.TestimonialSec>
      <Imports.Form_section></Imports.Form_section>
   </>
  )
}

export default ContactPage;