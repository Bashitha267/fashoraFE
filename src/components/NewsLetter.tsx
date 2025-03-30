
import bgimage from '../assets/backgroundNews.png';
export const NewsLetter = () => {
    return (
      
        <div className="mt-16 w-screen  sm:mt-16 lg:px-8 mx-auto mb-6 opacity-100">
          <div className="md:h-[50vh] relative isolate overflow-hidden  px-6 py-15 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32" style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'auto',
            opacity:'100%'
         

          }} >
            <h2 className="mx-auto max-w-2xl text-center  font-bold tracking-tight  text-5xl text-orange-500 mb-1">
            Stay in Style, Stay Updated!
            </h2>
  
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-orange-500 ">
            Subscribe to Fashora’s newsletter and be the first to discover exclusive fashion trends, special offers, and latest arrivals. Don't miss out on the chicest styles—straight to your inbox!
            </p>
  
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-orange-500 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-lg sm:leading-6 focus-visible:outline-orange-500 "
                placeholder="Enter your email"
              />
              <button
                type="button"
                className="flex-none rounded-md bg-orange-500 text-white px-4 py-4 text-sm font-semibold  shadow-sm hover:bg-orange-600 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-orange-500 hover:text-white"
              >
                Subscribe Us
              </button>
            </form>
  
           
          </div>
        </div>
    
    );
  };
  