import React from 'react'
import SellerContent from './SellerContent';

const Bseller = ({sales}) => {
  return (
    <>
   <section className="bseller">
   {
        sales.map((sale)=>(
            <SellerContent key={sale.id} sale={sale} />
        ))
    }
   </section>
    </>
  )
}

export default Bseller