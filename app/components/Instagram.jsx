import React from 'react'
import Img1 from '../../public/assets/img_1.jpg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-24 text-center'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Img1}/>
            <InstagramImg socialImg={Img1}/>
            <InstagramImg socialImg={Img1}/>
        </div>
    </div>
  )
}

export default Instagram