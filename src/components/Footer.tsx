import { Twitter, Linkedin } from "lucide-react";
import CommonButton from "./common/Button";

const Footer = () => {
  return (

    <footer className="bg-white rounded-t-3xl shadow-inner px-4 md:px-12 lg:px-16 pt-0 pb-8 mt-16 border-t border-blue-100">
      {/* CTA Bar */}
      <div className="w-full max-w-7xl mx-auto -mt-12 mb-8 flex flex-col md:flex-row items-center justify-between bg-blue-900 rounded-2xl px-6 py-6 shadow-lg gap-4">
        <div className="text-white font-playfair text-2xl md:text-3xl font-semibold text-center md:text-left">Ready to unlock your potential with Uninex?</div>
        <a href="/account/recruiter-onboarding/" className="bg-white text-blue-900 font-poppins font-semibold px-7 py-2.5 rounded-full shadow hover:bg-blue-50 transition-all text-lg">Get Started</a>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Logo and Newsletter */}
          <div className="space-y-4">
            {/* Logo */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-poppins">Uninex</h2>
            </div>
            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="flex-1 max-w-xs px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-source text-xs"
                />
                <CommonButton text="Subscribe" />
              </div>
              <p className="text-gray-600 font-source text-xs max-w-sm">
                Join our newsletter for platform updates, job alerts, and course offers.
              </p>
            </div>
          </div>
          {/* Right Side - Quick Links and Legal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 font-poppins">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-source text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-source text-sm">Blogs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-source text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-source text-sm">Contact Us</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 font-poppins">Legal</h3>
              <ul className="space-y-2 mb-4">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-source text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-source text-sm">Terms and Conditions</a></li>
              </ul>
              {/* Social Section */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2 font-poppins">Socials</h4>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Border */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-left text-gray-500 font-source text-xs">
            © 2025 Uninex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
