import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const sectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer} // Applying the staggerContainer variants for animation
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Applying styles
        id={idName} // Attaching id for the section
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component /> 
      </motion.section>
    );
  }

  return HOC; // Don't forget to return the HOC
};

export default sectionWrapper;
