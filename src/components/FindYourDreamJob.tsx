import DreamJobCard from "./common/DreamJobCard";
import hero from "@/assets/images/hero.svg";

const FindYourJob = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-8 mb-22">
        <h2 className="font-poppins text-2xl md:text-3xl font-medium mb-2">Find Your Dream Job</h2>
        <p className="font-source text-black mb-8 max-w-xl">Opportunities Tailored to Your Aspirations</p>
        <div className="flex items-center justify-between gap-6 flex-wrap mt-8">
            <DreamJobCard 
                position="Data Analyst"
                company="Company"
                package="4.5L - 5.5L"
                description="Join our dynamic team as a Data Analyst where you'll transform raw data into meaningful insights. Work with cutting-edge analytics tools and collaborate with cross-functional teams to drive business decisions."
                location="Bangalore, India"
                image={hero}
            />
            <DreamJobCard 
                position="Data Analyst"
                company="Company"
                package="4.5L - 5.5L"
                description="We're looking for a passionate Data Analyst to help us uncover trends and patterns in our data. You'll be responsible for creating reports, dashboards, and providing actionable recommendations to stakeholders."
                location="Mumbai, India"
                image={hero}
            />
            <DreamJobCard 
                position="Data Analyst"
                company="Company"
                package="4.5L - 5.5L"
                description="Seeking a detail-oriented Data Analyst to join our growing analytics team. You'll work on diverse projects involving data visualization, statistical analysis, and machine learning to support business growth."
                location="Hyderabad, India"
                image={hero}
            />
        </div>
    </section>
  )
}

export default FindYourJob;
