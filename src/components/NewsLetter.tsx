
export const NewsLetter = () => {
    return (
      <div className="mt-8 w-screen  sm:mt-8  mx-auto mb-6 opacity-100 md:max-w-[160vh] bg-[#F8F8F8] md:pb-20 md:pt-20 pb-10 pt-10">
        <div className="md:grid md:grid-cols-2 flex flex-col p-5 pl-12 md:pl-8 pb-15">
          <div className="flex flex-col md:gap-9 gap-4">
            <div className=" text-xl md:text-5xl title_paragraph font-bold text-black md:pl-4 md:py-4"> Stay in the Loop with Fashora!</div>
            <div className="text-sm md:text-xl  font-bold item_desc text-gray-600 md:w-[60vh] md:pl-4 md:py-2 w-[30vh] pl-2 ">Sign up for exclusive updates, sneak peeks, and special discounts. Be the first to know the latest trends!</div>
           </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 pt-5 pl-2">
              <div><input type="email" placeholder="Enter your email" className="focus:outline-[#808080] outline-2 outline-gray-700 md:px-2 md:py-5 pl-1  text-sm md:text-xl w-[20vh] md:w-[45vh] py-3"></input></div>
              <div className="md:px-10 md:py-5  bg-[#444444] text-center text-white font-bold text-sm md:text-xl hover:bg-[#606060] px-3 py-3">SUBSCRIBE</div>
            </div>
            
          </div>
        </div>

        
      </div>

    
    );
  };
  