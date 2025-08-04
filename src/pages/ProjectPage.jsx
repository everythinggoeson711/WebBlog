import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// eslint-disable-next-line no-unused-vars
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from '../assets/scss/ProjectPage.module.scss';

const ProjectPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const heroSprings = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 180, friction: 25 },
  });

  const projectsSprings = useSpring({
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 180, friction: 25 },
  });

  const skillsSprings = useSpring({
    opacity: skillsInView ? 1 : 0,
    transform: skillsInView ? 'translateX(0)' : 'translateX(-50px)',
    config: { tension: 180, friction: 25 },
  });

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      status: "Completed",
      category: "Full Stack",
      year: "2024",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
      status: "Completed", 
      category: "Frontend",
      year: "2024",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Real-time weather data visualization platform with interactive charts, forecasting, and location-based weather alerts.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      status: "In Progress",
      category: "Data Viz",
      year: "2024",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: null
    },
    {
      id: 4,
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, posts, comments, likes, and real-time notifications.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      status: "Completed",
      category: "Backend",
      year: "2023",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: null
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "Machine learning powered content generation tool with natural language processing and customizable templates.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI"],
      status: "In Progress",
      category: "AI/ML",
      year: "2024",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 6,
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto portfolio tracker with price alerts, news feed, and technical analysis tools.",
      technologies: ["React Native", "Redux", "Node.js", "WebSocket"],
      status: "Completed",
      category: "Mobile",
      year: "2023",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 7,
      title: "Personal Portfolio",
      description: "A showcase of my projects and skills, built with modern web technologies and a focus on performance.",
      technologies: ["Next.js", "SCSS", "Framer Motion", "Vercel"],
      status: "Completed",
      category: "Frontend",
      year: "2024",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 8,
      title: "Music Streaming Clone",
      description: "A front-end clone of a popular music streaming service, featuring a responsive UI and dynamic content loading.",
      technologies: ["React", "Redux", "Styled-components"],
      status: "In Progress",
      category: "Frontend",
      year: "2024",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: null
    },
    {
      id: 9,
      title: "Blog CMS",
      description: "A headless CMS for a personal blog, built with a robust backend and a simple, user-friendly interface.",
      technologies: ["Strapi", "PostgreSQL", "React", "GraphQL"],
      status: "Completed",
      category: "Full Stack",
      year: "2023",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 10,
      title: "Recipe Finder App",
      description: "An app that fetches recipes from an external API, allowing users to search, save favorites, and filter by ingredients.",
      technologies: ["Vanilla JS", "HTML", "CSS", "API"],
      status: "Completed",
      category: "Frontend",
      year: "2022",
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const techStack = {
    "Frontend": ["React", "Vue.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "Python", "FastAPI", "PHP", "Laravel", "Socket.io"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    "DevOps & Cloud": ["Docker", "AWS", "Nginx", "Vercel", "GitHub Actions"],
    "Mobile": ["React Native", "Flutter", "Expo"],
    "Tools": ["Git", "Figma", "Postman", "VS Code", "Webpack", "Vite", "GraphQL"]
  };

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile", "Data Viz", "AI/ML"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
    

  return (
    <div className={styles.projectPage}>
      <Parallax pages={4} className={styles.parallaxContainer}>
        {/* Background Layers for parallax effect */}
        <ParallaxLayer offset={0} speed={0.1} factor={1.5} className={styles.backgroundLayer0} />
        <ParallaxLayer offset={1} speed={0.1} factor={1.5} className={styles.backgroundLayer1} />
        <ParallaxLayer offset={2.5} speed={0.1} factor={1.5} className={styles.backgroundLayer2} />

        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0.5} className={styles.heroLayer}>
          <div className={styles.heroContent}>
            <animated.div ref={heroRef} style={heroSprings}>
              <h1 className={styles.heroTitle}>My Projects</h1>
              <p className={styles.heroSubtitle}>
                Explore a collection of my work spanning full-stack applications, 
                mobile apps, and cutting-edge technologies
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Featured Projects</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Technologies Used</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
              </div>
            </animated.div>
          </div>
        </ParallaxLayer>

        {/* Filter and Projects Grid Section */}
        <ParallaxLayer offset={1} speed={0.6} className={styles.projectsContainerWrapper}>
          <animated.div 
            ref={projectsRef}
            style={projectsSprings}
            className={styles.projectsContent}
          >
            <div className={styles.filterContainer}>
              <h2 className={styles.sectionTitle}>Filter by Category</h2>
              <div className={styles.categoryFilters}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                    <div className={styles.projectOverlay}>
                      <div className={styles.projectLinks}>
                        {project.github && (
                          <a href={project.github} className={styles.projectLink}>
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} className={styles.projectLink}>
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <div className={styles.projectMeta}>
                        <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
                          {project.status}
                        </span>
                        <span className={styles.yearBadge}>{project.year}</span>
                      </div>
                    </div>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectTechnologies}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Tech Stack Section */}
        <ParallaxLayer offset={3} speed={0.4} className={styles.skillsLayer}>
          <animated.div 
            ref={skillsRef}
            style={skillsSprings}
            className={styles.skillsContainer}
          >
            <h2 className={styles.sectionTitle}>Technologies & Tools</h2>
            <div className={styles.techStackGrid}>
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category} className={styles.techCategory}>
                  <h3 className={styles.techCategoryTitle}>{category}</h3>
                  <div className={styles.techList}>
                    {technologies.map((tech, index) => (
                      <span key={index} className={styles.techItem}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.skillsFooter}>
              <p className={styles.skillsDescription}>
                Continuously learning and adapting to new technologies. 
                Always excited to explore emerging frameworks and tools.
              </p>
              <a href="#contact" className={styles.contactButton}>
                Let's Work Together
              </a>
            </div>
          </animated.div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ProjectPage