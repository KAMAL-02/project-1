import React from "react";

interface OfferCardProps {
  heading: string;
  text: string;
  image: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ heading, text, image }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg p-6 bg-gradient-to-r from-[#E0EBFD] to-[#FDFDFD] max-w-sm h-32">
      <div className="flex-1 ">
        <h3
          className="text-md font-bold font-poppins bg-gradient-to-r from-[#7494FF] via-[#4E76FB] to-[#4E76FB] bg-clip-text text-transparent"
        >
          {heading}
        </h3>
        <p className="text-black font-source mt-1 text-xs leading-tight">{text}</p>
      </div>
      
      <img src={image} alt="Offer" className="w-28 h-28 object-contain flex-shrink-0 rounded-xl" />
    </div>
  );
};

export default OfferCard;

