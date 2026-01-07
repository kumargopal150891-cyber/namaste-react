import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  return (
    <div className=" w-8/12 bg-gray-50 p-4 shadow-lg mx-auto my-2">
      <div
        className="  flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-sm">
          {data.title}({data.itemCards?.length})
        </span>
        <span className="down-arrow text-sm font text-gray-50 ">⬇️</span>
      </div>
      {/* accordian Bosy */}
      {showItems && <ItemList data={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default ResCategory;
