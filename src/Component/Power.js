import React from 'react'
import {BiBook} from 'react-icons/bi';
import {GrHelp} from 'react-icons/gr';
import {GrConnect} from 'react-icons/gr';
import {GrChatOption} from 'react-icons/gr';
function Power() {
  return (
     <div className='bg-sea-blue p-10 mt-16'>
      <h1 className='text-5xl  text-blue-black text-left font-semibold'>More power to your <br /> business.</h1>
      <p className=' text-blue-black text-2xl text-left'>From self-guided resources to expert help from real people, you can count on <br /> dependable support services that are always </p>

      <div  className=' grid grid-cols-4 mt-16 gap-5'>
        <div className='bg-white p-2'>
            <h1 className=' text-5xl  mb-4 flex justify-center'><BiBook/></h1>
            <p className='text-3xl  text-blue-black font-semibold mb-6' >Self-guided resources</p>
           
            <p  className='text-2xl text-blue-black mb-4'>Read through guides and FAQs to get the info you need, fast.</p>
        
        </div>

        <div className='bg-white p-2'>
            <h1 className=' text-5xl text-blue mb-4 flex justify-center'><GrHelp/></h1>
            <p  className=' font-semibold text-3xl  text-blue-black mb-6' >Help center</p>
           
            <p  className='text-2xl text-blue-black mb-4'>Quickly find the articles and documents you need to reach your goals.</p>
       
        </div>

        <div className='bg-white p-2' >
            <h1 className=' text-5xl text-blue mb-4 flex justify-center'><GrConnect/></h1>
            <p className='text-3xl font-semibold  text-blue-black mb-6' >Connect with us</p>
           
            <p className='text-2xl text-blue-black mb-4'>Contact us by phone during business hours or email us anytime</p>
      
        </div>

         <div className='bg-white p-3' >
            <h1 className=' text-5xl text-blue mb-4 flex justify-center'><GrChatOption/></h1>
            <p className='text-3xl font-semibold  text-blue-black' >Live chat Beta</p>
          
            <p className='text-2xl  text-blue-black mb-4'>Contact us by phone during business hours or email us anytime. Get answers in a snap, right from your dashboard during business hours.</p>

        </div>
        
      </div>
    </div>
  )
}

export default Power
