import React from 'react'

const HeadSection = () => {
  return (
    <div className='pt-32'>
      <h2 className='text-center text-black font-bold text-3xl'>Best Selling Section</h2>
      <div className='flex flex-wrap justify-center items-center pt-6'>
        <ul className='flex flex-wrap justify-center items-center font-light gap-2 bg-white border-gray-400 border rounded-full w-[400px] h-[60px]'>
        <li className='font-light text-xl hover:bg-slate-100 px-4 py-2 rounded-full transition-all duration-300 bg-slate-100'><a href="">Sofa</a></li>
        <li className='font-light text-xl  hover:bg-slate-100 px-4 py-2 rounded-full transition-all duration-300'><a href="">Chair</a></li>
        <li className='font-light text-xl  hover:bg-slate-100 px-4 py-2 rounded-full transition-all duration-300'><a href="">Table</a></li>
        <li className='font-light text-xl  hover:bg-slate-100 px-4 py-2 rounded-full transition-all duration-300'><a href="">Bed</a></li>
        </ul>
      </div>
    </div>
  )
}

export default HeadSection
