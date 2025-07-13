import Sidebar from "@/components/Sidebar";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-8">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight text-default sm:text-5xl">
              <a href="/">Aphiwat Chalongtham</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Backend Developer
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
                <BsGithub className="text-4xl group-hover:text-primary transition-all duration-200" />
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
                <BsLinkedin className="text-4xl group-hover:text-primary transition-all duration-200" />
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
                <BsInstagram className="text-4xl group-hover:text-primary transition-all duration-200" />
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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <div className="mb-4">
                <p className="prose max-w-2xl text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.
                </p>
              </div>
              <div className="mb-4">
                <p className="prose max-w-2xl text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quisquam, quae.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                  quae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quisquam, quae.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                  quae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quisquam, quae.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                  quae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quisquam, quae.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                  quae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quisquam, quae.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                  quae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quisquam, quae.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                </p>
              </div>
            </div>
          </section>
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <div className="mb-4">
                <p className="prose max-w-2xl text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.
                </p>
              </div>
          </section>
          <section
            id="project"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Project
              </h2>
            </div>
            <div className="mb-4">
                <p className="prose max-w-2xl text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.
                </p>
              </div>
          </section>
        </main>
      </div>
    </div>
  );
}
