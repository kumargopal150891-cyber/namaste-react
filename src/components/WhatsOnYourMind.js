import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CDN_URL } from "../utils/constant";
const WhatsOnYourMind = (props) => {
  const crowselList = props.data;
  console.log(crowselList);
  console.log(props);
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
  return (
    <div className="col-12">
      <h5 className="mt-2">Whats on your Mind</h5>
      <Carousel responsive={responsive}>
        {crowselList.map((item) => {
          return (
            <a href="#" key={item.id}>
              <div className="crowsel-item" height="180" width="144">
                <img
                  className="crowsel-item-image"
                  alt="res-logo"
                  src={CDN_URL + item.imageId}
                />
              </div>
            </a>
          );
        })}
      </Carousel>
    </div>
  );
};

export default WhatsOnYourMind;
