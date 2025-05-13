import React from "react";
import { IMG_URL_MENU as IMG_URL } from "../utils/constants";

function MenuCard({ Menu }) {
  const { name, inStock, description, price, defaultPrice, ratings, imageId } =
    Menu;
  const Price = price ?? defaultPrice;
  return (
    <>
      <div className="MenuCard">
        <div className="Menu">
          <h3 className="cardAttr">{name}</h3>
          <p className="cardAttr">
            {Intl.NumberFormat("en-IN", {
              style: "currency",
              maximumFractionDigits: 2,
              currency: "INR",
            }).format(Price / 100)}
          </p>
          {ratings?.aggregatedRating?.rating && (
            <p className="cardAttr">
              {ratings?.aggregatedRating?.rating}
              {"    "}
              <i style={{ color: "green" }} className="bi bi-star-fill"></i>
              {`(${ratings?.aggregatedRating?.ratingCountV2})`}
            </p>
          )}
          <p className="cardAttr">{inStock}</p>
          <p>
            <a
              className="btn btn-light"
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              More Details...
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            {description}
          </div>
          {/* <p className="cardAttr">{description}</p> */}
        </div>
        <div className="MenuimgContainer">
          <img className="Menuimg" src={IMG_URL + imageId} alt="Img" />
        </div>
      </div>
    </>
  );
}

export default MenuCard;
