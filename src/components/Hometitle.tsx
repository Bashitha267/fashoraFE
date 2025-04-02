import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export const Hometitle = () => {
  const images=[
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743495679/Simple_Modern_Photo_Collage_Autumn_Fashion_Sale_Banner_p1abux.jpg",
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743495432/Fashion_Trend_Banner_Landscape_ehvohe.jpg",
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743495432/Brown_Minimalist_New_Arrival_Promo_Banner_laivtq.jpg",




  ]
    const settings = {
      
        arrows: true, // Enable arrows by default
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // Tablets & smaller screens
            settings: {
              slidesToShow: 1, // Keep it at 1 slide
            },
          },
          {
            breakpoint: 768, // Mobile screens
            settings: {
              slidesToShow: 1, // Show only 1 slide
              dots: true, // Enable dots for navigation
              arrows: false, // Disable arrows on mobile for better UI
            },
          },
        ],
      };
      
  return (
    
    <div className="mt-20 md:max-w-[170vh] mx-auto w-screen   relative flex items-center bg-amber-400">
        <Slider {...settings} className="h-[60vh] md:h-[80vh]">
            {images.map((item)=>(
              <div><img src={item} className=" overflow-hidden md:object-cover h-[70vh]  md:h-full md:w-full md:p-0 p-1"></img></div>
            ))}

        </Slider>
    </div>
  )
}
