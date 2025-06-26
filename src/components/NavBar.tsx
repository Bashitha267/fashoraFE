import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo2.jpg';
import './navbar.css';

interface NavbarProps {
  toggleCart: () => void;
}

export const NavBar: React.FC<NavbarProps> = ({ toggleCart }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "New", path: "/new" },
    { name: "Sale", path: '/sale' },
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Kids", path: "/kids" },
    { name: "Shoes", path: "/shoes" },
    { name: "Beauty", path: "/beauty" },
   
    { name: "Accessories", path: "/accessories" },
    { name: "My Orders", path: "/myorders" },
  ];

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItemsCount(cartItems.length);
  };

  useEffect(() => {
    
    updateCartCount();

   
    const handleCartUpdate = () => {
      updateCartCount();
    };

   
    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, [cartItemsCount]);

  return (
    <div className="bg-white fixed w-screen z-50 top-0 start-0 border-b border-gray-200 lg:py-2 py-0">
      <div className="flex flex-col w-5/6 mx-auto px-4 pt-2 gap-4">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div className="">
            <Link to="/"><img src={logo} className="lg:w-65 w-35 lg:h-30 h-25 object-contain" alt="Logo" /></Link>
          </div>

          {/* Search Bar */}
        <div className="hidden md:flex flex-row bg-[#F2F2F2]   rounded-4xl w-[70vh]   focus:border-none focus:ring-0 focus:outline-none shadow-none">
  <div className="flex-row flex mx-auto mt-2">
    <div className="w-[40vh] border-0 outline-none ring-0 focus:ring-0 focus:outline-none focus:border-0 shadow-none">
      <input
        type="search"
        style={{
          border:"",
         
        }}
        placeholder="Search products"
        className="w-full mt-1 text-xl pl-4 bg-transparent border-0 outline-none ring-0 focus:ring-0 focus:outline-none focus:border-0 shadow-none placeholder:text-gray-500"
      />
    </div>
    <div className="mx-5 mt-2">
      <Search size={35} color="#1E1E1E" />
    </div>
  </div>
  </div>

          {/* Icons */}
          <div className="flex flex-row gap-4 items-center">
           <Link to={'/login'}> <User size={26} className="cursor-pointer" /></Link>
            <div className="relative">
              <ShoppingCart 
                size={26} 
                onClick={toggleCart} 
                className="cursor-pointer" 
              />
              {cartItemsCount > 0 && ( 
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>
           <Link to={'/fav'}><Heart size={26} className="cursor-pointer" /></Link> 

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              {isMobileMenuOpen ? (
                <X size={26} onClick={toggleMobileMenu} className="cursor-pointer" />
              ) : (
                <Menu size={26} onClick={toggleMobileMenu} className="cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-2 bg-[#444444] justify-center">
          {menuLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg lg:text-xl lg:px-4 md:py-0 md:px-2 font-bold lg:py-2  hover:bg-white hover:text-black  ${
                location.pathname === item.path ? "bg-white text-black" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col bg-[#444444] lg::hidden">
            {menuLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg px-4 py-3 border-b border-gray-600 hover:bg-white hover:text-black ${
                  location.pathname === item.path ? "bg-white text-black" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
