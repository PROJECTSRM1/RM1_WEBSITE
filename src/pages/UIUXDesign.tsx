import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { uiuxOverview, designProcess, designServices, designPrinciples } from '@/data/uiuxDesignData';
import uiuxDesignProcess from '/assets/uiux-design-process.jpg';
import uiuxResearch from '/assets/uiux-research.jpg';
import './UIUXDesign.css';
import { useNavigate } from 'react-router-dom';


const processImages = [uiuxResearch, uiuxDesignProcess, uiuxDesignProcess, uiuxResearch];
  
const UIUXDesign = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [introRef, introInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [principlesRef, principlesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const heroSlides = [
    {
      title: "Beautiful UI/UX Design",
      description: "Create stunning digital experiences that captivate users and drive engagement with our expert design solutions.",
      bg: uiuxDesignProcess
    },
    {
      title: "User-Centered Design",
      description: "Every pixel is crafted with your users in mind, ensuring intuitive interfaces that delight and convert.",
      bg: uiuxResearch
    },
    {
      title: "Design Systems",
      description: "Build scalable, consistent design systems that maintain brand integrity across all digital touchpoints.",
      bg: uiuxDesignProcess
    },
    {
      title: "Wireframing & Prototyping",
      description: "Transform ideas into interactive prototypes that validate concepts before final development.",
      bg: uiuxResearch
    },
    {
      title: "Visual Design Excellence",
      description: "Stunning aesthetics combined with functional design that elevates your brand and engages audiences.",
      bg: uiuxDesignProcess
    },
    {
      title: "UX Research & Testing",
      description: "Data-driven insights from user research guide every design decision for optimal user experiences.",
      bg: uiuxResearch
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
    <div className="uiux-page">
      <Navbar />

      {/* Hero Slider */}
      <section className="uiux-hero">
        <div className="uiux-hero-slider-wrapper">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="uiux-hero-slide"
              style={{ backgroundImage: `url(${slide.bg})` }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            >
              {index === currentSlide && (
                <>
                  <div className="uiux-hero-overlay" />
                  <div className="container-custom uiux-hero-content-wrapper">
                    <motion.div
                      className="uiux-hero-content"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <motion.h1
                        className="uiux-hero-title font-display"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="uiux-hero-description"
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
      <section className="uiux-intro section-padding">
        <div className="container-custom">
          <motion.div
            ref={introRef}
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="uiux-intro-content"
          >
            <p className="uiux-intro-text">
              At <strong>RM1 Coders Hub</strong>, we believe great design is more than just aesthetics—it's about creating meaningful experiences that resonate with users. Our UI/UX design team combines creativity with data-driven insights to craft interfaces that are not only beautiful but also intuitive and effective.
            </p>
            <p className="uiux-intro-text">
              From initial research and wireframing to final visual design and prototyping, we follow a user-centered approach that ensures every element serves a purpose. Our designs help businesses increase engagement, improve conversion rates, and build lasting relationships with their customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="uiux-process section-padding">
        <div className="container-custom">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display">Our Design Process</h2>

            <div className="uiux-grid">
              {designProcess.map((process, index) => (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="uiux-card"
                >
                  <div className="uiux-card-image">
                    <img src={processImages[index]} alt={process.title} />
                  </div>
                  <h3 className="uiux-card-title font-display">{process.title}</h3>
                  <p className="uiux-card-description">{process.description}</p>
                  <div className="uiux-steps">
                    {process.steps.map((step, i) => (
                      <span key={i} className="uiux-step">{step}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="uiux-services section-padding">
        <div className="container-custom">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display">Our Design Services</h2>

            <div className="uiux-services-grid">
              {designServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="uiux-service-card"
                >
                  <h3 className="uiux-service-title font-display">{service.title}</h3>
                  <p className="uiux-service-description">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="uiux-principles section-padding">
        <div className="container-custom">
          <motion.div
            ref={principlesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display">Our Design Principles</h2>

            <div className="uiux-principles-grid">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="uiux-principle-item"
                >
                  <h3 className="uiux-principle-title font-display">{principle.title}</h3>
                  <p className="uiux-principle-description">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="uiux-cta">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="uiux-cta-content"
        >
          <h2 className="uiux-cta-title font-display">Ready to Transform Your User Experience?</h2>
          <p className="uiux-cta-description">
            Let's collaborate to create beautiful, user-friendly designs that drive results.
          </p>
            <Button
  type="primary"
  size="large"
  className="uiux-cta-btn"
  onClick={() => navigate('/contact-us')}
>
  Start Your Design Project
</Button>

        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXDesign;
