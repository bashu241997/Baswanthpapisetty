import React from "react";
import { Downarrow,Experince,Duration } from "../assets/icons";
import { anchor } from "../assets/class";
export default function ExperinceTab() {
  const experince = [{
    name:"Accenture",
    duration:"02 Aug 2021 - current",
    role:"application development analyst",
    description:"web application developer,builds and develop web application according to wireframe provided using React-js and next-js "
  },{
    name:"tata consultancy services",
    duration:"29 Nov 2018 - 29 Jul 2021",
    role:"systems engineer",
    description:"web and mobile application developer,builds and develop web application according to wireframe provided using React-js and angular for web applicaton and React-native for mobile application "
  }];
  const expdisplay = experince.map(e=>{
    return <div key={e.name} className="sm:p-6 p-4 rounded-xl imageslider">
      <div className="py-4 text-3xl font-semibold flex items-center"><Experince /> <span className="pl-2">{e.name}</span></div>
      <div className="pb-3 text-xl font-medium flex items-center"><Duration /> <span className="pl-2">{e.duration}</span></div>
      <div className="py-4 pl-4 text-2xl ">{e.role}</div>
      <div className="pb-3 px-4 text-md text-justify">{e.description}</div>
    </div>
  })
  return (
    <div id="experince" className="p-4 sm:p-8 text-slate-300 min-h-full h-auto">
      <div className="sm:py-6 text-6xl font-bold">Experince</div>
    <div className="grid py-6 font-mono capitalize gap-6 sm:grid-cols-2 ">
        {expdisplay}
    </div>
    <a href="#skills" onClick={(e)=>anchor(e,"skills")} className="flex justify-center py-6"><Downarrow /> </a>
    </div>
  );
}
