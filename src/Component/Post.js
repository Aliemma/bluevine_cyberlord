import React from 'react'
import image2 from '../images/Visa-card.jpg'


function Post() {
  return (
   
    <div className='grid grid-cols-2 gap-1  mt-20'>
        <img className='w-9/12 flex justify-center h-5/6' src={image2} alt="" />

        <div className=''>
            <h1 className='text-4xl text-blue-black mb-10'>A business checking account built to save you time and money.</h1>

            <div>
                <h3 className='text-2xl text-blue-black font-semibold mt-4'>No monthly fees</h3>
                <p className=' text-blue-black text-2xl mb-3  '> Don’t worry about monthly and overdraft fees, or minimum balance requirements.</p>
            </div>
                <hr className='text-sea-blue w-5/6 ' />
            <div>
                <h3  className='text-2xl text-blue-black font-semibold mt-4'>2.0% interest for eligible customers</h3>
                <p className=' text-blue-black text-2xl mb-3  '>Earn 50x the national average on balances up to and including $100,000 if you meet a monthly activity requirement.</p>
            </div>
                  <hr className='text-sea-blue w-5/6' />
            <div>
                <h3  className='text-2xl text-blue-black font-semibold mt-4'>Unlimited transactions</h3>
                <p className=' text-blue-black text-2xl mb-3  '>Make deposits and payments on your terms, without limits on your number of transactions.</p>
            </div>
                 <hr className='text-sea-blue w-5/6' />
            <div>
                <h3  className='text-2xl text-blue-black font-semibold mt-4'>Multiple accounts for better budgeting</h3>
                <p className=' text-blue-black text-2xl mb-3  '>Organize your finances the way you want by adding up to five sub-accounts with designated account numbers.5</p>
            </div>
            
            <button className='text-white  rounded bg-blue text-xl p-3 mt-10'>Explore Business Checking</button>
            
        </div>
</div>

  )
}

export default Post
