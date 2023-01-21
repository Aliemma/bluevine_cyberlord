import React from 'react'

import {GrBusinessService} from 'react-icons/gr';
import {BiTransfer} from 'react-icons/bi';
import {GiSettingsKnobs} from 'react-icons/gi';
function Stages() {
  return (
    <div className='bg-blue-black p-10 mt-16'>
      <h1 className='text-5xl text-white text-left font-semibold'>With you at every stage of <br /> your journey</h1>
      <p className='text-white text-2xl text-left'>Explore tips and resources for everything from setup to account management and more.</p>

      <div  className='text-white  grid grid-cols-3 mt-16 gap-5'>
        <div className='bg-white p-3'>
            <h1  className=' text-5xl mb-4 flex justify-center'><GrBusinessService/></h1>
            <p className='text-xl text-blue mb-4' >Business Checking</p>
            <h2 className='text-3xl text-blue-black mb-4'>What’s required to apply for a Business Checking account?</h2>
            <p  className='text-2xl text-blue-black mb-4'>Applying for Bluevine Business Checking is fast, easy, and secure—whether you’re a sole proprietorship...</p>
            <a className='text-xl text-blue mt-3 underline' href="">Read more</a>
        </div>

        <div className='bg-white p-3'>
              <h1  className=' text-5xl mb-4 flex justify-center'><GrBusinessService/></h1>
            <p  className='text-xl text-blue mb-4' >Business Checking</p>
            <h2 className='text-3xl text-blue-black mb-4'>What’s required to apply for a Business Checking account?</h2>
            <p  className='text-2xl text-blue-black mb-4'>Applying for Bluevine Business Checking is fast, easy, and secure—whether you’re a sole proprietorship...</p>
            <a  className='text-xl text-blue mt-10 underline' href="">Read more</a>
        </div>

        <div className='bg-white p-3' >
              <h1  className=' text-5xl mb-4 flex justify-center'><GrBusinessService/></h1>
            <p className='text-xl text-blue mb-4' >Business Checking</p>
            <h2 className='text-3xl text-blue-black mb-4' >What’s required to apply for a Business Checking account?</h2>
            <p className='text-2xl text-blue-black mb-4'>Applying for Bluevine Business Checking is fast, easy, and secure—whether you’re a sole proprietorship...</p>
            <a className='text-xl text-blue mb-10 underline' href="">Read more</a>
        </div>
        
      </div>
    </div>
  )
}

export default Stages
