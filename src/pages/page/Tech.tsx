import { FC } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import { SectionWrapper } from "../../hoc";
import { technologies } from "../../service/service";

interface TechProps {
  index?: number;
  title?: string;
  name?: string;
  icon?: string;
}

const TechCard: FC<TechProps> = ({ index = 0, title, name, icon}) => {
 return (
  <Tilt
  options={{ max: 45, scale: 1, speed: 450 }}
  className="xs:w-[250px] w-full"
>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="card xs:w-[250px] w-full xs:h-[300px] h-full"
  >
    <div className="rounded-[20px] py-5 px-4 flex justify-center items-center flex-col">
      <figure className="mt-10">
        <img
          src={icon}
          alt={name}
          className="w-20 h-20 object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-mono text-white text-[20px] font-bold text-center">
          {" "}
          {title}
        </h2>
      </div>
    </div>
  </motion.div>
</Tilt>
 )
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology, index) => (
      <div className='w-28 h-32' key={technology.name}>
        <TechCard index={index} {...technology} />
      </div>
    ))}
  </div>
  )
}

export default SectionWrapper(Tech, "");