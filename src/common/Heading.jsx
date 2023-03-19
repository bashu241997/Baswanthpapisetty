import React from 'react'

export const Heading = ({heading}) => {
  return (
    <div className='text-primary text-5xl text-center font-bold pacifo pt-[40px] pb-[10px]'>{heading}</div>

  )
}

export const SubHeading = ({heading}) => {
    return (
      <div className='text-primary w-full font-bold text-left text-4xl robotom py-3'>{heading}</div>
    )
  }
  