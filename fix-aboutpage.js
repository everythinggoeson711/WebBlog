const fs = require('fs');

// Đọc file AboutPage.jsx
let content = fs.readFileSync('src/pages/AboutPage.jsx', 'utf8');

// Mapping các class names
const classNameMappings = {
  'background-layer-1': 'backgroundLayer1',
  'background-layer-2': 'backgroundLayer2', 
  'background-layer-3': 'backgroundLayer3',
  'skills-layer': 'skillsLayer',
  'skills-content': 'skillsContent',
  'skills-grid': 'skillsGrid',
  'skill-category': 'skillCategory',
  'skill-icon': 'skillIcon',
  'skills-list': 'skillsList',
  'experience-layer': 'experienceLayer',
  'experience-content': 'experienceContent',
  'experience-timeline': 'experienceTimeline',
  'timeline-item': 'timelineItem',
  'timeline-year': 'timelineYear',
  'timeline-content': 'timelineContent',
  'testimonials-layer': 'testimonialsLayer',
  'testimonials-content': 'testimonialsContent',
  'testimonials-grid': 'testimonialsGrid',
  'testimonial-item': 'testimonialItem',
  'testimonial-text': 'testimonialText',
  'testimonial-author': 'testimonialAuthor',
  'author-avatar': 'authorAvatar',
  'author-info': 'authorInfo'
};

// Thay thế tất cả className
Object.entries(classNameMappings).forEach(([oldClass, newClass]) => {
  const regex = new RegExp(`className="${oldClass}"`, 'g');
  content = content.replace(regex, `className={styles.${newClass}}`);
});

// Ghi lại file
fs.writeFileSync('src/pages/AboutPage.jsx', content);
console.log('Updated AboutPage.jsx with CSS modules');
