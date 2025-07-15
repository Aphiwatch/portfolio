import ProjectTable from "@/components/ProjectTable";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:py-24">
        
        <a href="/portfolio" className="group mb-2 inline-flex items-center font-semibold leading-tight text-primary group/link">
        <FaArrowLeft className="mr-2" />
        Aphiwat Chalongtham</a>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
        <ProjectTable />
      </div>
    </div>
  );
}
