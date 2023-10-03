import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} id="home">
      <div
        className={`absolute inset-0  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-center justify-center gap-5 z-10`}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`font-black z-40 text-[#3F4C52] font-mono lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
          >
            WELCOME TO MY WORLD
          </motion.h1>
        </div>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center items-center">
        <Link to="/about">
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
        </Link>
      </div>
    </section>
  );
};

export default Hero;
