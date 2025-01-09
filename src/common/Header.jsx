import React, { useState, useEffect } from 'react'
import logo from "../assets/images/webp/logo.webp"
import { HEADER_LIST } from '../utils/helper'
import CustomButton from './CustomButton'

const Header = () => {
  const [open, setOpen] = useState()
  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 780) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  return (
    <>
      <div className='flex items-center w-full justify-between pt-[11px] max-w-[1172px] mx-auto'>
        <a href="#logo"><img src={logo} alt="logo" className='h-[60px] max-lg:h-10 pointer-events-none' /></a>
        <ul className='flex items-center gap-10 max-md:hidden max-lg:gap-6'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}><a href={obj.link} className='text-base leading-5 text-white after:transition-all after:duration-300 font-sunflower font-medium relative flex after:absolute after:bg-white after:w-0 after:bottom-0 after:hover:w-full after:h-[0.5px]'>{obj.title}</a></li>
          ))}
        </ul>
        <CustomButton text="Connect Wallet" myClass="max-md:hidden px-[34.1px]" />
        <div
          className={`md:hidden z-30 cursor-pointer`}
          onClick={() => setOpen(!open)}
        >
          <div className={`flex flex-col gap-3 items-center cursor-pointer ${open ? "!gap-0 transition-all duration-300" : "transition-all duration-300"}`}>
            <div className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${open ? "rotate-[50deg] origin-center" : ""} `}></div>
            <div className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${open ? "-rotate-[53deg] origin-center" : ""} `}></div>
          </div>
        </div>
      </div>
      <div className={`w-full h-full bg-black transition-all duration-500 left-0 md:-top-full z-20 fixed flex flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"
        }`}>
        <ul className='flex flex-col items-center gap-8'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}><a onClick={() => setOpen(false)} href={obj.link} className='text-base leading-5 text-white'>{obj.title}</a></li>
          ))}
          <CustomButton customOnClick={() => setOpen(false)} text="Connect Wallet" myClass="px-[34.1px]" />
        </ul>
      </div>
    </>

  )
}

export default Header