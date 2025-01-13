import React from 'react'
import titleLine from "../assets/images/png/title-line.png"
import Heading from '../common/Heading'
import Description from '../common/Description'
import { VALUES_LIST } from '../utils/helper'
import moon from "../assets/images/png/moon.png"

const Values = () => {
  return (
    <div id='about' className='pt-[156px] max-md:pt-28 max-sm:pt-[120px]'>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <Heading text="values" image={titleLine} imageAlt="title-line" />
        <div className='flex flex-wrap pt-[77px] max-md:pt-8 max-sm:pt-10 -mx-2 justify-center'>
          {VALUES_LIST.map((obj, i) => (
            <div key={i} className='w-1/3 max-md:w-1/2 max-sm:w-full relative group px-2 max-md:pt-3'>
              <img src={moon} alt="moon" className='absolute -top-[19px] -right-[23px] pointer-events-none h-[74px] hidden group-hover:block' />
              <div className='p-5 box-blur transition-all cursor-pointer h-full duration-300 border border-gray hover:border-opacity-10 hover:border-white rounded-xl hover:shadow-[0px_-1px_20px_0px] hover:shadow-lightGray hover:bg-white hover:bg-opacity-10'>
                <div>{obj.icon}</div>
                <p className='font-bold text-xl leading-[25.52px] font-space text-white py-[10px]'>{obj.title}</p>
                <Description text={obj.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Values