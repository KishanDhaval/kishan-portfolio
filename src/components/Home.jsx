import React, { useEffect, useRef, useState } from 'react'
import styles from './Home.module.css'
import Typed from 'typed.js';

const Home = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Web Development', 'Frontend', 'Backend', 'Problem Solving', 'Fullstack Devloper'],
            typeSpeed: 65,
            loop: true
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
                    <h2> <span>i'm  Kishan</span> Prajapati</h2>
                    <h3>I am into &nbsp;
                        <span ref={typedElement} />
                    </h3>
                    {/* <a  href="assets/resume.pdf" download="Kishan's Resume" target='_blank'> */}
                        <button >About Me<i className="ri-download-fill" /></button>
                    {/* </a> */}

                    <div className={styles.social}>
                        <a target="_blank" href="https://www.linkedin.com/in/kiishan-prajapati?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiWYunSl9Rg6xx1FzWxhNqg%3D%3D" ><i className="ri-linkedin-box-fill" /></a>
                        <a target="_blank" href="https://www.instagram.com/_kiishan__/"><i className="ri-instagram-line" /></a>
                        <a target="_blank" href="https://github.com/KishanDhaval"><i className="ri-github-line" /></a>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.image}>
                        <img src="./images/me.png" alt="self image" />
                    </div>
                </div>
            </section></div>

    )
}

export default Home
