import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center items-center h-[800px]  bg-black text-white sm:h-[500px] md:h-[400px] lg:h-[400px] xl:h-[400px] w-full gap-2 pb-10'>

        <div className='w-[300px] h-[150px] mr-20 ml-10'>
          <ul>
            <h3 className='text-4xl font-bold pb-10 '>Furniture</h3>
            <p className='text-sm font-light'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit <br /> Nobis, ea ad voluptates in illum fugit <br /> hic quas natus inventore, quibusdam,<br /> repellat odit officia ullam molestias <br /> facere accusamus provident voluptate facilis?</p>
          </ul>
        </div>

        <div className='w-[300px] h-[150px] pt-20 '>
          <ul className='pl-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Product</li>
          </ul>
        </div>

        <div className='w-[300px] h-[150px] pt-20'>
          <ul className='pl-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Product</li>
          </ul>
        </div>

        <div className='w-[300px] h-[150px] pt-20'>
          <ul className='pl-5'>
            <li> Facebook</li>
            <li> Instagram</li>
            <li> Twitter</li>
            <li> Youtube</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
