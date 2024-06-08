import React from 'react'

export default function Card({text,title,text1,text2,text3,color,color2,color3,color4,className}) {
  return (
    <div className={`w-[20.4375rem] h-[28.3125rem] bg-white flex flex-col justify-evenly items-center rounded-xl text-dark-gray ${className}`} style={{backgroundColor : color , color : color2}}>
        <p className='text-lg leading-7 font-bold'>{text}</p>
        <div className='flex items-center gap-2'>
        <span className='text-[2.5rem] font-bold tracking-[-0.075rem]' style={{color : color4}}>$ </span>
        <h2 className='text-7xl font-bold leading-[4.4375rem] tracking-[-0.135rem]' style={{color : color4}}>{title}</h2>
        </div>
        
        <div className='w-[17rem] text-center'>
            <p className='bord'>{text1}</p>
            <p className='bord'>{text2}</p>
            <p className='bord bord2'>{text3}</p>
        </div>
        <button className='bg-light-purple text-white py-2 px-20 rounded-md text-[0.8125rem] font-bold tracking-[0.08706rem]' style={{backgroundColor : color2 , color : color3}}>LEARN MORE</button>
    </div>
  )
}
