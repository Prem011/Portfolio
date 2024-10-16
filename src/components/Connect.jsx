import React from 'react'
import { connectLinks } from '../constants'; 
import sectionWrapper from '../hoc/sectionWrapper'

const Connect = () => {
  return (
    <div className='w-full  flex flex-row flex-wrap justify-center mx-auto items-center gap-20'>
        {connectLinks.map((links) => (
            <div className='w-32 h-32' key={links.name}>
                <a href={links.link} target={links.target}  className='w-full h-full rounded-full m-auto flex justify-center items-center bg-tertiary rotate-' rel="noopener noreferrer">
                    <img className='p-8' src={links.icon} alt="" />
                </a>
            </div>
        ))}
    </div>
  );
};



export default sectionWrapper(Connect, "connect")
