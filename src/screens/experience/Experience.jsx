import React from 'react'
import {Heading} from '../../common/Heading'
import experience from '../../assets/exp.gif'
import Card from '../../common/Card'

const Experience = () => {
  return (
    <div id="experience" className="py-4">
      <Heading heading={"Experience"} />
      <div className='min-h-[85vh] text-primary flex items-center gap-4 justify-center ' >
     
        <div className="flex flex-col text-left">
          <Card head={'accenture'} univ={""}  subhead={'application development senior analyst'} time={'August 2021 - present'} right={false}/>
          <Card head={'tata consultancy services'} univ={""} subhead={'systems engineer'} time={'november 2018 - july 2021'} right={true}/>
        </div>
        <div>
          <img className="min-w-[550px]" alt="about" src={experience} />
        </div>
      </div>
      </div>
  )
}

export default Experience