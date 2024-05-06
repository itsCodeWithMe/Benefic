import React from 'react';
import { Fade } from 'react-slideshow-image';
import Serviceimage1 from "../../favicons/Service_Banner1.webp";
import Serviceimage2 from "../../favicons/Service_Banner2.webp";
import Serviceimage3 from "../../favicons/Service_Banner3.webp";
import 'react-slideshow-image/dist/styles.css'

// const fadeImages = [
//   {
//     url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//   },
// ];
const fadeImages=[
    Serviceimage1,Serviceimage2,Serviceimage3
]

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade autoplay arrows={false} duration={2000}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img  src={fadeImage} />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;