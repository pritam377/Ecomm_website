import React from 'react';
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from '../customer/components/HomeSectionCarousel/HomeSectionCarousel';
import { Product_Data } from "../customer/components/HomeSectionCarousel/Product_Data";

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={Product_Data} sectionName = {"Musical Instruments"}/>
            <HomeSectionCarousel data={Product_Data} sectionName = {"Musical Instruments"}/>
        </div>
    </div>
  )
}

export default HomePage