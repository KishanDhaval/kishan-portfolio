// About.jsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle1}>
          <span>About Me.</span>
        </h2>
        <div className={styles.aboutPerfil}>
          <div className={styles.aboutImage}>
            <img src='./images/self.jpg' alt="About" className={styles.aboutImg} />
            <div className={styles.aboutShadow}></div>
            <div className={styles.geometricBox}></div>
            <div className={styles.aboutBox}></div>
          </div>
        </div>
        <div className={styles.aboutInfo}>
          <p className={styles.aboutDescription}>
            Passionate about creating <b>Web Pages</b> using
            <b> MERN stack</b>, like to <b>solve problem</b> as well as explore new problem.
          </p>
          <ul className={styles.aboutList}>
            <li className={styles.aboutItem}>
              <b>My Skills Are:</b> HTML, CSS, JavaScript,
              React, Git & GitHub, ExpressJs, Nodejs &
              MongoDB.
            </li>
          </ul>
          <div className={styles.aboutButtons}>
            <a href="#contact" className={styles.button}>
              <i className="ri-send-plane-line"></i> Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
