import {React,useState} from 'react'
import { bestSellers } from '../../DummyData';
import SellerNav from './SellerNav';
import Bseller from './bestseller_content/Bseller'
import "./BestSeller.css"

const BestSellers = () => {
    const [sales, setsales] = useState(bestSellers)
  return (
    <>
    <section className="best_seller sec_margin">
        <div className="container">
        <SellerNav />
        <Bseller sales={sales}/>
        </div>
    </section>
    </>
  )
}

export default BestSellers