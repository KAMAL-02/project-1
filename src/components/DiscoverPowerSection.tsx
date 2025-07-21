const DiscoverPowerSection = () => {
  return (
    <section className="bg-lime-200 relative py-10 lg:py-16 overflow-hidden">
      {/* bg icon */}
      <img
        className="absolute -top-2 left-0 w-24 xs:w-28 -rotate-90"
        src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/decorative-curvy-line.png"
        alt=""
        loading="lazy"
      />
      <img
        className="absolute -bottom-6 -right-2 w-24 xs:w-28 -rotate-90"
        src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/decorative-curvy-line.png"
        alt=""
        loading="lazy"
      />
      <div className="max-w-7xl mx-auto px-5 lg:px-7 2xl:px-0 py-10 flex flex-col gap-5">
        <h2 className="text-gray-900 text-center font-medium text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 sm:mt-3 lg:mt-4 max-w-4xl mx-auto leading-tight md:leading-[50px] lg:leading-[60px] xl:leading-[70px] font-playfair">
          Discover the Uninex Advantage: Smarter Hiring, Brighter Futures
        </h2>
        <p className="text-gray-600 text-center font-light text-base md:text-lg xl:text-xl">
          Join Uninex and transform your recruitment journey with seamless, data-driven solutions tailored for success.
        </p>
        <div className="flex items-center justify-center gap-2">
          <a
            href="/account/recruiter-onboarding/"
            className="on-click-effect bg-blue-900 hover:bg-blue-950 text-white lg:text-lg px-7 py-2.5 rounded-full mt-4 flex items-center gap-1 font-light"
          >
            Start Hiring
          </a>
          <span className="homepage-cta__chat on-click-effect cursor-pointer bg-white hover:bg-gray-100 text-gray-900 lg:text-lg px-7 py-2.5 rounded-full mt-4 flex items-center gap-1 font-light">
            Talk to us
          </span>
        </div>
      </div>
    </section>
  );
};

export default DiscoverPowerSection; 