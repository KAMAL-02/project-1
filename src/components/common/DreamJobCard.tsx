import React from "react";
import { MapPin, MoveUpRight } from "lucide-react";

interface DreamJobCardProps {
  position: string;
  company: string;
  package: string;
  description: string;
  location: string;
  image: string;
}

const DreamJobCard: React.FC<DreamJobCardProps> = ({ 
  position, 
  company, 
  package: jobPackage, 
  description, 
  location, 
  image 
}) => {
  return (
    <div 
      className="rounded-xl p-6 max-w-sm h-80 flex flex-col bg-gradient-to-b from-[#E0EBFD] to-[#FDFDFD]"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1 mr-4">
          <h3 className="text-xl font-medium font-poppins text-black mb-1">
            {position}
          </h3>
          <p className="text-sm font-medium text-gray-700 font-source mb-1">
            {company}
          </p>
          <p className="text-sm font-semibold text-blue-600 font-source">
            {jobPackage}
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt="Company" 
            className="w-16 h-16 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 mb-4">
        <p className="text-sm text-black font-source leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Section - Location and Action */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-xs text-gray-600 font-source">{location}</span>
        </div>
        
        <MoveUpRight className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
      </div>
    </div>
  );
};

export default DreamJobCard;