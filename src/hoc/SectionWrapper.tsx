import { motion, MotionProps, Variants } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { ReactElement } from "react";

interface StarWrapperProps {
  Component: React.FunctionComponent;
  idName: string;
  motionProps?: MotionProps;
}

const StarWrapper = ({
  Component,
  idName,
  motionProps = {},
}: StarWrapperProps): ReactElement => {
  const motionVariants: Variants = staggerContainer(0.1);

  return (
    <motion.section
      variants={motionVariants}
      initial='hidden'
      whileInView='show'
      {...motionProps}
      className='max-w-7xl mx-auto relative z-0'
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  );
};

export default StarWrapper;
