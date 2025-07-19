import { MoveUpRight } from "lucide-react";
import Bookmark from "@/assets/images/Bookmark.svg";

interface CoursesCardProps {
  heading: string;
  text: string;
  image: string;
}

const CoursesCard: React.FC<CoursesCardProps> = ({ heading, text, image }) => {
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
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-600">5000+</span>
            <img src={Bookmark} alt="Bookmark" className="w-4 h-4" />
          </div>
        </div>

        <p className="text-black font-source mt-3 text-sm">{text}</p>
      </div>
      <div className="mt-4 flex items-center justify-start gap-1">
        <a
          href="#"
          className="text-gray-500 hover:underline text-xs font-medium"
        >
          Enroll today
        </a>
        <MoveUpRight className="w-3 h-3 text-gray-500" />
      </div>
    </div>
  );
};

export default CoursesCard;
