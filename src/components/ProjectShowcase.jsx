import React from 'react';
import styles from './ProjectShowcase.module.css';
import bhagvatGita from "../assets/Images/bhagvatGita.png"
import productivityTracker from "../assets/Images/productivityTracker.png"
import devplatform from "../assets/Images/devplatform.png"
import whether from "../assets/Images/whether.png"
import eCommerce from "../assets/Images/eCommerce.png"
import Collabe from "../assets/Images/Collabe.png"
import chatApp from "../assets/Images/chatApp.png"
import spliter from "../assets/Images/spliter.png"


const projects = [
  {
    title: 'DevsPlatform',
    description: 'A web development learning and showcase platform where users complete frontend challenges and submit components.',
    image: devplatform,
    link: 'https://devplatform-deployed.onrender.com/',
  },
  {
    title: 'E-Commerce Site',
    description: 'A full-stack e-commerce website with product listings, cart functionality , search, filtering , and secure payments using MERN stack.',
    image: eCommerce,
    link: 'https://e-commerce-client-side-six.vercel.app/',
  },  
  {
    title: 'Real-Time Chat App',
    description: 'A real-time chat application built using the MERN stack, featuring instant messaging , searching user , instant notificaiton and a sleek UI.',
    image: chatApp,
    link: 'https://github.com/KishanDhaval/REAL-TIME-CHAT-APPLICATION',
  },
  {
    title: 'Real-Time Collab Tool',
    description: 'A collaborative application allowing multiple users to edit documents in real time, similar to Google Docs.',
    image: Collabe,
    link: 'https://github.com/KishanDhaval/REAL-TIME-COLLABORATION-TOOL',
  },
  {
    title: 'Productivity Extension',
    description: 'A browser extension to enhance productivity by tracking tasks, helps to limiting distractions, and optimizing workflow.',
    image: productivityTracker,
    link: 'https://github.com/KishanDhaval/PRODUCTIVITY-TRACKER',
  },
  {
    title: 'Bhagavad Gita Insights Extension',
    description: 'A browser extension that provides daily insights and verses from the Bhagavad Gita to inspire users.',
    image: bhagvatGita,
    link: 'https://github.com/KishanDhaval/Bhagavad-Gita-Insights',
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app that provides real-time weather updates, search based weather data update.',
    image: whether,
    link: 'https://kishandhaval.github.io/whether/',
  },
  {
    title: 'Spliter',
    description: 'A Splitwise-like expense tracking application that helps users split and manage shared expenses effortlessly.',
    image: spliter,
    link: '',
  }
];

const ProjectShowcase = () => {
  return (
    <div className={styles.projectShowcaseContainer} id="projects">
      <h2>My Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer" key={project.title} className={styles.projectCard}>
            <div className={styles.cardImage} style={{ backgroundImage: `url(${project.image})` }}>
              <div className={styles.cardOverlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
