import React from "react";

const OurJourneySection = () => {
  return (
    <section id="our-journey" className="relative mb-10 lg:mb-16">
      {/* bg icon */}
      <img
        className="hidden lg:block absolute top-0 lg:right-0 lg:w-36 xl:w-60 lg:h-48 xl:h-72"
        src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/decorative-curvy-line.png"
        alt=""
        loading="lazy"
      />

      <span className="border border-emerald-500 bg-emerald-50 rounded-full px-3 py-0.5 text-xs lg:text-sm font-light w-fit flex items-center gap-1 uppercase text-emerald-700 mx-auto mt-20">
        <span className="rounded-full h-1.5 w-1.5 bg-emerald-500 block"></span>{" "}
        <span>Our Journey</span>
      </span>

      <h2 className="text-gray-900 text-center font-medium text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 sm:mt-3 lg:mt-4 max-w-4xl mx-auto leading-tight md:leading-[50px] lg:leading-[60px] xl:leading-[70px] font-playfair px-3 2xl:px-0">
        Features look good, but you haven’t heard of us?
      </h2>

      {/* cards */}
      <div className="max-w-7xl mx-auto px-5 lg:px-7 2xl:px-0 py-10 flex flex-wrap gap-5 justify-center items-stretch">
        <div className="rounded-xl max-w-xs lg:max-w-sm bg-blue-200 p-10 pt-20 lg:pb-16 lg:pt-24 relative">
          <img
            className="w-16 md:w-20 lg:w-24 absolute top-0 right-0"
            src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/3-star-rating.png"
            alt=""
            loading="lazy"
          />
          <h3 className="text-gray-900 text-center text-xl lg:text-2xl">
            <strong>150,000+</strong> Candidates <strong>500+</strong> Teams trust Equip
          </h3>
          <a
            href="/reviews/"
            className="w-fit mx-auto mt-5 sm:mt-7 lg:mt-10 flex items-center gap-2 font-light text-sm lg:text-base text-white bg-blue-500 px-5 py-2 rounded-full on-click-effect hover:font-normal hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            See Reviews
          </a>
        </div>
        <div className="rounded-xl max-w-xs lg:max-w-sm bg-purple-300 p-10 pt-20 lg:pb-16 lg:pt-24 relative">
          <img
            className="w-16 md:w-20 lg:w-24 absolute top-0 right-0"
            src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/star-batch.png"
            alt=""
            loading="lazy"
          />
          <h3 className="text-gray-900 text-center text-xl lg:text-2xl">
            <strong>Top-rated</strong> on G2 Globally for Talent Assessments
          </h3>
          <a
            href="https://www.g2.com/products/socratease-inc-equip/reviews"
            className="w-fit mx-auto mt-5 sm:mt-7 lg:mt-10 flex items-center gap-2 font-light text-sm lg:text-base text-white bg-purple-600 px-5 py-2 rounded-full on-click-effect hover:font-normal hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            View G2 Ranking
          </a>
        </div>
        <div className="rounded-xl max-w-xs lg:max-w-sm bg-yellow-200 p-10 pt-20 lg:pb-16 lg:pt-24 relative">
          <img
            className="w-16 md:w-20 lg:w-24 absolute top-0 right-0"
            src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/switch-icon.png"
            alt=""
            loading="lazy"
          />
          <h3 className="text-gray-900 text-center text-xl lg:text-2xl">
            <strong>250+</strong> Companies have switched to <strong>Equip</strong>
          </h3>
          <a
            href="/customers/"
            className="w-fit mx-auto mt-5 sm:mt-7 lg:mt-10 flex items-center gap-2 font-light text-sm lg:text-base text-white bg-amber-600 px-5 py-2 rounded-full on-click-effect hover:font-normal hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            View Our Customers
          </a>
        </div>
      </div>

      {/* Funded by */}
      <div className="mx-auto w-fit font-playfair text-gray-900 flex items-center gap-2">
        <span className="text-sm xs:text-base md:text-xl lg:text-2xl">Funded by</span>{" "}
        <img
          className="w-20 md:w-24"
          src="https://cdn-media-assets.socratease.co/equip/product/img/logos/better-capital.svg"
          alt="Better Capital Logo"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default OurJourneySection; 