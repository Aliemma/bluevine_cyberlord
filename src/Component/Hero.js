import React from 'react'
import image1 from '../images/female-img3.jpg'

function Hero() {
  return (
    <div className='mt-14 grid grid-cols-2 pt-10'>
      <div className='mt-1 '>
        <h1 className='text-5xl font-semibold text-blue mb-8 w-4/5'>You built your business,  we help it grow.</h1 >
        <p className='text-2xl w-4/5 text-blue-black mb-8'>You built your business,we help it grow. Our streamlined <span className='underline'>checking, lending,</span>   and <span className='underline'>bill pay</span>  make it easy to run your business with confidence.</p>
        <button className='text-white w-1/5 rounded bg-blue text-xl p-3'> Get Started</button>
        <p></p>
      </div>

      <img className='w-full' src={image1} alt='' />
    </div>
  )
}

export default Hero
