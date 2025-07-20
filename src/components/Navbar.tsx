import CommonButton from "./common/Button";
import CommonInput from "./common/Input";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative bg-white rounded-2xl mx-3 lg:m-auto max-w-6xl px-3 md:px-4 py-3 font-montserrat">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4 flex-1 md:flex-initial">
          <div className="flex-shrink-0">
            <a href="#" className="text-lg md:text-xl font-bold text-gray-900">
              LOGO
            </a>
          </div>
          <div className="hidden sm:flex items-center rounded-lg flex-1 md:flex-initial max-w-xs">
            <CommonInput text="Search..." />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-semibold">
          <a href="#" className="text-black">Courses</a>
          <a href="#" className="text-black">Jobs</a>
          <a href="#" className="text-black">Competition</a>
          <a href="#" className="text-black">Colleges</a>
          <a href="#" className="text-black">Practice</a>
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="text-black transition-colors flex items-center gap-1 focus:outline-none"
            >
              More <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Publish</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Resources</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Mock Tests</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Events Workshop</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Blogs</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Hackathon</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <CommonButton text="Login/Signup" />
          </div>
          <div className="sm:hidden">
            <CommonButton text="Login" />
          </div>
          
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-2xl shadow-lg z-50 mx-3">
          <div className="p-4">
            <div className="sm:hidden mb-4">
              <CommonInput text="Search..." />
            </div>
          
            <div className="flex flex-col space-y-3 text-sm font-semibold">
              <a href="#" className="text-black transition-colors py-2">Courses</a>
              <a href="#" className="text-black transition-colors py-2">Jobs</a>
              <a href="#" className="text-black transition-colors py-2">Competition</a>
              <a href="#" className="text-black transition-colors py-2">Colleges</a>
              <a href="#" className="text-black transition-colors py-2">Practice</a>

              {/* Mobile More section */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">More</p>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-1 text-sm">Publish</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-1 text-sm">Resources</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-1 text-sm">Mock Tests</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-1 text-sm">Events Workshop</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-1 text-sm">Blogs</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-1 text-sm">Hackathon</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;