// @flow strict

import Image from 'next/image';
import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full h-[600px]">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 flex flex-row gap-6 items-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className='w-1/3 flex items-center justify-center block overflow-hidden'>
          <img src={project.image} className="w-[80%] h-full max-h-[480px] !rounded-md block" />
        </a>

        <code className="w-2/3 font-mono text-xs md:text-sm lg:text-base flex flex-col gap-2">
          <div className="blink">
            <span className="mr-2 text-pink-500">let</span>
            <span className="mr-2 text-blue-300">project</span>
            <span className="mr-2 text-white">=</span>
            <span className="mr-2 text-green-300">Project</span>
            <span className="text-gray-400">{'('}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{"\""}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{"\","}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{" [\""}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools.length - 1 !== i && <span className="text-gray-400">{"\", \""}</span>}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"\"],"}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{"\""}</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-orange-400">{"\""}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">description:</span>
            <span className="text-cyan-400">{" \""}</span>
            <span className="text-cyan-400">{project.description}</span>
            <span className="text-cyan-400">{"\""}</span>
          </div>
          <div><span className="text-gray-400">{")"}</span></div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
