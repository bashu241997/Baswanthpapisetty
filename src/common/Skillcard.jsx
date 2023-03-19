import React from 'react'

const Skillcard = ({icon}) => {
  return (
    <div className='text-primary scale-100 hover:scale-125 duration-300 group w-[200px] m-[20px] shadow-xl rounded-lg bg-[#fff] h-[200px] flex items-center justify-center'>
        <img src={icon.icon} alt="icon skills" className='group-hover:hidden w-[100px] h-[100px]' />
        <span className='hidden group-hover:block text-[18px] font-bold uppercase'>{icon.title}</span>
    </div>
  )
}

export default Skillcard