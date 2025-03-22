import { Heart, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import "../components/navbar.css";

interface NavbarProps {
  toggleCart: () => void;
  cartLength: number;
  navigateTo: (page: string) => void;
  currentPage: string;
}

export const NavBar: React.FC<NavbarProps> = ({
  toggleCart,
  cartLength,
  navigateTo,
  currentPage,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 bg-white  shadow-md z-100 py-2 w-screen">
      <div className="flex flex-col  md:ml-4 md:mr-6 mx-auto md:pl-4 md:pr-4 pb-2 pt-4">
        {/* Title */}
        <div className={`flex items-center pb-4 justify-center w-screen ${isMobileMenuOpen ? "" : ""}`}   > 
          <h1 className="tracking-wide md:text-6xl bg-clip-text  text-2xl text-transparent bg-gradient-to-r  from-red-500 via-orange-500  to-pink-500 logo_title cursor-pointer w-fit text-center">
            <a
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
              }}
            >
              FASHORA
            </a>
          </h1>
        </div>

        {/* Mobile Hamburger Button */}
      

        {/* Navigation and Icons Section */}
        <div className={`flex flex-row md:flex-row justify-between   md:opacity-100 items-center  md:h-fit w-screen max-w-[60vh]  md:max-w-[160vh] md:mx-auto  md:px-0 ${isMobileMenuOpen ? "px-0" : "px-5"}`}>
          <div className={`md:hidden block ${isMobileMenuOpen ? "hidden" : "block"}`}>  <button
          className="md:hidden block md:p-4"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button></div>
          {/* Navigation Menu */}
          <div
            className={`navmenu md:block ${isMobileMenuOpen ? "block" : "hidden"} md:mx-5 `}
          >
            <nav className="flex md:flex-row md:gap-10 flex-col  h-screen md:h-fit bg-gray-200 md:bg-white pr-30 md:pr-0 gap-4" onClick={()=>{
              setMobileMenuOpen(false)
            }}>
              {/* Menu Items */}
              {["home", "kids", "women", "men", "other"].map((page) => (
                <div
                  key={page}
                  className={` navbar_headers text-2xl hover:text-orange-500 cursor-pointer ${
                    currentPage === page
                      ? "px-3 text-orange-500 border-b-4 border-orange-500"
                      : "mx-3 relative pb-2 before:absolute before:bottom-0 before:left- before:w-0 before:h-0.5 before:bg-orange-500 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:border-orange-500 hover:before:left- "
                  }`}
                >
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(page);
                      setMobileMenuOpen(false)
                    }}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Icons Section */}
          <div className={`icons flex flex-row gap-4 justify-center md:justify-end items-center mt-4 md:mt-0 ${isMobileMenuOpen ? "hidden" : "block"}`}>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigateTo("login");
              }}
            >
              <User size={28} className="hover:text-orange-500" />
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigateTo("fav");
              }}
            >
              <Heart size={28} className="hover:text-orange-500" />
            </a>
            <div className="relative shopping flex items-start">
              <ShoppingCart
                size={28}
                className="hover:text-orange-500 cursor-pointer"
                onClick={toggleCart}
              />
              <span className="absolute top-0 right-0 bg-orange-500 rounded-full h-5 w-5 flex justify-center items-center transform translate-x-3 -translate-y-1">
                {cartLength}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
