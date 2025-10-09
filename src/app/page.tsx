import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion, useScroll} from 'framer-motion';

<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
function Component(){
  const {scrollYProgress} = useScroll();
}

const Page = () => {
  return (
    <div className='overflow-y-hidden scrollbar-hide'>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-black-100 p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-8xl font-bold mb-8">Aditya Nambi</h1>
          <div className="text-4xl flex flex-col md:flex-row md:space-x-24 mb-5">
            <Link href="#about-me" className="text-blue-500 hover:text-blue-200 hover:animate-pulse">About Me</Link>
            <Link href="#experience" className="text-blue-500 hover:text-blue-200 hover:animate-pulse">Experience</Link>
            <Link href="#contact" className="text-blue-500 hover:text-blue-200 hover:animate-pulse">Contact</Link>
          </div>
          <a href="mailto:aditya.n1234@gmail.com" className="text-2xl mb-5 text-blue-200 hover:text-blue-500">aditya.n1234@gmail.com</a>
          <div className='flex flex-row justify-center'>
          <img src='/arrow.png' className='h-20 w-20  animate-bounce mt-10' alt='arrow' />
          </div>
        </div>
      </div>

  <div id='about-me' className="flex flex-col items-center">
  <h1 className="text-3xl text-blue-500 font-bold mb-4">About me</h1>
  <div className="flex flex-col items-center">
    <Image src="/headshot.png" alt="Aditya Nambi" width={300} height={300} className="rounded-3xl mb-4" />
    <div className='p-6 rounded-lg shadow-lg text-center text-blue-200'>
      Aditya Nambi | Computer Science @ Texas A&M
    </div>
    <div className=' max-w-3xl border-2 border-blue-500 p-6 rounded-lg shadow-lg mb-20'>
      <p style={{ wordWrap: 'break-word', marginBottom: '1rem' }}>
        {`Howdy! I'm Adi and I am currently a Senior Computer Science student at Texas A&M university. I enjoy working on projects that make day to day life easy for everyone. My main interests are in task automation and Software Engineering.`}
      </p>
      <p style={{ wordWrap: 'break-word', marginBottom: '1rem' }}>
        {`In my free time, I enjoy trying new foods, playing sports, and cheering on my Patriots and Celtics. I'm always looking to meet new people so feel free to shoot me an email and we can chat!`}
      </p>
    </div>
  </div>
</div>
<div id='resume' className="flex flex-col items-center py-20">
  <h1 className="text-3xl text-blue-500 font-bold mb-8">Resume</h1>
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-xl mb-8 text-blue-200">
      View my resume below or open it in a new tab for a better viewing experience.
    </p>
    
    {/* Resume Viewer */}
    <div className="bg-white rounded-lg shadow-2xl p-4 mb-8">
      <iframe
        src="/Nambi_Aditya.pdf"
        width="100%"
        height="800"
        className="rounded border-2 border-gray-300"
        title="Aditya Nambi Resume"
      >
        <p className="text-gray-600">
          Your browser does not support PDFs. 
          <a href="/Nambi_Aditya.pdf" className="text-blue-500 hover:underline">
            Open the PDF in a new tab
          </a>
        </p>
      </iframe>
    </div>

    {/* Open in New Tab Button */}
    <div className="flex justify-center">
      <a 
        href="/Nambi_Aditya.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Open in New Tab
      </a>
    </div>
    
    <div className="mt-4">
      <p className="text-sm text-gray-400">
        Last updated: October 2025
      </p>
    </div>
  </div>
</div>

<div id='experience' className="flex flex-col items-center pt-20">
  <h1 className="text-3xl text-blue-500 font-bold mb-4">Experience</h1>
  <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8 max-w-7xl mx-auto">
  <div className="w-full md:w-1/4 p-6 rounded-lg shadow-lg">
    <p style={{ wordWrap: 'break-word', marginBottom: '1rem' }}>
      <a href='https://www.breweryjourney.com/' target='_blank'>
        <Image src="/brewjourney.png" alt="Aditya Nambi" width={300} height={2000} className="rounded-3xl mb-4 transform transition-transform hover:scale-150" />
        {`Local brewery finder built with Google Maps API and OpenBrewDB API. Simple passion project that was made to find cool breweries around me and help friends decided on a fun adventure.`}
      </a>
    </p>
  </div>
  <div className="w-full md:w-1/4 p-6 rounded-lg shadow-lg">
    <p style={{ wordWrap: 'break-word', marginBottom: '1rem' }}>
      <a href='https://tacs.tamu.edu/' target='_blank'>
        <Image src="/tacs_black.png" alt="Aditya Nambi" width={200} height={200} className="rounded-3xl mb-4 transform transition-transform hover:scale-150" />
        {`President of Texas A&M Computing Society the official ACM chapter at TAMU. We host workshops, hackathons, and socials for the CS community.`}
      </a>
    </p>
  </div>
  <div className="w-full md:w-1/4 p-6 rounded-lg shadow-lg">
    <p style={{ wordWrap: 'break-word', marginBottom: '1rem' }}>
      <a href='https://github.com/anambi82/nbaproj' target='_blank'>
        <Image src="/onestopshot.png" alt="Aditya Nambi" width={300} height={2000} className="rounded-3xl mb-4 transform transition-transform hover:scale-150" />
        {`A helpful NBA stat tracking tool that provides users with stats and shot charts about their favorite players, and will make a prediciton on the next NBA champion.`}
      </a>
    </p>
  </div>
  <div className="w-full md:w-1/4 p-6 rounded-lg shadow-lg">
    <p style={{ wordWrap: 'break-word', marginBottom: '1rem' }}>
      <a href='https://www.linkedin.com/in/adityanambi/' target='_blank'>
        <Image src="/jpmc.jpg" alt="Aditya Nambi" width={20000} height={20000} className="rounded-3xl mb-4 transform transition-transform hover:scale-150" />
        {`Spent a summer as a software engineering intern at JP Morgan Chase working in the Asset Wealth Management divison. Worked primarly with Backend technologies such as Java, Spring Boot, and SQL.`}
      </a>
    </p>
  </div>
</div>

  <h1 className="text-3xl text-blue-500 font-bold mb-4 mt-16">Skills</h1>
  {/* <div className="flex flex-wrap justify-center items-center">
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /> 
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />      
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
  </div>  */}
  <div className="flex flex-wrap justify-center items-center">
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /> 
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />      
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
  </div> 
  <div className="flex flex-wrap justify-center items-center">
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
    <img height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
    </div> 
</div>
      

<div id='contact' className="flex justify-center items-center h-screen">
  <div className="flex flex-col items-center">
    <h1 className="text-3xl text-blue-500 font-bold mb-4">Contact</h1>
    <div className="flex flex-wrap justify-center items-center space-x-4">
      <a href='https://github.com/anambi82' target='_blank'>
        <img className="transform transition-transform hover:scale-150" height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
      </a>
      <a href='https://www.linkedin.com/in/adityanambi/' target='_blank'>
        <img className="transform transition-transform hover:scale-150" height={100} width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
      </a>
      <a href='mailto:aditya.n1234@gmail.com' target='_blank'>
        <img className="transform transition-transform hover:scale-150" height={100} width={100} src="/email.png" />
      </a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Page;
