import React, { useState, useEffect } from 'react'
import Heading from '../common/Heading'
import { PROJECTS_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'
import titleline from "../assets/images/png/title-line.png"

const UpcomingProjects = () => {
  const [time, setTime] = useState(15 * 3600 + 54 * 60 + 12);
  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [time]);
  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`;
  };
  return (
    <div id='projects' className='pt-[95px] pb-[136px] max-md:py-16 max-sm:pb-10 max-sm:pt-20 relative max-w-[1440px] mx-auto'>
      <div className='absolute h-[100px] w-[100px] rounded-full bg-white blur-[60px] right-0 bottom-0'></div>
      <div className='max-w-[1172px] mx-auto px-4'>
        <Heading text="upcoming projects" image={titleline} imageAlt="title-line" />
        <div className='flex gap-[29px] py-12 max-sm:pb-7 max-sm:pt-10 max-xl:flex-wrap justify-center'>
          {PROJECTS_LIST.map((obj, i) => (
            <div key={i} className='p-4 border border-white border-opacity-10 rounded-xl shadow-[0px_-1px_20px_0px] shadow-lightGray bg-white bg-opacity-10'>
              <img src={obj.image} alt={obj.imgAlt} className='h-[234px] pointer-events-none' />
              <div className='flex items-center justify-between pt-[15px]'>
                <p className='font-sunflower font-medium text-xl leading-6 text-white'>{obj.heroName}</p>
                <p className='font-sunflower font-bold text-base leading-5 text-white'>{formatTime(time)}</p>
              </div>
              <p className='font-space font-light text-base leading-7 text-white'>{obj.company}</p>
            </div>
          ))}
        </div>
        <CustomButton text="View All" myClass="px-[32.07px] !py-[11.34px] !font-medium flex !bg-transparent border border-white !text-white hover:!bg-white hover:!text-black !mx-auto" />
      </div>
    </div>
  )
}

export default UpcomingProjects