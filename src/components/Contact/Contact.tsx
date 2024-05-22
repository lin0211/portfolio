import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} id="contact" className="snap-start h-screen relative">
      <h2>CONTACT</h2>
      <motion.div
        className="w-20 h-20 rounded-full bg-slate-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
      <motion.div
        className="w-20 h-20 rounded-full bg-slate-50"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-20 h-20 rounded-full bg-slate-50"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="w-20 h-20 rounded-full bg-slate-50" />
      </span>
    </section>
  );
};
