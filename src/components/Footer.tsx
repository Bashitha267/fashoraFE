import {
  Baby,
  Facebook,
  Home,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Shirt,
  Twitter,
  User,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 w-screen md:max-w-[160vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <p className="text-xl mb-4">
              Latest Fashion to your doorstep since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={25} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={25} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base text-gray-400 ml-3">
              <li>
                <a
                  href="/home"
                  className="flex items-center gap-3 hover:text-teal-400 transition-all duration-200"
                >
                  <Home className="w-5 h-5 text-teal-500" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/women"
                  className="flex items-center gap-3 hover:text-teal-400 transition-all duration-200"
                >
                  <User className="w-5 h-5 text-teal-500" />
                  Women
                </a>
              </li>
              <li>
                <a
                  href="/men"
                  className="flex items-center gap-3 hover:text-teal-400 transition-all duration-200"
                >
                  <Shirt className="w-5 h-5 text-teal-500" />
                  Men
                </a>
              </li>
              <li>
                <a
                  href="/kids"
                  className="flex items-center gap-3 hover:text-teal-400 transition-all duration-200"
                >
                  <Baby className="w-5 h-5 text-teal-500" />
                  Kids
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-600 pb-2">
              Contact Us
            </h3>
            <ul className="ml-6 space-y-3">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-teal-500 mr-2 mt-0.5" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  Negombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-teal-500 mr-2" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  0312248965
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-teal-500 mr-2" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  Infofashora@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Fashora. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-sm hover:text-teal-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm hover:text-teal-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
