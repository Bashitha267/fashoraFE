import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const ShopSection = () => {
  const ShopSectionList = [
    {
      name: 'Men',
      image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1743228794/men4_mf9bha.jpg',
      path: '/men',
    },
    {
      name: 'Women',
      image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1743228799/women_jpbuve.png',
      path: '/women',
    },
    {
      name: 'Kids',
      image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1743228790/kid_wfcvei.jpg',
      path: '/kids',
    },
    {
      name: 'Footwear',
      image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1743231855/shoe2_fgtkd2.jpg',
      path: 'shoes',
    },
  ];

  return (
    <div className="flex flex-col w-screen max-w-[80%] md:max-w-[160vh] mx-auto md:gap-5 md:mt-20">
      {/* Header */}
      <div className="py-10 flex justify-center">
        <div className="bg-white w-full md:max-w-5xl max-w-[80%] py-5 flex justify-center items-center relative">
          <span className="px-2 font-bold text-black z-10 bg-white text-xl md:text-7xl title_heading md:tracking-wide">
            Shop Category
          </span>
          <div className="absolute top-1/2 border-t-4 border-gray-300 md:w-[160vh] w-screen"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-10 mx-auto px-4 md:px-0">
        {ShopSectionList.map((item, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
          const [show, setShow] = useState(index === 0); // show immediately if first

          useEffect(() => {
            if (inView && index !== 0) {
              const timer = setTimeout(() => setShow(true), index * 200);
              return () => clearTimeout(timer);
            }
          }, [inView, index]);

          const content = (
            <div className="relative flex flex-col items-center justify-center cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover duration-500 h-[80vh]"
                  
                />
                <div className="w-2xl absolute bottom-6 left-1/2 transform -translate-x-1/2 items-center text-center flex flex-col">
                  <div className="backdrop-blur-md text-white border-4 border-white flex text-center lg:px-30 lg:py-3 px-20 py-2 text-md lg:text-lg hover:bg-white hover:text-black font-bold">
                    <Link to={item.path}>SHOP NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          );

          return index === 0 ? (
            <div key={item.name} ref={ref}>
              {content}
            </div>
          ) : (
            <motion.div
              key={item.name}
              ref={ref}
              initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
              animate={show ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
