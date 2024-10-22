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
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    
      <div className="hidden sm:flex w-[70%] gap-10 flex-wrap justify-center">
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className='sm:hidden w-[70%] flex flex-wrap justify-center mx-auto items-center gap-10'>
        {technologies.map((technology, index) => (
          <div className='w-2/5 h-25' key={technology.name}> {/* Use 1/2 width for two logos per row */}
            <div className='w-full h-full rounded-full m-auto flex justify-center items-center bg-tertiary'>
              <img className='p-4' src={technology.icon} alt={technology.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
