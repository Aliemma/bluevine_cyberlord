import React from 'react'
import images4 from '../images/Gent.jpg'
function Post4() {
  return (
    <div className='grid grid-cols-2 mt-20 gap-10'>
      <div>
        <p className='text-3xl text-blue-black mt-10 '>“As a third generation entrepreneur, I know firsthand the challenges small business owners face. That’s why we started Bluevine, to make financial services accessible and easy for small businesses.”</p>
        <p className='text-2xl text-blue-black  mt-10'>— Eyal Lifshitz, Bluevine Founder & CEO</p>
        <button className='text-white  rounded bg-blue text-xl p-3 mt-10'>About us</button>

      </div>
       <img className='w-full' src={images4} alt="" />
    </div>
  )
}

export default Post4
