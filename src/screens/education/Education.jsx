import React from 'react'
import {Heading} from '../../common/Heading'
import edu from '../../assets/edu.svg'
import Card from '../../common/Card'

const Education = () => {
  return (
    <div id="experience" className="py-4">
      <Heading heading={"Education"} />
      <div className='min-h-[65vh] text-primary flex items-center gap-4 justify-center ' >
      <div>
          <img className="min-w-[550px]" alt="about" src={edu} />
        </div>
        <div className="flex flex-col text-left">
          <Card head={'graduation'} subhead={"Bachelor's in electrical & electronics Engineering"} univ={"Anna university"} time={'2014 - 2018'} right={false}/>
          </div>
        
      </div>
      </div>
  )
}

export default Education