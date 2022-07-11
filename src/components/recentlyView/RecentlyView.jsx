import React from "react";
import RecentContent from "./RecentContent";
import Slider from "react-slick";
import "./RecentlyView.css";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i class="fa-solid fa-arrow-left-long"></i>
      </button>
    </div>
  );
};
const RecentlyView = ({ recents }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="recently_view">
        <div className="container">
          <div className="view_header mb-4">
            <h4>Recently Viewed</h4>
          </div>

          <Slider {...settings}>
            {recents.map((recent) => (
              <RecentContent key={recent.id} recent={recent} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RecentlyView;
