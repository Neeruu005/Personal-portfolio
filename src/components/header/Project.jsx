import React from 'react';
import sangeet from '/src/assets/tic tok.png';
import engding from '/src/assets/engding.png';
import tototimer from '/src/assets/quant.jpeg';

const projectsData = [
  {
    title: ' AI voice assistent',
    description: 'I developed an AI Voicer Assistant using HTML, CSS, and JavaScript. The assistant is capable of processing voice commands and delivering responses through a user-friendly interface. This project showcases my ability to integrate front-end web technologies with AI-based voice functionalities.',
    code: 'https://github.com/Neeruu005/AI-Jarvis.git',
    live: 'https://legendary-sprite-e0bb0a.netlify.app',
    stack: 'React, Tailwind CSS',
    thumbnail: tototimer,
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'I built a Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game features an interactive and responsive design, offering a smooth user experience. It demonstrates my proficiency in front-end web development and applying logic for game functionalities',
    code: 'https://github.com/Neeruu005/tic-tac-toe-games.git',
    live: '#',
    stack: 'HTML, CSS, JavaScript',
    thumbnail: sangeet,
  },
  {
    title: 'EngDing',
    description: 'I built a Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game features an interactive and responsive design, offering a smooth user experience. It demonstrates my proficiency in front-end web development and applying logic for game functionalities',
    code: '#',
    live: '#',
    stack: 'HTML, Bootstrap 5',
    thumbnail: engding,
  },
];

const Project = () => {
  return (
    <section id="projects" className="mt-20 space-y-5 md:mt-32 md:px-5 lg:mt-8">
      <h1 className=" font-bold text-5xl grid items-center justify-center   ">Projects</h1>
      <div className="grid gap-12 mt-12 md:grid-cols-3 pt-16">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-white rounded-2xl hover:border-zinc-200 group"
          >
            <img
              alt={project.title}
              loading="lazy"
              width="400"
              height="400"
              className="object-cover w-full h-1/2 rounded-2xl"
              src={project.thumbnail}
            />
            <div className="flex flex-col items-start mt-5 space-y-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p>{project.description}</p>
              <div className="flex flex-row items-center space-x-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border rounded-lg transition duration-500 ease-in-out hover:bg-zinc-900 hover:text-white"
                >
                  Live
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z" />
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                    <path d="M16 9h2" />
                  </svg>
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border rounded-lg transition duration-500 ease-in-out hover:bg-zinc-900 hover:text-white"
                >
                  Source Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 8l-4 4l4 4" />
                    <path d="M17 8l4 4l-4 4" />
                    <path d="M14 4l-4 16" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
