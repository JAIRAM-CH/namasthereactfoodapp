import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { AxiosInst } from "../components/axios/api";
const useRestaurantMenu = (resId) => {
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

  return Menu;
};

export default useRestaurantMenu;
