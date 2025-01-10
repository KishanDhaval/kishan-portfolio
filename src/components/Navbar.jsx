import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [linkClicked, setLinkClicked] = useState(false);
    const navLinks = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "skill", label: "Skill" },
        { to: "education", label: "Education" },
        { to: "projects", label: "Projects" },
        { to: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (linkClicked) return; // Skip scroll handling if a link was clicked

            const scrollPosition = window.scrollY + 150;
            let currentSection = "home";

            for (const link of navLinks) {
                const section = document.getElementById(link.to);
                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = link.to;
                }
            }

            setActiveLink(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navLinks, linkClicked]);

    const handleLinkClick = (to) => {
        setLinkClicked(true);
        setActiveLink(to);
        setToggle(false); // Close the menu when a link is clicked on mobile

        // Re-enable scroll handling after the smooth scroll animation
        setTimeout(() => {
            setLinkClicked(false);
        }, 500); // Adjust this timeout to match the duration of your smooth scroll animation
    };

    return (
        <nav className={styles.nav}>
            <h1>Kishan</h1>
            {width > 600 ? (
                <div className={styles.navPart2}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            className={`${styles.navLink} ${activeLink === link.to ? styles.active : ''}`}
                            to={link.to}
                            offset={-70} // Adjust this offset based on your navbar height
                            onClick={() => handleLinkClick(link.to)}
                        >
                            <h4>{link.label}</h4>
                        </Link>
                    ))}
                </div>
            ) : (
                <>
                    {/* <button className={`${styles.menu} ${styles.icon}`} onClick={() => setToggle(!toggle)}>
                        {toggle ? <i className="ri-close-line"></i> : <i className="ri-menu-3-line"></i>}
                    </button>
                    {toggle && (
                        <div className={styles.sideNavPart2}>
                            {navLinks.map(link => (
                                <Link
                                    key={link.to}
                                    className={`${styles.navLink} ${activeLink === link.to ? styles.active : ''}`}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70} // Adjust this offset based on your navbar height
                                    onClick={() => handleLinkClick(link.to)}
                                >
                                    <h4>{link.label}</h4>
                                </Link>
                            ))}
                        </div>
                    )} */}
                    <button className={`${styles.menu} ${styles.icon}`} onClick={() => setToggle(!toggle)}>
                        {toggle ? <i className="ri-close-line"></i> : <i className="ri-menu-3-line"></i>}
                    </button>
                   
                        <div  style={toggle ? {right:0 , opacity:1} : {right:"-85%" , opacity:0}}  className={styles.sideNavPart2}>
                            {navLinks.map(link => (
                                <Link
                                    key={link.to}
                                    className={`${styles.navLink} ${activeLink === link.to ? styles.active : ''}`}
                                    to={link.to}
                                    offset={-70} // Adjust this offset based on your navbar height
                                    onClick={() => handleLinkClick(link.to)}
                                >
                                    <h4>{link.label}</h4>
                                </Link>
                            ))}
                        </div>
                   
                </>
            )}
        </nav>
    );
};

export default Navbar;
