import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import library_upskill from '../public/assets/projects/library_upskill.png'
import upbnb_upskill from '../public/assets/projects/upbnb_upskill.png';
import reduxfolio from '../public/assets/projects/reduxfolio.png';
import npmproxy from '../public/assets/projects/npmproxy.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[100vw] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4 text-bold'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='React Folio'
            backgroundImg={reduxfolio}
            projectUrl='/portfolio'
            tech='React'
          />

          <ProjectItem
            title='Npm ProxyServer'
            backgroundImg={npmproxy}
            projectUrl='/npmproxy'
            tech='React'
          />

          <ProjectItem
            title='Upbnb'
            backgroundImg={upbnb_upskill}
            projectUrl='/upbnb'
            tech='Angular'
          />
          <ProjectItem
            title='Library Manager'
            backgroundImg={library_upskill}
            projectUrl='/library'
            tech='Angular'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
