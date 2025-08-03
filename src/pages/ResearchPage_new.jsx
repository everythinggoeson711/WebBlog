import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Row, Col } from 'antd';
import AnimatedSection from '../components/AnimatedSection';
import './ResearchPage.css';

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
      title: "Machine Learning for Web Development",
      description: "Exploring AI-powered tools to enhance web development workflows and user experiences",
      category: "Machine Learning",
      status: "Ongoing",
      year: "2024"
    },
    {
      title: "Modern React Patterns", 
      description: "Research into advanced React patterns, hooks optimization, and performance improvements",
      category: "Web Development",
      status: "Completed",
      year: "2023"
    },
    {
      title: "Microservices Architecture",
      description: "Designing scalable microservices with Node.js, Docker, and Kubernetes",
      category: "Backend Architecture",
      status: "In Progress",
      year: "2024"
    },
    {
      title: "Progressive Web Apps",
      description: "Building offline-first applications with service workers and advanced caching strategies",
      category: "Mobile Development",
      status: "Completed",
      year: "2023"
    },
    {
      title: "GraphQL Federation",
      description: "Implementing distributed GraphQL schemas across multiple services",
      category: "API Design",
      status: "Research Phase",
      year: "2024"
    },
    {
      title: "Real-time Data Visualization",
      description: "Creating interactive dashboards with D3.js and real-time data streams",
      category: "Data Visualization",
      status: "Completed",
      year: "2022"
    }
  ];

  const publications = [
    {
      title: "Optimizing React Performance with Advanced Patterns",
      journal: "Web Development Journal",
      year: "2023",
      type: "Article"
    },
    {
      title: "Microservices Best Practices for Scalable Applications",
      journal: "Software Architecture Quarterly",
      year: "2024",
      type: "Research Paper"
    },
    {
      title: "The Future of Progressive Web Applications",
      journal: "Tech Innovation Review",
      year: "2023",
      type: "Article"
    }
  ];

  return (
    <div className="research-page">
      <Parallax pages={3}>
        {/* Hero Section */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        />
        <ParallaxLayer offset={0} speed={0.5} className="hero-layer">
          <animated.div ref={heroRef} style={heroAnimation} className="hero-content">
            <h1 className={styles.heroTitle}>Research & Innovation</h1>
            <p>
              Exploring cutting-edge technologies and methodologies to push the boundaries 
              of web development and software engineering.
            </p>
            <div className="research-stats">
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Research Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Publications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Years of Research</span>
              </div>
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Projects Section */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
          }}
        />
        <ParallaxLayer offset={1} speed={0.5} className="projects-layer">
          <animated.div ref={projectsRef} style={projectsAnimation} className="projects-content">
            <h2>Current Research Projects</h2>
            <div className="projects-grid">
              {researchProjects.map((project, index) => (
                <AnimatedSection key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <div className="project-card">
                    <div className="project-header">
                      <span className="project-category">{project.category}</span>
                      <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-footer">
                      <span className="project-year">{project.year}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Publications Section */}
        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
          }}
        />
        <ParallaxLayer offset={2} speed={0.5} className="publications-layer">
          <animated.div ref={publicationsRef} style={publicationsAnimation} className="publications-content">
            <Row gutter={[40, 40]} align="middle">
              <Col xs={24} md={12}>
                <div className="publications-text">
                  <h2>Publications & Articles</h2>
                  <p>
                    Sharing knowledge through technical articles and research papers 
                    that contribute to the software development community.
                  </p>
                  <div className="publications-list">
                    {publications.map((pub, index) => (
                      <AnimatedSection key={index} animationType="fadeInLeft" delay={index * 0.2}>
                        <div className="publication-item">
                          <h4>{pub.title}</h4>
                          <p className="publication-journal">{pub.journal}</p>
                          <div className="publication-meta">
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
                  <div className="publications-visual">
                    <div className="research-illustration">
                      <span className="illustration-icon">📊</span>
                      <h3>Data-Driven Research</h3>
                      <p>Using analytics and metrics to validate research findings</p>
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
