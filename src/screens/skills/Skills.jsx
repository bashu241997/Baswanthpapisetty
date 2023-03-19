import React from "react";
import { Heading, SubHeading } from "../../common/Heading";
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

const Skills = () => {
  const por = [
    { title: "HTML 5", icon: html },
    { title: "Css 3", icon: css },
    { title: "JS", icon: Java },
    { title: "TS", icon: javas },
    { title: "TS", icon: typescrip },
    { title: "Scss", icon: scss },
  ];
  const frame = [ { title: "React", icon: react },
  { title: "Angular", icon: angular },
  { title: "Node", icon: node },
  { title: "Mongo db", icon: mongo },
  { title: "Ionic", icon: Ionic },];
  const pro = [{ title: "Github", icon: github },
  { title: "bit bucket", icon: bitbucket },
  { title: "Vs code", icon: vscode }];
  return (
    <div id="about" className="py-[60px] sm:py-[40px]">
      <Heading heading={"Personal projects"} />
      <SubHeading heading={"programing languages And Scripting "} />
      <div className="flex py-[30px]  overflow-x-auto">
        {por.map((e, i) => {
          return (
            <div key={i}>
              <Skillcard icon={e} />
            </div>
          );
        })}
      </div>
      <SubHeading heading={"frame Works, libraries & Database"} />
      <div className="flex py-[30px]  overflow-x-auto">
        {frame.map((e, i) => {
          return (
            <div key={i}>
              <Skillcard icon={e} />
            </div>
          );
        })}
      </div>
      <SubHeading heading={"Project management Skills"} />
      <div className="flex py-[30px] overflow-x-auto">
        {pro.map((e, i) => {
          return (
            <div key={i}>
              <Skillcard icon={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
