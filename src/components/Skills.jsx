import React from 'react';
import styles from './Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress,SiTailwindcss  } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Java', icon: <FaJava  /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer} id="skill">
      <h2>My Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.name}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
