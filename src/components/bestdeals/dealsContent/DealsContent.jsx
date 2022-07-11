import React, { useState } from 'react'
import { bestDeals} from '../../../DummyData'
import Content from './Content';


const DealsContent = () => {
    const [deals, setdeals] = useState(bestDeals)
  return (
    <>
     <Content deals={deals}/>
    </>
  )
}

export default DealsContent