import React from "react";
import  Tilt  from "react-parallax-tilt";
import { styles, fadeIn, textVariant, slideIn } from "../styles";

const ServiceCard = ({ index, title, classgiven }) => (
  <Tilt className="w-[250px] ">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`w-full  p-[1px] rounded-[20px] shadow-lg ${classgiven}`}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-black text-[16px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);
export const Skills = () => {
  const services = [
    {
      title: "Web Developer ( React , Angular , Vue) ",
    },  {
      title: "React-Native Developer ",
    },
    {
      title: "BackEnd Developer ( Java, Node ,JavaScript) ",
    }, {
      title: "Tools ( Git, Jira ,AZTFS) ",
    },
 
  ];
const one = `bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600`
const two = `bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500`
  return (
    <div className="min-h-[50vh] p-6">
      <div variants={slideIn()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Technical strengths & my
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </div>

      <div className="my-20 px-4 flex-wrap flex gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} classgiven={(index % 2==0)?one:two}  {...service} />
        ))}
      </div>
    </div>
  );
};
