import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaCode, 
  FaServer, 
  FaPython, 
  FaReact, 
  FaDatabase,
  FaAward,
  FaGraduationCap,
  FaTrophy,
  FaCertificate
} from 'react-icons/fa'
import { SiPhp, SiJavascript, SiNodedotjs, SiExpress } from 'react-icons/si'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const technicalSkills = [
    {
      icon: <FaReact />,
      name: 'React',
      color: '#61dafb',
    },
    {
      icon: <FaPython />,
      name: 'Python',
      color: '#3776ab',
    },
    {
      icon: <SiPhp />,
      name: 'PHP',
      color: '#777bb4',
    },
    {
      icon: <SiJavascript />,
      name: 'JavaScript',
      color: '#f7df1e',
    },
    {
      icon: <SiNodedotjs />,
      name: 'Node.js',
      color: '#339933',
    },
    {
      icon: <FaServer />,
      name: 'REST APIs',
      color: '#14b8a6',
    },
  ]

  const professionalAchievements = [
    {
      icon: <FaTrophy />,
      title: 'Food & Beverage Supervisor',
      organization: 'Renowned Toronto Hotel',
      period: '1 year 3 months',
      description: 'Led operations at one of Toronto\'s most prestigious hotels, managing high-standard customer service and operational excellence',
    },
    {
      icon: <FaAward />,
      title: 'Event Shift Supervisor',
      organization: 'Hospitality Industry, Canada',
      period: '2022',
      description: 'Rapidly promoted from entry-level to supervisory role, demonstrating exceptional leadership and management capabilities',
    },
    {
      icon: <FaCode />,
      title: 'Full-Stack Developer',
      organization: 'Professional Experience',
      period: '1+ years',
      description: 'Built scalable web applications using React, Python, and Node.js, with expertise in RESTful API design and implementation',
    },
  ]

  const academicAchievements = [
    {
      icon: <FaGraduationCap />,
      title: 'Software Engineering',
      organization: 'Current Studies',
      period: 'Ongoing',
      description: 'Pursuing Software Engineering degree, focusing on modern web development, algorithms, and software architecture',
    },
    {
      icon: <FaCertificate />,
      title: 'International Business',
      organization: 'Canada',
      period: '2022',
      description: 'Studied International Business in Canada, gaining cross-cultural experience and global business perspective',
    },
    {
      icon: <FaAward />,
      title: 'Technical Certifications',
      organization: 'Codecademy & Online Platforms',
      period: '2023-2024',
      description: 'Python Advanced & Data Science, HTML/CSS/JavaScript/PHP, and various full-stack development certifications',
    },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={itemVariants}
          >
            <p>
               I am now focused on my <strong>Software Engineering studies</strong> and 
              developing technical skills for a career in the tech industry. With <strong>1+ years of 
              professional experience</strong> in <strong>React</strong>, <strong>API development</strong>, 
              <strong>Python</strong>, and <strong>PHP</strong>, I specialize in building full-stack applications 
              with modern technologies.
            </p>
            <p>
              My technical expertise spans across <strong>React</strong> for frontend development, 
              <strong>Python</strong> and <strong>Node.js</strong> for backend services, <strong>RESTful API</strong> 
              design and implementation, and <strong>PHP</strong> for server-side development. I'm actively 
              seeking new opportunities to apply these skills in innovative projects.
            </p>
            <p>
              A professional authorized to work in both <strong>Brazil and Europe</strong>, with 
              international experience and versatility across various sectors. In 2022, I went to 
              Canada to study International Business, where I began my career in hospitality and 
              quickly got promoted to Event Shift Supervisor.
            </p>
            <p>
              Later, I was invited to work as a Food & Beverage Supervisor at one of Toronto's most 
              renowned hotels, where I stayed for <strong>1 year and 3 months</strong>, refining my 
              leadership, operational management, and high-standard customer service skills.
            </p>
            <p>
              Additionally, I have a great passion for cryptocurrency investments, always seeking new 
              opportunities and learning in the financial market.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="image-placeholder">
              <img 
                src="/joaopezzuol.jfif" 
                alt="João Pezzuol" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-fallback" style={{ display: 'none' }}>
                <FaCode />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Section */}
        <motion.div
          className="skills-section"
          variants={itemVariants}
        >
          <h3 className="subsection-title">Technical Skills</h3>
          <div className="technical-skills-grid">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="technical-skill-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div 
                  className="skill-icon-wrapper"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Achievements Section */}
        <motion.div
          className="achievements-section"
          variants={itemVariants}
        >
          <h3 className="subsection-title">Professional Achievements</h3>
          <div className="achievements-grid">
            {professionalAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(20, 184, 166, 0.2)'
                }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <div className="achievement-header">
                    <h4>{achievement.title}</h4>
                    <span className="achievement-period">{achievement.period}</span>
                  </div>
                  <p className="achievement-org">{achievement.organization}</p>
                  <p className="achievement-desc">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Achievements Section */}
        <motion.div
          className="achievements-section"
          variants={itemVariants}
        >
          <h3 className="subsection-title">Academic Achievements</h3>
          <div className="achievements-grid">
            {academicAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(20, 184, 166, 0.2)'
                }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <div className="achievement-header">
                    <h4>{achievement.title}</h4>
                    <span className="achievement-period">{achievement.period}</span>
                  </div>
                  <p className="achievement-org">{achievement.organization}</p>
                  <p className="achievement-desc">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About

