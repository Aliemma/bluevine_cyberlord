import React from 'react'
import Post from './Post'
import Post2 from './Post2'
import Post3 from './Post3'
import Post4 from './Post4'
import { GrShieldSecurity } from 'react-icons/gr';
import { GrSecure } from 'react-icons/gr';
import { BsPhone } from 'react-icons/bs';
import { BiCreditCard} from 'react-icons/bi';



function Security() {
  return (
    <div className='bg-white'>

      <div>
            <h1 className='text-5xl text-blue-black m-8 text-center'>Security you can bank on.</h1>
            <p className='text-2xl text-blue-black'>The safety of your money and information is critical. With Bluevine, your account and personal information are secured with advanced authentication and data encryption, so you can rest easy knowing you’re protected.</p>
      </div>

      <div className='grid grid-cols-4 text-blue-black mb-10 gap-5'>
            <div className='m-10'>
                <h1  className=' text-5xl mb-4 flex justify-center'><GrShieldSecurity/></h1>
                <p className='text-center  text-blue-black'>Deposits are FDIC-insured up to $250,000 per depositor through</p>
            </div>

            <div className='m-10'>
                <h1  className=' text-5xl mb-4 flex justify-center'><GrSecure/></h1>
                <p className='text-center  text-blue-black'>Business and personal information is protected with leading data encryption technology</p>
            </div>

            <div className='m-10'>
                <h1  className=' text-5xl mb-4 flex justify-center'><BsPhone/></h1>
                <p className='text-center  text-blue-black'>Phone-enable login with two-factor authentication</p>
            </div>

            <div className='m-10'>
                <h1  className=' text-5xl mb-4 flex justify-center'><BiCreditCard/></h1>
                <p className='text-center  text-blue-black'> Set debit card spending information is protected with factor authentication notifications, and lock it instantly from your dashboard</p>
            </div>
      </div>
      
       
        <Post/>
        <Post2/>
        <Post3/>
        <Post4/>

    </div>
  )
}

export default Security
