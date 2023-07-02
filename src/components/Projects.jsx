import React from 'react'
import ProjectCard from '../common/ProjectCard'
import Disney from "../assets/disney_clone.png"
import Weather from "../assets/Next.png"
import chat from "../assets/chat_app.png"

export const Projects = () => {
  const title = `projects`
  const projdata = () => ([
    {
      title:'MAGIC KINGDOM',
      subtitle:"The Magic Kingdom Is Clone Application Is A Platform That Imitates The Features And Functions Of The Disney Brand, Allowing Users To Access Similar Content, Characters, And Experiences, While Potentially Offering Its Own Unique Offerings.",
      demo:"https://clonedwebsites.web.app/login",
      source:"https://github.com/bashu241997/Disney-clone",
      duration:"1 year",
      src:Disney
    },
    {
      title:'WEATHER APP',
      subtitle:"Get Up-To-Date Weather Information With Our User-Friendly Weather App. Check Current Conditions, Hourly And Daily Forecasts, And Receive Severe Weather Alerts For Your Location. Stay Prepared With Our App",
      demo:"https://improved-weather.vercel.app/",
      source:"https://github.com/bashu241997/improved-weather",
      duration:"1 year",
      src:Weather
    },
    {
      title:'whisper hub',
      subtitle:"Chat Application Is A Software Program That Enables Users To Communicate In Real-Time Via Text, Audio, Or Video Messages. It Allows Individuals Or Groups To Connect And Exchange Information, Files, And Media",
      demo:"https://pingmeanytime.herokuapp.com/",
      source:"https://github.com/bashu241997/private-cht",
      duration:"1 year",
      src:chat
    }
  ])
  return (
    <div className="px-4 flex-col w-full uppercase h-full">
      <h2 className="text-xl font-bold pb-4">{title}</h2>
     <div className='px-4 flex flex-col md:flex-row w-full '>
     {projdata().map((e,i)=><ProjectCard {...e} key={i} />)}
     </div>
    </div>
  )
}
