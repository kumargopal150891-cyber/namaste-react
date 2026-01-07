import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import WhatsOnYourMind from "./WhatsOnYourMind.js";
import RestaurentChain from "./RestaurentChain.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { WithPromotedLAbel } from "./RestaurentCard";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  // state varible for reactive approch
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterdRestaurent, setfilterdRestaurent] = useState([]);
  const [crowselData, setCrowselData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [topResturentChainData, setTopResturentChaindata] = useState([]);
  const PromotedRestaurentCard = WithPromotedLAbel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const { setUserName, loggedInUser } = useContext(UserContext);

  //

  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9767856&lng=78.1222336&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(url);
    const json = await data.json();
    setListOfRestaurent(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterdRestaurent(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCrowselData(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setTopResturentChaindata(json?.data?.cards[1]?.card?.card);
  };
  const m = Math.random();
  // conditional rendering
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offilne!! Please checkyour internet connection!!
      </h1>
    );
  }

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="whats-on-your-mind-section">
        <WhatsOnYourMind data={crowselData} />
        <hr></hr>
      </div>
      <div className="restaurent-chain">
        <RestaurentChain resData={topResturentChainData} />
      </div>
      <div className="search-container  ">
        <div className="filter my-1">
          <div className="col-12 py-2 d-flex justify-center">
            <input
              type="text"
              className="form-control w-25"
              id="searchText"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => {
                // filter restaurent based search text
                const fillteredList = listOfRestaurent.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText?.toLowerCase());
                });
                setfilterdRestaurent(fillteredList);
              }}
              className="btn btn-primary btn-sm mx-3"
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                const fillteredList = listOfRestaurent.filter((res) => {
                  return res.info.avgRating >= 4;
                });
                setfilterdRestaurent(fillteredList);
              }}
            >
              Top Rated Restaurant
            </button>
            <label className="font-bold mx-5 px-2">User Name:</label>
            <input
              className="border-gray border inline "
              value={loggedInUser}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="res-container flex  ">
        <div className="col-12 py-1">
          <h5>Restaurants with online food delivery in Haridwar</h5>
        </div>

        {/* if restaurent is promoted add promoted label to card */}

        {filterdRestaurent.map((restaurent) =>
          Math.random() >= 0.5 ? (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          ) : (
            <PromotedRestaurentCard
              key={restaurent.info.id}
              resData={restaurent}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
