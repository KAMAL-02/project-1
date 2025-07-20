import Navbar from "@/components/Navbar";
import HeroText from "@/components/Hero-text";
import hero from "@/assets/images/hero.svg";
import WhatWeOffer from "@/components/WhatWeOffer";
import ExploreCourses from "@/components/ExploreOurCourses";
import PartnerWithTopUniversities from "@/components/PartnerWithTopUniversities";
import AiMockExams from "@/components/AiMockExams";
import UsersReview from "@/components/UsersReview";
import Footer from "@/components/Footer";
import FindYourJob from "@/components/FindYourDreamJob";

const Home = () => {
  return (
    <div className="relative">
      <div className="bg-[#e0ebfd] min-h-screen m-3 sm:px-4 rounded-md pt-4 pb-16">
        <Navbar />
        <HeroText />
      </div>

      <div
        className="w-2/3 sm:w-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 top-[calc(90vh-150px)] md:top-[calc(100vh-100px)] lg:top-[calc(100vh-100px)]"
      >
        <img
          src={hero}
          alt="Hero"
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-contain"
        />
      </div>

      <div className="bg-white min-h-96 mt-40 sm:mt-92">
        <WhatWeOffer />
        <ExploreCourses />
        <PartnerWithTopUniversities />
        <FindYourJob />
        <AiMockExams />
        <UsersReview />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
