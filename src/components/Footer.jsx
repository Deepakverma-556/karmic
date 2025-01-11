import React from 'react'
import logo from "../assets/images/webp/logo.webp"
import { SOCIAL_MEDIA_LIST } from '../utils/helper'
import Description from '../common/Description'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='pt-[100px] max-sm:pt-16 pb-[18px]'>
      <div className='px-4 mx-auto max-w-96'>
        <a href="#logo" className='flex max-w-max mx-auto'>
          <img src={logo} alt="logo" className='h-[97px] max-md:h-20 max-sm:h-16 pointer-events-none' />
        </a>
        <div className='flex items-center gap-6 mx-auto justify-center pt-[69px] max-md:pt-12 max-sm:pt-8 pb-4'>
          {SOCIAL_MEDIA_LIST.map((obj, i) => (
            <a key={i} href={obj.link} target='blank' className='flex h-[35px] w-[35px] rounded-full bg-white justify-center items-center transition-all duration-300 hover:shadow-[0px_0px_22px_3px] hover:shadow-white'>
              {obj.icon}
            </a>
          ))}
        </div>
      </div>
      <div className='border border-white w-full'></div>
      <Description text={`© Karmic labs ${year}`} myClass="!leading-7 opacity-70 text-center pt-4" />
    </div>
  )
}

export default Footer