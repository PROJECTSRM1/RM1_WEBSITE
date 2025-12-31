import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { webDevelopmentOverview, webTechnologies, webServices, webBenefits } from '@/data/webDevelopmentData';
import techFrontend from '/assets/tech-frontend.jpg';
import techBackend from '/assets/tech-backend.jpg';
import techCloud from '/assets/tech-cloud.jpg';
import techDatabase from '/assets/tech-database.jpg';
import techMobile from '/assets/tech-mobile.jpg';
import './WebDevelopment.css';

const techImages = [techFrontend, techBackend, techMobile, techDatabase];

const WebDevelopment = () => {
   const navigate = useNavigate(); 
  const [currentSlide, setCurrentSlide] = useState(0);

  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [techRef, techInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const heroSlides = [
    {
      title: "Modern Web Development",
      description: "Building responsive, scalable, and high-performance web applications that transform your business ideas into reality.",
      bg: techFrontend
    },
    {
      title: "Frontend Excellence",
      description: "Create stunning user interfaces with React, Vue, and modern JavaScript frameworks that engage and delight users.",
      bg: techFrontend
    },
    {
      title: "Backend Solutions",
      description: "Robust server-side development with Node.js, Python, and scalable architectures for enterprise applications.",
      bg: techBackend
    },
    {
      title: "Mobile-First Design",
      description: "Responsive web applications optimized for every device, ensuring seamless experiences across all platforms.",
      bg: techMobile
    },
    {
      title: "Cloud Infrastructure",
      description: "Deploy and scale your applications with modern cloud platforms for maximum reliability and performance.",
      bg: techCloud
    },
    {
      title: "Database Management",
      description: "Efficient data storage and retrieval with SQL and NoSQL databases designed for your specific needs.",
      bg: techDatabase
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="web-page">
      <Navbar />

      {/* Hero Slider */}
      <section className="web-hero">
        <div className="web-hero-slider-wrapper">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="web-hero-slide"
              style={{ backgroundImage: `url(${slide.bg})` }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            >
              {index === currentSlide && (
                <>
                  <div className="web-hero-overlay" />
                  <div className="container-custom web-hero-content-wrapper">
                    <motion.div
                      className="web-hero-content"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <motion.h1
                        className="web-hero-title font-display"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="web-hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                      >
                        {slide.description}
                      </motion.p>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="web-intro section-padding">
        <div className="container-custom">
          <motion.div
            ref={introRef}
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="web-intro-content"
          >
            <p className="web-intro-text">
              At <strong>RM1 Coders Hub</strong>, we specialize in creating cutting-edge web applications that transform your business ideas into reality. Our team of expert developers leverages the latest technologies and industry best practices to deliver responsive, scalable, and high-performance web solutions.
            </p>
            <p className="web-intro-text">
              From single-page applications to complex enterprise platforms, we build web experiences that engage users, drive conversions, and help your business grow in the digital landscape. Our solutions are mobile-first, SEO-optimized, and built with security as a top priority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="web-tech section-padding">
        <div className="container-custom">
          <motion.div
            ref={techRef}
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display">Technologies We Use</h2>

            <div className="web-grid">
              {webTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={techInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="web-card"
                >
                  <div className="web-card-image">
                    <img src={techImages[index]} alt={tech.title} />
                  </div>

                  <h3 className="web-card-title font-display">{tech.title}</h3>
                  <p className="web-card-description">{tech.description}</p>

                  <div className="web-card-tech-list">
                    {tech.technologies.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="web-services section-padding">
        <div className="container-custom">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display">Our Web Development Services</h2>

            <div className="web-services-grid">
              {webServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="web-service-card"
                >
                  <h3 className="web-service-title font-display">{service.title}</h3>
                  <p className="web-service-description">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="web-benefits section-padding">
        <div className="container-custom">
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display">Why Choose Our Web Development Services</h2>

            <div className="web-benefits-grid">
              {webBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="web-benefit-item"
                >
                  <h3 className="web-benefit-title font-display">{benefit.title}</h3>
                  <p className="web-benefit-description">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="web-cta">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="web-cta-content"
        >
          <h2 className="web-cta-title font-display">Ready to Build Your Web Application?</h2>
          <p className="web-cta-description">
            Let's discuss how we can help you create a powerful web presence that drives results.
          </p>
             <Button
  type="primary"
  size="large"
  className="web-cta-btn"
  onClick={() => navigate('/contact-us')}
>
  Get Started Today
</Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
