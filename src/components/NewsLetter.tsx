
export const NewsLetter = () => {
    return (
      <div className="mt-8 w-screen  sm:mt-8  mx-auto mb-12 opacity-100 md:max-w-[160vh] bg-[#F8F8F8] md:pb-20 md:pt-20 pb-10 pt-10 px-5">
          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-10 ">

  
    <div className="flex flex-col gap-4 md:gap-8 ">
      <h2 className="text-xl md:text-5xl font-bold text-black">
        Stay live with Fashora!
      </h2>
      <p className="text-sm md:text-xl font-medium text-gray-600 text-justify md:w-[60%]">
        Sign up for exclusive updates, sneak peeks, and special discounts. Be the first to know the latest trends!
      </p>
    </div>


    <div className="flex flex-col sm:flex-row gap-3 w-full md:my-auto justify-center md:justify-start">
      <input
        type="email"
        placeholder="Email"
        className="w-full sm:w-auto flex-1 h-12 px-4 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        className="h-12 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition w-full sm:w-auto"
      >
        Subscribe
      </button>
    </div>

  </div>

        
      </div>

    
    );
  };
  