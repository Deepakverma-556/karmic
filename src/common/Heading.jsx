import React from 'react'

const Heading = ({text,myClass,spanText}) => {
  return (
      <h2 className={myClass}>{text}</h2>
  )
}

export default Heading