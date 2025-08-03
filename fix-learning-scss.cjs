const fs = require('fs');

const filePath = '/Users/doanvinhnguyen/WebBlog/src/pages/LearningPage.module.scss';
let content = fs.readFileSync(filePath, 'utf8');

// Add the missing CSS classes for the converted className attributes
const additionalClasses = `
// Parallax Container Classes
.parallaxContainer {
  background: $primary-bg;
}

.singleLayerBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $gradient-1;
}

// Page Header (Hero Section)
.pageHeaderSection {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.pageHeader {
  h1 {
    @include section-title;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    color: $text-secondary;
    max-width: 600px;
    margin: 0 auto;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
}

// Main Content Wrapper
.contentContainerWrapper {
  padding: 80px 0;
  background-color: $primary-bg;
  position: relative;
  z-index: 10;
}

.contentContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
}

// Courses Section
.coursesListContainer {
  text-align: center;
  margin-bottom: 80px;

  h2 {
    @include section-title;
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
}

// Course Card Elements
.courseImage {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.courseCategory {
  background: rgba($highlight-color, 0.2);
  color: $highlight-color;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.courseMeta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.metaItem {
  display: flex;
  align-items: center;
  gap: 8px;
  span {
    color: $text-secondary;
    font-size: 0.9rem;
  }
}

.icon {
  font-size: 1.2rem;
}

.courseFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.coursePrice {
  font-size: 1.5rem;
  font-weight: 700;
  color: $highlight-color;
}

.enrollBtn {
  @include button-style;
  padding: 10px 20px;
  border-radius: 25px;
  background: $gradient-1;
  color: $text-accent;
  text-decoration: none;
  font-weight: 600;
  transition: $transition-smooth;
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-medium;
    background: $gradient-2;
    color: $highlight-color;
  }
}

// Stats Section
.learningStatsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.statsBox {
  @include glassmorphism;
  padding: 40px;
  text-align: center;
  max-width: 800px;
  border-radius: 20px;
}

.statsHeader {
  margin-bottom: 30px;
  h2 {
    @include section-title;
    font-size: 2rem;
  }
}
`;

// Replace the existing similar classes to avoid duplicates
content = content.replace(/\.coursesSection \{[\s\S]*?\}/, '');
content = content.replace(/\.learning-stats-container \{[\s\S]*?\}/, '');
content = content.replace(/\.stats-box \{[\s\S]*?\}/, '');

// Add the new classes
content = content + additionalClasses;

fs.writeFileSync(filePath, content);
console.log('Updated LearningPage.module.scss with new class names');
