import React from 'react'

const Deals = ({item:{id,name,img}}) => {
  return (
    <>
    <div className="movie_box c_flex" data-aos="slide-up">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <label>catch big <span>deals</span> on {name}</label>
        <button className='shop_btn c_flex'>
          Shop now 
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
      
    </div>
    </>
  )
}

export default Deals
