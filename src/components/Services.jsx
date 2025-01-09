import React from 'react'
import Heading from '../common/Heading'
import { SERVICES_LIST } from '../utils/helper'
import Description from '../common/Description'
const Services = () => {
  return (
    <div className='pb-[136px] max-md:py-16 max-sm:pb-10 max-sm:pt-20 relative max-w-[1440px] mx-auto'>
      {/* <div className='absolute h-[184px] w-[184px] rounded-full bg-white shadow-[28px_0px_10px_10px] blur-[130px] -z-10 shadow-white right-0 bottom-0'></div> */}
      <div className='max-w-[1172px] mx-auto px-4'>
        <Heading text="services" />
        <div className='flex flex-wrap px-3 pt-[77px]'>
          {SERVICES_LIST.map((obj, i) => (
            <div className='p-5 w-1/3 transition-all duration-300 border hover:border-white hover:border-opacity-10 rounded-xl hover:shadow-[0px_-1px_20px_0px] hover:shadow-lightGray hover:bg-white hover:bg-opacity-10'>
              <div>{obj.icon}</div>
              <p className='font-bold text-xl leading-[25.52px] font-space text-white pt-5 pb-[6px]'>{obj.title}</p>
              <Description text={obj.description}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services