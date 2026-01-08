import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data, dummy }) => {
  const items = data;
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="mt-2">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-200 flex text-left py-1"
        >
          <div className="w-9/12">
            <div className="name text-sm font-bold flex justify-between">
              <div className="name">{item.card.info.name}</div>
            </div>
            <div className="price font-bold text-sm">
              {"₹"}{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="description text-xs">{item.card.info.description}</p>
          </div>
          <div className="image-container w-3/12">
            <div className="">
              <button
                onClick={() => addItemToCart(item)}
                className="p-2 bg-black absolute shadow-lg mx-1 rounded-sm text-white  text-base addbutton"
              >
                Add +
              </button>
              <img className="w-30" src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
