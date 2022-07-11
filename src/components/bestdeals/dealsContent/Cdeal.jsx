import React from "react";

const Cdeal = ({ deal: { id, name, img, price } }) => {
  return (
    <>
      <section className="cdeals">
        
          <div className="product_name">
            <h5>{name}</h5>
          </div>
          <div className="cimg">
            <img src={img} alt="" />
          </div>
          <div className="product_price">
            <h5>{price}</h5>
          </div>
          <buttom className="add_product ">
            <h6> <i class="fa-solid fa-heart"></i>Add to Wishlist</h6>
          </buttom>
      </section>
    </>
  );
};

export default Cdeal;
