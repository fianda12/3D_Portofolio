import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview]);

  return (
    <div className={`w-full h-screen relative mx-auto`}>
      <div
        className={`absolute inset-0 max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-center justify-center gap-5 z-10`}
      >
        <div ref={ref} className="relative" style={{ overflow: "hidden" }}>
          <motion.div
            variants={{
              hidden: { left: "0%" }, 
              visible: { left: "100%" },
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="bg-[#3F4C52] w-full h-full rounded-lg"
            style={{
              position: "absolute",
              top: "4",
              bottom: "4",
            }}
          />
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`font-black text-[#3F4C52] font-mono lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-normal mt-2`}
          >
            Hi, And Welcome
          </motion.h1>
        </div>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-[30px] h-[54px] rounded-3xl border-4 border-[#3F4C52] flex justify-center items-start p-2"
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 rounded-full bg-[#3F4C52] mb-1"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
