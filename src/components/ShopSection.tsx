import shoe from "../assets/footwearfinl.jpg";
import kids from "../assets/kids final.jpg";
import men from "../assets/menfinal.jpg";
import women from "../assets/womenfinal.png";





export const ShopSection = () => {

  const ShopSectionList = [
    {
      name: "Men",
      image: men
    },
    {
      name: "Women",
      image: women
    },
    {
      name: "Kids",
      image: kids
    },
    {
      name: "Footwears",
      image: shoe
    }
  ];

  return (
    <div className="flex flex-col w-screen max-w-[80%] md:max-w-[160vh] mx-auto md:gap-5 md:mt-5">
      {/* Shop Category Header */}
      <div className="py-10 flex justify-center">
        <div className="bg-white w-full md:max-w-5xl max-w-[80%] py-5 flex justify-center items-center relative">
          <span className="px-2 font-bold text-black z-50 bg-white text-xl md:text-7xl title_heading md:tracking-wide">Shop Category</span>
          <div className="absolute top-1/2 border-t-4 border-gray-300 md:w-[160vh] w-screen"></div>
        </div>
      </div>

      {/* Shop Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-10 mx-auto px-4 md:px-0">
        {ShopSectionList.map((item) => (
          <div key={item.name} className="flex flex-col items-center justify-center">
            <div className="relative overflow-hidden">
              <img src={item.image} className="object-contain hover:scale-105 ease-in-out transform duration-500" />
            </div>
            <div className="flex justify-center text-2xl mt-1 section_name font-bold text-[#616265]">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
