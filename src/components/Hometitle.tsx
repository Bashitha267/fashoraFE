import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export const Hometitle = () => {
    const settings = {
        arrows: true, // Enable arrows by default
        infinite: true,
        speed: 500,
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
    
    <div className="mt-20 md:max-w-[170vh] mx-auto w-screen bg-amber-500  relative flex items-center">
        <Slider {...settings} className="h-[70vh]">
            <div>dsasdasd</div>
            <div>fsfasaf</div>
            <div>fssaafss</div>
            <div>afasfssf</div>

        </Slider>
    </div>
  )
}
