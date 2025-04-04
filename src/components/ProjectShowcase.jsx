import React from 'react';
import styles from './ProjectShowcase.module.css';
import bhagvatGita from "../assets/Images/bhagvatGita.png"


// importing images for deployed projects
import productivityTracker from "../assets/Images/productivityTracker.png"
import devplatform from "../assets/Images/devplatform.png"
import whether from "../assets/Images/whether.png"
import eCommerce from "../assets/Images/eCommerce.png"
import Collabe from "../assets/Images/Collabe.png"
import chatApp from "../assets/Images/chatApp.png"
import spliter from "../assets/Images/spliter.png"

// importing images for basic projects
import calculator from "../assets/Images/calculator.png"
import amazon from "../assets/Images/amazon.png"
import netflix from "../assets/Images/netflix.png"
import correncyConverter from "../assets/Images/correncyConverter.png"
import ticTacToe from "../assets/Images/ticTacToe.png"
import sps from "../assets/Images/sps.png"


import { Link } from 'react-router-dom';

const baseUrl = "/kishan-portfolio/project";

const DeployedProject = [
  {
    title: 'DevsPlatform',
    description: 'A web development learning and showcase platform where users complete frontend challenges and submit components.',
    image: devplatform,
    link: 'https://devplatform-xrdz.onrender.com/',
  },
  {
    title: 'Spliter',
    description: 'A Splitwise-like expense tracking application that helps users split and manage shared expenses effortlessly.',
    image: spliter,
    link: 'https://spliter-cf6o.onrender.com/',
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
    link: 'https://real-time-chat-application-4s2c.onrender.com/',
  },
  {
    title: 'Real-Time Collab Tool',
    description: 'A collaborative application allowing multiple users to edit documents in real time, similar to Google Docs.',
    image: Collabe,
    link: 'https://real-time-collaboration-tool-mqya.onrender.com/',
  },
  {
    title: 'Productivity Extension',
    description: 'A browser extension to enhance productivity by tracking tasks, helps to limiting distractions, and optimizing workflow.',
    image: productivityTracker,
    link: 'https://github.com/KishanDhaval/Productivity-Extention',
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
];

const BasicProject = [
  {
    title: 'Stone Paper Scissors',
    description: 'A fun game where users can play Stone Paper Scissors against the computer.',
    image: sps,
    link: `${baseUrl}/stone_peper_scisor`,
  },
  {
    title: 'Tic Tac Toe',
    description: 'A classic Tic Tac Toe game where users can play against the computer or another player.',
    image: ticTacToe,
    link: `${baseUrl}/tic_tac_toe`,
  },
  {
    title: 'Currency Converter',
    description: 'An application that converts currencies based on real-time exchange rates.',
    image: correncyConverter,
    link: `${baseUrl}/coorrency_convertor`,
  },
  {
    title: 'Calculator',
    description: 'A simple calculator application that performs basic arithmetic operations.',
    image: calculator,
    link: `${baseUrl}/calculator`,
  },
  
  
  {
    title: 'Amazon Clone',
    description: 'A static page mimicking the Amazon website layout and design.',
    image: amazon,
    link: `${baseUrl}/amozon_clone`,
  },
  {
    title: 'Netflix Clone',
    description: 'A static page mimicking the Netflix website layout and design.',
    image: netflix,
    link: `${baseUrl}/netflix_clone`,
  },
];

const ProjectShowcase = () => {
  return (
    <div className={styles.projectShowcaseContainer} id="projects">
      <h2>Projects</h2>
      <div className={styles.projects}>
        {DeployedProject.map((project) => (
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


      <h2>Basic Projects</h2>
      <div className={styles.projects}>
        {BasicProject.map((project) => (
          <Link to={project.link} key={project.title} className={styles.projectCard}>
            <div className={styles.cardImage} style={{ backgroundImage: `url(${project.image})` }}>
              <div className={styles.cardOverlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
