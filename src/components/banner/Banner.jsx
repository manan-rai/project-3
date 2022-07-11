import React from 'react'
import BannerContent from './BannerContent';
// import BannerImg from './BannerImg';
import './Banner.css'


const Banner = () => {
  return (
    <>
    <section className='banner'>
        <div className="container">
        
            <BannerContent />
            {/* <BannerImg /> */}
        </div>
    </section>
    </>
  )
}

export default Banner