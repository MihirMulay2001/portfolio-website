import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion'


export default function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({y : -0, opacity : 1});
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{y : -100, opacity : 0}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}