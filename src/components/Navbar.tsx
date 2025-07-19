import CommonButton from "./common/Button";
import CommonInput from "./common/Input";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
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
          <a href="#" className="text-black transition-colors">Home</a>
          <a href="#" className="text-black transition-colors">Courses</a>
          <a href="#" className="text-black transition-colors">Job Board</a>
          <a href="#" className="text-black transition-colors">Colleges</a>
          <a href="#" className="text-black transition-colors">Practise</a>
          <a href="#" className="text-black transition-colors">About Us</a>
          <div className="relative group">
            <a href="#" className="text-black transition-colors flex items-center gap-1">
              More <ChevronDown className="w-4 h-4" />
            </a>
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
