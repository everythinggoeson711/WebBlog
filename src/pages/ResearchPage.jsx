import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// eslint-disable-next-line no-unused-vars
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Row, Col } from 'antd';
import AnimatedSection from '../components/AnimatedSection';
import styles from '../assets/scss/ResearchPage.module.scss';

function ResearchPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [publicationsRef, publicationsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 180, friction: 25 }
  });

  const projectsAnimation = useSpring({
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? 'scale(1)' : 'scale(0.95)',
    config: { tension: 180, friction: 25 }
  });

  const publicationsAnimation = useSpring({
    opacity: publicationsInView ? 1 : 0,
    transform: publicationsInView ? 'translateX(0px)' : 'translateX(-30px)',
    config: { tension: 180, friction: 25 }
  });

  const researchProjects = [
    {
      title: "Real-time Object Detection with EfficientNet",
      description: "Developing a lightweight and fast object detection model for resource-constrained devices using EfficientNet backbones.",
      category: "Computer Vision",
      status: "Ongoing",
      year: "2024"
    },
    {
      title: "Generative Adversarial Networks for Image Synthesis", 
      description: "Exploring advanced GAN architectures to generate high-resolution and realistic images from text prompts.",
      category: "Generative AI",
      status: "In Progress",
      year: "2024"
    },
    {
      title: "Medical Image Segmentation with U-Net",
      description: "Applying deep learning techniques to segment tumors in medical scans, focusing on accuracy and reliability.",
      category: "Medical AI",
      status: "Completed",
      year: "2023"
    },
    {
      title: "Explainable AI for Vision Models",
      description: "Researching methods to interpret and visualize the decision-making process of complex vision models like CNNs.",
      category: "Explainable AI",
      status: "Completed",
      year: "2023"
    },
    {
      title: "3D Reconstruction from Monocular Images",
      description: "Investigating techniques to infer 3D geometry from a single 2D image using monocular depth estimation.",
      category: "3D Vision",
      status: "Ongoing",
      year: "2024"
    },
  ];

  const publications = [
    {
      title: "EfficientNet-based Architectures for Low-Latency Object Detection",
      authors: "Nghi, V., Smith, J.",
      journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
      year: "2024",
      type: "Conference Paper",
      link: "#"
    },
    {
      title: "A Novel Approach to Medical Image Segmentation using U-Net",
      authors: "Nghi, V., Lee, H., Brown, A.",
      journal: "Journal of Medical Imaging",
      year: "2023",
      type: "Journal Article",
      link: "#"
    },
    {
      title: "Interpreting Convolutional Neural Networks for Image Classification",
      authors: "Nghi, V.",
      journal: "Computer Vision and Image Understanding",
      year: "2022",
      type: "Journal Article",
      link: "#"
    }
  ];

  return (
    <div className={styles.researchPage}>
      <Parallax pages={3}>
        {/* Hero Section - Background */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={1.5}
          className={styles.backgroundLayer0}
        />
        
        {/* Hero Section - Content */}
        <ParallaxLayer offset={0} speed={0.5} className={styles.heroLayer}>
          <animated.div ref={heroRef} style={heroAnimation} className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Research & Innovation</h1>
            <p>
              Driven by a passion for Computer Vision, I conduct research on cutting-edge algorithms and architectures to solve complex problems in visual perception.
            </p>
            <div className={styles.researchStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Research Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Publications</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Years of Research</span>
              </div>
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Projects Section - Background */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          factor={1.5}
          className={styles.backgroundLayer1}
        />
        
        {/* Projects Section - Content */}
        <ParallaxLayer offset={1} speed={0.5} className={styles.projectsLayer}>
          <animated.div ref={projectsRef} style={projectsAnimation} className={styles.projectsContent}>
            <h2>Current Research Projects</h2>
            <div className={styles.projectsGrid}>
              {researchProjects.map((project, index) => (
                <AnimatedSection key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <div className={styles.projectCard}>
                    <div className={styles.projectHeader}>
                      <span className={styles.projectCategory}>{project.category}</span>
                      <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.projectFooter}>
                      <span className={styles.projectYear}>Year: {project.year}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Publications Section - Background */}
        <ParallaxLayer
          offset={2}
          speed={0.2}
          factor={1.5}
          className={styles.backgroundLayer2}
        />
        
        {/* Publications Section - Content */}
        <ParallaxLayer offset={2} speed={0.5} className={styles.publicationsLayer}>
          <animated.div ref={publicationsRef} style={publicationsAnimation} className={styles.publicationsContent}>
            <Row gutter={[40, 40]} align="middle">
              <Col xs={24} md={12}>
                <div className={styles.publicationsText}>
                  <h2>Publications & Articles</h2>
                  <p>
                    My research findings are regularly published in peer-reviewed journals and top-tier computer vision conferences.
                  </p>
                  <div className={styles.publicationsList}>
                    {publications.map((pub, index) => (
                      <AnimatedSection key={index} animationType="fadeInLeft" delay={index * 0.2}>
                        <div className={styles.publicationItem}>
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            <h4>{pub.title}</h4>
                          </a>
                          <p className="publication-authors">{pub.authors}</p>
                          <p className={styles.publicationJournal}>{pub.journal}</p>
                          <div className={styles.publicationMeta}>
                            <span className="publication-year">{pub.year}</span>
                            <span className="publication-type">{pub.type}</span>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <AnimatedSection animationType="scale" delay={0.3}>
                  <div className={styles.publicationsVisual}>
                    <div className={styles.researchIllustration}>
                      <span className={styles.illustrationIcon}>🔬</span>
                      <h3>Rigorous Research</h3>
                      <p>Focused on empirical evaluation and robust methodologies.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </Col>
            </Row>
          </animated.div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ResearchPage;