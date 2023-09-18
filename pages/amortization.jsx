import Image from 'next/image';
import React from 'react';
import amortizationImage from "../public/assets/projects/amortization.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const library = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={amortizationImage}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Library Upskill App</h2>
          <h3>Angular / SCSS / NodeJS / RESTful API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I have proudly crafted an extensive library harnessing the power of cutting-edge technologies, including Node.js, SQL, and Angular. Our solution stands as a testament to our commitment to excellence, offering users a seamless experience for managing their favorite books and conducting efficient searches for both authors and books within our high-performance database.

            Our project showcases exceptional responsiveness, guaranteeing an intuitive and fluid user interface that prioritizes user satisfaction. Leveraging the REST architecture, we have optimized data consumption, resulting in efficient retrieval and manipulation of information.

            This project not only exemplifies our technical expertise but also underscores our dedication to delivering innovative and user-centric solutions in the ever-evolving world of technology.
          </p>
          <a
            href='https://github.com/EdiigLeonardo/AmortizationList-VueJS-TypeScript-Tailwind.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Frontend Code</button>
          </a>
          <a
            href='https://github.com/EdiigLeonardo/AmortizationList-Laravell.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Backend Code</button>
          </a>
          <a
            href='https://gp-amortization-vuejs-vite-tailwind.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Show</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vuejs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> RESTful API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Observables
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

export default library;
