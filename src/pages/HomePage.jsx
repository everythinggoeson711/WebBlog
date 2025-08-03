import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styles from './HomePage.module.scss';
import { Book, FlaskConical, Award, Users, Mail, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark the page as fully loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Animation for the main elements
  const headerSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(-50px)' },
    delay: 300,
    config: { tension: 180, friction: 12 }
  });

  const introSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'scale(1)' : 'scale(0.9)' },
    delay: 800,
    config: { tension: 180, friction: 12 }
  });

  // Function to create animation for each card
  const createCardSpring = (index) => useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(50px)' },
    delay: 1200 + (index * 150),
    config: { tension: 180, friction: 12 }
  });

  const footerSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLoaded ? 1 : 0 },
    delay: 2000,
    config: { duration: 1000 }
  });

  // List of main tabs
  const mainTabs = [
    { name: "Publications", path: "/publications", icon: <Book />, description: "Explore my academic papers and research findings." },
    { name: "Research", path: "/research", icon: <FlaskConical />, description: "View my ongoing research and scientific projects." },
    { name: "Projects", path: "/projects", icon: <Award />, description: "See the development projects and applications I've built." },
    { name: "About", path: "/about", icon: <Users />, description: "Learn more about me and my professional journey." }
  ];

  // Create animation springs for each card
  const cardSprings = mainTabs.map((_, index) => createCardSpring(index));

  // List of summary skills
  const coreSkills = ["Deep Learning", "Computer Vision", "UX/UI Design", "Data Analysis"];

  return (
    <div className={styles.homePageNew}>
      {/* Dynamic background with effects */}
      <div className={styles.dynamicBackground}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.floatingElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
        </div>
        <div className={styles.geometricShapes}>
          <div className={styles.triangle}></div>
          <div className={styles.square}></div>
          <div className={styles.hexagon}></div>
        </div>
      </div>

      {/* Main Container */}
      <div className={styles.contentWrap}>
        {/* Header */}
        <animated.header style={headerSpring} className={styles.header}>
          <div className={styles.headerLogo}>Demo</div>
          <h1 className={styles.headerTitle}>
            <span className={styles.headerGreeting}>Welcome to</span>
            <span className={styles.headerName}>Doan Vinh Nguyen's Blog</span>
          </h1>
        </animated.header>

        {/* Introduction Section */}
        <animated.section style={introSpring} className={styles.introSection}>
          <div className={styles.introCard}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatar}>DN</div>
            </div>
            <div className={styles.introContent}>
              <h2>Brief Introduction</h2>
              <p>
                Hello! I am Doan Vinh Nguyen, a passionate technologist and researcher.
                This website is where I share my knowledge, projects, and research
                in web development, AI, and data science.
              </p>
              <div className={styles.skillTags}>
                {coreSkills.map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </animated.section>

        {/* Main Tabs Section */}
        <section className={styles.navigationSection}>
          <h2 className={styles.sectionTitle}>Explore</h2>

          <div className={styles.tabCards}>
            {mainTabs.map((tab, index) => (
              <animated.div
                key={tab.name}
                style={cardSprings[index]}
                className={styles.tabCard}
              >
                <Link to={tab.path} className={styles.tabLink}>
                  <div className={styles.tabIcon}>{tab.icon}</div>
                  <div className={styles.tabInfo}>
                    <h3>{tab.name}</h3>
                    <p>{tab.description}</p>
                  </div>
                  <div className={styles.tabArrow}><ArrowRight /></div>
                </Link>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h3>Want to get in touch?</h3>
            <p>Send me a message or connect with me on social media!</p>
            <Link to="/about#contact" className={styles.ctaButton}>Contact Now</Link>
          </div>
        </section>

        {/* Footer */}
        <animated.footer style={footerSpring} className={styles.footer}>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}>
              <Github />
            </a>
            <a href="#" className={styles.socialIcon}>
              <Linkedin />
            </a>
            <a href="#" className={styles.socialIcon}>
              <Twitter />
            </a>
            <a href="mailto:example@gmail.com" className={styles.socialIcon}>
              <Mail />
            </a>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} Doan Vinh Nguyen. All rights reserved.</p>
        </animated.footer>
      </div>
    </div>
  );
};

export default HomePage;
