import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection'
const Payouts = () => {
  return (
    <>
      <div className='flex w-[100%] h-screen font-Inter'>
        <div className='w-[15%] h-screen'>
          <Navbar/>
        </div>
        <div className='w-[85%]'>
          <MainSection/>

        </div>
        
      </div>  
    </>
  )
}

export default Payouts
