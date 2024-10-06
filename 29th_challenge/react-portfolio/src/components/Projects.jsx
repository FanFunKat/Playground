import React from 'react'
import Project from './Project'
import storyGenerator from '../assets/ai-story-generator.png'
import businessCard from '../assets/business-card.png'
import svgAnimations from '../assets/svg-animations.png'


const projectList = [
  {
    id: 1,
    title: 'AI Story Generator',
    tech: ['React', 'Tailwind', 'TypeScript'],
    description:
      'I created a random story generator using React and Tailwind, with a series of prompts a story and matching images will be generated using the OpenAI api!',
    liveLink: '#',
    githubLink: '#',
    image: storyGenerator,
  },
  {
    id: 2,
    title: 'Digital Business Card',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description:
      "This project was created for Treehouse's Front End Web Development TechDegree",
    liveLink: '#',
    githubLink: '#',
    image: businessCard,
  },
  {
    id: 3,

    title: 'SVG Animations',
    tech: ['HTML', 'CSS'],
    description:
      'I learnt to create SVG animations using CSS. I also got to implement more advanced CSS techniques like clip-path and keyframes. I had also struggled with media queries before, but this project really helped!',
    liveLink: '#',
    githubLink: '#',
    image: svgAnimations,
  },
];


const Projects = () => {
  return (
    <section id='projects' className='divider'>
      <h2>My Projects</h2>
      <div>
        {projectList.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
