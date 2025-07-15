import Sidebar from "@/components/Sidebar";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import data from "@/data/data.json";
import { getIconComponent } from "@/utils/iconMap";
import PortfolioData from "@/types/portfolio";
import Image from "next/image";

const portfolioData: PortfolioData = data;

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-8">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight text-default sm:text-5xl">
              <a href="/portfolio">Aphiwat Chalongtham</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Junior Backend Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-gray-500">
              I build robust, scalable, and secure backend systems that power
              modern web applications.
            </p>
          </div>
          {/* Sidebar section */}
          <Sidebar />
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 shrink-0 text-xs group">
              <a
                className="block hover:text-slate-200"
                href="https://github.com/Aphiwatch/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub (opens in a new tab)"
                title="GitHub"
              >
                <BsGithub className="text-3xl group-hover:text-primary transition-all duration-200" />
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs group">
              <a
                className="block hover:text-slate-200"
                href="https://www.linkedin.com/in/aphiwat-chalongtham-00767b2b3/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
              >
                <BsLinkedin className="text-3xl group-hover:text-primary transition-all duration-200" />
              </a>
            </li>

            <li className="mr-5 shrink-0 text-xs group">
              <a
                className="block hover:text-slate-200"
                href="https://www.instagram.com/_aphiwatch1410/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram (opens in a new tab)"
                title="Instagram"
              >
                <BsInstagram className="text-3xl group-hover:text-primary transition-all duration-200" />
              </a>
            </li>
          </ul>
        </header>
        <main className="pt-24 lg:w-[52%] lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <h2 className="text-xl text-gray-200 font-semibold pb-4 uppercase">
              About
            </h2>
            <div className="mb-4">
              <p className="text-gray-500 mb-2">{portfolioData.paragraph_1}</p>
              {portfolioData.paragraph_2 && (
                <p className="text-gray-500 mb-2">
                  {portfolioData.paragraph_2}
                </p>
              )}
              {portfolioData.paragraph_3 && (
                <p className="text-gray-500 mb-2">
                  {portfolioData.paragraph_3}
                </p>
              )}
              <div className="mt-4">
                <span className="text-xl text-gray-200 font-semibold mt-8 mb-4">Military Status : </span>{" "}
                <span className="text-success-500">{portfolioData.militaryStatus}</span>
              </div>
            </div>
            {/* Languages */}
            <p className="text-xl text-gray-200 font-semibold mt-4 mb-4">
              Languages
            </p>
            <ul className="list-disc pl-5 text-gray-300">
              {portfolioData.language.map((lang) => (
                <li key={lang.id} className="mb-2">
                  {lang.language}: {lang.level}
                </li>
              ))}
            </ul>
            {/* Skills */}
            <h3 className="text-xl text-gray-200 font-semibold mt-4 mb-4">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skill.map((skill) => {
                const IconComponent = getIconComponent(skill.icon);
                return (
                  <div
                    key={skill.id}
                    className="flex items-center bg-purple-950 text-primary px-4 py-2 rounded-md text-sm cursor-pointer"
                  >
                    {IconComponent && (
                      <IconComponent className="mr-2 text-lg" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
            {/* Education */}
            <h3 className="text-xl text-gray-200 font-semibold mt-8 mb-4">
              Education
            </h3>
            <div className="mb-4">
              {portfolioData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="duration-200 pt-6 rounded-lg mb-4 tracking-wide"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 mb-4">
                    {/* Date (ซ้ายมือ) */}
                    <p className="text-gray-500 text-sm md:w-1/4 lg:w-1/5 flex-shrink-0">
                      {edu.duration}
                    </p>

                    {/* Role and Company (ขวามือ) */}
                    <div className="">
                      <h3 className="text-xl text-text-default font-semibold mb-1">
                        {edu.institute}
                      </h3>
                      <h3 className="text-md text-gray-500 font-semibold mb-2">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Experience Section */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <h2 className="text-xl text-gray-200 font-semibold pb-4 uppercase">
              Experience
            </h2>
            <div className="mb-4">
              {portfolioData.workExperience.map((exp) => (
                <div
                  key={exp.id}
                  className="duration-200 pt-6 rounded-lg mb-4 tracking-wide"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 mb-4">
                    {/* Date (ซ้ายมือ) */}
                    <p className="text-gray-400 text-sm md:w-1/4 lg:w-1/5 flex-shrink-0">
                      {exp.date}
                    </p>

                    {/* Role and Company (ขวามือ) */}
                    <div className="">
                      <h3 className="text-xl text-text-default font-semibold mb-1">
                        {exp.company}
                      </h3>
                      <h3 className="text-md text-text-secondary font-semibold mb-2">
                        {exp.role}
                      </h3>
                      {/* Description */}
                      <p className="text-gray-500 text-sm mt-1">
                        {exp.description}
                      </p>
                      {exp.subdescription && (
                        <p className="text-gray-500 text-sm mt-1">
                          {exp.subdescription}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Full Resume */}
            <div className="mt-12">
              <a
                className="inline-flex items-baseline font-md leading-tight hover:text-primary focus-visible:text-primary font-semibold text-slate-200 group/link text-base"
                href="/portfolio/Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Full Résumé (opens in a new tab)"
              >
                <span>
                  View Full Resume
                </span>
                <CiLink className="ml-2 group-hover/link:translate-x-0.5 transition-transform duration-200 size-4" />
              </a>
            </div>
          </section>
          {/* Project Section */}
          <section
            id="project"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
              <h2 className="text-xl text-gray-200 font-semibold pb-4 uppercase">
                Project
              </h2>
            <div className="mb-4">
              <div className="prose max-w-2xl text-slate-400">
                {portfolioData.project.slice(0, 4).map((project) => (
                  <a
                  key={project.id} 
                  href={project.repository || project.demo || "#"}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 group relative grid gap-4 rounded-lg transition-all md:grid-cols-8 md:gap-x-6 hover:bg-slate-800/50 mt-4 mb-4"
                  >
                    <Image
                      src={project.preview_image[0]}
                      alt={`${project.name} preview`}
                      width={240}
                      height={120}
                      className="rounded border-2 border-slate-200/10 transition sm:col-span-3 md:col-span-3 object-cover"
                    />
                    <div className="md:col-span-4">
                      <h3 className="mb-2 text-lg font-medium leading-tight text-slate-200">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-400">
                        {project.description}
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {project.stack.map((tech, techIndex) => {
                          const Icon = getIconComponent[tech.iconName];
                          return (
                            <li key={techIndex} className="mr-2 mt-2 text-sm text-primary flex items-center">
                              {Icon && <Icon className="inline-block mr-1" />}
                              {tech.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Full Project */}
            <div className="mt-12">
              <a
                className="inline-flex items-baseline font-md leading-tight hover:text-primary focus-visible:text-primary font-semibold text-slate-200 group/link text-base"
                href="/portfolio/project"
                // target="_blank"
                // rel="noreferrer noopener"
                aria-label="View all projects"
              >
                <span>
                  View All Projects
                </span>
                <CiLink className="ml-2 group-hover/link:translate-x-0.5 transition-transform duration-200 size-4" />
              </a>
            </div>
          </section>
          {/* blog section */}
          <section
            id="blog"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Writtings"
          >
            <h2 className="text-xl text-gray-200 font-semibold pb-4 uppercase">
                Blog
            </h2>
          </section>
        </main>
      </div>
    </div>
  );
}
