import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "../common/Model";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../common/fadein";
import { SlideInWhenVisible } from "../common/slidein";

const Home = () => {

  return (
    <div className="min-h-[90vh] ">
      <div className=" absolute h-[100vh] z-[-10] pointer-events-none">
        <Canvas
          camera={{ position: [5, 0, 12.25], fov: 20 }}
          style={{
            width: "100vw",
            height: "85vh",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model position={[3.5, -1.1, 7.5]} />
          </Suspense>
        </Canvas>
      </div>
      <section
        className={`z-[10] container w-full flex flex-col items-center sm:items-start justify-around min-h-[80vh] mx-auto`}
      >
        <div className={`flex-col flex justify-center items-center`}>
          <div className="flex flex-col sm:flex-row w-full items-center justify-start">
            <div className="px-6">
            <FadeInWhenVisible timing={1}>
                <p className={`${styles.heroSubText} mt-2 text-[#333]-100`}>
                  Full Stack developer
                </p>
              </FadeInWhenVisible>
              <SlideInWhenVisible timing={1} side="r">
                <h1 className={` ${styles.heroHeadText}`}>
                  Hi, I'm <span className="text-primary">Baswanth</span>
                </h1>
              </SlideInWhenVisible>
              <FadeInWhenVisible timing={1}>
                <p className={`${styles.heroSub2Text} mt-2 text-[#333]-100`}>
                  papisetty from india
                </p>
              </FadeInWhenVisible>
              <div className="pt-[35px]">
                <a
                href="#projects"
                  className="animate-bounce uppercase py-1 px-4 bg-[#51b375] text-[#fff] font-bold rounded-[30px] mr-2 border-4 border-[#51b375]"
                >
                  projects
                </a>
                <a
                  href="#contact"
                  className="uppercase py-1 px-4 text-[#51b375] font-bold rounded-[30px] border-4 border-[#51b375]"
                >
                  contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#333] flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-[#333] mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
