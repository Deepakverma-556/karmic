import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import titleBlackLine from "../assets/images/png/title-black-line.png"
import { PROJECTS_IMAGE_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'

const Projects = () => {
    return (
        <div className='bg-whiteLayer bg-cover max-md:bg-center bg-no-repeat mx-auto'>
            <div className='max-w-[1172px] mx-auto px-4 pt-[99px] pb-[121px] max-md:pb-20 max-sm:pt-36 max-sm:pb-32'>
                <Heading text="Projects" myClass="!text-black pb-6" image={titleBlackLine} imageAlt="title-black-line" />
                <Description text="Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus." myClass="max-w-[532px] mx-auto !leading-6 !text-black !text-center" />
                <div className='flex flex-wrap -mx-3 pt-[53px] pb-8 max-md:pt-2 max-md:pb-6 max-sm:pb-6 max-sm:pt-0 justify-center'>
                    {PROJECTS_IMAGE_LIST.map((obj, i) => (
                        <div key={i} className='w-3/12 max-xl:w-1/3 max-md:w-1/2 px-2 pt-6'>
                            <div className='mx-auto hover:scale-125 hover:!z-20 overflow-hidden group max-lg:hover:scale-105 transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center'>
                                <img src={obj.image} alt={obj.imgAlt} className='h-[174px] object-cover w-full rounded-lg' />
                                <div className='absolute min-h-[47px] flex justify-center items-center bg-darkGray transition-all duration-300 w-full group-hover:bottom-0 bottom-[-50%]'>
                                    <p className='font-sunflower font-bold text-xl leading-[21.7px] text-white text-center w-full'>Nubbies</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <CustomButton text="View All" myClass="px-[32.07px] !py-[11.34px] !font-medium flex !bg-transparent border border-black hover:!bg-black hover:!text-white hover:!shadow-[0px_0px_22px_3px] hover:!shadow-black !mx-auto" />
            </div>
        </div>
    )
}

export default Projects