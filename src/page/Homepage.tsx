import React from "react";
import { Link } from "react-router-dom";
import { Projects } from "../Projectslist"; // Adjust the import path if necessary

function Homepage() {
  return (
    // Dark background with a relative wrapper to contain ambient background glows
    <div className="min-h-screen bg-slate-950 relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-500/30">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Content (Needs relative z-10 to sit above the glows) */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 sm:text-6xl tracking-tight pb-2">
            Sheryians Assignments
          </h1>
          <p className="mt-5 text-xl text-slate-400 max-w-2xl mx-auto">
            Check out things I've built.
          </p>
        </header>

        {/* Projects Grid */}
        <main className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Projects.map((project, index) => (
              <Link
                key={index}
                to={project.href}
                // Group class manages the hover state of the entire card, including the shadow glow
                className="group block relative rounded-[24px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] cursor-pointer"
              >
                {/* Glassmorphic Card Container */}
                <div className="h-full w-full bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 overflow-hidden flex flex-col transition-colors duration-300 group-hover:border-blue-500/50 group-hover:bg-slate-800/50">
                  {/* Project Image Area */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                    {/* Inner gradient to smoothly blend the image into the card body */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-70 group-hover:opacity-100"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-8 flex-1 flex flex-col justify-between relative z-20 -mt-8">
                    <h2 className="text-3xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-300 drop-shadow-md">
                      {project.name}
                    </h2>

                    <div className="mt-6 flex items-center text-blue-400 font-medium tracking-wide">
                      View Project
                      <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Homepage;
