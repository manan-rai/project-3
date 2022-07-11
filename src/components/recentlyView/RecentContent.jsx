import React from "react";

const RecentContent = ({ recent: { id, name, img, price } }) => {
  return (
    <>
      <section className="recent_content">
        <div className="product_name mb-5">
          <h5>{name}</h5>
        </div>
        <div className="product_img ">
          <img src={img} alt="" />
        </div>
        <div className="product_price">
          <h5>{price}</h5>
        </div>
      </section>
    </>
  );
};

export default RecentContent;
