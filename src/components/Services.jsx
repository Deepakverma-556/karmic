import React from 'react'
import Heading from '../common/Heading'
import { SERVICES_LIST } from '../utils/helper'
import Description from '../common/Description'
import moon from "../assets/images/png/moon.png"
const Services = () => {
  return (
    <div id='services' className='pb-[136px] max-md:py-16 max-sm:pb-10 max-sm:pt-20 relative max-w-[1440px] mx-auto'>
      <div className='absolute h-[100px] w-[100px] rounded-full bg-white blur-[60px] left-0 bottom-0'></div>
      <img src={moon} alt="moon" className='absolute left-[58%] top-[13%] -z-10' />
      <div className='max-w-[1172px] mx-auto px-4'>
        <Heading text="services" />
        <div className='flex flex-wrap pt-[77px] max-sm:pt-10 -mx-2'>
          {SERVICES_LIST.map((obj, i) => (
            <div key={i} className='w-1/3 max-md:w-1/2 max-sm:w-full px-2'>
              <div className='p-5 relative z-10 transition-all duration-300 border border-transparent hover:border-white hover:border-opacity-10 rounded-xl hover:shadow-[0px_-1px_20px_0px] hover:shadow-lightGray hover:bg-white hover:bg-opacity-10'>
                <div>{obj.icon}</div>
                <p className='font-bold text-xl leading-[25.52px] font-space text-white pt-5 pb-[6px]'>{obj.title}</p>
                {i === 1 ? <ul className='list-disc pl-6'>
                  <li className='text-base leading-6 font-space text-white'>Metmask intergration</li>
                  <li className='text-base leading-6 font-space text-white'>NFT's</li>
                  <li className='text-base leading-6 font-space text-white'>Dapps</li>
                  <li className='text-base leading-6 font-space text-white'>Tokenomics</li>
                  <li className='text-base leading-6 font-space text-white'>Metaverse AR/VR</li>
                  <li className='text-base leading-6 font-space text-white'>SDK Gaming Intergration</li>
                </ul> :
                  <Description text={obj.description} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services