
import React from 'react'
import Cards from './Cards'
import LandingPageImages from './LandingPageImages'



function LandingPage() {
  return (
    <div className='w-screen min-h-screen bg-zinc-900 pt-1 pl-1'>
      <div className='textstructure mt-12 text-8xl ml-[10vw]'>
        {["Services at your", "Doorstep"].map((item, index)=>{
            return <div className='masker'>
            <h1 className='uppercase font-semibold  tracking-tighter'>{item}</h1>
            </div>
        })}
        <div className='flex justify-between'>
          <Cards/>
          <LandingPageImages/>
          
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage
