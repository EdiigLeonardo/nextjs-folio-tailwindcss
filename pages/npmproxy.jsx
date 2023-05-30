import Image from 'next/image';
import React from 'react';
import npmproxy from '../public/assets/projects/npmproxy.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={npmproxy}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Npm Server-Proxy</h2>
          <h3>React | Angular | Kubernetes</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project presents a unique challenge in terms of user experience  UX , despite its simple user interface UI . To enhance the functionality, we will first generate a proxy server for the npm registry, ensuring that all users have access to the available npm packages.
          Next, we will develop the project using both Angular and React, implementing data persistence with either MySQL or MariaDB as the chosen database management system. This combination of frameworks and databases will provide a robust foundation for the projects requirements.
          To ensure scalability and maintainability, we will employ microservices architecture with Kubernetes. This approach allows us to create three pods: one for Angular, one for React, and another for MariaDB. By utilizing Kubernetes, we can effectively manage and orchestrate these pods, enabling efficient scaling and fault tolerance.
          Throughout the development process, we will prioritize the implementation of unit tests using KARMA, JEST, and JASMINE frameworks. Adopting a Test-Driven Development  TDD  or Behavior-Driven Development  BDD  approach, we can validate the functionality and integrity of the system, ensuring reliable and robust performance.
          </p>

          <a
            href='https://github.com/EdiigLeonardo/npm-usvcs-w-kubernetes'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Angular
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MariaDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Docker
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Kubernetes
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Jamine
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Karma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> RxJs
              </p>

            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
