import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const ChooseSection = () => {
  return (
    <div className='flex flex-wrap justify-evenly text-black gap-5 pt-20'>
      <div className='w-[250px] flex justify-center items-center'>
        <h2 className='text-4xl font-extralight '>Why <br />
        Choose Us</h2>
      </div>
      <div className='w-[250px] m-10'>
        <h2 className='text-lg font-semibold pb-3'>Luxury Design</h2>
        <p className='text-md text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt iste exercitationem reprehenderit eaque cumque tempora, obcaecati</p>
        <button><FaArrowRight className='left-[180px] relative bg-black text-white  text-center rounded-full p-2 cursor-pointer ' size={35}/></button>
      </div>
      <div className='w-[250px] m-10'>
        <h2 className='text-lg font-semibold pb-3'>Affordable prices</h2>
        <p className='text-md text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt iste exercitationem reprehenderit eaque cumque tempora, obcaecati</p>
        <button><FaArrowRight className='left-[180px] relative bg-black text-white  text-center rounded-full p-2 cursor-pointer' size={35}/></button>
      </div>
      <div className='w-[250px] m-10'>
        <h2 className='text-lg font-semibold pb-3'>Many choices</h2>
        <p className='text-md text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt iste exercitationem reprehenderit eaque cumque tempora,</p>
        <button><FaArrowRight className='left-[180px] relative bg-black text-white  text-center rounded-full p-2 cursor-pointer' size={35}/></button>
      </div>
    </div>
  )
}

export default ChooseSection
