import CommonButton from "./common/Button";
import CommonInput from "./common/Input";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white rounded-2xl mx-auto max-w-6xl px-4 py-3 font-montserrat">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors">
              LOGO
            </a>
          </div>
          <div className="flex items-center rounded-lg">
            <CommonInput text="Search..." />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <a href="#" className="text-black transition-colors">Courses</a>
          <a href="#" className="text-black transition-colors">Jobs</a>
          <a href="#" className="text-black transition-colors">Competition</a>
          <a href="#" className="text-black transition-colors">Colleges</a>
          <a href="#" className="text-black transition-colors">Practice</a>
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

        <div className="flex items-center gap-4">
          <CommonButton text="Login/Signup" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
