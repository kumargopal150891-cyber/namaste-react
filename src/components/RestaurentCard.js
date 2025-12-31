import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card col-md-4 col-lg-2 col-sm-6">
      <div className="card">
        <div className="card-body p-0">
          <img
            className="res-image"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
          <h3 className="card-title text-center">{name}</h3>
          <h4 className="cousines">{cuisines.join(",")}</h4>
          <h4 className="ratings">
            <b>{avgRating} stars</b>
          </h4>
          <h4 className="delivery">
            <b>{resData.info.sladeliveryTime} Minutes</b>
          </h4>
          <h4 className="cost-for-two">
            <b>{costForTwo}</b>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
