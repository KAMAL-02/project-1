import User1 from "@/assets/images/User1.svg";
import User2 from "@/assets/images/user2.svg";
import User3 from "@/assets/images/User3.svg";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Student, Delhi",
    image: User1,
    text: "Uninex made my job search so much easier. The platform is intuitive and the mock interviews gave me the confidence I needed!",
  },
  {
    name: "Priya Verma",
    role: "Recruiter, Bangalore",
    image: User2,
    text: "As a recruiter, Uninex has streamlined our hiring process. The candidate assessments are spot on and save us so much time.",
  },
  {
    name: "Rahul Mehta",
    role: "Placement Officer, Mumbai",
    image: User3,
    text: "Uninex connects universities, students, and recruiters like never before. Our placement rates have improved dramatically!",
  },
];

const UsersReview = () => {
  return (
    <section className="px-4 md:px-12 lg:px-16 py-20 mb-22 bg-gradient-to-b from-[#E0EBFD] to-[#FDFDFD] rounded-3xl max-w-7xl mx-auto shadow-xl relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-2xl opacity-40 z-0" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-2xl opacity-40 z-0" />
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-900 mb-4 relative z-10">What Uninex Users Say</h2>
      <p className="font-source text-black text-center mb-12 max-w-2xl mx-auto text-base md:text-lg relative z-10">Hear from our community about how Uninex has transformed their learning and hiring experience.</p>
      <div className="flex gap-8 md:gap-10 overflow-x-auto md:overflow-visible pb-4 md:pb-0 justify-center relative z-10 snap-x snap-mandatory">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/90 shadow-xl rounded-2xl p-8 flex flex-col items-center min-w-[300px] max-w-xs w-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-blue-100 snap-center"
          >
            <div className="relative mb-4">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-md" />
              <span className="absolute -top-2 -right-2 bg-blue-100 text-blue-600 rounded-full p-2 shadow text-xl">“</span>
            </div>
            <p className="font-source text-gray-700 text-center mb-4 text-base leading-relaxed">{t.text}</p>
            <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-1 mt-2">{t.name}</h3>
            <span className="text-xs text-blue-500 font-source">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsersReview;
