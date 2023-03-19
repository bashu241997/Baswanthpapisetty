import React from 'react'
import { ShortHeading ,Heading} from '../../common/Heading'
import I1 from '../../assets/img1.png'
import I2 from '../../assets/img2.png'
import I3 from '../../assets/img3.png'
import ProjectCard from '../../common/ProjectCard'

const Project = () => {
    const sub = "I specialize in designing visually engaging and responsive websites that meet the unique needs of our clients. Our team of designers is well-versed in the latest web design trends and technologies, and we work closely with our clients to create custom designs that reflect their brand and resonate with their audience. Our web design services include"
    const Data = [
        {
            heading:"Weather app",
            description:"Get up-to-date weather information with our user-friendly weather app. Check current conditions, hourly and daily forecasts, and receive severe weather alerts for your location. Stay prepared with our app",
            demo:"https://improved-weather.vercel.app/",
            code:"https://github.com/bashu241997/private-cht",
            img:I1,
            time:"1 year ago"
        },
        {
            heading:"whisper hub",
            description:"Chat application is a software program that enables users to communicate in real-time via text, audio, or video messages. It allows individuals or groups to connect and exchange information, files, and media",
            demo:"https://pingmeanytime.herokuapp.com/",
            code:"https://github.com/bashu241997/improved-weather",
            img:I2,
            time:"3 years ago"
        },
        {
            heading:"magic kingdom",
            description:"The magic kingdom is clone application is a platform that imitates the features and functions of the Disney brand, allowing users to access similar content, characters, and experiences, while potentially offering its own unique offerings.",
            demo:"https://clonedwebsites.web.app/login",
            code:"https://github.com/bashu241997/Disney-clone",
            img:I3,
            time:"2 years ago"
        }
    ]

  return (
    <div id="about" className="py-[60px] sm:py-[40px]">
    <Heading heading={"Personal projects"} />
    <ShortHeading heading={sub} />
    <div className='flex flex-col sm:flex-row items-center py-[40px] justify-around'>
        {Data.length>0 && Data.map((e)=> <ProjectCard data={e} />)}
    </div>
    </div>
  )
}

export default Project