import React from 'react';
import styles from './ProjectShowcase.module.css';

const projects = [
  { title: 'Chat App', description: 'A chat application using the MERN stack.' },
  // Add more projects as needed
];

const ProjectShowcase = () => {
  return (
    <div className={styles.projectShowcaseContainer} id='projects'>
      <h2>My Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
            <div className={styles.projectCard} key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
