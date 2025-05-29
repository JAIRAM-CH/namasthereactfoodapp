import React, { useEffect, useState } from "react";
import { AxiosInst } from "./axios/api";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
function Restaurant() {
  const { resId, resName } = useParams();
  const Menu = useRestaurantMenu(resId);

  return (
    <>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            width: "16rem",
          }}
        >
          {resName}
        </h2>
      </div>

      {Menu &&
        Menu.map((item) => (
          <>
            <div className="menuContainer">
              <MenuCard key={item?.card?.info?.id} Menu={item?.card?.info} />
            </div>
          </>
        ))}
    </>
  );
}

export default Restaurant;
