import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaReact, 
  FaPython, 
  FaNode, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNpm
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiPostgresql, SiSass, SiVite } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 90, color: '#61dafb' },
        { name: 'JavaScript', icon: FaJs, level: 85, color: '#f7df1e' },
        { name: 'HTML5', icon: FaHtml5, level: 90, color: '#e34f26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 88, color: '#1572b6' },
        { name: 'Sass', icon: SiSass, level: 80, color: '#cc6699' },
        { name: 'Vite', icon: SiVite, level: 75, color: '#646cff' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, level: 85, color: '#339933' },
        { name: 'Express', icon: SiExpress, level: 85, color: '#000000' },
        { name: 'Python', icon: FaPython, level: 88, color: '#3776ab' },
        { name: 'REST APIs', icon: FaDatabase, level: 90, color: '#14b8a6' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'SQL', icon: FaDatabase, level: 80, color: '#336791' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, level: 70, color: '#47a248' },
        { name: 'Git', icon: FaGitAlt, level: 85, color: '#f05032' },
        { name: 'GitHub', icon: FaGithub, level: 90, color: '#181717' },
        { name: 'NPM', icon: FaNpm, level: 80, color: '#cb3837' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">03.</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line" />
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <skill.icon 
                          className="skill-icon" 
                          style={{ color: skill.color }}
                        />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ 
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

