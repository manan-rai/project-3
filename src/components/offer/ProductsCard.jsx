import React from 'react'
const ProductsCard = ({product:{id,name,img,price}}) => {
  return (
    <> 
        <div className="products">
          <div className="product_name">
            <h5>{name}</h5>
          </div>
          <div className="product_img  text_center">
            <img src={img} alt="" />
          </div>
          <div className="product_price">
            <h5>{price}</h5>
          </div>
          <buttom className="add_product ">
            <h6> <i class="fa-solid fa-heart"></i>Add to Wishlist</h6>
          </buttom>
        </div>
    </>
  )
}

export default ProductsCard