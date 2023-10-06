import Navbar from "../components/Navbar";
import About from "./page/About";
import Contact from "./page/Contact";
import Hero from "./page/Hero";
import Project from "./page/Project";
import Tech from "./page/Tech";


const App = () => {

  return (
        <div className="z-0 bg-[#F0E7E2]">
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
  );
};

export default App;
