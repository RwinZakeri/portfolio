import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import grainImage from "@/assets/images/grain.jpg";

import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
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
    title: "Light Saas Landing Page",
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
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <p className="uppercase font-sans font-semibold tracking-widest bg-gradient-to-r from-emerald-300  to-sky-400 text-transparent bg-clip-text text-center text-lg">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6  font-extrabold md:text-5xl">
          Feature Projects
        </h2>
        <p className="mt-4 font-sans font-semibold text-white/60 max-w-md mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione excepturi assumenda enim cumque
        </p>
        <div className="flex flex-col mt-10 justify-center w-full gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2  after:outline-white/20 after:-outline-offset-2 after:rounded-3xl px-8 pt-8 lg:flex justify-between lg:gap-4"
            >
              <div>
                <div
                  className="absolute inset-0 -z-10 opacity-5 bg-red-300"
                  style={{ backgroundImage: `url(${grainImage.src})` }}
                ></div>

                <div>
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text ">
                    <span>
                      {project.company} {project.year}
                    </span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl font-bold">
                  {project.title}
                </h3>
                <hr className="border-t-2 md:text-3xl border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result) => (
                    <li
                      key={result.title}
                      className="flex gap-2 font-sans font-semibold text-sm text-white/50"
                    >
                      <Image
                        className="w-6 md:w-6"
                        src={CheckIcon}
                        alt="CheckIcon"
                      />
                      {result.title}
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="flex  items-center justify-center gap-2 bg-white text-gray-950 h-12 w-full rounded-xl font-sans font-semibold mt-8 md:w-fit md:px-3">
                    <span>View Live Site</span>
                    <Image className="w-5" src={ArrowUp} alt="CheckIcon" />
                  </button>
                </a>
              </div>
              <Image
                className="mt-8 -mb-4 lg:w-1/2 lg:relative lg:left-20"
                src={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
