const fs = require('fs');

// Đọc file HomePage.jsx
let content = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');

// Mapping đầy đủ các class names cho HomePage
const classNameMappings = {
  'parallax-container': 'parallaxContainer',
  'background-layer-0': 'backgroundLayer0',
  'background-layer-1': 'backgroundLayer1', 
  'background-layer-2': 'backgroundLayer2',
  'background-layer-3': 'backgroundLayer3',
  'background-layer-4': 'backgroundLayer4',
  'background-layer-5': 'backgroundLayer5',
  'hero-text': 'heroText',
  'social-links': 'socialLinks',
  'social-link': 'socialLink',
  'hero-image': 'heroImage',
  'profile-placeholder': 'profilePlaceholder',
  'about-row': 'aboutRow',
  'about-text-col': 'aboutTextCol',
  'about-text-content': 'aboutTextContent',
  'about-image-col': 'aboutImageCol',
  'about-gif-placeholder': 'aboutGifPlaceholder',
  'gif-placeholder': 'gifPlaceholder',
  'skills-content': 'skillsContent',
  'skills-showcase': 'skillsShowcase',
  'skill-category': 'skillCategory',
  'projects-content': 'projectsContent',
  'project-showcase': 'projectShowcase',
  'project-item': 'projectItem',
  'project-placeholder': 'projectPlaceholder',
  'experience-content': 'experienceContent',
  'experience-timeline': 'experienceTimeline',
  'timeline-item': 'timelineItem',
  'timeline-icon': 'timelineIcon',
  'timeline-content': 'timelineContent',
  'contact-social': 'contactSocial',
  'contact-social-link': 'contactSocialLink'
};

// Thay thế tất cả className
Object.entries(classNameMappings).forEach(([oldClass, newClass]) => {
  const regex = new RegExp(`className="${oldClass}"`, 'g');
  content = content.replace(regex, `className={styles.${newClass}}`);
});

// Ghi lại file
fs.writeFileSync('src/pages/HomePage.jsx', content);
console.log('Updated HomePage.jsx with all CSS modules');
