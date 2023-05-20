import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../../assets/video/videos.webm";

function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStarted, setIsStarted] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleStartClick = async () => {
    setIsStarted(true);
    await controls.start({
      scale: 50,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    navigate("/home");
  };

  return (
    <motion.div
      className="min-h-screen"
      animate={controls}
      initial={{ scale: isStarted ? 1.2 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          filter: "brightness(15%)",
        }}
        className="w-full h-full object-cover fixed top-0 left-0 z-0"
      />
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center space-y-24">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl font-bold  mb-8 text-white"
          >
            FIKRI AMANDA
          </motion.h1>

          <motion.button
            className="btn bg-black text-white w-60 h-60 px-8 py-4 rounded-full text-4xl font-mono"
            onClick={handleStartClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="loader"
              initial={{ x: "-50%", y: "-50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              whileHover={{ borderColor: "#0cf2b9" }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "90%",
                height: "90%",
                borderRadius: "50%",
                border: "5px solid #fff",
                borderTopColor: "transparent",
                animationIterationCount: "infinite",
              }}
            ></motion.div>
            Start
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex"
          >
            <p className="text-2xl font-semibold text-white">
              Front-End Engineer &nbsp;
            </p>
            <span className="text-2xl text-white">| &nbsp;</span>
            <p className="text-2xl font-semibold text-white">
              Web Developer &nbsp;
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
