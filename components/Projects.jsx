import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import library_upskill from '../public/assets/projects/library_upskill.png'
import upbnb_upskill from '../public/assets/projects/upbnb_upskill.png';
import npmproxy from '../public/assets/projects/npmproxy.png';
import recipes from '../public/assets/projects/recipes.png';
import foodImage from '../public/assets/projects/food.png';
import amortizationImage from '../public/assets/projects/amortization_list.png';
import carImage from '../public/assets/projects/car_app.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full h-full px-5 col-span-3 mb-4'>
      <div className='max-w-[100vw] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4 text-bold'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Drive Car App'
            backgroundImg={carImage}
            projectUrl='/drive'
            tech='React.js'
          />
          
          <ProjectItem
            title='Library Manager'
            backgroundImg={library_upskill}
            projectUrl='/library'
            tech='Angular'
          />

          <ProjectItem
            title='Meals Catalogs'
            backgroundImg={recipes}
            projectUrl='/recipe'
            tech='Vue.js'
          />
          <ProjectItem
            title='Real Estate - Upbnb'
            backgroundImg={upbnb_upskill}
            projectUrl='/upbnb'
            tech='Angular'
          />

          <ProjectItem
            title='Food Catalog'
            backgroundImg={foodImage}
            projectUrl='/food'
            tech='ReactJs'
          />

          <ProjectItem
            title='Amortization List'
            backgroundImg={amortizationImage}
            projectUrl='/amortization'
            tech='Vue.js'
          />

          <ProjectItem
            title='Npm ProxyServer'
            backgroundImg={npmproxy}
            projectUrl='/npmproxy'
            tech='React'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
