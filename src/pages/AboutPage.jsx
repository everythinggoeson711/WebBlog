import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// eslint-disable-next-line no-unused-vars
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Row, Col } from 'antd';
import AnimatedSection from '../components/AnimatedSection';
import styles from './AboutPage.module.scss';
import { FaBook, FaAward, FaFlask, FaUserGraduate, FaLightbulb } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiOpencv, SiPython, SiLatex } from 'react-icons/si';

function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [publicationsRef, publicationsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 180, friction: 25 }
  });

  const skillsAnimation = useSpring({
    opacity: skillsInView ? 1 : 0,
    transform: skillsInView ? 'scale(1)' : 'scale(0.9)',
    config: { tension: 180, friction: 25 }
  });

  const experienceAnimation = useSpring({
    opacity: experienceInView ? 1 : 0,
    transform: experienceInView ? 'translateX(0px)' : 'translateX(-50px)',
    config: { tension: 180, friction: 25 }
  });
  
  const publicationsAnimation = useSpring({
    opacity: publicationsInView ? 1 : 0,
    transform: publicationsInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 180, friction: 25 }
  });

  const statsAnimation = useSpring({
    opacity: statsInView ? 1 : 0,
    transform: statsInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 180, friction: 25 }
  });

  const achievementsAnimation = useSpring({
    opacity: achievementsInView ? 1 : 0,
    transform: achievementsInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 180, friction: 25 }
  });

  const statsData = [
    { value: "15+", label: "Peer-Reviewed Papers" },
    { value: "3", label: "Conference Best Paper Awards" },
    { value: "1000+", label: "Citations" },
    { value: "10+", label: "Guided Students" }
  ];

  const publicationsData = [
    { title: "Transformers for Medical Image Segmentation", conference: "International Conference on Computer Vision (ICCV)", year: "2024" },
    { title: "Real-Time Object Detection on Edge Devices using Quantized Neural Networks", conference: "European Conference on Computer Vision (ECCV)", year: "2023" },
    { title: "Unsupervised Domain Adaptation for Semantic Segmentation", conference: "Neural Information Processing Systems (NeurIPS)", year: "2022" },
    { title: "A Novel Approach to 3D Point Cloud Registration", conference: "Conference on Computer Vision and Pattern Recognition (CVPR)", year: "2022" }
  ];

  const experienceData = [
    { year: "2022 - Present", title: "Assistant Professor", company: "University of Technology, Dept. of CS", description: "Leading the Computer Vision Research Lab, supervising Ph.D. and Master's students, and teaching graduate-level courses on Deep Learning and AI." },
    { year: "2018 - 2022", title: "Ph.D. Researcher", company: "University of Science, AI Lab", description: "Conducted research on generative models and their applications in image synthesis and domain adaptation. Published multiple papers in top-tier conferences." },
    { year: "2016 - 2018", title: "Research Assistant", company: "National Institute of AI", description: "Worked on projects related to autonomous driving perception, focusing on object detection and tracking in complex environments." },
  ];
  
  const skillsData = [
    { 
        icon: <FaFlask />, 
        title: "Research Expertise", 
        list: ["Deep Learning", "Generative AI", "Image Segmentation", "Object Detection"] 
    },
    { 
        icon: <SiPytorch />, 
        title: "Programming & Frameworks", 
        list: ["Python", "PyTorch", "TensorFlow", "OpenCV", "CUDA"] 
    },
    { 
        icon: <FaBook />, 
        title: "Academic & Tools", 
        list: ["LaTeX", "Git", "Jupyter", "W&B", "GCP/AWS"] 
    },
    { 
        icon: <FaLightbulb />, 
        title: "Specialized Topics", 
        list: ["3D Vision", "Medical Imaging", "Model Optimization", "Self-supervised Learning"] 
    },
];

const achievementsData = [
    { icon: <FaAward />, title: "Best Paper Award", organization: "ICCV 2024", year: "2024" },
    { icon: <FaAward />, title: "Outstanding Reviewer", organization: "NeurIPS", year: "2023" },
    { icon: <FaUserGraduate />, title: "Ph.D. with Distinction", organization: "University of Science", year: "2022" },
    { icon: <FaAward />, title: "Outstanding Research Award", organization: "University of Science", year: "2021" }
  ];


  return (
    <div className={styles.aboutPage}>
      <Parallax pages={4} className={styles.parallaxContainer}>
        {/* Background with animated elements */}
        <ParallaxLayer offset={0} speed={0} className={styles.backgroundLayer} factor={5}>
          <div className={styles.floatingElements}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
            <div className={styles.circle4}></div>
          </div>
        </ParallaxLayer>

        {/* Slow moving background gradient */}
        <ParallaxLayer offset={0} speed={0.2} className={styles.gradientLayer} factor={5}>
          <div className={styles.movingGradient}></div>
        </ParallaxLayer>

        {/* Tech particles floating */}
        <ParallaxLayer offset={0.3} speed={0.8} className={styles.particlesLayer}>
          <div className={styles.techParticles}>
            <SiPytorch className={styles.particle} />
            <SiTensorflow className={styles.particle} />
            <SiOpencv className={styles.particle} />
            <SiPython className={styles.particle} />
            <SiLatex className={styles.particle} />
          </div>
        </ParallaxLayer>

        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0.5} className={styles.heroLayer}>
          <Row className={styles.heroRow} align="middle">
            <Col xs={24} md={12} className={styles.heroTextCol}>
              <animated.div ref={heroRef} style={heroAnimation} className={styles.heroTextContent}>
                <h1 className={styles.heroTitle}>Ms.Name</h1>
                <p>
                  I'm a Ph.D. in Computer Science with a specialization in **Computer Vision and Deep Learning**. My research focuses on developing innovative machine learning models for real-world applications.
                </p>
                <p>
                  My work has been published in leading conferences and journals, and I am dedicated to bridging the gap between cutting-edge research and practical engineering solutions.
                </p>
              </animated.div>
            </Col>
            <Col xs={24} md={12} className={styles.heroImageCol}>
              <AnimatedSection animationType="scale" delay={0.3}>
                <div className={styles.aboutImagePlaceholder}>
                  <FaUserGraduate className={styles.imagePlaceholder} />
                </div>
              </AnimatedSection>
            </Col>
          </Row>
        </ParallaxLayer>

        {/* Floating tech icons */}
        <ParallaxLayer offset={0.8} speed={1.2} className={styles.floatingIcons}>
          <div className={styles.techIconsContainer}>
            <FaFlask className={styles.floatingIcon} />
            <FaBook className={styles.floatingIcon} />
            <FaAward className={styles.floatingIcon} />
          </div>
        </ParallaxLayer>

        {/* Skills Section */}
        <ParallaxLayer offset={1.2} speed={0.6} className={styles.skillsLayer}>
          <animated.div ref={skillsRef} style={skillsAnimation} className={styles.skillsContent}>
            <h2>Areas of Expertise</h2>
            <div className={styles.skillsGrid}>
              {skillsData.map((skill, index) => (
                <AnimatedSection key={index} animationType="fadeInUp" delay={0.1 + index * 0.1}>
                  <div className={styles.skillCategory}>
                    <div className={styles.skillIcon}>{skill.icon}</div>
                    <h3>{skill.title}</h3>
                    <div className={styles.skillsList}>
                      {skill.list.map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Moving particles between sections */}
        <ParallaxLayer offset={2.3} speed={1.5} className={styles.movingParticles}>
          <div className={styles.particlesContainer}>
            <div className={styles.movingParticle}></div>
            <div className={styles.movingParticle}></div>
            <div className={styles.movingParticle}></div>
          </div>
        </ParallaxLayer>

        {/* Achievements Section (Awards & Recognition) */}
        <ParallaxLayer offset={2.5} speed={0.4} className={styles.achievementsLayer}>
          <animated.section ref={achievementsRef} style={achievementsAnimation} className={styles.achievementsContent}>
            <h2>Awards & Recognition</h2>
            <div className={styles.achievementsGrid}>
              {achievementsData.map((achievement, index) => (
                <div key={index} className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>{achievement.icon}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.organization}</p>
                  <span className={styles.achievementYear}>{achievement.year}</span>
                </div>
              ))}
            </div>
          </animated.section>
        </ParallaxLayer>
        
        {/* Floating geometric shapes */}
        <ParallaxLayer offset={3} speed={0.9} className={styles.geometricShapes}>
          <div className={styles.shapesContainer}>
            <div className={styles.triangle}></div>
            <div className={styles.square}></div>
            <div className={styles.hexagon}></div>
          </div>
        </ParallaxLayer>

        {/* Experience Section */}
        <ParallaxLayer offset={3} speed={0.6} className={styles.experienceLayer}>
          <animated.div ref={experienceRef} style={experienceAnimation} className={styles.experienceContent}>
            <h2>Academic & Professional Journey</h2>
            <div className={styles.experienceTimeline}>
              {experienceData.map((exp, index) => (
                <AnimatedSection key={index} animationType="fadeInLeft" delay={0.1 + index * 0.1}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineYear}>{exp.year}</div>
                    <div className={styles.timelineContent}>
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                      <p className="description">{exp.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </animated.div>
        </ParallaxLayer>
        
        {/* Glowing orbs */}
        <ParallaxLayer offset={3.2} speed={1.3} className={styles.glowingOrbs}>
          <div className={styles.orbsContainer}>
            <div className={styles.orb1}></div>
            <div className={styles.orb2}></div>
          </div>
        </ParallaxLayer>

        {/* Publications Section */}
        <ParallaxLayer offset={4} speed={0.5} className={styles.publicationsLayer}>
          <animated.div ref={publicationsRef} style={publicationsAnimation} className={styles.publicationsContent}>
            <h2>Selected Publications</h2>
            <div className={styles.publicationsGrid}>
              {publicationsData.map((pub, index) => (
                <AnimatedSection key={index} animationType="fadeInUp" delay={0.1 + index * 0.1}>
                  <div className={styles.publicationItem}>
                    <div className={styles.publicationIcon}>
                      <FaBook />
                    </div>
                    <div className={styles.publicationDetails}>
                      <h4>{pub.title}</h4>
                      <p className={styles.conferenceName}>{pub.conference}</p>
                      <span className={styles.publicationYear}>{pub.year}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Final decorative layer */}
        <ParallaxLayer offset={4} speed={2} className={styles.finalDecorative}>
          <div className={styles.finalElements}>
            <div className={styles.sparkle1}></div>
            <div className={styles.sparkle2}></div>
            <div className={styles.sparkle3}></div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default AboutPage;