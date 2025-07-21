const PartnerWithTopUniversities = () => {
  const universityLogos = [
    {
      src: "https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/62545fb1cc51ebfc4a20c36e_King%27s_College_London_logo%201.svg",
      alt: "King's College London"
    },
    {
      src: "https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/62545fb1cc51eb3b2420c36c_MIT_logo-817efd0f0995b553c3af0ac6f76396e0d8bf9baa574deaa0495b3471d51ca2c7%201.svg",
      alt: "MIT"
    },
    {
      src: "https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/62545fb1cc51eb7fca20c368_IIT_Bombay_Logo%201.svg",
      alt: "IIT Bombay"
    },
    {
      src: "https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/62545fb1cc51eb081420c36b_Harvard_University_logo%201.svg",
      alt: "Harvard University"
    },
    {
      src: "https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/62545fb1cc51eb34b220c366_humboldt-universitaet-zu-berlin-logo-vector%201.svg",
      alt: "Humboldt University Berlin"
    },
    {
      src: "https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/62545fb1cc51eb03b920c367_National_University_of_Singapore_Logo%201.svg",
      alt: "National University of Singapore"
    },
    {
      src: "https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/62545fb1cc51ebe77a20c36d_LMU_Muenchen_Logo%201.svg",
      alt: "LMU München"
    },
    {
      src: "https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/62545fb1cc51eb3c3f20c36a_Logo_for_Imperial_College_London%202.svg",
      alt: "Imperial College London"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#E0EBFD] to-[#FDFDFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-7 2xl:px-0">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="border border-blue-500 bg-blue-50 rounded-full px-3 py-0.5 text-xs lg:text-sm font-light w-fit flex items-center gap-1 uppercase text-blue-700 mx-auto mb-4">
            <span className="rounded-full h-1.5 w-1.5 bg-blue-500 block"></span>
            <span>Our Partners</span>
          </span>
          <h2 className="text-gray-900 text-center font-medium text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight md:leading-[50px] lg:leading-[60px] xl:leading-[70px] font-playfair max-w-4xl mx-auto">
            Partner with Top Universities
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-4 lg:mt-6 max-w-3xl mx-auto">
            We collaborate with world-renowned institutions to bring you the highest quality education and cutting-edge research opportunities.
          </p>
        </div>

        {/* University Logo Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="university-logo-slider flex items-center gap-8 lg:gap-12"
              style={{
                willChange: 'transform',
                animation: 'slide 30s linear infinite'
              }}
            >
              {/* First set of logos */}
              {universityLogos.map((logo, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="user-slider-2 h-12 lg:h-16 xl:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {universityLogos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="user-slider-2 h-12 lg:h-16 xl:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-gray-500 text-sm lg:text-base">
            Join thousands of students who have advanced their careers through our partnerships
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm lg:text-base text-gray-600">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">150K+</div>
              <div className="text-sm lg:text-base text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">95%</div>
              <div className="text-sm lg:text-base text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithTopUniversities;
