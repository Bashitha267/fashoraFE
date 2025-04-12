import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Motion, spring } from 'react-motion';

interface ShopSectionProps {
  navigateTo: (category: string) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ navigateTo }) => {
  const ShopSectionList = [
    {
      name: 'Men',
      image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1743228794/men4_mf9bha.jpg',
    },
    {
      name: 'Women',
      image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1743228799/women_jpbuve.png',
    },
    {
      name: 'Kids',
      image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1743228790/kid_wfcvei.jpg',
    },
    {
      name: 'Footwear',
      image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1743231855/shoe2_fgtkd2.jpg',
    },
  ];

  return (
    <div className="flex flex-col w-screen max-w-[80%] md:max-w-[160vh] mx-auto md:gap-5 md:mt-5">
      {/* Header */}
      <div className="py-10 flex justify-center">
        <div className="bg-white w-full md:max-w-5xl max-w-[80%] py-5 flex justify-center items-center relative">
          <span className="px-2 font-bold text-black z-50 bg-white text-xl md:text-7xl title_heading md:tracking-wide">
            Shop Category
          </span>
          <div className="absolute top-1/2 border-t-4 border-gray-300 md:w-[160vh] w-screen"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-10 mx-auto px-4 md:px-0">
        {ShopSectionList.map((item, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
          const direction = index % 2 === 0 ? -200 : 200;

          const [show, setShow] = useState(false);

          useEffect(() => {
            if (inView) {
              const timer = setTimeout(() => {
                setShow(true);
              }, index * 500); // 2s delay * index
              return () => clearTimeout(timer);
            }
          }, [inView, index]);

          return (
            <div
              key={item.name}
              ref={ref}
              className="relative flex flex-col items-center justify-center cursor-pointer"
              onClick={() => navigateTo(item.name)}
            >
              <Motion
                defaultStyle={{ x: direction, opacity: 0 }}
                style={{
                  x: show
                    ? spring(0, { stiffness: 60, damping: 15 })
                    : spring(direction),
                  opacity: show ? spring(1) : spring(0),
                }}
              >
                {(style) => (
                  <div
                    style={{
                      transform: `translateX(${style.x}px)`,
                      opacity: style.opacity,
                      width: '100%',
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-[60vh] h-[70vh] duration-500"
                      />
                      <div className="w-[50vh] absolute bottom-6 left-1/2 transform -translate-x-1/2 items-center text-center flex flex-col">
                        <div className="backdrop-blur-md text-white border-4 border-white flex text-center px-30 py-3 text-xl hover:bg-white hover:text-black font-bold">
                          SHOP NOW
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Motion>
            </div>
          );
        })}
      </div>
    </div>
  );
};
