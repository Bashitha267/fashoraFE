import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
export const BrandC = () => {
    const brands = [
        "Boohoo",
        "MissPap",
        "Holland",
        "Pretty",
        "Nasty Gal",
        "Missguided",
        "Shein",
        "ASOS",
        "Zara",
        "H&M",
        "Fashion Nova",
        "Revolve",
        "Topshop",
        "Bershka",
        "Stradivarius",
        "Mango",
        "Forever 21",
        "Urban",
        "Cotton On",
        "Pull & Bear"
      ];
      
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, // large screens
            settings: {
              slidesToShow: 8,
            },
          },
          {
            breakpoint: 768, // tablets
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480, // mobile devices
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };
  return (
    <div className='w-screen max-w-[150vh] md:max-w-[160vh] mx-auto mt-5 '>
    <Slider {...settings}>
    {brands.map((brand, index) => (
      <div key={index} className='p-4  '>
        <h3 className="px-4 py-2 border-black mx-2 text-center  font-bold text-xl md:text-2xl ">{brand}</h3>
      </div>
    ))}
  </Slider>
  </div>
  )
}
