import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Hero, Contact, Project, Tech, Navbar } from "./page";

import LandingPage from "./page/LandingPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  function handleStartClick() {
    setIsLoading(true);
  }

  return (
    <>
      {isLoading ? (
        <BrowserRouter>
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
        </BrowserRouter>
      ) : (
        <LandingPage onStartClick={handleStartClick} />
      )}
    </>
  );
};

export default App;
