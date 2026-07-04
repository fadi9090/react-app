import { useState, useEffect, useMemo } from 'react';
import './skills.css';

// Static skills data (hardcoded)
const STATIC_SKILLS = [
  // Frontend Development
  { id: 1, name: 'React', category: 'frontend', proficiency: 65, icon: '⚛️' },
  { id: 2, name: 'JavaScript', category: 'frontend', proficiency: 85, icon: '🟨' },
  { id: 3, name: 'HTML5', category: 'frontend', proficiency: 95, icon: '🌐' },
  { id: 4, name: 'CSS3', category: 'frontend', proficiency: 65, icon: '🎨' },
  { id: 5, name: 'Bootstrap', category: 'frontend', proficiency: 65, icon: '💻' },
  
  // Backend Development
  { id: 6, name: 'Node.js', category: 'backend', proficiency: 80, icon: '🟢' },
  { id: 7, name: 'Python', category: 'backend', proficiency: 50, icon: '🐍' },
  { id: 8, name: 'Django', category: 'backend', proficiency: 50, icon: '🎯' },
  { id: 9, name: 'Go-Lang', category: 'backend', proficiency: 75, icon: '🐹' },
  { id: 10, name: 'Java', category: 'backend', proficiency: 60, icon: '☕' },
  { id: 11, name: 'C#', category: 'backend', proficiency: 100, icon: '🔷' },
  { id: 12, name: 'C++', category: 'backend', proficiency: 100, icon: '⚙️' },
  
  // Salesforce
  { id: 13, name: 'Salesforce Admin', category: 'salesforce', proficiency: 60, icon: '☁️' },
  { id: 14, name: 'Apex', category: 'salesforce', proficiency: 90, icon: '⚡' },
  { id: 15, name: 'LWC', category: 'salesforce', proficiency: 90, icon: '🌩️' },
  { id: 16, name: 'Aura', category: 'salesforce', proficiency: 60, icon: '🌩️' },
  { id: 17, name: 'SOQL', category: 'salesforce', proficiency: 95, icon: '🔍' },
  { id: 18, name: 'SOSL', category: 'salesforce', proficiency: 90, icon: '🔎' },
  
  // Databases
  { id: 18, name: 'PostgreSQL', category: 'database', proficiency: 75, icon: '🐘' },
  { id: 19, name: 'MySQL', category: 'database', proficiency: 60, icon: '🐬' },
  { id: 20, name: 'SQL', category: 'database', proficiency: 100, icon: '📊' },
  { id: 21, name: 'SQLite', category: 'database', proficiency: 55, icon: '🗄️' },
  
  // Tools & DevOps
  { id: 22, name: 'Git', category: 'tools', proficiency: 75, icon: '📚' },
  { id: 23, name: 'Docker', category: 'tools', proficiency: 70, icon: '🐳' },
  { id: 24, name: 'VS Code', category: 'tools', proficiency: 95, icon: '📝' },
];

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setSkills(STATIC_SKILLS);
      setLoading(false);
    }, 500);
  }, []);

  // Group skills by category
  const groupedSkills = useMemo(() => {
    if (!skills.length) return {};
    
    return skills.reduce((groups, skill) => {
      const category = skill.category || 'other';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(skill);
      return groups;
    }, {});
  }, [skills]);

  const categoryNames = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    salesforce: 'Salesforce',
    database: 'Databases',
    tools: 'Tools & DevOps',
    other: 'Skills'
  };

  // Function to determine bar color based on percentage
  const getProgressColor = (percentage) => {
    if (percentage >= 90) return 'linear-gradient(90deg, #00ff00, #3ed403)';
    if (percentage >= 70) return 'linear-gradient(90deg, #7cfc00, #3ed403)';
    if (percentage >= 50) return 'linear-gradient(90deg, #a0ff40, #7cfc00)';
    return 'linear-gradient(90deg, #c0ff80, #a0ff40)';
  };

  if (loading) {
    return (
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="loading">Loading skills...</div>
      </section>
    );
  }

  if (!skills.length) {
    return (
      <section className="skills">
        <h2>Technical Skills</h2>
        <p>No skills available. Please add skills in the admin panel.</p>
      </section>
    );
  }

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-categories">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3>{categoryNames[category] || category}</h3>
            {categorySkills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <span className="skill-icon">{skill.icon || '📌'}</span>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.proficiency}%`,
                      background: getProgressColor(skill.proficiency)
                    }}
                  >
                    {/* Show percentage inside bar for skills above 70% */}
                    {skill.proficiency >= 70 && (
                      <span className="percentage-inside">
                        {skill.proficiency}%
                      </span>
                    )}
                  </div>
                </div>
                {/* Show percentage outside for skills below 70% */}
                {skill.proficiency < 70 && (
                  <span className="skill-percentage">{skill.proficiency}%</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;