import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import styles from './Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
];

const getRandomPosition = (existingPositions) => {
  let attempts = 0;
  let newPos;
  const minDistance = 100; // Minimum pixel distance

  do {
    newPos = {
      x: Math.random() * (window.innerWidth - 150), // Ensure it stays within the screen width
      y: Math.random() * (window.innerHeight - 150), // Ensure it stays within the screen height
    };
    attempts++;
    if (attempts > 100) break; // Avoid infinite loop
  } while (
    existingPositions.some(
      pos => Math.abs(pos.x - newPos.x) < minDistance && Math.abs(pos.y - newPos.y) < minDistance
    )
  );

  return newPos;
};

const Skills = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newPositions = [];
    skills.forEach(() => {
      newPositions.push(getRandomPosition(newPositions));
    });
    setPositions(newPositions);
  }, []);

  return (
    <div className={styles.skillsContainer} id="skill">
      <h2>My Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <Draggable key={skill.name} defaultPosition={positions[index]}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Skills;
