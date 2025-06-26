import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Image from "next/image";
import Card from "./Card";
import SectionHeader from "./SectionHeader";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark SaaS Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light SaaS Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Streamlined UX for AI services" },
      { title: "Improved load time by 50%" },
      { title: "Mobile engagement up 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
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
              className="sticky"
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
                      <Image
                        className="w-6 md:w-6"
                        src={CheckIcon}
                        alt="Completed"
                      />
                      {result.title}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live site`}
                >
                  <button className="flex items-center justify-center gap-2 bg-white text-gray-950 h-12 w-full rounded-xl font-sans font-semibold mt-8 md:w-fit md:px-3">
                    <span>View Live Site</span>
                    <Image
                      className="w-5"
                      src={ArrowUp}
                      alt="Open external link"
                    />
                  </button>
                </a>
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
