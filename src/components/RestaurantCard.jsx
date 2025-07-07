import { IMG_URL_RESCARD as IMG_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  return (
    <div className="p-2 rounded-lg w-52  h-100  bg-gradient-to-b bg-amber-100 hover:bg-amber-200 text-black">
      <img
        className=" size-50 rounded-lg  justify-self-center  "
        src={IMG_URL + cloudinaryImageId}
        alt="Img"
      />
      <h4 className="font-bold">{name} </h4>
      <p className="">{cuisines.join(", ")}</p>
      <p className="">
        {avgRating}
        <i style={{ color: "green" }} className="bi bi-star-fill"></i>
      </p>
      <p className="">{sla.slaString}</p>
    </div>
  );
};
export default RestaurantCard;
