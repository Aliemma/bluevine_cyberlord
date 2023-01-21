import React from 'react'
import image3 from '../images/Graden.jpg'

function Post2() {
  return (
        <div className='grid grid-cols-2 gap-1 mt-20'>
      

        <div className=''>
            <h1 className='text-4xl text-blue-black mb-10'>A fast and flexible line of credit, ready to help your businessthrive.</h1>

            <div>
                <h3 className='text-2xl text-blue-black font-semibold mt-4'>Funds available on demand3</h3>
                <p className=' text-blue-black text-2xl mb-3  '> Draw the funds you need with the click of a button.</p>
            </div>
                <hr className='text-sea-blue w-5/6 ' />
            <div>
                <h3  className='text-2xl text-blue-black font-semibold mt-4'>Revolving line of credit</h3>
                <p className=' text-blue-black text-2xl mb-3  '>Your credit line refills as you make repayments.</p>
            </div>
                  <hr className='text-sea-blue w-5/6' />
            <div>
                <h3  className='text-2xl text-blue-black font-semibold mt-4'>Only pay for what you use</h3>
                <p className=' text-blue-black text-2xl mb-3  '>No fees for opening, prepayment, or account closure.</p>
            </div>
                 <hr className='text-sea-blue w-5/6' />
            <div>
                <h3  className='text-2xl text-blue-black font-semibold mt-4'>Quick credit decisions</h3>
                <p className=' text-blue-black text-2xl mb-3  '>Find out if you’re approved in just a few minutes.</p>
            </div>
            
            <button className='text-white  rounded bg-blue text-xl p-3 mt-10'>Explore Business Lending</button>
            
        </div>

        <img className='w-9/12 flex justify-center h-5/6' src={image3} alt="" />
</div>
  )
}

export default Post2
