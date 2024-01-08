import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection'
const Payouts = () => {
  return (
    <>
      <div className='flex w-[100%] h-screen font-Inter'>
        <div className='w-[224px] h-screen'>
          <Navbar/>
        </div>
          <MainSection/>
        
      </div>  
    </>
  )
}

export default Payouts
