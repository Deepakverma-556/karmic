import React from 'react'
import titleLine from "../assets/images/png/title-line.png"
import Heading from '../common/Heading'
import Description from '../common/Description'
import { KARMIC_LIST } from '../utils/helper'
import CustomShadow from '../common/CustomShadow'

const Karmic = () => {
  return (
    <div id='home' className='pt-[81px] max-md:pt-7 max-sm:pt-0'>
      <div className='max-w-[1920px] mx-auto relative'>
        <CustomShadow myClass="-top-10 right-0" />
        <div className='max-w-[1172px] px-4 mx-auto'>
          <Heading text="who is karmic?" myClass="pb-6" image={titleLine} imageAlt="title-line" />
          <Description text="We are builders, innovaters, and believers." myClass="max-w-[532px] mx-auto !leading-[28.8px] !text-center" />
          <Description text="We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3." myClass="max-w-[532px] mx-auto !leading-[28.8px] !text-center" />
          <div className='flex items-center gap-4 pt-10 max-xl:flex-wrap justify-center'>
            {KARMIC_LIST.map((obj, i) => (
              <img key={i} src={obj.image} alt={obj.imgAlt} className='h-[223px] object-cover rounded-lg pointer-events-none' />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Karmic