import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'project-1.jpg',
      url: '/portfolio/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Mobile App Design',
      category: 'app',
      image: 'project-2.jpg',
      url: '/portfolio/mobile-app-design'
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'branding',
      image: 'project-3.jpg',
      url: '/portfolio/brand-identity'
    },
    {
      id: 4,
      title: 'Web Application',
      category: 'web',
      image: 'project-4.jpg',
      url: '/portfolio/web-application'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      category: 'design',
      image: 'project-5.jpg',
      url: '/portfolio/ui-ux-design'
    },
    {
      id: 6,
      title: 'Marketing Website',
      category: 'web',
      image: 'project-6.jpg',
      url: '/portfolio/marketing-website'
    },
  ];

  const categories = ['all', 'web', 'app', 'design', 'branding'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero" style={{
        padding: 'calc(var(--spacing-xxl) * 1.5) 0',
        backgroundColor: 'var(--color-white)',
        color: 'var(--color-black)',
      }}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 var(--spacing-md)',
            }}
          >
            <motion.div variants={fadeInUp}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--spacing-md)',
              }}>
                Our Work
              </h1>
              <div style={{
                width: '80px',
                height: '3px',
                backgroundColor: 'var(--color-black)',
                margin: 'var(--spacing-md) 0',
              }} />
              <p style={{
                fontSize: '1.25rem',
                maxWidth: '700px',
                opacity: 0.8,
                lineHeight: 1.7,
                marginBottom: 'var(--spacing-xxl)',
              }}>
                Explore our portfolio of selected projects we've completed for clients across various industries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid" style={{
        padding: '0 0 var(--spacing-xxl)',
        backgroundColor: 'var(--color-white)',
      }}>
        <div className="container">
          {/* Filter Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                variants={fadeInUp}
                onClick={() => setActiveFilter(category)}
                style={{
                  padding: '0.5rem 1.5rem',
                  backgroundColor: activeFilter === category ? 'var(--color-black)' : 'transparent',
                  color: activeFilter === category ? 'var(--color-white)' : 'var(--color-black)',
                  border: '1px solid var(--color-black)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
                whileHover={{
                  backgroundColor: activeFilter === category ? 'var(--color-black)' : 'rgba(0, 0, 0, 0.05)',
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: 'var(--spacing-lg)',
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  aspectRatio: '4/3',
                  backgroundColor: '#f5f5f5',
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link 
                  to={project.url}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999',
                    fontSize: '1.25rem',
                    backgroundColor: '#eee',
                  }}>
                    {project.image}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--color-white)',
                    opacity: hoveredProject === project.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    padding: 'var(--spacing-lg)',
                    textAlign: 'center',
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.25rem 1rem',
                      backgroundColor: 'var(--color-white)',
                      color: 'var(--color-black)',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      textTransform: 'capitalize',
                      marginTop: '0.5rem',
                    }}>
                      {project.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{
        padding: 'var(--spacing-xxl) 0',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: 'var(--spacing-md)',
                color: 'var(--color-black)',
              }}>
                Have a project in mind?
              </h2>
              <p style={{
                fontSize: '1.25rem',
                maxWidth: '700px',
                margin: '0 auto var(--spacing-xl)',
                opacity: 0.8,
                lineHeight: 1.7,
              }}>
                Let's collaborate to bring your ideas to life. Get in touch to discuss your project and how we can help you achieve your goals.
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  backgroundColor: 'var(--color-black)',
                  color: 'var(--color-white)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease',
                  border: '1px solid var(--color-black)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-black)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-black)';
                  e.currentTarget.style.color = 'var(--color-white)';
                }}
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
