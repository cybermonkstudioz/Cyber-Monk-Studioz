import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import AnimatedBackground from '../common/AnimatedBackground';
import TawkTo from '../common/TawkTo';
import styled from 'styled-components';
import animationData from '../../assets/animations/abstract-waves.json';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  color: var(--color-black);
  padding: calc(var(--spacing-xxl) * 2) 0 var(--spacing-xxl) 0;
  z-index: 1;
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 3; /* Above the logo */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  width: 100%;
`;

const Home = () => {
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
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  return (
    <div className="home-page">
      <TawkTo />
      {/* Hero Section */}
      <HeroSection className="hero-section">
        <AnimatedBackground />
        <ContentWrapper
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
            <motion.div variants={fadeInUp} style={{ marginBottom: 'var(--spacing-lg)' }}>
              <h1 className="hero-title" style={{
                fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                lineHeight: '1.2',
                marginBottom: 'var(--spacing-md)',
                fontFamily: 'var(--font-accent)',
                fontWeight: 500,
                maxWidth: '90%',
                color: '#000000'
              }}>
            We design and build digital experiences<br />
              <span style={{
                position: 'relative',
                display: 'inline-block',
                fontFamily: 'var(--font-primary)',
                fontWeight: 500,
                fontSize: '35px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: '0.5rem',
                color: '#000000',
              }}>
                <span style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'inline-block',
                  padding: '0 0.5rem',
                  color: '#000000',
                }}>that elevate brands and drive real growth</span>
                <span style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: 0,
                  width: '100%',
                  height: '12px',
                  backgroundColor: 'rgba(11, 11, 11, 0.2)',
                  zIndex: 0,
                }} />
              </span>
            </h1>
            <p className="subtitle" style={{
              fontSize: '1.1rem',
              maxWidth: '600px',
              opacity: 0.9,
              lineHeight: 1.8,
              margin: 'var(--spacing-md) 0 var(--spacing-xl)',
              fontFamily: 'var(--font-secondary)',
              fontWeight: 500,
              color: '#000000',
            }}>
              End-to-end creative and digital solutions crafted to elevate your brand.
              <br />
              <span style={{ fontStyle: 'italic', color: '#000000' }}>Crafting digital experiences that inspire and engage.</span>
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/booking" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.8rem 2rem',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#000000',
                    backgroundColor: '#ffffff',
                    border: '2px solid #000000',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Book Now
                </motion.button>
              </Link>
              <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.8rem 2rem',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#000000',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    border: '2px solid #000000',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            variants={fadeInUp}
            style={{
              marginTop: 'var(--spacing-xxl)',
              paddingTop: 'var(--spacing-lg)',
              borderTop: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            <p style={{
              fontSize: '0.9rem',
              opacity: 0.7,
              marginBottom: 'var(--spacing-md)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 500,
            }}>What Our Clients Say</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: 'var(--spacing-md)',
            }}>
              {[
                {
                  quote: "Cyber Monk Studioz transformed our brand identity completely. Their attention to detail and creative approach was exceptional.",
                  author: "Sarah Johnson",
                  role: "CEO, TechNova"
                },
                {
                  quote: "The web design team delivered beyond our expectations. Our website traffic has increased by 150% since the redesign.",
                  author: "Michael Chen",
                  role: "Marketing Director, InnovateX"
                },
                {
                  quote: "Professional, creative, and delivered on time. The video production quality was outstanding and perfectly captured our brand's essence.",
                  author: "Emily Rodriguez",
                  role: "Founder, Bloom & Grow"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                    fontStyle: 'italic',
                    color: 'var(--color-black)',
                    fontFamily: 'var(--font-secondary)'
                  }}>"{testimonial.quote}"</div>
                  <div>
                    <div style={{
                      fontWeight: 600,
                      color: 'var(--color-black)',
                      fontFamily: 'var(--font-primary)'
                    }}>{testimonial.author}</div>
                    <div style={{
                      fontSize: '0.85rem',
                      opacity: 0.7,
                      marginTop: '0.25rem',
                      fontFamily: 'var(--font-secondary)'
                    }}>{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Logo */}
          <div style={{
            position: 'absolute',
            bottom: 'var(--spacing-xl)',
            right: 'var(--spacing-xl)',
            width: '100px',
            height: '100px',
            opacity: 0.1,
            zIndex: 1,
          }}>
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{
                width: '100%',
                height: '100%',
              }}
              onError={(e) => {
                console.error('Lottie animation error:', e);
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.textContent = 'CYBER';
                fallback.style.fontSize = '2rem';
                fallback.style.fontWeight = 'bold';
                fallback.style.color = '#333';
                e.target.parentNode.appendChild(fallback);
              }}
            />
          </div>
        </ContentWrapper>
      </HeroSection>

      {/* Animated Divider with CSS Animation */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem 0',
        padding: '2rem 0'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          background: 'linear-gradient(45deg, #f3f4f6 25%, #ffffff 50%, #f3f4f6 75%)',
          backgroundSize: '400% 400%',
          animation: 'gradientBG 8s ease infinite',
          opacity: 0.5
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <style>
            {`
              @keyframes gradientBG {
                0% { background-position: 0% 50% }
                50% { background-position: 100% 50% }
                100% { background-position: 0% 50% }
              }
            `}
          </style>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '1.8rem',
              fontWeight: 500,
              marginBottom: '1rem',
              color: 'var(--color-black)'
            }}
          >
            Crafting Digital Experiences
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--color-black)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Transforming ideas into stunning visual realities through innovative design and technology.
          </motion.p>
        </div>
      </div>

    </div>
  );
};

export default Home;
