import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CDN_URL } from "../utils/constant";
const RestaurentChain = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { resData } = props;
  const { header } = resData;
  const restaurentList = resData.gridElements?.infoWithStyle?.restaurants;
  console.log(resData);
  return (
    <div className="col-12">
      <h5>{header.title}</h5>
      <Carousel responsive={responsive}>
        {restaurentList.map((data) => {
          return (
            <div className="card">
              <div className="card-body p-0">
                <img
                  className="res-image"
                  alt="res-logo"
                  src={CDN_URL + data.info.cloudinaryImageId}
                />
                <h3 className="card-title text-center">{data?.info?.name}</h3>
                <h4 className="cousines">{data?.info?.cuisines?.join(",")}</h4>
                <h4 className="ratings">
                  <b>{data.info.avgRating} stars</b>
                </h4>
                <h4 className="delivery">
                  <b>{data.info.sla.slaString} Minutes</b>
                </h4>

                <h4 className="area">
                  <b>{data.info.areanAME}</b>
                </h4>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default RestaurentChain;
