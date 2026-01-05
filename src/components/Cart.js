import { useEffect } from "react";

export const Cart = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer started");
    }, 1000);
    console.log("use Effect");

    return () => {
      console.log("unmounted");
      clearInterval(timer);
    };
  }, []);
  console.log("render");
  return (
    <div className="col-12">
      <h3>Cart page</h3>
    </div>
  );
};
