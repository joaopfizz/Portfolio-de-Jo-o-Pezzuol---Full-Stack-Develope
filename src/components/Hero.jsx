import { motion } from 'framer-motion'
import { FaArrowDown, FaCode } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-badge"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <FaCode />
          <span>Full-Stack Developer</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          variants={itemVariants}
        >
          <span className="gradient-text">João Pezzuol</span>
          <br />
          Building Digital Experiences
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={itemVariants}
        >
          Crafting modern web applications with React, Python, and cutting-edge APIs.
          <br />
          Transforming ideas into scalable, performant solutions.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(20, 184, 166, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-scroll"
          variants={floatingVariants}
          animate="animate"
        >
          <FaArrowDown />
          <span>Scroll to explore</span>
        </motion.div>
      </motion.div>

      {/* Animated code lines background */}
      <div className="code-background">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="code-line"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: [0, 0.1, 0],
              x: [0, 300],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

