import React from 'react'
import Card from './components/Card'


function App() {

  return (
    <main className='bg-[url(/images/bg-top.svg),url(/images/bg-bottom.svg)] bg-no-repeat bg-cover min-h-screen max-w-[90rem] flex items-center justify-center mx-auto bg-light-gray font-mont'>
      <div className='flex flex-col md:flex-row gap-6 md:gap-0'>
      <Card
      text="Basic"
      title="199.99"
      text1="500 GB Storage"
      text2="2 Users Allowed"
      text3="Send up to 3 GB"
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
      className="md:h-[31.25rem] md:mt-[-1.2rem]"
      />
      <Card
      text="Master"
      title="399.99"
      text1="52 TB Storage"
      text2="10 Users Allowed"
      text3="Send up to 20 GB"
      />
      </div>
    </main>
  )
}

export default App
