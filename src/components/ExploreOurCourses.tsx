import CoursesCard from "./common/CoursesCard";
import hero from "@/assets/images/hero.svg";

const ExploreCourses = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-8 mb-22">
        <h2 className="font-poppins text-2xl md:text-3xl font-medium mb-2">Explore Our Courses</h2>
        <p className="font-source text-black mb-8 max-w-xl">Explore our courses and start learning today</p>
        <div className="flex items-center justify-between gap-6 flex-wrap mt-8">
            <CoursesCard heading="Technology" text="Dive into the heart of technology with courses covering programming languages, cybersecurity, and AI fundamentals. Whether you’re a beginner or an advanced user exploring, these hands-on programs equip you with in-demand tools to thrive in tech-driven industries. " image={hero} />
            <CoursesCard heading="Marketing" text="Unlock the secrets of modern marketing through courses on SEO, social media strategies, and consumer behavior analysis. Ideal for aspiring marketers or professionals seeking to refine their skills, these interactive sessions provide real-world case studies and tools." image={hero} />
            <CoursesCard heading="Soft Skills" text="Enhance your interpersonal skills with courses on communication, teamwork, and emotional intelligence. These programs are designed to help you navigate the complexities of the workplace and build meaningful relationships." image={hero} />
        </div>
    </section>
  )
}

export default ExploreCourses
