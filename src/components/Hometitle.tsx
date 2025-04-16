import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const Hometitle = () => {
  const images = [
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743495679/Simple_Modern_Photo_Collage_Autumn_Fashion_Sale_Banner_p1abux.jpg",
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743495432/Fashion_Trend_Banner_Landscape_ehvohe.jpg",
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743495432/Brown_Minimalist_New_Arrival_Promo_Banner_laivtq.jpg",
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mt-25 max-w-screen-xl md:max-w-[160vh] mx-auto w-full relative flex items-center md:h-[70vh]">
      <Slider {...settings} className="w-full h-full">
        {images.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
