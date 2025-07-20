import CommonCard from "./common/CommonCard";
import hero from "@/assets/images/hero.svg";

const PartnerWithTopUniversities = () => {
  return (
    <section className="px-4 md:px-12 lg:px-16 py-8 mb-16 md:mb-24 lg:mb-32">
        <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-medium mb-2">Partner with Top Universities</h2>
        <p className="font-source text-black mb-8 max-w-xl text-sm md:text-base">Collaborate, Innovate, and Place Talent Globally</p>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-4 lg:gap-6 md:flex-wrap mt-8">
            <CommonCard heading="IIT Bombay" text="IIT Bombay stands as a pinnacle of technical education, offering top programs in Computer Science and Engineering, Electrical Engineering, and Mechanical Engineering with an impressive placement record, over 85% of graduates secure jobs within six months, averaging salaries around INR 20-25 lakhs per annum." image={hero} bottomText="Partner With Us" />
            <CommonCard heading="BITS Pilani" text="BITS Pilani offers top programs in Computer Science, Electronics and Communication Engineering, and Biotechnology, with practical projects and industry internships to prepare students for dynamic careers. Placement statistics show a robust 90% placement rate, with average annual packages of INR 15-20 lakhs." image={hero} bottomText="Partner With Us" />
            <CommonCard heading="VIT" text="VIT is known for its strong emphasis on research and innovation, offering programs in Computer Science, Mechanical Engineering, and Civil Engineering. With a placement rate of 85% and average salaries ranging from INR 10-15 lakhs, VIT prepares students for successful careers in engineering." image={hero} bottomText="Partner With Us" />
        </div>
    </section>
  )
}

export default PartnerWithTopUniversities;