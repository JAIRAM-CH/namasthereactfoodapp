import React, { useEffect, useState } from "react";
import { AxiosInst } from "./axios/api";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import { MENU_URL } from "../utils/constants";
function Restaurant() {
  const { resId, resName } = useParams();
  const [Menu, setMenu] = useState([]);

  const getMenu = async () => {
    const response = await AxiosInst.get(MENU_URL + resId);
    const data =
      response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[2]?.card?.card?.itemCards;
    setMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, [resId]);

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
