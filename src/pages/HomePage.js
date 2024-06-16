import React from 'react'
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel"
import HomeSectionCarousel from '../customer/components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='mt-20'>
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default HomePage