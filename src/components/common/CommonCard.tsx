import { MoveUpRight } from "lucide-react";

interface CommonCardProps {
  heading: string;
  text: string;
  image: string;
  bottomText?: string;
}

const CommonCard: React.FC<CommonCardProps> = ({ heading, text, image, bottomText }) => {
  return (
    <div className="rounded-xl p-4 bg-gradient-to-b from-[#E0EBFD] to-[#FDFDFD] flex-1 min-w-0 max-w-sm h-64 flex flex-col">
      <div className="flex justify-center mb-2">
        <img src={image} alt="Offer" className="w-44 h-28 object-contain rounded-2xl" />
      </div>

      <div className="text-left flex-1 mt-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-medium font-poppins text-black">
            {heading}
          </h3>
        </div>

        <p className="text-black font-source mt-3 text-sm">{text}</p>
      </div>
      <div className="mt-4 flex items-center justify-start gap-1">
        <a
          href="#"
          className="text-gray-500 hover:underline text-xs font-medium"
        >
          {bottomText || "Learn more"}
        </a>
        <MoveUpRight className="w-3 h-3 text-gray-500" />
      </div>
    </div>
  );
};

export default CommonCard;
