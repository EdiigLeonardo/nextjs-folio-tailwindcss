import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Edig Leonardo | Nextjs Folio | Resume</title>
        <meta
          name='description'
          content='I’m a FULLSTACK specializing in building (and occasionally designing) exceptional digital experiences.'
        />
      </Head>

      <div className='w-full mx-auto p-2 pt-[120px] text-[#272465]'>
        <h2 className='text-center'>Resume</h2>
        <div className=' my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Edig Leonardo</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/edig-leonardo77/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/EdiigLeonardo'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Software Engineer<span className='px-1'>|</span> FullStack |{' '}
              <span className='px-1'></span> MERN DEVELOPER
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>

        <div className='max-w-full text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='max-w-full py-2 px-5 flex w-full flex-wrap justify-center items-center'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>FullStack | Software Engineer
            <span className='px-2'>|</span>Angular
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>TypeScript
            <span className='px-2'>|</span>NodeJs
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>ExpressJS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Flask | Django
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>TailwindCSS
            <span className='px-2'>|</span> Python
            <span className='px-2'>|</span> RESTful Api
            <span className='px-2'>|</span> Jasmine
          </p>
          <p className='py-2'>
            <span className='font-bold'>Kubernetes</span>
            <span className='px-2 font-bold'>|</span>Docker

          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6 px-5'>
          <p className='italic'>
            <span className='font-bold italic'>
              Capgemini Engineering
            </span>
            <span className='px-2'>|</span>Lisboa, LS
          </p>
          <p className='py-1 italic'>Sofware Engineer (2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Collaborated with senior developers to design and
              develop responsive web applications using React and
              Angular
            </li>
            <li>
              Utilized NodeJs, ExpressJs, and SQL to build serverside functionalities
              || Configuration of Kubernetes and docker
            </li>
            <li>
              Building and integrating with RESTful APIs. Creating and managing databases using technologies
              like SQL
            </li>
            <li>
              Participating in Agile development process, Scrum
              meetings, and retrospectives.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6 px-5'>
          <p className='italic'>
            <span className='font-bold italic'>
              UPSKILLS | ISCTE
            </span>
            <span className='px-2'>|</span>SINTRA, LISBOA, LS
          </p>
          <p className='py-1 italic'>FULL STACK DEVELOPER (MAR 2022 - JAN 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Building and maintaining the front-end of web
              applications using languages such as HTML, CSS,
              and JavaScript Developing and implementing
            </li>
            <li>
              back-end logic using languages such as NodeJs, ExpressJS
              and Drupal
            </li>
            <li>
              Building and integrating with RESTful APIs.
            </li>
            <li>
              Creating and managing databases using
              technologies like MySQL, SQL and PostgreSQL
            </li>
            <li>
              Participating in Agile development process,
            </li>
            <li>
              Scrum meeting, and retrospectives.
            </li>
            <li>
              Preparing technical documentation.
            </li>
          </ul>
        </div>
      </div>

      {/* Freelancer Experience */}
      <div className='py-6 px-5'>
        <p className='italic'>
          <span className='font-bold italic'>
            Freelancer
          </span>
          <span className='px-2'>|</span> Topcoder · Freelance
        </p>
        <p className='py-1 italic'>Apr 2020 - May 2022 · 2 yrs 2 mos</p>
        <p className='py-1'>Glastonbury, Connecticut, USA · Remote</p>
        <p className='font-bold py-1'>Skills:</p>
        <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            RESTful API
          </li>
          <li>
            Full Stack Development
          </li>
          <li>
            Node.js
          </li>
          <li>
            Flask
          </li>
          <li>
            React.js
          </li>
          <li>
            Python
          </li>
          <li>
            MySQL
          </li>
          <li>
            GitHub
          </li>
          <li>
            Django
          </li>
        </ul>
      </div>

      {/* FreeHelper Experience */}
      <div className='py-6 px-5'>
        <p className='italic'>
          <span className='font-bold italic'>
            Volunteer
          </span>
          <span className='px-2'>|</span> FreeHelper · Seasonal
        </p>
        <p className='py-1 italic'>Jan 2019 - Mar 2020 · 1 yr 3 mos</p>
        <p className='py-1'>Brazil · Remote</p>
        <p className='font-bold py-1'>Skills:</p>
        <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            Database Queries
          </li>
          <li>
            REST (Representational State Transfer)
          </li>
          <li>
            Web Applications
          </li>
          <li>
            JavaScript Frameworks
          </li>
          <li>
            RESTful API
          </li>
          <li>
            Redux.js
          </li>
          <li>
            React.js
          </li>
          <li>
            RxJS
          </li>
          <li>
            MySQL
          </li>
          <li>
            Django
          </li>
        </ul>
      </div>

    </>
  );
};

export default resume;
