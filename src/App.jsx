import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import Player from './Components/Player';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('photomanip');
  const openModal = (card) => setSelectedCard(card);
  const closeModal = () => setSelectedCard(null);

  const cards = [
        { id: 'about', label: 'About me' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

  const projects = [
        { id: 'photomanip', label: 'Photo Manip' },
        { id: 'fanevents', label: 'Fan Events' },
        { id: 'layout', label: 'Layout' },
        { id: 'photog', label: 'Photography' },
  ];

  const projectContent = {
    photomanip: (
      <div className="space-y-2">
        <div className='grid grid-cols-4 gap-4 w-full h-full'>
          <img src="/images/mx1.jpg" alt="Photo Manipulation 1" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/mx2.jpg" alt="Photo Manipulation 2" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/plave3.png" alt="Photo Manipulation 3" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/mx4.jpg" alt="Photo Manipulation 4" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/mx5.jpg" alt="Photo Manipulation 5" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/mx6.jpg" alt="Photo Manipulation 6" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/plave1.png" alt="Photo Manipulation 7" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/plave2.png" alt="Photo Manipulation 8" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
        </div>
      </div>
    ),
    fanevents: (
      <div className="">
        <div className='flex flex-row sm:flex-row md:flex-row lg:flex-row gap-2'>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <img src="/images/fan1.png" alt="Fan Event 1" className="w-24 h-36" />
              <img src="/images/fan2.png" alt="Fan Event 2" className="w-24 h-36" />
            </div>
            <img src="/images/fan11.png" alt="Fan Event 2" className="w-60 h-50" />
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col">
          <img src="/images/fan3.png" alt="Fan Event 3" className="w-96 h-36" />
          <img src="/images/fan4.png" alt="Fan Event 4" className="w-96 h-36" />
          <div className='space-y-2'>
            <img src="/images/fan13.png" alt="Fan Event 5" className="w-full h-36" />
          <img src="/images/fan14.png" alt="Fan Event 6" className="w-full h-36" />
          <img src="/images/fan15.png" alt="Fan Event 7" className="w-full h-36" />
          </div>
        </div>
        </div>
      </div>
    ),
    layout: (
      <div className="space-y-2">
        <div className='grid grid-cols-2 gap-4 w-full h-full'>
          <img src="/images/Mockup.png" alt="Layout 1" className="w-full h-full " />
          <img src="/images/Mockup22.png" alt="Layout 2" className="w-full h-full" />
          <img src="/images/mockup1.png" alt="Layout 3" className="w-full h-full" />
          <img src="/images/mockup2.png" alt="Layout 4" className="w-full h-full" />
          <img src="/images/mockup3.png" alt="Layout 3" className="w-full h-full" />
          <img src="/images/mockup4.png" alt="Layout 3" className="w-full h-full" />
        </div>
      </div>
    ),
    photog: (
      <div className="space-y-2 items-center">
        <div className='grid grid-cols-4 gap-4 w-full h-full'>
          <img src="/images/photog (1).jpg" alt="Photo Manipulation 1" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/photog (1).png" alt="Photo Manipulation 2" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/photog (2).jpg" alt="Photo Manipulation 3" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
          <img src="/images/photog (4).jpg" alt="Photo Manipulation 4" className="w-36 h-full sm:w-36 md:w-56 rounded-sm object-cover" />
        </div>
        <a  href='https://labajoangelinal.wixsite.com/photography' className='dark:text-white underline'>Visit my photography site</a>
      </div>
    )
  };

  const cardsContent = {
    about: (
      <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center md:items-start">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            className="w-60 h-80 sm:w-60 sm:h-80 md:w-64 md:h-96 lg:w-56 lg:h-72 xl:w-72 xl:h-96"
            src="/images/ID.png"
            alt="Profile"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Hi, I'm Inah Labajo
          </h1>
          <p className=" text-[11px] dark:text-white">
            I'm a Graphic Designer from the Philippines, blending music-inspired
            creativity with a versatile design style. Beyond graphics, I capture
            moments through photography and film.
          </p>

          <div className="flex flex-col gap-3 justify-center md:justify-start">
            <div className="pr-0 md:pr-4 pb-4 md:pb-0">
              <h2 className="text-xs font-semibold mb-3 underline dark:text-white">
                Experience
              </h2>
              <div className="flex flex-row gap-16 sm:gap-16 md:gap-16 lg:gap-12 xl:gap-12">
                <div className='text-[10px]'>
                  <h3 className="font-semibold text-gray-900 dark:text-white ">
                    Widescope Advertising Agency
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    Graphic Design Intern
                  </p>
                  <p className="text-red-600 dark:text-red-400 font-medium">
                    2025
                  </p>
                </div>
                <div className='text-[10px]'>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Freelance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    Graphic Designer
                  </p>
                  <p className=" text-red-600 dark:text-red-400 font-medium">
                    2021-Present
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b md:border-b-0 pb-4 lg:pb-0 pr-0 lg:pr-4">
              <h2 className="text-xs font-semibold mb-3 underline dark:text-white">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Photo Manipulation',
                  'Layout Design',
                  'Publishing',
                  'Photography',
                  'Video Editing',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-red-300/30 dark:bg-amber-200/30 text-amber-700 dark:text-amber-300 rounded-full text-[10px]/3 font-medium hover:bg-amber-200 dark:hover:bg-amber-200/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold mb-3 underline dark:text-white">
                Softwares
              </h2>
              <div className="flex flex-wrap gap-2">
                <Icon icon="logos:adobe-photoshop" className="text-2xl hover:scale-110 transition-transform" />
                <Icon icon="logos:adobe-illustrator" className="text-2xl hover:scale-110 transition-transform" />
                <Icon icon="logos:adobe-indesign" className="text-2xl hover:scale-110 transition-transform" />
                <Icon icon="logos:adobe-lightroom" className="text-2xl hover:scale-110 transition-transform" />
                <Icon icon="logos:adobe-premiere" className="text-2xl hover:scale-110 transition-transform" />
                <Icon icon="logos:adobe-after-effects" className="text-2xl hover:scale-110 transition-transform" />
                <Icon icon="devicon:canva" className="text-2xl hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    projects: (
      <div className='overflow-x-auto h-full gap-2'>
        <div className="space-y-2">
          <h1 className='dark:text-white font-semibold text-center text-2xl'>Projects</h1>
          <p className=" text-[12px] text-gray-600 dark:text-white">
            Since 2022, I've been actively engaged in a diverse range of projects –
            personal endeavors, commissioned work, and academic pursuits. This variety
            showcases my adaptability and well-rounded skillset. While I haven't yet developed
            a signature style, I'm a fast learner who thrives on embracing new techniques and approaches.
          </p>
        </div>
        <div className="flex border-b border-gray-300 dark:border-gray-600 text-xs md:text-xs my-4">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`flex-1 py-2 px-2 focus:outline-none transition-colors duration-200 relative ${
                activeTab === project.id
                ? 'border-b-2 border-teal-500/90 text-teal-500/90 font-semibold -mb-px'
                : 'text-gray-600 dark:text-gray-400 hover:text-teal-500/90'
              }`}
              onClick={() => setActiveTab(project.id)}
            >
              {project.label}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {projectContent[activeTab]}
        </div>
      </div>
    ),

    contact: (
      <div className="w-full items-center dark:text-white mx-auto px-4 sm:px-6 md:px-12 lg:px-10 flex flex-col sm:flex-col md:flex-row lg:flex-row mb-6 gap-6">
        <div className="w-full space-y-4 dark:text-white">
          <h2 className="text-6xl font-bold text-left dark:text-white text-gray-900">
            Let's<br/>work<br/>together<br/>
          </h2>

          <a
            href="mailto:labajo.angelinal@gmail.com"
            className="text-black dark:text-white  cursor-pointer duration-200 underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            labajo.angelinal@gmail.com
          </a>
        </div>

        <div className="w-full space-y-6 ">
          <div className='border-b-1 flex items-center '>
            <a
              href="https://x.com/chilwolsail"
              className="text-black dark:text-white  underline font-semibold mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
          <div className='border-b-1 flex items-center'>
            <a
              href="https://www.tiktok.com/@chilwolsail"
              className="text-black dark:text-white underline font-semibold mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiktok
            </a>
          </div>
          <div className='border-b-1 flex items-center'>
            <a
              href="https://www.facebook.com/chilwolsail"
              className="text-black dark:text-white underline font-semibold mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className='border-b-1 flex items-center'>
            <a
              href="https://www.linkedin.com/in/inahlabajo/"
              className="text-black dark:text-white underline font-semibold mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className='border-b-1 flex items-center'>
            <a
              href="https://www.behance.net/angelinlabajo"
              className="text-black dark:text-white underline font-semibold mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className='min-h-screen w-full bg-white dark:bg-black/95 p-1'>
      <div className='md:hidden min-h-screen flex items-center justify-center'>
        <div className='grid grid-cols-2 auto-rows-min gap-3 px-4 py-8 max-w-lg mx-auto w-full'>

          <button 
            className='col-span-2 rounded-2xl p-4 min-h-[140px] flex items-center justify-center hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden bg-cover bg-center bg-no-repeat' 
            onClick={() => openModal('about')} 
            style={{ backgroundImage: 'url(/images/INAH.jpg)' }}
          >
          </button>

          <div className='bg-sky-950 rounded-2xl p-4  min-h-[120px] flex flex-col items-center justify-center text-center'>
            
          </div>

          <button 
            className='rounded-2xl p-4 min-h-[120px] flex flex-col items-center justify-center text-center hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden' 
            onClick={() => openModal('contact')}
          >
            <video 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/images/0000-0120.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </button>

          <div className='col-span-2 bg-red-400 rounded-2xl p-4  min-h-[120px] flex items-center justify-between hover:-translate-y-0.5 transition-all duration-300'>
            
          </div>

          <button className='bg-red-300 rounded-2xl p-4  min-h-[120px] flex flex-col justify-center hover:-translate-y-0.5 transition-all duration-300 cursor-pointer focus:outline-none' onClick={() => openModal('projects')}>
            
          </button>

          <div className='bg-teal-500/90 rounded-2xl p-4 min-h-[120px] flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-300'>
            
          </div>

          <div className='bg-amber-200 rounded-2xl p-4 min-h-[120px] flex flex-col items-center justify-center text-center hover:-translate-y-0.5 transition-all duration-300'>
            <Player/>
          </div>

          <div className='bg-red-200 rounded-2xl p-4 min-h-[120px] flex flex-col items-center justify-center text-center'>
            
          </div>

        </div>
      </div>

      <div className='hidden md:flex items-center justify-center min-h-screen'>
        <div className='grid grid-cols-4 grid-rows-3 gap-4 max-w-6xl mx-auto w-full h-[90vh] max-h-[800px]'>
          <button className='col-span-1 row-span-2 items-center bg-amber-200 rounded-2xl lg:rounded-3xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 lg:p-6 flex flex-col justify-center group' onClick={() => openModal('about')} style={{ backgroundImage: 'url(/images/INAH.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></button>

          <div className='col-span-1 row-span-1 bg-sky-950 rounded-2xl lg:rounded-3xl p-4 lg:p-6 flex items-center justify-center group'>
            
          </div>

          <button 
            className='col-span-2 row-span-1 rounded-2xl lg:rounded-3xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 lg:p-6 flex items-center justify-center group relative overflow-hidden' 
            onClick={() => openModal('contact')}
          >
            <video 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl lg:rounded-3xl"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/images/0000-0120.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </button>

          <div className='col-span-1 row-span-1 bg-red-400 rounded-2xl lg:rounded-3xl p-4 lg:p-6 flex items-center justify-center group'>
            
          </div>

          <button className='col-span-1 row-span-2 bg-red-300 rounded-2xl items-center lg:rounded-3xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 lg:p-6 flex flex-col justify-center group' onClick={() => openModal('projects')}
            style={{ backgroundImage: 'url(/images/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
          </button>

          <div className='col-span-1 row-span-1 bg-teal-500/90 rounded-2xl lg:rounded-3xl p-4 lg:p-6 flex items-center justify-center group'>
            
          </div>

          <div className='col-span-2 row-span-1 bg-amber-200 rounded-2xl lg:rounded-3xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 lg:p-6 flex items-center justify-between  group'>
            <Player/>
          </div>

          <div className='col-span-1 row-span-1 bg-red-200 rounded-2xl lg:rounded-3xl p-4 lg:p-6 flex items-center justify-center group'>
            
          </div>

        </div>
      </div>
      {selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-1 sm:p-4 z-50">
          <div className="bg-white/95 dark:bg-black/90 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div className="flex-shrink-0 mt-1"></div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl focus:outline-none"
                >
                  ×
                </button>
              </div>
              <div className="modal-content">
                {cardsContent[selectedCard]}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;