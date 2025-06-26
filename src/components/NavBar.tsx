import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import "./navbar.css";

interface NavbarProps {
  toggleCart: () => void;
}

export const NavBar: React.FC<NavbarProps> = ({ toggleCart }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const location = useLocation();

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "New", path: "/new" },
    { name: "Sale", path: "/sale" },
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Kids", path: "/kids" },
    { name: "Shoes", path: "/shoes" },
    { name: "Beauty", path: "/beauty" },
    { name: "Accessories", path: "/accessories" },
    { name: "My Orders", path: "/myorders" },
  ];

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItemsCount(cartItems.length);
    };
    updateCartCount();
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="flex flex-col max-w-7xl mx-auto px-4 pt-2 gap-4">
        {/* Top Section */}
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              className="w-40 h-auto object-contain"
              alt="Logo"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-row bg-[#F2F2F2] rounded-full w-full max-w-xl px-4 items-center">
            <input
              type="search"
              placeholder="Search products"
              className="flex-1 text-base bg-transparent border-none outline-none placeholder:text-gray-500"
            />
            <Search size={22} color="#1E1E1E" className="ml-2" />
          </div>

          {/* Icons */}
          <div className="flex flex-row gap-4 items-center">
            <Link to="/login">
              <User size={24} className="cursor-pointer" />
            </Link>
            <div className="relative cursor-pointer" onClick={toggleCart}>
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>
            <Link to="/fav">
              <Heart size={24} className="cursor-pointer" />
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              {isMobileMenuOpen ? (
                <X
                  size={24}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer"
                />
              ) : (
                <Menu
                  size={24}
                  onClick={() => setMobileMenuOpen(true)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-[#444444] justify-center">
          {menuLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 font-bold hover:bg-white hover:text-black ${
                location.pathname === item.path ? "bg-white text-black" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#444444] flex flex-col overflow-y-auto z-50 pt-16 lg:hidden">
            {menuLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white px-4 py-4 border-b border-gray-600 hover:bg-white hover:text-black ${
                  location.pathname === item.path ? "bg-white text-black" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
