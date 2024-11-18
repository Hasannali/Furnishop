import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center items-center pt-20 pb-20'>
      <div>
        <img width={300} height={300} src="/images/bg-1.jpg" alt="" className='w-[500px] h-[400px] rounded-lg shadow-2xl'/>
      </div>
      <div className='pt-20 ml-[5%]'>
        <p className='text-orange-600 text-md font-light pl-4'>Experience</p>
        <h2 className='text-black pt-8 text-3xl font-bold text-left pl-4'>We provide you the <br /> best experience</h2>
        <p className='p-4 pr-12 text-black text-md text-left '>Lorem ipsum dolor sit amet consectetur <br />
         adipisicing elit. Ex, consequatur officiis <br /> 
         quod quaerat commodi a necessitatibus aliquam <br /> 
         laudantium hic repellendus beatae minima cumque,<br /> 
         sit dolorum perspiciatis mollitia, vero magnam? Dolorum?</p>
      </div>
    </div>

    <div className='flex flex-wrap justify-center items-center pt-20 pb-20'>
      <div className='pt-20 ml-[5%]'>
        <p className='text-orange-600 text-md font-light pl-4'>Experience</p>
        <h2 className='text-black pt-8 text-3xl font-bold text-left pl-4'>We provide you the <br /> best experience</h2>
        <p className='p-4 pr-12 text-black text-md text-left '>Lorem ipsum dolor sit amet consectetur <br />
         adipisicing elit. Ex, consequatur officiis <br /> 
         quod quaerat commodi a necessitatibus aliquam <br /> 
         laudantium hic repellendus beatae minima cumque,<br /> 
         sit dolorum perspiciatis mollitia, vero magnam? Dolorum?</p>
      </div>
      <div>
        <img width={300} height={300} src="/images/sofa-2.jpg" alt="" className='w-[500px] h-[400px] rounded-lg shadow-2xl'/>
      </div>
    </div>
    </div>
  )
}

export default Banner
