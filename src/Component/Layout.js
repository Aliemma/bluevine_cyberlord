import React from 'react'

function Layout() {
  return (
    <div className='mt-11 grid grid-cols-2 bg-sea-blue p-10 gap-4'>
      <div>
        <h1 className='text-5xl font-semibold w-5/6 text-blue-black'>Earn 2.0% interest  with Bluevine  Business Checking.</h1>
      </div>
      <div>
        <p className='text-2xl mt-4 w-4/6  text-blue-black'>Eligible customers earn 50x the national average interest rate on balances up to  and including $100,000.1</p>
        <button className='text-white  rounded bg-blue text-xl p-3 mt-10'>Start application</button>
      </div>
    </div>
  )
}

export default Layout
