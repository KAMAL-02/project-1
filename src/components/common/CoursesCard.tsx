import { MoveUpRight } from "lucide-react";
import Bookmark from "@/assets/images/Bookmark.svg";

interface CoursesCardProps {
  heading: string;
  text: string;
  image: string;
}

const CoursesCard: React.FC<CoursesCardProps> = ({ heading, text, image }) => {
  return (
    <div className="rounded-xl p-3 md:p-4 bg-gradient-to-b from-[#E0EBFD] to-[#FDFDFD] w-full md:flex-1 md:min-w-0 md:max-w-sm h-auto min-h-[280px] md:h-64 flex flex-col">
      <div className="flex justify-center mb-2">
        <img src={image} alt="Offer" className="w-32 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 object-contain rounded-2xl" />
      </div>

      <div className="text-left flex-1 mt-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-medium font-poppins text-black">
            {heading}
          </h3>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-600">5000+</span>
            <img src={Bookmark} alt="Bookmark" className="w-4 h-4" />
          </div>
        </div>

        <p className="text-black font-source mt-3 text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-5 md:line-clamp-none">{text}</p>
      </div>
      <div className="mt-3 md:mt-4 flex items-center justify-start gap-1">
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