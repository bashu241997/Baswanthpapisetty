import React from 'react'

export const Heading = ({heading,dark}) => {
  return (
    <div className={`${dark?"text-white":"text-primary"} text-3xl sm:text-5xl text-center font-bold pacifo pt-[40px] pb-[40px] sm:pb-[10px]`}>{heading}</div>

  )
}

export const SubHeading = ({heading}) => {
    return (
      <div className='text-primary w-full font-bold text-left text-4xl robotom py-3'>{heading}</div>
    )
  }
  
  export const ShortHeading = ({heading}) => {
    return (
      <div className='text-primary px-[25px] w-full font-bold text-justify text-base sm:text-2xl robotom py-[50px]'>{heading}</div>
    )
  }