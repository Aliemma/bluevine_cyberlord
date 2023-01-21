import React from 'react'
import images5 from '../images/people.jpg'

function Customers() {
  return (
     <div className='grid grid-cols-2 mt-20 gap-10'>
      <div className='mt-10'>
        <h1 className='text-5xl font-semibold text-blue-black'>See why our customers love Bluevine.</h1>
        <p className='text-3xl text-blue-black mt-10 '>“Bluevine’s ease and flexibility are a breath of fresh air. From the application process to features like automated payments, it’s clear how thoughtful Bluevine is about business owners and their needs.”</p>
        <p className='text-2xl text-blue-black  mt-10'>— Nashira L, Breaking Cycles</p>
        <button className='text-white  rounded bg-blue text-xl p-3 mt-10'>Read the story</button>

      </div>
       <img className='w-full' src={images5} alt="" />
    </div>
  )
}

export default Customers
