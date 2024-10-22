// import React from 'react';
// import { SectionWrapper } from '../hoc';
// import { technologies } from '../constants';
// import BallCanvas from './canvas/Ball'

// const Tech = () => {
//   return (
//     <div className='w-[70%] flex flex-row flex-wrap justify-center mx-auto items-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//            {/* {technology.icon} */}
//            {/* prem */}
//            <div className='w-36 h-36 rounded-full m-auto flex justify-center items-center bg-tertiary rotate-' >
//               <img className='p-8' src={technology.icon} alt="" />
//            </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, '');

import React from "react";
import { BallCanvas } from "./canvas"; // Ensure BallCanvas is correctly imported
import { SectionWrapper } from "../hoc"; // Ensure SectionWrapper is correctly imported
import { technologies } from "../constants"; // Ensure technologies are correctly imported

const Tech = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      {/* Desktop View */}
      <div className="hidden sm:flex w-[70%] gap-10 flex-wrap justify-center">
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-[90%] flex flex-wrap justify-center gap-4 mx-auto">
        {technologies.map((technology) => (
          <div className='w-1/3 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} /> {/* Use BallCanvas for mobile as well */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
