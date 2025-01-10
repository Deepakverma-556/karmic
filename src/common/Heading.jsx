import React from 'react'

const Heading = ({ text, myClass, imageAlt, image }) => {
  return (
    <h2 className={`${myClass} relative uppercase font-sunflower font-light text-[56px] leading-[60.86px] text-white text-center max-lg:text-[40px] max-sm:text-3xl`}>{text}  <img src={image} alt={imageAlt} className={`absolute -top-[26px] left-1/2 -translate-x-1/2 max-sm:h-20 pointer-events-none`} /></h2>
  )
}

export default Heading