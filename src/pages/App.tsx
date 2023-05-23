import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import About from "./page/About";
import Contact from "./page/Contact";
import Hero from "./page/Hero";
import Project from "./page/Project";
import Tech from "./page/Tech";

import { LoadingAnimation } from "../components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-white w-full h-screen">
          <LoadingAnimation />
        </div>
      ) : (
        <div className="z-0 bg-black">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Project />
          <Tech />
          <div>
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
