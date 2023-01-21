import React from 'react'


function Narbar() {
  return (
   <nav className=' flex justify-between p-2  '>
        <div className="text-3xl text-blue font-semibold ">
            <h2>bluevine</h2>
        </div>
        
        <ul className='mt-1 '>
            <a className=' p-3 text-blue ' href="">Business Checking</a>
            <a className='p-3 text-blue'  href="">Business Loans</a>
            <a className='p-3 text-blue'  href="">Resources</a>
            <a className=' p-3 text-blue'  href="">Company</a>
            <a className=' p-3 text-blue'  href="">For Accountants</a>
        </ul>

      <div className='mt-3 '>
         <a className='p-3 text-blue'  href="">Sign in</a>
        <a className=' p-3 text-white rounded-xl bg-blue'  href="">Get started</a>
      </div>

   </nav>
  )
}

export default Narbar
