import React from "react";
import { Heading } from "../../common/Heading";
import Java from "../../assets/Java.svg";
import html from "../../assets/Html5.svg";
import css from "../../assets/css3.svg";
import javas from "../../assets/javascript.svg";
import typescrip from "../../assets/Typescript.svg";
import scss from "../../assets/Sass.svg";
import react from "../../assets/React.svg";
import angular from "../../assets/Angularjs.svg";
import node from "../../assets/node.svg";
import mongo from "../../assets/Mongodb.svg";
import Ionic from "../../assets/ionic.svg";
import github from "../../assets/Git.svg";
import bitbucket from "../../assets/Bitbucket.svg";
import vscode from "../../assets/vscode.svg";
import Skillcard from "../../common/Skillcard";
import Slider from "react-slick";

const Skills = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  //   autoplay:true
  // };
  const por = [
    { title: "HTML 5", icon: html },
    { title: "Css 3", icon: css },
    { title: "JS", icon: Java },
    { title: "TS", icon: javas },
    { title: "TS", icon: typescrip },
    { title: "Scss", icon: scss }, { title: "React", icon: react },
    { title: "Angular", icon: angular },
    { title: "Node", icon: node },
    { title: "Mongo db", icon: mongo },
    { title: "Ionic", icon: Ionic },{ title: "Github", icon: github },
    { title: "bit bucket", icon: bitbucket },
    { title: "Vs code", icon: vscode }
  ];
  return (
    <div id="skillcontainer" className="pt-[60px] sm:py-[40px]">
      <Heading heading={"Skills"} />
    <div className="sm:pt-[40px]">
      <div id="skills" className="flex py-[30px]  overflow-x-auto">
      {/* <Slider {...settings}> */}
        {por.map((e, i) => {
          return (
            <div key={i}>
              <Skillcard icon={e} />
            </div>
          )
        })}
        {/* </Slider> */}
      </div>
     </div>
    </div>
  );
};

export default Skills;
