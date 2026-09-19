import { projectsData } from '@/utils/data/projects-data';
import SectionGlow from '../../helper/section-glow';
import ProjectCard from './project-card';

const Projects = ({ t }) => {

  return (
    <section id='projects' className="relative z-10 my-12 lg:my-24">
      <div className="sticky top-16 z-20">
        <SectionGlow size={300} opacity={0.22} className="left-[90px] top-[14px] -translate-x-1/2 -translate-y-1/2" />
        <div className="flex items-center justify-start relative">
          <h2 className="bg-[#1a1443] absolute left-0 w-fit text-white px-4 py-2.5 text-base rounded-md sm:px-5 sm:py-3 sm:text-xl">
            {t.projects.heading}
          </h2>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24 pb-20">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              style={{
                '--index': index + 1,
                zIndex: index + 1,
              }}
              className="sticky-card w-full mx-auto max-w-4xl sticky">
            
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] ">
              <ProjectCard project={project} t={t} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;