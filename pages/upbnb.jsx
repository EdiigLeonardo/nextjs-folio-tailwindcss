import Image from 'next/image';
import React from 'react';
import upbnb_upskill from '../public/assets/projects/upbnb_upskill.png';
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
          src={upbnb_upskill}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Property Finders</h2>
          <h3>Angular / NodeJs / Restful API / ExpressJs</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I provide you with an expertly edited description of a project that closely resembles Airbnb and is developed using Node.js, Angular, and TypeScript.

            The project at hand is a sophisticated web-based platform, reminiscent of Airbnb, developed using a technology stack comprising Node.js, Angular, and TypeScript. 
            This endeavor aims to provide an exceptional accommodation marketplace experience, offering a wide array of features and functionalities for both hosts and guests.

            Built upon the reliable Node.js runtime environment, the projects backend boasts a robust foundation that ensures scalability, efficiency, and high-performance. 
            Leveraging the event-driven architecture of Node.js, the platform seamlessly handles concurrent requests, guaranteeing optimal responsiveness and reliability. The backend implementation includes essential features such as user management, secure payment processing, and real-time communication between hosts and guests.

            On the frontend, the project harnesses the power of Angular, a comprehensive and versatile framework for building dynamic user interfaces. 
            By utilizing Angular, developers can create engaging and intuitive user experiences with ease. The frameworks extensive set of tools and components enables the implementation of features like responsive design, seamless navigation, and efficient data binding. Through Angulars modular and component-based structure, the frontend development becomes streamlined and maintainable, ensuring a top-notch user interface.

            To enhance the projects development experience, TypeScript, a strongly-typed superset of JavaScript, is employed as the primary programming language. 
            By embracing TypeScript, developers benefit from static typing, which helps identify and prevent errors during the development phase, leading to more robust and reliable code. Additionally, TypeScript provides advanced tooling and editor support, enabling efficient development workflows and improving overall productivity.

            In summary, the project represents a remarkable undertaking that emulates the functionality and essence of Airbnb. With its backend powered by Node.js, frontend built using Angular, and development enriched by TypeScript, this project delivers a highly scalable, performant, and user-friendly accommodation marketplace. 
            By leveraging these technologies, the platform ensures an immersive and seamless experience for hosts and guests, creating a dynamic and vibrant community within the online marketplace domain.
          </p>
          <a
            href='https://github.com/EdiigLeonardo/upbnb_with_Angular'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://upbnb-git-master-ediigleonardo.vercel.app/home'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Show</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Angular
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NodeJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ExpressJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Restful API
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
