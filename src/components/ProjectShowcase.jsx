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
import examManagement from "../assets/Images/examManagement.png"
import knowyourown from "../assets/Images/knowyourown.png"
import postCraftAI from "../assets/Images/postCraft.png"

// importing images for basic projects
import calculator from "../assets/Images/calculator.png"
import amazon from "../assets/Images/amazon.png"
import netflix from "../assets/Images/netflix.png"
import correncyConverter from "../assets/Images/correncyConverter.png"
import ticTacToe from "../assets/Images/ticTacToe.png"
import sps from "../assets/Images/sps.png"


import { Link } from 'react-router-dom';

const baseUrl = "/kishan-portfolio/project";

import { DeployedProject, BasicProject } from '../data/projects';

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
