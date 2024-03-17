import React, { Suspense } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="homer" className="min-h-[90vh] ">
      <section
        className={`z-[10] container w-full flex flex-col items-center sm:items-start justify-around min-h-[80vh]`}
      >
          <div className="flex flex-col w-full items-center justify-center">
            <img   src={require("../assets/profil.png")} className="w-[150px] sm:w-[200px] rounded-full" />

            <h1 className={` ${styles.heroHeadText}`}>
              Hi, I'm <span className="text-primary">Baswanth</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-[#626262]-100`}>
             papisetty Full Stack developer from India
            </p>
            <div className="mt-5 pt-[10px]">
              <a
                href="#projects"
                className="scale-90 duration-300 hover:scale-100  uppercase py-2 px-6 bg-[#350f0e] text-[#ffffff] font-bold rounded-[30px] mr-2 border border-[#350f0e]"
              >
                projects
              </a>
              <a
                href="#contact"
                className="scale-90 duration-300 hover:scale-100 uppercase py-2 px-6 text-[#350f0e] font-bold rounded-[30px] border border-[#350f0e]"
              >
                contact
              </a>
            </div>
          </div>

        <div className=" w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#350f0e] flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-[#350f0e] mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
