const fs = require('fs');

// Đọc file HomePage.module.scss
let content = fs.readFileSync('src/pages/HomePage.module.scss', 'utf8');

// Mapping tất cả class names còn lại trong HomePage SCSS
const additionalMappings = {
  '.social-link': '.socialLink',
  '.background-layer-0': '.backgroundLayer0',
  '.background-layer-1': '.backgroundLayer1',
  '.background-layer-2': '.backgroundLayer2', 
  '.background-layer-3': '.backgroundLayer3',
  '.background-layer-4': '.backgroundLayer4',
  '.background-layer-5': '.backgroundLayer5',
  '.about-row': '.aboutRow',
  '.about-text-col': '.aboutTextCol',
  '.about-text-content': '.aboutTextContent',
  '.about-image-col': '.aboutImageCol',
  '.about-gif-placeholder': '.aboutGifPlaceholder',
  '.gif-placeholder': '.gifPlaceholder',
  '.skills-showcase': '.skillsShowcase',
  '.project-showcase': '.projectShowcase',
  '.project-item': '.projectItem',
  '.project-placeholder': '.projectPlaceholder',
  '.experience-timeline': '.experienceTimeline',
  '.timeline-item': '.timelineItem',
  '.timeline-icon': '.timelineIcon',
  '.timeline-content': '.timelineContent',
  '.contact-social': '.contactSocial',
  '.contact-social-link': '.contactSocialLink'
};

// Thay thế tất cả class names còn lại
Object.entries(additionalMappings).forEach(([oldClass, newClass]) => {
  const regex = new RegExp(`\\${oldClass}`, 'g');
  content = content.replace(regex, newClass);
});

// Ghi lại file
fs.writeFileSync('src/pages/HomePage.module.scss', content);
console.log('Updated HomePage.module.scss completely');
