import React from 'react';
import styles from './Skills.module.css';

const skills = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React.js', level: 'Advanced' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Express.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
];

const projects = [
  { title: 'Chat App', description: 'A chat application using the MERN stack.' },
  // Add more projects as needed
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer} id='skill'>
      <h2>My Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
            <div className={styles.skillCard}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
        ))}
      </div>

      <h2>My Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
            <div className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
