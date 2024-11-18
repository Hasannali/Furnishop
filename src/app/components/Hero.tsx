import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import { FaArrowRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";


const Hero = () => {
  return (
    <div style={{backgroundImage:"url(/images/bg-3.jpg)"}} className='bg-center bg-cover h-screen'>
      <Navbar />
      <h2 className='text-white text-center font-sans text-5xl pt-10'>Make your interior more <br />
      Minimalist & Modern</h2>
      <p className='text-white text-center font-light text-lg  pt-10 '>Turn your roon with furni into a lot more minimalist <br />and modern with ease and speed</p>
      <div className=' pt-10 h-[90px] w-[350px] sm:left-[150px] sm:relative md:left-[250px] md:relative lg:left-[350px] lg:relative xl:left-[490px] xl:relative 2xl:left-[1100px] 2xl:relative  flex justify-center items-center'>
      <input type='text'placeholder='Search Furniture' className='px-10 py-3 text-white backdrop-blur-sm bg-white/30 rounded-full border-white outline-none'></input>
      <IoSearchOutline  className=' bg-black text-white rounded-full p-2 cursor-pointer relative right-10' size={35}/>
      </div>
    </div>
  )
}

export default Hero 
