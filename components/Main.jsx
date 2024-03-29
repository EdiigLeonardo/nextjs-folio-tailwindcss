import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mb-4'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello World, I&#39;m <span className='text-secondary-color'> Edig</span>
          </h1>

          <h1 className='py-2 text-gray-700'><Typewriter
            options={{
              strings: ['Fullstack Developer', 'Frontend', 'Backend', 'Software Engineering', 'Django', 'Vuejs',
                'Angular', 'React', 'Next.js', 'Node','Express.js', 'Laravel', 'TypeScript','MongoDB','SQL'],
              autoStart: true,
              loop: true
            }}
          />
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I am wholeheartedly committed to designing responsive and cutting-edge Fullstack solutions that seamlessly integrate robust back-end technologies.
            My passion lies in creating user-centric experiences that leverage the full potential of modern technology stacks.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/edig-leonardo77/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/EdiigLeonardo?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
