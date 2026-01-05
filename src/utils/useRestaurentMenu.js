import { useEffect, useState } from "react";

const useResaturentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch Data
  useEffect(() => {
    const menuData = fethMenu();
  }, []);
  const fethMenu = async () => {
    let url =
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurantMenu/" +
      resId;
    const data = await fetch(url);
    const menuData = await data.json();
    setResInfo(menuData.data);
  };
  return resInfo;
};

export default useResaturentMenu;
