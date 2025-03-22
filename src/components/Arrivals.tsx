import { Heart, ShoppingCart } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export const Arrivals = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
  const arrivaldata = [
    {
      id: 1,
      name: "Black Sweater",
      prize: 15,
      img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1741280478/Screenshot_131_ekvxlh.png",
      desc: "This is a black sweater",
    },
    {
      id: 2,
      name: "white croptop ",
      prize: 11,
      img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1741280577/Screenshot_128_nqynnb.png",
      desc: "This is a black sweater",
    },
    {
      id: 3,
      name: "Black Sweater",
      prize: 12,
      img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1741280942/Screenshot_129_qskzgx.png",
      desc: "This is a black sweater",
    },
    {
      id: 4,
      name: "Black Sweater",
      prize: 20,
      img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1741280688/Screenshot_125_m49ai2.png",
      desc: "This is a black sweater",
    },
  ];
  const settings = {
    
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          dots:true,
          arrows:false
        },
      },
    ],
  };

  return (
    <div className=" w-screen md:max-w-[160vh] mx-auto max-w-[80%] p-4 md:p-0 flex flex-col">
      <Slider {...settings}>
        {arrivaldata.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group  flex flex-col gap-2 md:px-3" onClick={()=>{}}
          >
            <div className=" group ">
              <div className="relative">
              <img
                src={item.img}
                className="md:h-[60vh] md:w-[60vh]  h-[50vh] w-[50vh] hover:scale-105 transform ease-in-out duration-500"
                alt={item.name} 
              />
              </div>
              <div className="absolute top-2 right-2 opacity-100 md:opacity-0  translate-y-4 md:translate-y-8  -translate-x-5   md:-translate-x-9 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-orange-400  hover:bg-orange-600 rounded-full md:block hidden">
                <ShoppingCart size={28} color="white" />
              </div>
              <div className="absolute top-2 left-2 opacity-100 md:opacity-0 md:translate-x-9 md:translate-y-8 translate-y-4 translate-x-3 md:group-hover:opacity-100 transition-opacity duration-300 p-3 bg-orange-400  hover:bg-orange-600 rounded-full md:block hidden">
                <Heart size={28} color="white" />
              </div>
            </div>
            <div className="item_name text-[2rem] font-bold tracking-wide md:pl-0 pl-2">
              {item.name}
            </div>
            <div className="item_desc text-[1rem] font-light text-gray-600 leading-6 pl-2 md:p-0">
              {item.desc}
            </div>
            <div className="item_prize text-[1.5rem] font-semibold text-orange-500 pl-2 md:p-0">
              ${item.prize}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
