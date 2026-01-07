import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResaturentMenu from "../utils/useRestaurentMenu";
import menuData from "../utils/mockData";
import ResCategory from "./ResCategory";

const RestaurentMenu = () => {
  const [setResInfo] = useState(null);

  // useEffect(() => {
  //   fethMenu();
  // }, []);
  const param = useParams();
  const { id } = param;
  const res = useResaturentMenu(id);

  const [showIndex, setShowIndex] = useState(null);
  const dummy = "dummy";

  const resInfo = menuData;

  const info = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((ele) => {
      return (
        ele.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // const { name, cuisines, costForTwoString } =
  // resInfo?.cards[2]?.card?.card?.info;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="col-12">
      <div className="text-center text-2xl">
        <h3 className="font-bold my-2">{info.name}</h3>
        <p>{info.cuisines.join(",")}</p>
        {/* controlled component */}
        {categories.map((category, index) => (
          <ResCategory
            data={category?.card?.card}
            showItems={index === showIndex && true}
            key={category.card.card.categoryId}
            dummy={dummy}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
