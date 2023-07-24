
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const SlideInWhenVisible = ({timing,side = 'l', children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const sided = side === 'r' ? '100%' : '-100%'
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }else{
        controls.start("hidden");
      }
      console.log(inView)
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: timing }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: sided }
        }}
      >
        {children}
      </motion.div>
    );
  }


  export const SlideUPWhenVisible = ({timing,side = 'd', children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const sided = side === 'd' ? '100%' : '-100%'
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }else{
        controls.start("hidden");
      }
      console.log(inView)
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: timing }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: sided }
        }}
      >
        {children}
      </motion.div>
    );
  }