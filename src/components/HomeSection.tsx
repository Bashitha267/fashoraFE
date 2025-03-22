import background1 from "../assets/men.jpg"
export const HomeSection = () => {
  return (
    <div className="mt-30 flex flex-col gap-3 items-center md:justify-center md:p-16 pt-4 pb-4  ">
     <div><img src={background1} className="w-[160vh] h-[60vh] object-contain"></img></div>

    <div className=" md:py-10 flex justify-center">
      <div className="bg-white md:w-full md:max-w-5xl md:py-5 flex justify-center items-center relative">
      <span className=" py-4 px-3 text-xl font-bold  text-black z-50 bg-white md:text-7xl title_heading  md:tracking-wide ">new arrivals</span>
      <div className="absolute  top-1/2 border-t-4 border-gray-300 md:w-[160vh] w-screen"></div>

      </div>
     </div>



    </div>
  )
}
