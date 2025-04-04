import React from "react";
import styles from "./Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNumpy,
  SiOpencv,
  SiJupyter,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { HiOutlineChartBar } from "react-icons/hi"; // For Seaborn


const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
  { name: "React.js", icon: <FaReact />, color: "#61dbfb" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Python", icon: <DiPython />, color: "#3776AB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },

  { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
  { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
  { name: "Matplotlib", icon: <FaChartLine />, color: "#11557c" },
  { name: "Seaborn", icon: <HiOutlineChartBar />, color: "#4c72b0" },
  { name: "Jupyter", icon: <SiJupyter />, color: "#f37626" },
  { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
];

const Skills = () => {
  return (
    <div className={styles.skillsSection} id="skill">
      <h2 className={styles.heading}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <div className={styles.icon} style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className={styles.name}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
