import React from 'react'
import { Link } from 'react-router-dom'

const SellerNav = () => {
  return (
    <>
    <section className="seller_nav d_flex">
    <div className="nav_title">
        <h4>Bestsellers</h4>
    </div>
    <div className="nav_list ">
        <ul className='f_flex'>
            <li>
                <Link className='first_list'>Top 20</Link>
            </li>
            <li>
                <Link>Phones & Tablets</Link>
            </li>
            <li>
                <Link>Laptops & Computers</Link>
            </li>
            <li>
                <Link>Video Cameras</Link>
            </li>
            
        </ul>
    </div>
    </section>
    </>
  )
}

export default SellerNav