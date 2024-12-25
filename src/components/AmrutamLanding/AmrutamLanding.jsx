// import React from 'react';
// import { ChevronRight } from 'lucide-react';
// import iphone13 from '../../assets/images/iphone13.png';
// import playStore from '../../assets/images/playStore.png';
// import appStore from '../../assets/images/appStore.png';

// const AmrutamLanding = () => {
//   return (
//     <div className="bg-[#FDF6EC] min-h-screen p-8 flex flex-col md:flex-row items-center justify-between mx-auto">
//       <div className="md:w-1/2 space-y-6 mx-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#2F5233]">
//           Amrutam Home App
//         </h1>
        
//         <p className="text-gray-600 text-lg">
//           The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
//         </p>
        
//         <h2 className="text-2xl md:text-3xl font-bold text-black">
//           Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
//         </h2>
        
//         <div className="space-y-4">
//           <h3 className="text-xl font-bold text-black">Get The App Now</h3>
//           <div className="flex flex-wrap gap-4">
//             <button>
//               <img src={playStore} alt="Play Store" className='w-36'/>
//             </button>
//             <button>
//               <img src={appStore} alt="Play Store" className='w-36'/>
//             </button>
//           </div>
//         </div>
//       </div>
      
//       <div className="md:w-1/2 mt-8 md:mt-0">
//         <div className="relative">
//           <div className="absolute  w-52 h-52 rounded-full bg-[#3A643B29] right-60 top-0 md:right-44" />
//           <div className="absolute  w-48 h-48 rounded-full bg-[#3A643B29] left-80 bottom-0" />
//           <img 
//             src={iphone13}
//             alt="Amrutam App Interface" 
//             className="w-full mx-auto transform "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AmrutamLanding;




import React from 'react';
import { ChevronRight } from 'lucide-react';
import iphone13 from '../../assets/images/iphone13.png';
import playStore from '../../assets/images/playStore.png';
import appStore from '../../assets/images/appStore.png';

const AmrutamLanding = () => {
  return (
    <div className="bg-[#FDF6EC] min-h-screen p-4 md:p-8 flex flex-col md:flex-row items-center justify-between mx-auto">
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 px-4 md:mx-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2F5233]">
          Amrutam Home App
        </h1>
        
        <p className="text-gray-600 text-base md:text-lg">
          The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
        </p>
        
        <h2 className="text-xl md:text-3xl font-bold text-black">
          Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
        </h2>
        
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-black">Get The App Now</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button>
              <img src={playStore} alt="Play Store" className="w-32 md:w-36"/>
            </button>
            <button>
              <img src={appStore} alt="App Store" className="w-32 md:w-36"/>
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute w-32 md:w-52 h-32 md:h-52 rounded-full bg-[#3A643B29] right-4 md:right-44 top-0" />
          <div className="absolute w-32 md:w-48 h-32 md:h-48 rounded-full bg-[#3A643B29] left-4 md:left-80 bottom-0" />
          <img 
            src={iphone13}
            alt="Amrutam App Interface" 
            className="w-3/4 md:w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AmrutamLanding;