import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export const Arrivals = () => {
  const navigate=useNavigate();
  const arrivaldata = [
    {
      id: "p101",
      name: "Office Red Dress",
      prize: 18.99,
      img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1742480747/Red_Bold_Fashion_Promotion_Instagram_Post_5_vbpxvf.jpg",
      
    },
    {
      id:"p102",
      name: "Princess White Wedding Dress",
      prize: 45.99,
      img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1742480934/wed_1_wmo15z.jpg",
      
    },
    {
      id: "p104",
      name: "Party White Dress",
      prize: 20.99,
      img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1742481115/wh_frk_2_ve0nbd.jpg",
      
    },
    {
      id: "p106",
      name: "Pretty Rose Dress",
      prize: 20.99,
      img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1742481657/Red_Bold_Fashion_Promotion_Instagram_Post_yaucfi.jpg",
     
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
            className="relative overflow-hidden group  flex flex-col gap-2 md:px-3" onClick={()=>{
               navigate(`/product/${item.id}`)
            }}
            
          >
            <div className=" group ">
              <div className="relative">
              <img
                src={item.img}
                className="md:h-[60vh] md:w-[60vh]  h-[50vh] w-[50vh] hover:scale-105 transform ease-in-out duration-500 object-cover"
                alt={item.name} 
              />
              </div>
            
            </div>
            <div className="item_name text-xl font-bold tracking-wide md:pl-0 pl-2 p-1">
              {item.name}
            </div>
            
            <div className="item_prize text-lg font-semibold text-black-500 pl-2  p-1">
              ${item.prize}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
