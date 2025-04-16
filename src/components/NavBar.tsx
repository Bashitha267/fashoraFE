import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

interface NavbarProps {
  toggleCart: () => void;
}

export const NavBar: React.FC<NavbarProps> = ({ toggleCart }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "New", path: "/new" },
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Kids", path: "/kids" },
    { name: "Shoes", path: "/shoes" },
    { name: "Beauty", path: "/beauty" },
    { name: "Brands", path: "/brands" },
  ];

  return (
    <div className="bg-white fixed w-screen z-50 top-0 start-0 border-b border-gray-200 py-2">
      <div className="flex flex-col max-w-[170vh] mx-auto px-4 pt-2 gap-4">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div className="logo_title text-3xl font-bold">
            <Link to='/'>FASHORA</Link>
          </div>

          {/* Search Bar (hidden on small screens) */}
          <div className="hidden md:flex flex-row bg-[#F2F2F2] p-3 rounded-4xl w-[70vh] justify-between">
            <input
              type="text"
              placeholder="Search products"
              className="w-full focus:outline-none text-xl bg-transparent"
            />
            <Search size={30} color="#1E1E1E" />
          </div>

          {/* Icons */}
          <div className="flex flex-row gap-4 items-center">
            <User size={26} className="cursor-pointer" />
            <ShoppingCart size={26} onClick={toggleCart} className="cursor-pointer" />
            <Heart size={26} className="cursor-pointer" />
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
        <div className="hidden md:flex gap-2 bg-[#444444] justify-center">
          {menuLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-xl px-5 text-white font-bold hover:bg-white hover:text-black py-3"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu (dropdown) */}
        {isMobileMenuOpen && (
          <div className="flex flex-col bg-[#444444] md:hidden">
            {menuLinks.map((item) => (
              <Link
                key={item.name}
               to={item.path}
                className="text-lg text-white px-4 py-3 border-b border-gray-600 hover:bg-white hover:text-black"
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
