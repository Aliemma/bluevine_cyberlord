import React from 'react'
import image4 from '../images/Phone-img.jpg'

function Post3() {
  return (
       <div className='grid grid-cols-2 gap-1'>
        <img className='w-9/12 flex justify-center h-5/6' src={image4} alt="" />

        <div className=''>
            <h1 className='text-4xl text-blue-black mb-10'>Sophisticated bill pay designed to streamline business payments.</h1>

            <div>
                <h3 className='text-2xl text-blue-black font-semibold mt-4'>Keep all your bills in one place</h3>
                <p className=' text-blue-black text-2xl mb-3  '> Connect to QuickBooks Online6 to automatically sync bills, bill transactions, payee information, and categories to make reconciliation a breeze. You can also easily forward bills to your dedicated Bluevine inbox and instantly see them in your dashboard.7</p>
            </div>
                <hr className='text-sea-blue w-5/6 ' />
            <div>
                <h3  className='text-2xl text-blue-black font-semibold mt-4'>Don’t worry about late payments</h3>
                <p className=' text-blue-black text-2xl mb-3  '>Make and schedule one-time or recurring payments with ease. Pick a date and know when your payment will arrive.</p>
            </div>
                  <hr className='text-sea-blue w-5/6' />
            <div>
                <h3  className='text-2xl text-blue-black font-semibold mt-4'>Pay by credit card, free up cash</h3>
                <p className=' text-blue-black text-2xl mb-3  '>Get up to an additional 45 days8 to pay off your bills when you pay by credit card, even if your vendors don’t accept credit. Choose how vendors receive payment: via wire, free ACH, or check.8 Plus, you can earn rewards points with your card.9</p>
            </div>
                 <hr className='text-sea-blue w-5/6' />
            
            
            <button className='text-white  rounded bg-blue text-xl p-3 mt-10'>Explore Bill Pay</button>
            
        </div>
</div>

  )
}

export default Post3
