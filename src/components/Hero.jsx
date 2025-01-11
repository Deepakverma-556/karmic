import React from 'react'
import Header from '../common/Header'
import hero from "../assets/images/webp/hero.webp"
import line from "../assets/images/png/line.png"
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import { DownArrow, RightArrow } from '../utils/icons'
import CustomShadow from '../common/CustomShadow'

const Hero = () => {
  return (
    <>
      <div className='relative max-w-[1440px] mx-auto z-10'>
        <CustomShadow myClass="-left-[8%] -top-[6%]" />
        <div className='max-w-[1172px] mx-auto px-4'>
          <Header />
        </div>
        <div className='bg-heroLayer bg-cover bg-no-repeat w-full mx-auto'>
          <div className='max-w-[1172px] mx-auto px-4 pt-[140px] pb-[139px] max-md:pt-28 max-md:pb-16 max-sm:pb-10'>
            <div className='flex flex-wrap justify-between'>
              <div className='w-7/12 px-3 max-md:w-full'>
                <h1 className='uppercase font-sunflower text-[64px] max-lg:text-[44px] max-sm:text-4xl max-lg:leading-tight font-light leading-[69.56px] text-white'>We are believers decentralization and <span className='relative'><img src={line} alt="line" className='absolute -top-3 left-7 pointer-events-none' /><img src={line} alt="line" className='absolute -bottom-1 left-1 pointer-events-none' />WEB3.</span></h1>
                <Description text="Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac." myClass="!leading-7 md:max-w-[570px] pt-[13px] pb-10 max-md:pb-5 max-md:pt-1" />
                <div className='flex items-center gap-8 max-sm:gap-4'>
                  <CustomButton text={`Get Started`} myClass="flex items-center px-[24.47px] group gap-[10px]" icon={<RightArrow myClass="transition-all duration-300 group-hover:translate-x-1" />} />
                  <CustomButton text="Read More" myClass="px-[32.29px] !font-light !bg-transparent border border-white !text-white hover:!bg-white hover:!text-black" />
                </div>
              </div>
              <div className='w-5/12 px-3 max-md:w-full flex max-md:pt-6 md:justify-end'>
                <img src={hero} alt="hero" className='h-[447px] max-lg:h-[340px] object-cover max-md:mx-auto' />
              </div>
            </div>
            <DownArrow myClass="mx-auto absolute left-1/2 bottom-11 max-md:hidden" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero