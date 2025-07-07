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
      <h2 className=" text-center m-4 ">{resName}</h2>

      <div className="flex flex-wrap gap-2 border justify-center">
        {Menu &&
          Menu.map((item) => (
            <>
              <MenuCard key={item?.card?.info?.id} Menu={item?.card?.info} />
            </>
          ))}
      </div>
    </>
  );
}

export default Restaurant;
