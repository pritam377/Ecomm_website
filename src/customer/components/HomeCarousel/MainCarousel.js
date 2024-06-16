import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
const items = MainCarouselData.map((item)=> <img className="carousel-image cursor-pointer" src={item.image} alt=''/>)
  return (
    <div className='carousel-container'>
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
    </div>
  )
}

export default MainCarousel