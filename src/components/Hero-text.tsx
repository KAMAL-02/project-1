import CommonButton from "./common/Button";

const HeroText = () => {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 py-12 mt-8">
      <h1 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-medium text-[#000000] leading-tight mb-6">
        <div>Unlock Your Career And</div>
        <div>
          Gateway To{" "}
          <span className="bg-gradient-to-r from-[#7494FF] via-[#4E76FB] to-[#4E76FB] bg-clip-text text-transparent">
            Global Opportunities
          </span>
        </div>
      </h1>

      <p className="text-black text-sm md:text-lg max-w-xl mx-auto mb-8">
        Dive into a world of learning and career growth right from the top. Our
        intuitive menu connects you to courses, jobs, universities, and more,
        ensuring you never miss a beat.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-7 mt-8">
        <CommonButton text="Browse Courses" />
        <CommonButton text="Find Jobs" />
        <CommonButton text="Enter Competition" />
      </div>
    </section>
  );
};

export default HeroText;
