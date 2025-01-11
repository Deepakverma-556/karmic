import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import titleBlackLine from "../assets/images/png/title-black-line.png"
import { PROJECTS_IMAGE_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'

const Projects = () => {
    return (
        <div className='bg-whiteLayer bg-cover bg-no-repeat max-w-[1440px] mx-auto'>
            <div className='max-w-[1172px] mx-auto px-4 pt-[99px] pb-[121px] max-md:pb-20 max-sm:pt-32 max-sm:pb-10'>
                <Heading text="Projects" myClass="!text-black pb-6" image={titleBlackLine} imageAlt="title-black-line" />
                <Description text="Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus." myClass="max-w-[532px] mx-auto !leading-6 !text-black !text-center" />
                <div className='flex flex-wrap -mx-3 pt-[53px] pb-8 max-md:pt-10 max-md:pb-6 max-sm:pb-2 max-sm:pt-7'>
                    {PROJECTS_IMAGE_LIST.map((obj, i) => (
                        <div key={i} className='px-2 w-1/4 max-md:w-1/3 max-sm:w-1/2 pb-6 max-md:pb-4'>
                            <img src={obj.image} alt={obj.imgAlt} className='h-[174px] w-full object-cover rounded-lg hover:scale-125 max-lg:hover:scale-105 transition-all duration-300 pointer-events-none' /></div>
                    ))}
                </div>
                <CustomButton text="View All" myClass="px-[32.07px] !py-[11.34px] !font-medium flex !bg-transparent border border-black hover:!bg-black hover:!text-white hover:!shadow-[0px_0px_22px_3px] hover:!shadow-black !mx-auto" />
            </div>
        </div>
    )
}

export default Projects