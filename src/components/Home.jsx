import { IoLogoGithub } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { RxLinkedinLogo } from "react-icons/rx";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web Development",
        "Frontend",
        "Backend",
        "Problem Solving",
        "Fullstack Devloper",
      ],
      typeSpeed: 65,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Clean up the effect
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className={styles.home} id="home">
        <div className={styles.left}>
          <h2>Hii There, </h2>
          <h2>
            {" "}
            i'm Kishan <span> Prajapati</span>
          </h2>
          <h3>
            I am into &nbsp;
            <span ref={typedElement} />
          </h3>

          <a
            href="/images/kishan_prajapati_resume.pdf"
            download="Kishan_Prajapati_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              About Me <FaArrowAltCircleDown />
            </button>
          </a>

          <div className={styles.social}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kiishan-prajapati?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiWYunSl9Rg6xx1FzWxhNqg%3D%3D"
            >
              <RxLinkedinLogo />
            </a>
            <a target="_blank" href="https://github.com/KishanDhaval">
              <IoLogoGithub />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src="./images/me.png" alt="self image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
