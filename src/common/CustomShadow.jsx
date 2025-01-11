import React from 'react'

const CustomShadow = ({myClass}) => {
  return (
      <div className={`${myClass} absolute h-[100px] w-[100px] rounded-full bg-white blur-[110px] shadow-[55px_22px_3px_44px] shadow-white`}></div>
  )
}

export default CustomShadow