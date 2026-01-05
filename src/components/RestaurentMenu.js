import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResaturentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const [setResInfo] = useState(null);
  // useEffect(() => {
  //   fethMenu();
  // }, []);
  const param = useParams();
  const { id } = param;
  const resInfo = useResaturentMenu(id);

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
