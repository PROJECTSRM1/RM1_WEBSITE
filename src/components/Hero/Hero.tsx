import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import heroBg1 from '/assets/hero-bg-1.jpg';
import heroBg2 from '/assets/hero-bg-2.jpg';
import heroBg3 from '/assets/hero-bg-3.jpg';
import heroBg4 from '/assets/hero-image5.jpg';
import heroBg5 from '/assets/hero-image6.jpg';
import heroBg6 from '/assets/hero-image7.jpg';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Smart IT Solutions For Smarter Businesses",
      description:
        "Empowering organizations worldwide with resilient strategies for proactive dominance—driving digital transformation through innovation and expert insight.",
      bg: heroBg1
    },
    {
      title: "Transform Your Business With Technology",
      description:
        "Leading the way in digital transformation with cutting-edge solutions tailored to your unique business needs and goals.",
      bg: heroBg2
    },
    {
      title: "Expert IT Services & Solutions",
      description:
        "Your trusted partner in navigating the complex world of technology with comprehensive IT services and strategic consulting.",
      bg: heroBg3
    },
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation across your enterprise.",
      bg: heroBg4,
    },
    {
      title: "Custom Web Development Services",
      description:
        "Build stunning, high-performance websites and web applications that captivate your audience and accelerate your business growth online.",
      bg: heroBg5,
    },
    {
      title: "Mobile Application Development",
      description:
        "Create powerful, intuitive mobile applications for iOS and Android that engage users and deliver seamless experiences on any device.",
      bg: heroBg6,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToConsultation = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-slider-wrapper">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.bg})` }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          >
            {index === currentSlide && (
              <>
                <div
                  className="hero-overlay"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(35, 56, 255, 0.85) 0%, rgba(35, 56, 255, 0.6) 50%, rgba(35, 56, 255, 0.75) 100%)'
                  }}
                />
                <div className="container-custom hero-content-wrapper">
                  <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <motion.h1
                      className="hero-title font-display"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className="hero-description"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      className="hero-buttons"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <Button
                        type="primary"
                        size="large"
                        className="hero-btn-primary"
                        onClick={scrollToConsultation}
                      >
                        Free Consultation
                      </Button>

                      <Button
                        size="large"
                        className="hero-btn-secondary"
                        onClick={scrollToHowItWorks}
                      >
                        How We Works
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
