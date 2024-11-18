import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const Cards = () => {
  return (
    <div id='cards' className='flex flex-wrap justify-center items-center gap-5 pt-10 pb-10'>

      <div className='card w-[300px] h-[420px] rounded-lg  transsition-all hover:scale-105 duration-300 shadow-2xl'>
        <div className='h-[200px] w-[280px] mx-auto pt-3'>
            <img className='rounded-lg' src="https://media.istockphoto.com/id/2059474032/photo/blue-armchair.jpg?s=1024x1024&w=is&k=20&c=Z_8RHBZaDMg0u5ydHoLTST8NI_szQt68OURgLuQmnCY=" alt="" />
        </div>
        <div className='h-[170px] w-[280px] pt-10 mx-auto'>
        <h2 className='pl-2 text-xl font-bold pt-5'>New brand</h2>
        <p className='pl-2 text-md font-light pb-10'>It's high Quality in Furni</p>
            <div className='flex justify-evenly gap-20 items-center'>
                <p>$500.0</p>
                <button><IoMdAddCircle className='text-black' size={40}/></button>
            </div>
        </div>
      </div>

      <div className='card w-[300px] h-[420px] rounded-lg  transsition-all hover:scale-105 duration-300 shadow-2xl'>
        <div className='h-[200px] w-[280px] mx-auto  pt-3'>
            <img className='rounded-lg' src="https://media.istockphoto.com/id/1281696939/photo/blue-armchair-isolated-on-a-white.jpg?s=1024x1024&w=is&k=20&c=0uacw2YjpVkx6pMbEgDQaG7Ahk5Dt-4p9TNHb-1bdhs=" alt="" />
        </div>
        <div className='h-[170px] w-[280px] pt-10 mx-auto'>
            <h2 className='pl-2 text-xl font-bold pt-5'>New brand</h2>
            <p className='pl-2 text-md font-light pb-10'>It's high Quality in Furni</p>
            <div className='flex justify-evenly gap-[100px] items-center'>
                <p>$500.0</p>
                <button><IoMdAddCircle className='text-black' size={40}/></button>
            </div>
        </div>
      </div>

      <div className='card w-[300px] h-[420px] rounded-lg  transsition-all hover:scale-105 duration-300 shadow-2xl'>
        <div className='h-[200px] w-[280px] mx-auto  pt-3'>
            <img className='rounded-lg' src="https://img.freepik.com/free-vector/chair-realistic-illustration_1284-9507.jpg?t=st=1731824894~exp=1731828494~hmac=33e10823513d50a56e90f9811d97bbe77a29f3836dde542394ebb67ef587d1e9&w=740" alt="" />
        </div>
        <div className='h-[170px] w-[280px] pt-10 mx-auto'>
            <h2 className='pl-2 text-xl font-bold pt-5'>New brand</h2>
            <p className='pl-2 text-md font-light pb-10'>It's high Quality in Furni</p>
            <div className='flex justify-evenly gap-[100px] items-center'>
                <p>$500.0</p>
                <button><IoMdAddCircle className='text-black' size={40}/></button>
            </div>
        </div>
      </div>

      <div className='card w-[300px] h-[420px] rounded-lg transsition-all hover:scale-105 duration-300 shadow-2xl'>
        <div className='h-[200px] w-[280px] mx-auto  pt-3'>
            <img className='rounded-lg' src="https://img.freepik.com/free-vector/chair-realistic-illustration_1284-9507.jpg?t=st=1731824894~exp=1731828494~hmac=33e10823513d50a56e90f9811d97bbe77a29f3836dde542394ebb67ef587d1e9&w=740" alt="" />
        </div>
        <div className='h-[170px] w-[280px] pt-10 mx-auto'>
            <h2 className='pl-2 text-xl font-bold pt-5'>New brand</h2>
            <p className='pl-2 text-md font-light pb-10'>It's high Quality in Furni</p>
            <div className='flex justify-evenly gap-[100px] items-center'>
                <p>$500.0</p>
                <button><IoMdAddCircle className='text-black' size={40}/></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
