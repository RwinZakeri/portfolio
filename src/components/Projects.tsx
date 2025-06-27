import { ArrowUp, CheckIcon } from "@/assets/icons/StarIcon";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import SectionHeader from "./SectionHeader";

const portfolioProjects = [
  {
    company: "UP Startup",
    year: "2024",
    title: "Full-Stack Startup Platform",
    results: [
      { title: "Optimized code structure with Next.js middleware" },
      { title: "Enhanced user authentication using NextAuth" },
      { title: "Integrated monitoring with Sentry and Husky for quality" },
      { title: "Built with Tailwind, MUI, Axios, React Query" },
      { title: "Developed a modern admin panel for data management" },
    ],
    link: "https://up-p8d1-1hby03g6u-rwins-projects.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Digikala Clone",
    year: "2023",
    title: "E-Commerce UI Clone with React",
    results: [
      { title: "Recreated UI/UX inspired by Digikala" },
      { title: "Responsive layout using Tailwind CSS" },
      { title: "Optimized performance for fast shopping experience" },
      { title: "SEO-friendly structure for better product indexing" },
    ],
    link: "https://digi-react.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Vidans",
    year: "2025",
    title: "Enterprise Web Platform",
    results: [
      {
        title:
          "Built drag-and-drop form builder using FormKit + React Hook Form",
      },
      { title: "Secure login system with OTP and token middleware" },
      { title: "Implemented Husky for Git workflow automation" },
      { title: "Used modern stack: Next.js, Tailwind, FormKit, middleware" },
      { title: "Focused on performance, scalability, and maintainability" },
    ],
    link: "https://dev.vidans.com/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section
      className="pb-16 lg:py-24 px-8"
      id="project"
      aria-label="Portfolio Projects Section"
    >
      <div className="container mx-auto">
        <SectionHeader
          detail="Selected Work"
          title="Frontend Projects with Measurable Impact"
          desc="These are projects where I used modern JavaScript, React, and performance optimization to deliver business results."
        />

        <div className="flex flex-col mt-10 justify-center w-full gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={`${project.title}-${index}`}
              className="sticky z-40"
              style={{ top: `calc(64px + ${index * 65}px)` }}
            >
              <div>
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl mt-2 md:text-4xl font-bold">
                  {project.title}
                </h3>

                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result, index) => (
                    <li
                      key={`${result.title}-${index}`}
                      className="flex gap-2 font-sans font-semibold text-sm text-white/50"
                    >
                      {/* <CheckIcon className="w-6 md:w-6" /> */}
                      {/* <CheckIcon /> */}
                      <CheckIcon />
                      {result.title}
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.link}
                  className="flex items-center justify-center gap-2 bg-white text-gray-950 h-12 w-full rounded-xl font-sans font-semibold mt-8 md:w-fit md:px-3 relative  cursor-pointer z-50"
                  style={{}}
                >
                  <span>View Live Site</span>
                  {/* <Image
                    className="w-5"
                    src={ArrowUp}
                    alt="Open external link"
                  /> */}
                  <ArrowUp />
                </Link>
              </div>

              <Image
                className="mt-8 -mb-4 lg:w-1/2 lg:relative lg:left-20"
                src={project.image}
                alt={`${project.title} preview image`}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
