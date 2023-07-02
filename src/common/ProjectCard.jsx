import React from 'react'
import { Globedisplay } from '../assets/icons'

const ProjectCard = ({key,title,src,demo,source,duration,subtitle}) => {
  return (
    <div className='flex mt-3 bg-[#d9ddf6] text-[#333] border-4 border-[#d9ddf6] rounded-[20px] overflow-hidden mx-3 flex-col w-full items-center justify-start' key={key}>
        <div className='w-[300px] h-[150px] overflow-hidden '>
            <img src={src} alt='key'/>
        </div>
        <div className='p-4 flex justify-between flex-col'> 
          <div className='flex justify-between items-center font-bold text-lg'>  <h3>{title}</h3> <span>{duration}</span></div>
            <h4 className='px-2 py-3 text-[14px] h-[220px] text-justify'>
                {subtitle}
            </h4>
            <div className='flex justify-between items-center w-full font-bold text-[12px]'>
                <div className='flex justify-start items-center'><Globedisplay /><a href={`${demo}`} className='pl-4'>Demo</a></div>
                <div><a href={`${source}`}>Source code </a></div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard