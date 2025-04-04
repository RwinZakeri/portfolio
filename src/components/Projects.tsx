import CheckIcon from "@/assets/icons/check-circle.svg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
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
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300  to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Feature Projects
        </h2>
        <p className="mt-4 text-white/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione excepturi assumenda enim cumque
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2  after:outline-white/20 after:-outline-offset-2 after:rounded-3xl p-8"
            >
              <div>
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text ">
                  <span>
                    {project.company} {project.year}
                  </span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul>
                {project.results.map((result) => (
                  <li key={result.title}>
                    <Image src={CheckIcon} alt="CheckIcon" />
                    {result.title}
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button>View Live Site</button>
              </a>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
