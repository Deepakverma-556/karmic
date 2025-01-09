import React from 'react'

const Description = ({ text, myClass }) => {
  return (
    <p className={`${myClass} text-base leading-6 text-white font-space max-sm:text-sm max-sm:!leading-5`}>{text}</p>
  )
}

export default Description