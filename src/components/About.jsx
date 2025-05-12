// About.jsx
import React from "react";
import styles from "./About.module.css";
import { TbSend2 } from "react-icons/tb";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle1}>
          <span>About Me.</span>
        </h2>
        <div className={styles.aboutPerfil}>
          <div className={styles.aboutImage}>
            <img
              src="./images/self.jpg"
              alt="About"
              className={styles.aboutImg}
            />
            <div className={styles.aboutShadow}></div>
            <div className={styles.geometricBox}></div>
            <div className={styles.aboutBox}></div>
          </div>
        </div>
        <div className={styles.aboutInfo}>
          <p className={styles.aboutDescription}>
            Passionate about creating <b>Web Pages</b> using the{" "}
            <b>MERN stack</b>, I enjoy solving problems and continuously
            exploring new technologies. I'm also actively involved in{" "}
            <b>Competitive Programming</b>
          </p>

          <ul className={styles.aboutList}>
            <li className={styles.aboutItem}>
              <b>Languages:</b> HTML, CSS, JavaScript, Java.
            </li>
            <li className={styles.aboutItem}>
              <b>Frameworks & Libraries:</b> React.js, Tailwind CSS, Express.js,
              Node.js, NumPy, OpenCV, Matplotlib.
            </li>
            <li className={styles.aboutItem}>
              <b>Databases:</b> MongoDB, MySQL.
            </li>
            <li className={styles.aboutItem}>
              <b>Tools:</b> Git, GitHub, Postman, Jupyter.
            </li>
          </ul>

          <div className={styles.aboutButtons}>
            <a href="#contact" className={styles.button}>
              <TbSend2 style={{ fontSize: "20px" }} />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
