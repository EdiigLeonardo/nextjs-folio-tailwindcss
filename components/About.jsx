import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 mb-4'>
      <div className='max-w-[1240px] m-auto md:grid'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-primary-color'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <div className='flex text-justify justify-around items-center gap-6 max-h-full'>
            <p className='py-2 text-gray-600 text-justify'>
              With a strong foundation in JavaScript, SQL, and Python, I bring a versatile skill set to the table.
              I have hands-on experience with a range of frameworks and libraries, including React, Angular, Node.js, Express.js, Flask, and Next.js, enabling me to tackle diverse development projects with confidence.
              My proficiency extends to essential tools such as Git, Rest, Jira, and Redux, facilitating efficient collaboration and streamlined workflow.
              Additionally, I possess expertise in front-end technologies like HTML/CSS, Tailwind CSS, and SCSS, enabling me to create visually appealing and responsive user interfaces.
              Furthermore, I have knowledge of containerization technologies such as Docker and orchestration platforms like Kubernetes, allowing me to optimize deployment and scalability.
              With this comprehensive skill set, I am well-equipped to contribute to dynamic and challenging software development initiatives.
            </p>
            <div className='w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 md-max:hidden'>
              <Image src={AboutImg} className='w-full h-full rounded-xl' alt='/' />
            </div>
          </div>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
