import User1 from "@/assets/images/User1.svg";
import User2 from "@/assets/images/user2.svg";
import User3 from "@/assets/images/User3.svg";

const UsersReview = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-8 mb-22">
        <h2 className="font-poppins text-2xl md:text-3xl font-medium mb-2">What Our Users Say</h2>
        <a href="#"><p className="font-source text-blue mb-8 max-w-xl text-blue-400">Read More Success Stories</p></a>
        <div className="flex items-center justify-between gap-6 flex-wrap mt-8">
            <div className="flex items-center gap-4 bg-gradient-to-b from-[#E0EBFD] to-[#FDFDFD] rounded-xl py-2">
                <img src={User1} alt="User 1" className="w-88 h-88" />
            </div>
            <div className="flex items-center gap-4 bg-[#FDFDFD] rounded-xl py-2 border-2 border-[#E0EBFD]">
                <img src={User2} alt="User 2" className="w-88 h-88" />
            </div>
            <div className="flex items-center gap-4 bg-gradient-to-b from-[#E0EBFD] to-[#FDFDFD] rounded-xl py-2">
                <img src={User3} alt="User 3" className="w-88 h-88" />
            </div>
        </div>
    </section>
  )
}

export default UsersReview;
