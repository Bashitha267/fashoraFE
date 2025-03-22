
export const Sortbar = () => {
    const sizes = ["S", "M", "L", "XL"];
    const colors = ["red", "blue", "white", "black", "blue", "white", "black", "blue", "white", "black", "blue", "white", "black", "blue", "white", "black", "blue", "white", "black"];
    return (
      <div className="mt-24 w-screen max-w-[100%] md:max-w-[160vh] md:mx-auto  flex flex-row border-2 border-[#6F6F6F] gap-2">
        <div className="p-6 md:w-[40vh]">
          <div className="flex-col flex gap-5">
            <div className="section_name md:text-xl font-bold">SIZE</div>
            <div className="flex md:flex-row flex-col  md:gap-4 gap-2">
              {sizes.map((item) => (
                <div className="section_name md:text-lg "><button className="  bg-gray-200 px-1 py-1 hover:bg-gray-400 w-8 h-8 md:h-12 md:w-12 text-lg">{item}</button></div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-l-2 border-[#E1E1E1] md:block hidden"></div>
        <div className="p-6 ">
          <div className="flex-col flex gap-5">
            <div className="section_name md:text-xl font-bold  ">COLOR</div>
            <div className="md:flex md:flex-row grid grid-cols-5 md:gap-4 gap-2  ">
              {colors.map((item) => (
                <div className="w-8 h-8 md:w-10 md:h-10  border-2 border-[#3F3F3D]" style={{backgroundColor:item}}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  
}
