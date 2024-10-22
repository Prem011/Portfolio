import React from 'react';
import { connectLinks } from '../constants'; 
import sectionWrapper from '../hoc/sectionWrapper';

const Connect = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex flex-row flex-wrap justify-center mx-auto items-center gap-10 md:gap-20'>
        {connectLinks.map((links) => (
          <div className='w-24 h-24 sm:w-32 sm:h-32' key={links.name}>
            <a
              href={links.link}
              target={links.target}
              className='w-full h-full rounded-full flex justify-center items-center bg-tertiary hover:scale-105 transition-transform duration-300' // Added hover effect
              rel="noopener noreferrer"
            >
              <img className='p-4 sm:p-8' src={links.icon} alt={links.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(Connect, "connect");
