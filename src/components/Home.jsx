import React from "react";
import { useNavigate } from "react-router-dom";
import { styles, slideIn } from "../styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeInWhenVisible } from "../common/fadein";
import { SlideInWhenVisible } from "../common/slidein";


const exampleVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const Home = () => {
  const history = useNavigate();
  const control = useAnimation();
  const [ref, inView] = useInView();
  console.log(control, ref, inView);
  return (
    <section
      className={`container w-full flex flex-col items-center justify-around min-h-[90vh] mx-auto`}
    >
      <div className={`flex-row flex justify-start items-start`}>
        <div className="flex flex-col sm:flex-row w-full items-center justify-center">
          <SlideInWhenVisible timing={1} side="l"><div

            className="flex px-[20px] items-center justify-between"
          >
            <img
              src={require("../assets/profile.png")}
              className="w-[300px] h-[300px]"
              alt="profile"
            />
          </div></SlideInWhenVisible>
          <div className="px-6">
            <SlideInWhenVisible timing={1} side="r">
           
              <h1 className={` ${styles.heroHeadText}`}>
                Hi, I'm <span className="text-primary">Baswanth</span>
              </h1>
            </SlideInWhenVisible>
            <FadeInWhenVisible timing={1}>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I Develop web and mobile applications,{" "}
                <br className="sm:block hidden" />
                With cutting edge technologies
              </p>
            </FadeInWhenVisible>
            <div className="pt-[35px]">
              <button
                onClick={() => history("/projects")}
                className="animate-bounce uppercase py-1 px-4 bg-[#51b375] text-[#fff] font-bold rounded-[30px] mr-2 border-4 border-[#51b375]"
              >
                projects
              </button>
              <button
                onClick={() => history("/contact")}
                className="uppercase py-1 px-4 text-[#51b375] font-bold rounded-[30px] border-4 border-[#51b375]"
              >
                contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#333] flex justify-center items-start p-2">
            <div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#333] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
