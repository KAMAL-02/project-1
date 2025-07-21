import { useState, useEffect, useRef } from "react";
import User1 from "@/assets/images/User1.svg";
import User2 from "@/assets/images/user2.svg";
import User3 from "@/assets/images/User3.svg";
import Vector from "@/assets/images/Vector.svg";
import hero from "@/assets/images/hero.svg";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Student, Delhi",
    image: User1,
    companyLogo: Vector,
    text: "Uninex made my job search so much easier. The platform is intuitive and the mock interviews gave me the confidence I needed!",
  },
  {
    name: "Priya Verma",
    role: "Recruiter, Bangalore",
    image: User2,
    companyLogo: Vector,
    text: "As a recruiter, Uninex has streamlined our hiring process. The candidate assessments are spot on and save us so much time.",
  },
  {
    name: "Rahul Mehta",
    role: "Placement Officer, Mumbai",
    image: User3,
    companyLogo: Vector,
    text: "Uninex connects universities, students, and recruiters like never before. Our placement rates have improved dramatically!",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

const UserReviewShowcase = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">You’re in good company</h2>
        <a href="/customers/" className="text-blue-700 font-poppins text-base font-medium flex items-center gap-2 w-fit mb-6 hover:underline">
          Customer stories <span className="text-xl">→</span>
        </a>
        {/* Testimonial Card */}
        <div className="w-full max-w-xl bg-[#F7F8FA] rounded-xl shadow p-8 flex flex-col items-center mx-auto">
          <div className="flex items-center justify-between w-full mb-4">
            <button onClick={prev} aria-label="Previous" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold shadow hover:bg-gray-100 transition-all">&#8592;</button>
            <img src={testimonials[current].companyLogo} alt="Company Logo" className="w-20 h-20 object-contain rounded-full" />
            <button onClick={next} aria-label="Next" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold shadow hover:bg-gray-100 transition-all">&#8594;</button>
          </div>
          <p className="font-source text-gray-900 text-center mb-6 text-lg leading-relaxed">{testimonials[current].text}</p>
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="text-blue-700 text-2xl mb-1">“”</span>
            <span className="font-poppins text-lg font-semibold text-gray-900">{testimonials[current].name}</span>
            <span className="text-sm text-gray-500 font-source">{testimonials[current].role}</span>
          </div>
        </div>
        <div className="flex gap-2 justify-center mt-4">
          {testimonials.map((_, i) => (
            <span key={i} onClick={() => goTo(i)} className={`w-2.5 h-2.5 rounded-full cursor-pointer ${i === current ? 'bg-blue-700' : 'bg-blue-200'} transition-all`}></span>
          ))}
        </div>
      </div>
      {/* Right Column */}
      <div className="flex flex-col gap-8">
        {/* Results Box */}
        <div className="bg-[#EAF2FF] rounded-xl p-8 flex flex-col gap-4 mb-4">
          <h4 className="font-playfair text-2xl font-semibold text-gray-900 mb-2">Results our <br className="hidden md:block" /> customers have seen</h4>
          <div className="flex flex-row gap-10 mt-2">
            <div className="flex flex-col items-start">
              <span className="font-playfair text-3xl md:text-4xl text-blue-700 font-bold">15K+</span>
              <span className="font-source text-gray-600 text-base mt-1">Hours saved annually</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-playfair text-3xl md:text-4xl text-blue-700 font-bold">2x</span>
              <span className="font-source text-gray-600 text-base mt-1">Candidates evaluated</span>
            </div>
          </div>
        </div>
        {/* Image Box */}
        <div className="rounded-xl overflow-hidden w-full h-72 md:h-96 bg-gray-100 flex items-center justify-center">
          <img src={hero} alt="Uninex workplace" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default UserReviewShowcase; 