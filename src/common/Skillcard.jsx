import React from 'react'

const Skillcard = ({icon}) => {
  return (
    <div className='text-primary scale-100 hover:scale-125 duration-300 group w-[100px] h-[100px] sm:w-[150px] m-[20px] shadow-xl rounded-lg bg-[#fff] sm:h-[150px] flex items-center justify-center'>
        <img src={icon.icon} alt="icon skills" className='group-hover:hidden w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />
        <span className='hidden group-hover:block text-[18px] font-bold uppercase'>{icon.title}</span>
    </div>
  )
}

export default Skillcard