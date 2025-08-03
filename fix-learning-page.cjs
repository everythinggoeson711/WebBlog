const fs = require('fs');

const filePath = '/Users/doanvinhnguyen/WebBlog/src/pages/LearningPage.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// List of className conversions needed
const classNameMappings = {
  'className="parallax-container"': 'className={styles.parallaxContainer}',
  'className="single-layer-background"': 'className={styles.singleLayerBackground}',
  'className="page-header-section"': 'className={styles.pageHeaderSection}',
  'className="page-header"': 'className={styles.pageHeader}',
  'className="content-container-wrapper"': 'className={styles.contentContainerWrapper}',
  'className="content-container"': 'className={styles.contentContainer}',
  'className="courses-section"': 'className={styles.coursesSection}',
  'className="courses-list-container"': 'className={styles.coursesListContainer}',
  'className="course-image"': 'className={styles.courseImage}',
  'className="course-category"': 'className={styles.courseCategory}',
  'className="course-meta"': 'className={styles.courseMeta}',
  'className="meta-item"': 'className={styles.metaItem}',
  'className="icon"': 'className={styles.icon}',
  'className="course-footer"': 'className={styles.courseFooter}',
  'className="course-price"': 'className={styles.coursePrice}',
  'className="enroll-btn"': 'className={styles.enrollBtn}',
  'className="learning-stats-container"': 'className={styles.learningStatsContainer}',
  'className="stats-box"': 'className={styles.statsBox}',
  'className="stats-header"': 'className={styles.statsHeader}'
};

// Apply all mappings
for (const [oldClass, newClass] of Object.entries(classNameMappings)) {
  content = content.replaceAll(oldClass, newClass);
}

fs.writeFileSync(filePath, content);
console.log('Updated LearningPage.jsx with CSS modules');
