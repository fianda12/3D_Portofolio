import {FC} from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { project } from "../../service/service";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";


interface ProjectProps {
  index: number;
  name: string;
  description: string;
  tags: any[];
  image: any;
  source_code_link: string;
}

const ProjectCard:FC <ProjectProps> = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-mono font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-gray-300 font-mono text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px]`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
  )
}



const Project = () => {
  return (
    <>
    <motion.div 
    className="mt-20"
    variants={textVariant(0)}>
      <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider `}>My work</p>
      <h2 className={`text-white font-mono md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Projects.</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-gray-300 font-mono text-[17px] max-w-3xl leading-[30px]'
      >
       The following projects showcase my teamwork skills and experience, through these projects are real-life examples of my work. Each project is briefly described with
       links to code repositories and live demos within. It reflects my ability to solve complex problems, work with different technologies,
       and manage projects effectively.
      </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {project.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
  )
}

export default SectionWrapper(Project, "project")