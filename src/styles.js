const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  heroHeadText: "font-black text-[#e4e4e7] lg:text-[68px] sm:text-[52px] text-[40px] lg:leading-[80px] mt-2",
  heroSubText: "font-medium text-[#71717a] lg:text-[17px] sm:text-[15px] text-[14px] lg:leading-[28px]",
  heroSub2Text: "font-semibold text-[#71717a] lg:text-[20px] sm:text-[18px] text-[16px]",
  sectionHeadText: "text-[#e4e4e7] font-extrabold md:text-[44px] sm:text-[36px] text-[28px] leading-tight",
  sectionSubText: "sm:text-[13px] text-[12px] text-[#a78bfa] uppercase tracking-[4px] font-semibold",
};

export { styles };
export const textVariant = (delay) => ({ hidden: { y: -50, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay } } });
export const fadeIn = (direction, type, delay, duration) => ({ hidden: { x: direction === "left" ? 100 : direction === "right" ? -100 : 0, y: direction === "up" ? 100 : direction === "down" ? -100 : 0, opacity: 0 }, show: { x: 0, y: 0, opacity: 1, transition: { type, delay, duration, ease: "easeOut" } } });
export const zoomIn = (delay, duration) => ({ hidden: { scale: 0, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { type: "tween", delay, duration, ease: "easeOut" } } });
export const slideIn = (direction, type, delay, duration) => ({ hidden: { x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0 }, show: { x: 0, y: 0, transition: { type, delay, duration, ease: "easeOut" } } });
export const staggerContainer = (staggerChildren, delayChildren) => ({ hidden: {}, show: { transition: { staggerChildren, delayChildren: delayChildren || 0 } } });