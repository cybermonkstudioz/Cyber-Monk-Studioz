import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaArrowRight, 
  FaArrowLeft, 
  FaLightbulb, 
  FaHandsHelping, 
  FaRocket, 
  FaHeart, 
  FaUsers, 
  FaChartLine,
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaEnvelope 
} from 'react-icons/fa';
import { FiUsers, FiLayers, FiCode, FiCheckCircle } from 'react-icons/fi';

// Import team member images
import hariImg from '../../../src/assets/images/hari.jpg';
import CircleMonk from '../../../src/assets/images/CircleMonk.png';
import aaruhyaImg from '../../../src/assets/images/aaruhya.jpg';
import ragavImg from '../../../src/assets/images/ragav.jpg';
import monickImg from '../../../src/assets/images/monick.jpg';

// Styles
const styles = {
  container: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 2rem',
    overflow: 'hidden',
  },
  section: {
    padding: '6rem 0',
    position: 'relative',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  heading2: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#1a1a1a',
    lineHeight: 1.2,
  },
  heading3: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#2d3748',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#4a5568',
    marginBottom: '1.5rem',
  },
  divider: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #1b1b1bff, #b6b4baff)',
    margin: '0 auto 2rem',
    borderRadius: '2px',
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    border: '1px solid #e2e8f0',
  },
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const stats = [
  { id: 1, value: 50, label: 'Projects Completed', icon: <FiLayers size={40} /> },
  { id: 2, value: 30, label: 'Happy Clients', icon: <FiUsers size={40} /> },
  { id: 3, value: 98, label: 'Success Rate', icon: <FiCheckCircle size={40} /> },
];

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animated Counter Component
  const Counter = ({ value, label }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      // Only start counting if the value is a number
      if (typeof value !== 'number') return;
      
      const increment = Math.max(1, Math.ceil(value / 30));
      let currentCount = 0;
      
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, 30);
      
      return () => clearInterval(timer);
    }, [value]);

    return (
      <motion.div 
        className="stat-item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
        style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          borderRadius: '12px',
          background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
          boxShadow: '5px 5px 15px #d9d9d9, -5px -5px 15px #ffffff',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        whileHover={{
          transform: 'translateY(-5px)',
          boxShadow: '8px 8px 20px #d1d1d1, -8px -8px 20px #ffffff'
        }}
      >
        <motion.div 
          className="stat-value" 
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            lineHeight: 1
          }}
        >
          {count}+
        </motion.div>
        <div className="stat-label" style={{
          fontSize: '1.1rem',
          color: '#4a5568',
          fontWeight: 500
        }}>
          {label}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="about-page" style={{
      maxWidth: '100%',
      margin: 0,
      backgroundColor: '#fff',
      color: '#333',
      overflow: 'hidden'
    }}>
      {/* Hero Section */}
      <section className="hero-section" style={{
        position: 'relative',
        padding: '8rem 2rem 6rem',
        background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              style={{ marginBottom: '3rem', textAlign: 'center' }}
            >
              <motion.span 
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  color: '#7c3aed',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  letterSpacing: '1px'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                WELCOME TO CYBER MONK STUDIOZ
              </motion.span>
              
              <motion.h1 
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  margin: '0.5rem 0 1.5rem',
                  background: 'linear-gradient(90deg, #1a1a1a, #4f46e5)', 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  maxWidth: '900px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Crafting Digital Experiences That Inspire & Transform
              </motion.h1>
              
              <motion.p 
                style={{
                  fontSize: '1.25rem',
                  lineHeight: 1.7,
                  color: '#4a5568',
                  maxWidth: '700px',
                  margin: '0 auto 2.5rem',
                  fontWeight: 400
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We're a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences that help businesses thrive in the digital landscape.
              </motion.p>
              
              <motion.div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/booking" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '0.875rem 2rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'white',
                      backgroundColor: '#4f46e5',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)'
                    }}
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '0.875rem 2rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#4f46e5',
                      backgroundColor: 'transparent',
                      border: '2px solid #4f46e5',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginTop: '4rem'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat) => (
                <Counter 
                  key={stat.id}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0) 70%)',
            zIndex: -1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-200px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(124, 58, 237, 0) 70%)',
            zIndex: -1
          }} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="about-hero" style={{
        padding: 'calc(var(--spacing-xxl) * 1.5) 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} style={{ marginBottom: 'var(--spacing-xl)' }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--spacing-sm)',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"
              }}>
                About Cyber Monk Studioz
              </h1>
              <div style={{
                width: '80px',
                height: '3px',
                backgroundColor: 'var(--color-black)',
                margin: 'var(--spacing-md) 0',
              }} />
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-xxl)',
              alignItems: 'center',
            }}>
              <motion.div variants={fadeInUp}>
                <h2 style={{
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  marginBottom: '20px',
                  lineHeight: 1.2,
                  color: '#1a1a1a',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
                  letterSpacing: '-0.02em'
                }}>
                  We believe in the power of design to transform businesses and create meaningful connections.
                </h2>
                <p style={{
                  fontSize: '20px',
                  lineHeight: 1.75,
                  color: '#4a4a4a',
                  marginBottom: '15px',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
                  maxWidth: '90%'
                }}>
                  Cyber Monk Studioz was founded with a simple mission: to create exceptional digital experiences that make a lasting impact. Our team of designers, developers, and strategists work together to bring ideas to life through thoughtful design and innovative technology.
                </p>
                <p style={{
                  fontSize: '20px',
                  lineHeight: 1.75,
                  color: '#4a4a4a',
                  marginBottom: '1.5rem',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
                  maxWidth: '90%'
                }}>
                  We take a collaborative approach to every project, working closely with our clients to understand their goals and create solutions that exceed their expectations.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                style={{
                  position: 'relative',
                  paddingBottom: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  right: '10px',
                  bottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                 <img 
                   src={CircleMonk} 
                   alt="Cybermonk" 
                   style={{ 
                     width: '100%', 
                     height: '100%', 
                     objectFit: 'contain',
                     filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
                     transition: 'all 0.3s ease',
                     borderRadius: '15px'
                   }}
                   onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                   onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                 />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '6rem 2rem',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              style={{
                textAlign: 'center',
                marginBottom: '4rem'
              }}
              variants={fadeInUp}
            >
              <motion.span 
                style={{
                  display: 'inline-block',
                  color: '#4f46e5',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}
              >
                Our Core Values
              </motion.span>
              <motion.h2 
                style={{
                  fontSize: '2.75rem',
                  fontWeight: 800,
                  margin: '0.5rem 0 1.5rem',
                  background: 'linear-gradient(90deg, #1a1a1a, #4f46e5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2
                }}
              >
                Principles That Guide Us
              </motion.h2>
              <motion.div 
                style={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
                  margin: '0 auto',
                  borderRadius: '2px'
                }}
              />
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              {[
                {
                  icon: <FaLightbulb style={{
                    fontSize: '2.5rem',
                    color: '#4f46e5',
                    marginBottom: '1.5rem'
                  }} />,
                  title: 'Innovation',
                  description: 'We embrace creativity and innovation to deliver cutting-edge solutions that stand out in the digital landscape.'
                },
                {
                  icon: <FaHandsHelping style={{
                    fontSize: '2.5rem',
                    color: '#4f46e5',
                    marginBottom: '1.5rem'
                  }} />,
                  title: 'Collaboration',
                  description: 'We believe in the power of teamwork and work closely with clients to transform their visions into reality.'
                },
                {
                  icon: <FaRocket style={{
                    fontSize: '2.5rem',
                    color: '#4f46e5',
                    marginBottom: '1.5rem'
                  }} />,
                  title: 'Excellence',
                  description: 'We pursue excellence in every project, ensuring the highest quality standards and attention to detail.'
                },
                {
                  icon: <FaHeart style={{
                    fontSize: '2.5rem',
                    color: '#4f46e5',
                    marginBottom: '1.5rem'
                  }} />,
                  title: 'Passion',
                  description: 'Our love for design and technology drives us to create exceptional digital experiences that make an impact.'
                },
                {
                  icon: <FaUsers style={{
                    fontSize: '2.5rem',
                    color: '#4f46e5',
                    marginBottom: '1.5rem'
                  }} />,
                  title: 'Integrity',
                  description: 'We conduct our business with honesty, transparency, and respect for our clients and team members.'
                },
                {
                  icon: <FaChartLine style={{
                    fontSize: '2.5rem',
                    color: '#4f46e5',
                    marginBottom: '1.5rem'
                  }} />,
                  title: 'Impact',
                  description: 'We measure our success by the positive impact we create for our clients and their businesses.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  style={{
                    backgroundColor: '#fff',
                    padding: '2.5rem 2rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                    border: '1px solid rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 1
                  }}
                  whileHover={{
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 40px rgba(79, 70, 229, 0.12)',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.03) 0%, rgba(124, 58, 237, 0.03) 100%)',
                    zIndex: -1,
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }} 
                  className="hover-bg"
                  />
                  {value.icon}
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: '#1a1a1a',
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    {value.title}
                    <span style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: 0,
                      width: '40px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
                      borderRadius: '3px',
                      transition: 'width 0.3s ease'
                    }} className="underline" />
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: '#4a5568',
                    margin: 0,
                    transition: 'color 0.3s ease'
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, rgba(79, 70, 229, 0) 70%)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 70%)',
          zIndex: 0
        }} />
      </section>

      {/* Team Section */}
      <section style={{
        padding: '6rem 2rem',
        backgroundColor: '#f8f9ff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              style={{
                textAlign: 'center',
                marginBottom: '4rem'
              }}
              variants={fadeInUp}
            >
              <motion.span 
                style={{
                  display: 'inline-block',
                  color: '#4f46e5',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}
              >
                Our Creative Minds
              </motion.span>
              <motion.h2 
                style={{
                  fontSize: '2.75rem',
                  fontWeight: 800,
                  margin: '0.5rem 0 1.5rem',
                  background: 'linear-gradient(90deg, #1a1a1a, #4f46e5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2
                }}
              >
                Meet Our Talented Team
              </motion.h2>
              <motion.div 
                style={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
                  margin: '0 auto',
                  borderRadius: '2px'
                }}
              />
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              {[
                {
                  name: 'Srihariharn',
                  role: 'Creative Director',
                  image: hariImg,
                  bio: 'Visionary leader with a passion for innovative design and user experience.',
                  social: {
                    linkedin: '#',
                    twitter: '#',
                    github: '#',
                    email: 'mailto:srihariharn@example.com'
                  }
                },
                {
                  name: 'Aaruhya Kumar',
                  role: 'Design Director',
                  image: aaruhyaImg,
                  bio: 'Creative mind with an eye for detail and a love for beautiful interfaces.',
                  social: {
                    linkedin: '#',
                    twitter: '#',
                    github: '#',
                    email: 'mailto:aaruhya@example.com'
                  }
                },
                {
                  name: 'Rahav',
                  role: 'App Developer',
                  image: ragavImg,
                  bio: 'Tech enthusiast who transforms complex ideas into seamless mobile experiences.',
                  social: {
                    linkedin: '#',
                    twitter: '#',
                    github: '#',
                    email: 'mailto:rahav@example.com'
                  }
                },
                {
                  name: 'Monick Kannan',
                  role: 'Web Developer',
                  image: monickImg,
                  bio: 'Full-stack developer with a passion for clean code and elegant solutions.',
                  social: {
                    linkedin: '#',
                    twitter: '#',
                    github: '#',
                    email: 'mailto:monick@example.com'
                  }
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    zIndex: 1
                  }}
                  whileHover={{
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '320px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                      className="team-member-image"
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1.5rem',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                      color: 'white',
                      transform: 'translateY(100%)',
                      transition: 'transform 0.3s ease',
                      textAlign: 'left'
                    }} className="member-bio">
                      <p style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        marginBottom: '1rem'
                      }}>
                        {member.bio}
                      </p>
                      <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        marginTop: '1rem'
                      }}>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" style={{
                          color: 'white',
                          fontSize: '1.1rem',
                          transition: 'color 0.2s ease',
                          ':hover': {
                            color: '#4f46e5'
                          }
                        }}>
                          <FaLinkedin />
                        </a>
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" style={{
                          color: 'white',
                          fontSize: '1.1rem',
                          transition: 'color 0.2s ease',
                          ':hover': {
                            color: '#4f46e5'
                          }
                        }}>
                          <FaTwitter />
                        </a>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" style={{
                          color: 'white',
                          fontSize: '1.1rem',
                          transition: 'color 0.2s ease',
                          ':hover': {
                            color: '#4f46e5'
                          }
                        }}>
                          <FaGithub />
                        </a>
                        <a href={member.social.email} style={{
                          color: 'white',
                          fontSize: '1.1rem',
                          transition: 'color 0.2s ease',
                          ':hover': {
                            color: '#4f46e5'
                          }
                        }}>
                          <FaEnvelope />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div style={{ 
                    padding: '1.5rem',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2,
                    backgroundColor: '#fff'
                  }}>
                    <h3 style={{
                      margin: '0 0 0.25rem',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#1a1a1a'
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: '#4f46e5',
                      margin: '0 0 1rem',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}>
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, rgba(79, 70, 229, 0) 70%)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 70%)',
          zIndex: 0
        }} />
      </section>
    </div>
  );
};

export default About;
