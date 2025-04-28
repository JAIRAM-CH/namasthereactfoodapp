import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/Mockdata";
import { useEffect, useState } from "react";
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
  }, []);

  const getData = async () => {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(reslist);
      }, 2000);
    });
    return data;
  };

  const handleSearchBtn = () => {
    const filteredListofrestaurants = Listofrestaurants.filter((res) => {
      if (
        res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
        return res;
    });
    setfilteredListofrestaurants(filteredListofrestaurants);
  };

  return Listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearchBtn}>Search</button>
        </div>

        <button className="filter-btn" onClick={handleTopSearchRes}>
          Top Searched Restaurants
        </button>
      </div>
      <div className="rescontainer">
        {filteredListofrestaurants.map((restaurantobj) => (
          <RestaurantCard
            key={restaurantobj.card.card.info.id}
            resData={restaurantobj}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
