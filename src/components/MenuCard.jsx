import React from "react";
import { IMG_URL_MENU as IMG_URL } from "../utils/constants";

function MenuCard({ Menu }) {
  const { name, inStock, description, price, defaultPrice, ratings, imageId } =
    Menu;
  const Price = price ?? defaultPrice;
  return (
    <>
      <div className=" p-2 rounded-lg w-60   min-h-[28rem] h-100 bg-gradient-to-b bg-amber-100 hover:bg-lime-300">
        <div className="">
          <img
            className="size-50 rounded-lg  justify-self-center "
            src={IMG_URL + imageId}
            alt="Img"
          />
        </div>
        <div className="">
          <h3 className="font-bold">{name}</h3>
          <p className="">
            {Intl.NumberFormat("en-IN", {
              style: "currency",
              maximumFractionDigits: 2,
              currency: "INR",
            }).format(Price / 100)}
          </p>
          {ratings?.aggregatedRating?.rating && (
            <p className="">
              {ratings?.aggregatedRating?.rating}
              {"    "}
              <i style={{ color: "green" }} className="bi bi-star-fill"></i>
              {`(${ratings?.aggregatedRating?.ratingCountV2})`}
            </p>
          )}
          <p className="">{inStock}</p>
          <p className=" d-inline py-2 px-1 rounded-sm ">More Details...</p>
          {/* <p className="cardAttr">{description}</p> */}
        </div>
      </div>
    </>
  );
}

export default MenuCard;
