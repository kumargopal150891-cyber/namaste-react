import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  // state varible for reactive approch
  let [listOfRestaurent, setListOfRestaurent] = useState(resList);
  return (
    <div className="body">
      <div className="search-container  ">
        <div className="filter my-1">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              console.log(listOfRestaurent);
              const fillteredList = listOfRestaurent.filter((res) => {
                return res.info.avgRating >= 4;
              });
              console.log(fillteredList);
              setListOfRestaurent(fillteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex  ">
        <div className="col-12 py-1">
          <h3>Restaurants with online food delivery in Haridwar</h3>
        </div>

        {listOfRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
