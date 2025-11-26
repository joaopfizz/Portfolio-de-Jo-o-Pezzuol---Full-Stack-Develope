import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaPython, FaDatabase } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'Cardápio Online',
      description: 'Full-stack restaurant menu management system with Node.js/Express REST API, React Native mobile app, and SQLite database. Features CRUD operations, real-time updates, and cross-platform mobile support.',
      tech: ['React Native', 'Node.js', 'Express', 'SQLite', 'REST API'],
      icons: [FaReact, FaNode, FaDatabase],
      github: 'https://github.com/joaopfizz',
      demo: '#',
      featured: true,
    },
    {
      title: 'Amazon Clone',
      description: 'Complete e-commerce platform replica with product catalog, shopping cart, checkout system, and order tracking. Built with vanilla JavaScript, showcasing complex state management and UI/UX design.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
      icons: [FaReact],
      github: 'https://github.com/joaopfizz',
      demo: '#',
      featured: true,
    },
    {
      title: 'AgroTech Platform',
      description: 'Modern agricultural technology platform built with React and SCSS. Features responsive design, component-based architecture, and smooth animations for agricultural data visualization.',
      tech: ['React', 'SCSS', 'Vite', 'Component Architecture'],
      icons: [FaReact],
      github: 'https://github.com/joaopfizz',
      demo: '#',
      featured: false,
    },
    {
      title: 'Spotify Data Analysis',
      description: 'Python-based data analysis tool for Spotify listening habits. Generates visualizations including popularity distributions, top artists/tracks, and word clouds from track titles using pandas and matplotlib.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
      icons: [FaPython],
      github: 'https://github.com/joaopfizz',
      demo: '#',
      featured: false,
    },
    {
      title: 'Expense Splitter',
      description: 'React application for splitting expenses among friends. Features dynamic state management, real-time calculations, and intuitive UI for managing shared costs.',
      tech: ['React', 'JavaScript', 'State Management'],
      icons: [FaReact],
      github: 'https://github.com/joaopfizz',
      demo: '#',
      featured: false,
    },
    {
      title: 'Excel & SQL Integration',
      description: 'Comprehensive Python toolkit for Excel and SQL database operations. Supports data migration, analysis, ETL processes, and works with SQLite, MySQL, and PostgreSQL.',
      tech: ['Python', 'Pandas', 'SQL', 'Excel', 'ETL'],
      icons: [FaPython, FaDatabase],
      github: 'https://github.com/joaopfizz',
      demo: '#',
      featured: false,
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">02.</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line" />
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-icons">
                  {project.icons.map((Icon, i) => (
                    <Icon key={i} className="tech-icon" />
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

