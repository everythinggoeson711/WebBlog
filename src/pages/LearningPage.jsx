import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from './LearningPage.module.scss';
import { FaGraduationCap, FaChalkboardTeacher, FaStar, FaClock } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiOpencv, SiPython } from 'react-icons/si';

// Component for a single course card
const CourseCard = ({ item }) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseImage} style={{ backgroundImage: `url(${item.image})` }}></div>
      <div className={styles.courseInfo}>
        <div className={styles.courseHeader}>
          <span className={styles.courseCategory}>{item.category}</span>
        </div>
        <h3>{item.title}</h3>
        <p className={styles.courseDescription}>{item.description}</p>
        <div className={styles.courseMeta}>
          <div className={styles.metaItem}>
            <FaGraduationCap className={styles.icon} />
            <span>{item.lessons} Lectures</span>
          </div>
          <div className={styles.metaItem}>
            <FaClock className={styles.icon} />
            <span>{item.duration}</span>
          </div>
        </div>
        <div className={styles.courseFooter}>
          <span className={styles.coursePrice}>{item.price}</span>
          <a href="#!" className={styles.enrollBtn}>Access Course</a>
        </div>
      </div>
    </div>
  );
};

const LearningPage = () => {
  // Multiple useInView hooks for different sections
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [coursesRef, coursesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.4 });

  // Animation springs for different sections
  const heroSprings = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 180, friction: 25 },
  });

  const statsSprings = useSpring({
    opacity: statsInView ? 1 : 0,
    transform: statsInView ? 'scale(1)' : 'scale(0.9)',
    config: { tension: 200, friction: 20 },
  });
  
  const ctaSprings = useSpring({
    opacity: ctaInView ? 1 : 0,
    transform: ctaInView ? 'translateX(0)' : 'translateX(-50px)',
    config: { tension: 180, friction: 25 },
  });

  // Simple animation for courses without mapping useSpring
  const coursesSpring = useSpring({
    opacity: coursesInView ? 1 : 0,
    transform: coursesInView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 150, friction: 20 }
  });

  const learningItems = [
    {
      title: "Deep Learning for Computer Vision",
      category: "Foundation",
      description: "Master the fundamentals of CNNs, RNNs, and Transformers for image classification, segmentation, and object detection.",
      lessons: 60,
      duration: "35h 20m",
      price: "$199",
      image: "https://images.unsplash.com/photo-1516053359654-e0b6861ae619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMG1hY2hpbmUlMjBsZWFybmluZyUyMHByb2dyYW1taW5nfGVufDB8fHx8MTcyMjU5ODY5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Advanced Object Detection with YOLOv8",
      category: "Application",
      description: "A deep dive into the latest YOLO models, covering architecture, training, and deployment for real-time applications.",
      lessons: 45,
      duration: "22h 45m",
      price: "$149",
      image: "https://images.unsplash.com/photo-1581457319918-055726210f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b2xvJTIwZGV0ZWN0aW9uJTIwdHJhaW5pbmd8ZW58MHx8fHwxNzIyNTk4Njk3fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Image Segmentation & Medical Imaging",
      category: "Specialization",
      description: "Learn U-Net, Mask R-CNN, and other segmentation techniques, with a focus on biomedical and medical image analysis.",
      lessons: 50,
      duration: "28h 10m",
      price: "$179",
      image: "https://images.unsplash.com/photo-1629851603597-ec4b370e4e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMHNlZ21lbnRhdGlvbnxlbnwwfHx8fDE3MjI1OTg2OTd8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Generative AI: GANs & Diffusion Models",
      category: "Emerging Tech",
      description: "Explore the theory and implementation of Generative Adversarial Networks (GANs) and modern Diffusion models for creative applications.",
      lessons: 40,
      duration: "20h 00m",
      price: "$169",
      image: "https://images.unsplash.com/photo-1621243884877-2e1d03c0b329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHQU5zJTIwZGlmZnVzaW9uJTIwbW9kZWxzfGVufDB8fHx8MTcyMjU5ODY5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "3D Computer Vision & Point Clouds",
      category: "Advanced Topics",
      description: "Introduction to 3D reconstruction, LiDAR data processing, and point cloud analysis using deep learning.",
      lessons: 35,
      duration: "18h 30m",
      price: "$159",
      image: "https://images.unsplash.com/photo-1623912952899-798889988295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMGNvbXB1dGVyJTIwdmlzaW9uJTIwcG9pbnQlMjBjbG91ZHN8ZW58MHx8fHwxNzIyNTk4Njk3fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Optimizing Models for Edge Devices",
      category: "Deployment",
      description: "Learn techniques for model quantization, pruning, and hardware acceleration to deploy CV models on embedded systems.",
      lessons: 30,
      duration: "15h 10m",
      price: "$129",
      image: "https://images.unsplash.com/photo-1601004314488-84226d7f02d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXMlMjBjb21wdXRlciUyMHZpc2lvbnxlbnwwfHx8fDE3MjI1OTg2OTd8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
  ];

  return (
    <div className={styles.learningPage}>
      <Parallax pages={3} className={styles.parallaxContainer}>
        {/* Background with animated elements */}
        <ParallaxLayer offset={0} speed={0} className={styles.backgroundLayer} factor={5}>
          <div className={styles.floatingElements}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
          </div>
        </ParallaxLayer>

        {/* Slow moving background gradient */}
        <ParallaxLayer offset={0} speed={0.2} className={styles.gradientLayer} factor={5}>
          <div className={styles.movingGradient}></div>
        </ParallaxLayer>

        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0.5} className={styles.heroLayer}>
          <animated.div 
            ref={heroRef}
            style={heroSprings}
            className={styles.pageHeaderSection}
          >
            <div className={styles.pageHeader}>
              <h1 className={styles.heroTitle}>Advanced Computer Vision Courses</h1>
              <p>Curated by Dr. [Your Name], these courses provide a rigorous, research-oriented approach to mastering cutting-edge CV technologies.</p>
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Floating Tech Icons */}
        <ParallaxLayer offset={0.5} speed={0.8} className={styles.iconsLayer}>
          <div className={styles.techIcons}>
            <SiPytorch className={styles.techIcon} style={{ color: '#EE4C2C' }} />
            <SiTensorflow className={styles.techIcon} style={{ color: '#FF6F00' }} />
            <SiOpencv className={styles.techIcon} style={{ color: '#5C3EE8' }} />
            <SiPython className={styles.techIcon} style={{ color: '#3776AB' }} />
          </div>
        </ParallaxLayer>

        {/* Courses Section */}
        <ParallaxLayer offset={1} speed={0.6} className={styles.contentLayer}>
          <div className={styles.contentContainer}>
            <animated.section 
              ref={coursesRef}
              style={coursesSpring}
              className={styles.coursesSection}
            >
              <div className={styles.coursesListContainer}>
                <h2>Specialized Curriculum</h2>
                <div className={styles.coursesGrid}>
                  {learningItems.map((item, index) => (
                    <div key={index} className={styles.courseCardWrapper}>
                      <CourseCard item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </animated.section>
          </div>
        </ParallaxLayer>

        {/* Particles Layer */}
        <ParallaxLayer offset={1.8} speed={1.2} className={styles.particlesLayer}>
          <div className={styles.particles}>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
          </div>
        </ParallaxLayer>
        
        {/* Stats Section */}
        <ParallaxLayer offset={1.9} speed={0.4} className={styles.contentLayer}>
          <div className={styles.learningStatsContainer}>
            <animated.div 
              ref={statsRef}
              style={statsSprings}
              className={styles.statsBox}
            >
              <div className={styles.statsHeader}>
                <h2>Research & Teaching Impact</h2>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <h3>8+</h3>
                  <p>Peer-Reviewed Publications</p>
                </div>
                <div className={styles.statItem}>
                  <h3>200+</h3>
                  <p>Ph.D. & Master's Students</p>
                </div>
                <div className={styles.statItem}>
                  <h3>4.95/5</h3>
                  <p>Course Satisfaction Score</p>
                </div>
                <div className={styles.statItem}>
                  <h3>120+</h3>
                  <p>Hours of Expert Content</p>
                </div>
              </div>
            </animated.div>
          </div>
        </ParallaxLayer>
        
        {/* Call to Action Section */}
        <ParallaxLayer offset={2} speed={0.6} className={styles.contentLayer}>
          <div className={styles.ctaContainer}>
            <animated.div 
              ref={ctaRef}
              style={ctaSprings}
              className={styles.ctaBox}
            >
              <h2>Ready to Advance Your Career?</h2>
              <p>Enroll today to gain the knowledge and skills needed to become a leader in the field of Computer Vision.</p>
              <a href="#!" className={styles.ctaBtn}>Explore All Courses</a>
            </animated.div>
          </div>
        </ParallaxLayer>

        {/* Final floating elements */}
        <ParallaxLayer offset={2} speed={1.5} className={styles.finalLayer}>
          <div className={styles.finalElements}>
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default LearningPage;