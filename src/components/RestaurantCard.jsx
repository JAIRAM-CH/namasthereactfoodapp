import { Link } from "react-router-dom";
import { IMG_URL_RESCARD as IMG_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  return (
    <div className="rescard">
      <img className="cardimg" src={IMG_URL + cloudinaryImageId} alt="Img" />
      <h4>{name} </h4>
      <p className="cardAttr">{cuisines.join(", ")}</p>
      <p className="cardAttr">{avgRating} Stars</p>
      <p className="cardAttr">{sla.slaString}</p>
    </div>
  );
};
export default RestaurantCard;
