import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./projects.css";
import cloned from "../assets/images/cloned.jpg"
import chat from "../assets/images/chat.png"
import we from "../assets/images/we.png"


export default function Projects() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const data = [
    {
      name: "disney hotstar clone application",
      Description: "Clone application of disney pls hotstar using next js and react jss",
      tech: "technologies used",
      technologies: ["react Js", "next js", "tailwind ", "react-slick"],
      image: cloned,
      link:"https://clonedwebsites.web.app" },
    {
      name: "privatechat application",
      Description: "A web application that Allows user to chat with friends colleauges personally",
      tech: "technologies used",
      technologies: ["react Js", "socket io","node Js", "bootstrap"],
      image: chat,
      link:"https://pingmeanytime.herokuapp.com"
   
    },
    {
      name: "weather application",
      Description: "weather application made using open weather app api ",
      tech: "technologies used",
      technologies: ["react Js", "next js", "tailwind css"],
      image: we,
      link:"https://improved-weather.vercel.app"
    },
  ];

const Datatodisplay = data.map((e,i)=>{
  return  <div key={i} className="p-6 md:min-h-[460px] grider sm:grid-cols-2">
  <div className="p-6 md:min-h-[350px] shadow-xl">
    <div className="pt-4 pb-2 text-4xl font-semibold">{e.name}</div>
    <div className="py-2 text-md">
      {e.Description}
    </div>
    <div className="py-2 text-md">{e.tech}</div>
    <ol className="px-4 text-sm">
      {e.technologies.map((_e ,i)=><li className="list-disc pb-2" key={i}>{_e}</li>)}
    </ol>
    <button className="py-2  px-10 bg-sky-600 text-white capitalize rounded-lg" onClick={()=>{window.location.href = e.link}}>Click here</button>
  </div>

  <div className="p-6 flex grow justify-center items-center">
    <img src={e.image} />
  </div>
</div>
})

  return (
    <div
      id="project"
      className="px-4 py-10 sm:p-8 capitalize  min-h-full"
    >
      <div className="sm:py-6 text-sky-600 text-5xl font-bold">Projects</div>
      <Slider className="Slider" {...settings}>
       {Datatodisplay}
      </Slider>
    </div>
  );
}
