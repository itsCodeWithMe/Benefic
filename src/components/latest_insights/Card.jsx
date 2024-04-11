import Arrowkeys from "../../favicons/Group 9376.png";

function Card({ image, contentPara, contentHeading }) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-black fw-500">{contentHeading} </h5>
        <p className="card-text text-black">{contentPara}</p>
        <a href="#" className="text-decoration-none w-50 fw-600">
          Read More <img src={Arrowkeys} alt="" />
        </a>
      </div>
    </div>
  );
}
export default Card;
