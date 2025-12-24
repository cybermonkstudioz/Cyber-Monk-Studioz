import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully!'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{
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
                Get in Touch
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
                Have a project in mind or want to discuss potential collaboration? We&apos;d love to hear from you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" style={{
        padding: 'var(--spacing-xxl) 0',
        backgroundColor: 'var(--color-white)',
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 var(--spacing-md)',
          }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: 'var(--spacing-xl)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                }}
              >
                {submitStatus ? (
                  <div style={{
                    textAlign: 'center',
                    padding: 'var(--spacing-xl) 0',
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: submitStatus.success ? 'rgba(46, 204, 113, 0.1)' : 'rgba(231, 76, 60, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--spacing-md)',
                    }}>
                      <span style={{
                        fontSize: '2.5rem',
                        color: submitStatus.success ? '#2ecc71' : '#e74c3c',
                      }}>
                        {submitStatus.success ? '✓' : '!'}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      marginBottom: 'var(--spacing-sm)',
                      color: 'var(--color-black)',
                    }}>
                      {submitStatus.success ? 'Message Sent!' : 'Something went wrong'}
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      color: 'var(--color-black)',
                      opacity: 0.8,
                      marginBottom: 'var(--spacing-xl)',
                    }}>
                      {submitStatus.message}
                    </p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      style={{
                        display: 'inline-block',
                        padding: '0.75rem 2rem',
                        backgroundColor: 'var(--color-black)',
                        color: 'var(--color-white)',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--color-black)';
                        e.currentTarget.style.border = '1px solid var(--color-black)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-black)';
                        e.currentTarget.style.color = 'var(--color-white)';
                        e.currentTarget.style.border = '1px solid var(--color-black)';
                      }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <motion.div variants={staggerContainer}>
                      <motion.div variants={fadeInUp} style={{ marginBottom: 'var(--spacing-md)' }}>
                        <label htmlFor="name" style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: 'var(--color-black)',
                        }}>
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            border: '1px solid var(--color-gray)',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            transition: 'border-color 0.3s ease',
                          }}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} style={{ marginBottom: 'var(--spacing-md)' }}>
                        <label htmlFor="email" style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: 'var(--color-black)',
                        }}>
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            border: '1px solid var(--color-gray)',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            transition: 'border-color 0.3s ease',
                          }}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <label htmlFor="message" style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: 'var(--color-black)',
                        }}>
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            border: '1px solid var(--color-gray)',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            resize: 'vertical',
                            minHeight: '150px',
                            transition: 'border-color 0.3s ease',
                          }}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp}>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          style={{
                            display: 'inline-block',
                            padding: '1rem 2.5rem',
                            backgroundColor: 'var(--color-black)',
                            color: 'var(--color-white)',
                            border: '1px solid var(--color-black)',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            opacity: isSubmitting ? 0.7 : 1,
                          }}
                          onMouseOver={(e) => {
                            if (!isSubmitting) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--color-black)';
                            }
                          }}
                          onMouseOut={(e) => {
                            if (!isSubmitting) {
                              e.currentTarget.style.backgroundColor = 'var(--color-black)';
                              e.currentTarget.style.color = 'var(--color-white)';
                            }
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </motion.div>
                    </motion.div>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section" style={{
        padding: 'var(--spacing-xxl) 0',
        backgroundColor: '#f9f9f9',
      }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-xl)',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 var(--spacing-md)',
            }}
          >
            <motion.div variants={fadeInUp}>
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: 'var(--spacing-xl)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                height: '100%',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(11, 11, 11, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>📍</span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--color-black)',
                }}>
                  Visit Us
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--color-black)',
                  opacity: 0.8,
                }}>
                  123 Studio Street<br />
                  Creative District<br />
                  City, State 10001
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: 'var(--spacing-xl)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                height: '100%',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(11, 11, 11, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>📧</span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--color-black)',
                }}>
                  Email Us
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--color-black)',
                  opacity: 0.8,
                  marginBottom: 'var(--spacing-sm)',
                }}>
                  General Inquiries:
                </p>
                <a 
                  href="mailto:hello@cybermonkstudioz.com" 
                  style={{
                    color: 'var(--color-black)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'opacity 0.3s ease',
                    display: 'inline-block',
                    marginBottom: 'var(--spacing-md)',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  hello@cybermonkstudioz.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: 'var(--spacing-xl)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                height: '100%',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(11, 11, 11, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--color-black)',
                }}>
                  Call Us
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--color-black)',
                  opacity: 0.8,
                  marginBottom: 'var(--spacing-sm)',
                }}>
                  Phone:
                </p>
                <a 
                  href="tel:+11234567890" 
                  style={{
                    color: 'var(--color-black)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'opacity 0.3s ease',
                    display: 'inline-block',
                    marginBottom: 'var(--spacing-md)',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  +1 (123) 456-7890
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;