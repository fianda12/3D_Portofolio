import { FC } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { service } from "../../service/service";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

import DarkCanvas from "../canvas/Dark";

interface ServiceProps {
  index?: number;
  title?: string;
  icon?: string;
}

const ServiceCard: FC<ServiceProps> = ({
  index = 0,
  title = "",
  icon = "",
}) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="card xs:w-[250px] w-full xs:h-[300px] h-full bg-zinc-950"
      >
        <div className="rounded-[20px] py-5 px-4 flex justify-center items-center flex-col">
          <figure className="mt-10">
            <img
              src={icon}
              alt="front-end engineer"
              className="w-20 h-20 object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-[20px] font-bold text-center">
              {" "}
              {title}
            </h2>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <section id="about">
        <div className="flex flex-col mt-20">
          <motion.div
            variants={textVariant(0)}
            initial="hidden"
            animate="show"
            className="container ml-20"
          >
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              Introduction
            </p>
            <h2 className="text-white font-mono md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Overview.
            </h2>
          </motion.div>
          <div className="p-10">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 ml-10 text-zinc-400 text-[17px] max-w-3xl leading-[30px]"
            >
              I am a junior front-end engineer who has experience in software
              development using TypeScript and JavaScript. I am also skilled in
              using frameworks such as React, Node.js, and Three.js. I have the
              ability to adapt quickly and am able to work together in a team to
              create efficient and scalable solutions.
            </motion.p>

            <div className="flex flex-wrap gap-10">
              <DarkCanvas />
              <div className="mx-auto">
                {service.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// export default About;
export default SectionWrapper(About, "about");
