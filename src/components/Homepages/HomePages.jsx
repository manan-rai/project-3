import React,{useState} from 'react'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import { dealsData, sideCard ,productCard,recentlyView} from '../../DummyData'
import BigDeals from '../bigdeals/BigDeals'
import Offer from '../offer/Offer'
import BestDeals from '../bestdeals/BestDeals'
import BestSellers from '../bestsellers/BestSellers'
import Ads from '../ads/Ads'
import RecentlyView from '../recentlyView/RecentlyView'
import NewsLetter from '../Newsletter/NewsLetter'
import Footer from '../footer/Footer'

const HomePages = () => {
    const [items, setitems] = useState(dealsData)
    const [cards, setcards] = useState(sideCard)
    const [products, setproducts] = useState(productCard)
    const [recents, setrecents] = useState(recentlyView)

  return (
    <>
    <Header />
    <Banner />
    { <BigDeals  items={items}/* title='Big Deals'*//> }
    <Offer cards={cards} products={products}/>
    <BestDeals/>
    <BestSellers />
    <Ads />
    <RecentlyView recents={recents}/>
    <NewsLetter />
    <Footer />
    </>
  )
}

export default HomePages