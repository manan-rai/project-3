import React from "react";

const SideCard = ({ card: { id, img, name } }) => {
  return (
    <>
      <div className="sideCard">
        <div className="card_heading d_flex ">
          <h3>
            Special <br /> Offer{" "}
          </h3>
          <h6>
            save <span>$120</span>
          </h6>
        </div>
        <div className="card_img">
          <img src={img} alt="" />
        </div>
        <div className="card_details">
          <h4>{name}</h4>
          <div className="price">
            <label>$99,00</label>
            <span>$79,00</span>
          </div>
          <div className="quantity d_flex">
            <h6>Available:<span>6</span></h6>
            <h6>Already Sold:<span>28</span></h6>
          </div>
          <progress max="34" value="6"></progress>
        </div>
      </div>
    </>
  );
};

export default SideCard;
