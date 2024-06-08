import React from 'react'
import Card from './components/Card'


function App() {

  return (
    <main className='relative px-6 py-16 max-w-[90rem] flex flex-col items-center justify-center mx-auto bg-light-gray font-mont'>
      <img src='/images/bg-bottom.svg' className='absolute bottom-0 left-0 z-0'/>
      <img src='/images/bg-top.svg' className='absolute top-0 right-0 z-0'/>
      <div className='md:mb-20 flex flex-col items-center'>
        <p className='text-[2rem] font-bold text-dark-gray mb-6'>Our Pricing</p>
        <div className='flex gap-5'>
        <label className='lab'>Annually</label>
        <input type="checkbox" />
        <label className='lab'>Monthly</label>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-0 z-10'>
      <Card
      text="Basic"
      title="199.99"
      text1="500 GB Storage"
      text2="2 Users Allowed"
      text3="Send up to 3 GB"
      color4="#4A4D60"
      />
      <Card
      text="Professional"
      title="249.99"
      text1="1 TB Storage"
      text2="5 Users Allowed"
      text3="Send up to 10 GB"
      color="#A2A7F0"
      color2="#FFFFFF"
      color3="#6D72DE"
      className="md:h-[31.25rem] md:mt-[-1.7rem] md:py-4"
      />
      <Card
      text="Master"
      title="399.99"
      text1="52 TB Storage"
      text2="10 Users Allowed"
      text3="Send up to 20 GB"
      color4="#4A4D60"
      />
      </div>
    </main>
  )
}

export default App
