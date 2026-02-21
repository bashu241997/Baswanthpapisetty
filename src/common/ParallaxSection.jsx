import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({
    children,
    speed = 0.5,
    className = "",
    direction = "up",
    overlay = false,
    overlayOpacity = 0.6,
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const factor = direction === "up" ? -1 : 1;
    const y = useTransform(scrollYProgress, [0, 1], [factor * speed * 100, factor * -speed * 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <div ref={ref} className={`parallax-section ${className}`} style={{ position: "relative", overflow: "hidden" }}>
            {overlay && (
                <div
                    className="parallax-overlay"
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(180deg, rgba(10,10,30,${overlayOpacity}) 0%, rgba(10,10,30,${overlayOpacity * 0.8}) 100%)`,
                        zIndex: 1,
                        pointerEvents: "none",
                    }}
                />
            )}
            <motion.div style={{ y, opacity, scale }} className="parallax-content" >
                {children}
            </motion.div>
        </div>
    );
};

export const ParallaxLayer = ({ children, speed = 0.3, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [speed * 150, -speed * 150]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

export const ParallaxBackground = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                style={{ y, scale, position: "absolute", inset: "-10%", zIndex: 0 }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ParallaxSection;
