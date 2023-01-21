import React from 'react'
import {GrMoney} from 'react-icons/gr';
import {DiCodeBadge} from 'react-icons/di';
import {BiPound} from 'react-icons/bi';

function About() {
  return (
    <div className=' bg-blue-black text-white p-10' >
      <h1 className='text-5xl text-center font-semibold mb-14 '>One-stop business  that's right for you.</h1>
      <div className='grid grid-cols-3 gap-4 '>


            <div className=' bg-white text-blue-black p-4'>
                <h1 className='  text-5xl mb-4 flex justify-center'><GrMoney/></h1>
                <h3 className='text-3xl text-center font-semibold'>High-yield checking with no monthly fees.</h3>
                <p className='text-center flex justify-center text-2xl mt-7'>With no monthly fees or minimum balance, unlimited transactions, and industry-leading interest, our Business Checking account checks all the boxes.2</p>
                <a className='ttext-xl mt-6 underline text-blue text-center flex justify-center' href="">Explore Business Checking</a>
            </div>

            <div className=' bg-white text-blue-black p-4'>
                <h1 className=' text-5xl mb-4 flex justify-center'><DiCodeBadge/></h1>
                <h3 className='text-3xl text-center font-semibold'>Flexible funding to fuel your growth.</h3>
                <p className='text-center flex justify-center text-2xl mt-7'>Access a revolving line of credit, draw funds on demand, and only pay for what you use.3 Our Line of Credit is designed for one thing: your growth.</p>
                <a className='text-xl mt-10 underline text-blue text-center flex justify-center' href="">Explore Business Lending</a>
            </div>


            <div className=' bg-white text-blue-black p-4'>
                <h1 className=' text-5xl mb-4 flex justify-center'><BiPound/></h1>
                <h3 className='text-3xl text-center font-semibold'>Bill Pay that lets you maximize cashflow.</h3>
                <p className='text-center flex justify-center text-2xl mt-7 '>Schedule one-time or recurring payments with ease, and pay most bills by credit card—even to vendors that don’t accept credit.4 We make paying bills simple and rewarding.</p>
                <a className='text-xl mt-6 underline text-blue text-center flex justify-center' href="">Explore Bill Pay</a>
            </div>
      </div>
      <p className='text-xl text-white text-center mt-9'>Bluevine is a financial technology company, not a bank.</p>
    </div>
  )
}

export default About
