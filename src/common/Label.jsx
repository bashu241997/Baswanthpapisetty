import React from 'react'

const Label = ({heading}) => {
  return (
    <div className='py-3'>
        <label className='uppercase text-xl font-bold block ubuntum'>{heading}</label>
        <input className="w-[300px] sm:w-[350px] bg-transparent py-2 px-4 border-0 border-b-4 capitalize" placeholder={`enter your ${heading}`} />
    </div>
  )
}

export default Label