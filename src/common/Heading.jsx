import React from 'react'

export const Heading = ({heading,dark}) => {
  return (
    <div className={`${dark?"text-white":"text-primary"} text-5xl text-center font-bold pacifo pt-[40px] pb-[40px] sm:pb-[10px]`}>{heading}</div>

  )
}

export const SubHeading = ({heading}) => {
    return (
      <div className='text-primary w-full font-bold text-left text-4xl robotom py-3'>{heading}</div>
    )
  }
  