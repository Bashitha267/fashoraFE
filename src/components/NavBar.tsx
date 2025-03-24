import { Heart, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import './navbar.css';

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
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white fixed w-full z-500 top-0 start-0 border-b border-gray-200">
      <div className="md:max-w-[160vh] w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer justify-center"
          onClick={() => navigateTo("home")}
        >
          <span className="tracking-wide md:text-4xl bg-clip-text text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 logo_title cursor-pointer w-fit">
            FASHORA
          </span>
        </div>

        {/* Icons and Mobile Menu Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:gap-4 gap-1">
          <a
            onClick={(e) => {
              e.preventDefault();
              navigateTo("login");
            }}
            className="cursor-pointer"
          >
            <User size={28} className="hover:text-orange-500 text-gray-900" />
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigateTo("fav");
            }}
            className="cursor-pointer"
          >
            <Heart size={28} className="hover:text-orange-500 text-gray-900" />
          </a>
          <div className="relative shopping flex items-start">
            <ShoppingCart
              size={28}
              className="hover:text-orange-500 cursor-pointer text-gray-900"
              onClick={toggleCart}
            />
            {cartLength > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 rounded-full h-5 w-5 flex justify-center items-center text-white text-xs font-bold transform translate-x-3 -translate-y-1">
                {cartLength}
              </span>
            )}
          </div>
          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMobileMenu}
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-xl">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {["home", "kids", "women", "men", "Footwear"].map((page) => (
              <li key={page}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(page);
                  }}
                  className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-orange-500 md:p-0 text-2xl ${
                    currentPage === page
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-900 hover:text-orange-500"
                }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Toggle visibility) */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden w-full bg-white border-t border-gray-200`}
      >
        <ul className="flex flex-col p-4 font-medium text-lg text-gray-900 md:hidden">
          {["home", "kids", "women", "men", "Footwear"].map((page) => (
            <li key={page}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(page);
                  setMobileMenuOpen(false); // Close the menu after navigation
                }}
                className={`block py-2 px-3 rounded-sm ${
                  currentPage === page
                    ? "text-white border-b-2 border-orange-500 bg-orange-500"
                    : "text-gray-900 hover:text-orange-500"
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
