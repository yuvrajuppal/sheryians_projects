import React from "react";
import { Link } from "react-router-dom";
import { ProjectsAssignment1, ProjectsAssignment2 } from "../Projectslist"; // Adjust the import path if necessary

// Define the type for the project data based on your Projectslist
interface Project {
  name: string;
  href: string;
  image: string;
  element?: React.ReactNode;
}

// Reusable Project Card Component to keep the code DRY
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={project.href}
      className="group block relative rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(234,179,8,0.15)] cursor-pointer"
    >
      {/* Card Container: Black/Zinc with subtle gold hover border */}
      <div className="h-full w-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-zinc-800/80 overflow-hidden flex flex-col transition-all duration-500 group-hover:border-yellow-500/40 group-hover:bg-[#111111]/90">
        {/* Project Image Area */}
        <div className="relative h-64 w-full overflow-hidden bg-[#050505]">
          {/* Inner gradient to seamlessly blend the image into the dark card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>

          {/* Subtle gold overlay on hover */}
          <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0"
          />
        </div>

        {/* Project Details */}
        <div className="p-8 flex-1 flex flex-col justify-between relative z-20 -mt-10">
          <div>
            <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-yellow-400 transition-colors duration-300 tracking-tight">
              {project.name}
            </h2>
          </div>

          {/* Minimalist, elegant CTA link */}
          <div className="mt-8 flex items-center text-sm font-semibold tracking-widest uppercase text-zinc-500 group-hover:text-yellow-500 transition-colors duration-300">
            <span>View Project</span>
            {/* Animated Arrow */}
            <span className="ml-3 inline-block transform group-hover:translate-x-2 transition-transform duration-300">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>

        {/* Bottom animated border line */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-500 group-hover:w-full z-30"></div>
      </div>
    </Link>
  );
};

function Homepage() {
  return (
    // Deep black background with gold selection highlighting
    <div className="min-h-screen bg-[#050505] relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-yellow-500/30 selection:text-yellow-100">
      {/* Ambient Background Glows - Adjusted for Gold/Amber aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-700/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="max-w-7xl mx-auto text-center mb-24">
          {/* Subtle top badge for premium feel */}
          <div className="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">
              Portfolio Archive
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 sm:text-6xl md:text-7xl tracking-tighter pb-2 drop-shadow-sm">
            Sheryians Assignments
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Explore a curated collection of digital experiences, interfaces, and
            tools I've meticulously crafted.
          </p>
        </header>

        {/* Assignments Sections */}
        <main className="max-w-7xl mx-auto flex flex-col gap-24">
          {/* Section: Assignment 1 */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent inline-block"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
                Assignment 1
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {ProjectsAssignment1.map((project, index) => (
                <ProjectCard key={`assign1-${index}`} project={project} />
              ))}
            </div>
          </section>

          {/* Section: Assignment 2 */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent inline-block"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
                Assignment 2
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {ProjectsAssignment2.map((project, index) => (
                <ProjectCard key={`assign2-${index}`} project={project} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Homepage;
