import Link from 'next/link'
import React from 'react'
import { FaUser } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div  className='flex flex-wrap justify-between items-center h-[80px] p-4 text-white pb-20'>
      <div>
        <h2 className='text-3xl font-bold pl-5'>Furnishop</h2>
      </div>
      <div className=' '>
        <ul className=' hidden sm:flex sm:flex-wrap sm:justify-center sm:items-center font-light gap-7'>
        <li className='font-light text-xl hover:bg-slate-400 px-6 py-2 rounded-full transition-all duration-300'><a href="/">Home</a></li>
        <li className='font-light text-xl hover:bg-slate-400 px-6 py-2 rounded-full transition-all duration-300'><a href="">About</a></li>
        <li className='font-light text-xl hover:bg-slate-400 px-6 py-2 rounded-full transition-all duration-300'><a href="#cards">Product</a></li>
        <li className='font-light text-xl hover:bg-slate-400 px-6 py-2 rounded-full transition-all duration-300'><a href="">Contact</a></li>
        </ul>
      </div>
      <div>
        <h2 className=' pr-5 text-3xl  font-light'><FaUser className='transition-all hover:scale-105 bg-black text-center rounded-full p-2 text-white cursor-pointer'  size={30}/></h2>
      </div>
    </div>
  )
}

export default Navbar
