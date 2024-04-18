import WWA_Image from "../../favicons//WWA_image.png"
import JSON from "../../json/about_EEE_WWA.json"
import { Division } from '../Heading_Para'
function Who_we_are() {
  return (
    <section className="who_we_are py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className='pb-2'>{JSON.WWA.heading}</h2>
                    <p className='pt-3 fw-500'>
                        <Division Text={JSON.WWA.para}></Division>
                        </p>
                </div>
                <div className="col-md-6">
                    <img className="w-100"src={WWA_Image} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Who_we_are;