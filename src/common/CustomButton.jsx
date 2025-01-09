import React from 'react'

const CustomButton = ({ myClass, text, customOnClick,icon }) => {
    return (
        <button onClick={customOnClick} className={`text-nowrap py-3 rounded-full max-md:px-4 max-md:py-2 max-md:font-semibold font-bold font-sunflower text-base leading-5 bg-white transition-all duration-300 hover:shadow-[0px_0px_22px_3px] hover:shadow-white ${myClass}`}>{text}{icon}</button>
    )
}

export default CustomButton