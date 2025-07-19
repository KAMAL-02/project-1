import OfferCard from "./common/OfferCard"
import hero from "@/assets/images/hero.svg";

const WhatWeOffer = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-8 mb-22">
        <h2 className="font-poppins text-2xl md:text-3xl font-medium mb-2">What We Offer</h2>
        <p className="font-source text-black mb-8 max-w-xl">Empowering Students, Recruiters, and Universities to Build Brighter Futures</p>
        <div className="flex items-center justify-between gap-6 flex-wrap mt-8">
            <OfferCard heading="For Students" text="Access courses, connect with recruiters, and apply for jobs." image={hero} />
            <OfferCard heading="For Recruiters" text="Post job opportunities, host recruitment events, and hire top talent." image={hero} />
            <OfferCard heading="For Universities" text="Track placements, manage recruitment events, and connect with companies." image={hero} />
        </div>
    </section>
  )
}

export default WhatWeOffer
