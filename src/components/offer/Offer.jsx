import React from "react";
import SideCard from "./SideCard";
import ProductsCard from "./ProductsCard";
import { NavLink } from "react-router-dom";
import "./Offer.css";
const Offer = ({ cards, products }) => {
  return (
    <>
      <section className="offer sec_margin">
        <div className="container  f_flex">
         <div className="main_sidecard">
         {cards.map((card) => (
            <SideCard key={card.id} card={card} />
          ))}
         </div>
          <div className="productCard">
            <div className="product_heading ">
              <ul className="f_flex ">
                <li className="me-3 product_list">
                  <NavLink to="/card" activeClassName="active-link">
                    Featured
                  </NavLink>
                </li>
                <li className="me-3 product_list">
                  <NavLink to="/card">on sale</NavLink>
                </li>
                <li className="product_list">
                  <NavLink to="/card">top rated</NavLink>
                </li>
              </ul>
            </div>
            <div className="main_card d_flex">
              {products.map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
