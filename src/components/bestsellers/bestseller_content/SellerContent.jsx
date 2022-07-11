import React from "react";

const SellerContent = ({ sale: { id, name, img, price } }) => {
  return (
    <>
      <section className="seller_content f_flex items_center">
        <div className="product_img">
          <img src={img} alt="" />
        </div>
        <div className="product_details">
          <div className="product_name">
            <h5>{name}</h5>
          </div>
          <div className="product_price">
              <h5>{price}</h5>
          </div>
        </div>
        <buttom className="add_product ">
            <h6> <i class="fa-solid fa-heart"></i>Add to Wishlist</h6>
          </buttom>
      </section>
    </>
  );
};

export default SellerContent;
