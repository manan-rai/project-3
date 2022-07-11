import React from 'react'
import { Link } from 'react-router-dom'
import Deals from './Deals';
import './BigDeals.css'

const BigDeals = ({items,title}) => {
  return (
    <>
    <section className="big_deals">
      <div className="container">
        <div className="heading f_flex">
          {/* <h1>{title}</h1> */}
          <Link to='/'>View all</Link>
        </div>
        <div className="content">
          {
            items.map((item)=>(
              <Deals key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default BigDeals