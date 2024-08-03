import React, { Suspense } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="homer" className="min-h-[90vh] pt-[50px] pb-4">
      <section
        className={`z-[10] container w-full flex flex-col items-center sm:items-start justify-around min-h-[80vh]`}
      >
        <div className="flex w-full flex-col sm:flex-row items-center justify-center">
          <div className="md:pr-[50px]">
            <h1 className={` ${styles.heroSub2Text}`}>Hi 👋,</h1>
            <h1 className={` ${styles.heroHeadText}`}>I'm Baswanth p</h1>
            <p
              className={`${styles.heroSubText} mt-2 text-[#364056]-100 lg:w-[500px] sm:w-[250px]`}
            >
              I'm a web developer based in Chnennai🏘️, India . Iam passionate
              developer who loves coding using Cutting edge technologies.
            </p>
            <div className="mt-5 pt-[10px]">
              <a
                href="#projects"
                className="scale-90 duration-300 hover:scale-100  uppercase py-2 px-6 bg-[#0058dd] text-[#ffffff] font-bold rounded-[30px] mr-2 border border-[#0058dd]"
              >
                projects ⌨️
              </a>
              <a
                href="#contact"
                className="scale-90 duration-300 hover:scale-100 uppercase py-2 px-6 text-[#0058dd] font-bold rounded-[30px] border border-[#0058dd]"
              >
                contact 🤙
              </a>
            </div>
          </div>
          <img
            src={require("../assets/profile1.jpg")}
            className="w-[250px] sm:w-[300px] rounded-full m-[50px] sm:m-[0px]"
          />
        </div>

        <div className=" w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#0058dd] flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-[#0058dd] mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
