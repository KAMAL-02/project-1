import CommonCard from "./common/CommonCard";
import hero from "@/assets/images/hero.svg";

const AiMockExams = () => {
  return (
    <section className="px-4 md:px-12 lg:px-16 py-8 mb-22">
        <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-medium mb-2">AI Mock Exams & Interview Simulator</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 md:flex-wrap mt-8">
            <CommonCard heading="Frontend Developer" text="Prepare for your Frontend Developer interviews with our AI-powered mock exams. Get instant feedback and improve your coding skills." image={hero} bottomText="Take tests" />
            <CommonCard heading="Backend Developer" text="Ace your Backend Developer interviews with our comprehensive mock exams. Practice real interview questions and get detailed performance analytics." image={hero} bottomText="Take tests" />
            <CommonCard heading="Full Stack Developer" text="Become a Full Stack Developer with our tailored mock exams. Cover both frontend and backend topics to ensure you're interview-ready." image={hero} bottomText="Take tests" />
        </div>
    </section>
  )
}

export default AiMockExams;