import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { use, useEffect, useRef, useState } from "react";
import { AxiosInst } from "./axios/api";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constants";
const Body = () => {
  const [Listofrestaurants, setListofrestaurants] = useState([]);
  const [filteredListofrestaurants, setfilteredListofrestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const handleTopSearchRes = () => {
    const filteredreslist = Listofrestaurants.filter((res) => {
      if (res.card.card.info.avgRating > 4.3) return res;
    });
    setfilteredListofrestaurants(filteredreslist);
  };

  //React will run this cleanup function (return) before re-running an effect,
  //  and when unmounting the component.
  useEffect(() => {
    getData()
      .then((res) => {
        setListofrestaurants(res);
        setfilteredListofrestaurants(res);
      })
      .catch((error) => {
        setListofrestaurants([]);
        console.log(error);
      });

    const s = setInterval(() => {
      getData()
        .then((res) => {
          setListofrestaurants(res);
          setfilteredListofrestaurants(res);
        })
        .catch((error) => {
          setListofrestaurants([]);
          console.log(error);
        });
    }, 30000);
    return () => {
      clearInterval(s);
    };
  }, []);

  const getData = async () => {
    const response = await AxiosInst.get(RES_URL);
    return response.data?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
  };

  const handleSearchBtn = () => {
    const filteredListofrestaurants = Listofrestaurants.filter((res) => {
      if (res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        return res;
    });
    setfilteredListofrestaurants(filteredListofrestaurants);
  };

  return Listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex my-4 justify-baseline">
        <div className="">
          <input
            type="text"
            className=" border border-black rounded-sm "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" px-3 py-1 m-2 bg-green-100 rounded-lg "
            onClick={handleSearchBtn}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-3 py-1 m-2 bg-amber-200 rounded-lg "
            onClick={handleTopSearchRes}
          >
            Top Searched Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {filteredListofrestaurants.map((restaurantobj) => (
          <>
            <Link
              to={`restaurant/${restaurantobj.info.id}/${restaurantobj.info.name}`}
              key={restaurantobj.info.id}
            >
              <RestaurantCard resData={restaurantobj.info} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Body;
