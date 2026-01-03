import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fethMenu();
  }, []);
  const param = useParams();
  console.log(param);
  const { id } = param;
  console.log(id);

  const fethMenu = async () => {
    let url =
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurantMenu/" +
      id;

    const data = await fetch(url);
    const menuData = await data.json();
    console.log(menuData.data);
    setResInfo(menuData.data);
  };
  const info = resInfo?.cards[2]?.card?.card?.info;

  // const { name, cuisines, costForTwoString } =
  // resInfo?.cards[2]?.card?.card?.info;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="col-12">
      <div className="menu">
        <h3 className="mt-2">{info?.name} </h3>
        <h5> {info.cuisines.join(",")}</h5>
        <h5>{info.costForTwoMessage}</h5>
        <h4>Menu</h4>
        <ul className="menu-list">
          <li>Biryani</li>
          <li>Burger</li>
          <li>Diet coke</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
