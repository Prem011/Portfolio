import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt'; // Ensure correct import from react-tilt

import { styles } from '../styles'; // Ensure this exists
import { services } from '../constants'; // Ensure this exists
import { fadeIn } from '../utils/motion'; // Ensure this exists
import { SectionWrapper } from '../hoc'; // Correct import for SectionWrapper

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-[15.4vw] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-full leading-[30px]"
      >
        Dynamic and versatile Full Stack MERN Developer skilled in both frontend and backend development. With hands-on experience building scalable web applications, RESTful APIs, and real-time features using technologies like Node.js, React, Express, MongoDB, and Socket.io, I have a strong foundation in UI/UX design and software development. Known for creating clean, efficient, and maintainable code, I excel in integrating API services, ensuring responsive design, and deploying secure systems. Proficient in handling authentication (Passport.js), state management (Redux, Zustand), and payment gateway integrations. Eager to bring innovative, detail-oriented solutions to the tech industry.
      </motion.p>

      <div className="mt-20 flex mx-auto w-full flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
