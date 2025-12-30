import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { devOpsPractices, devOpsServices, devOpsBenefits } from '@/data/devOpsData';
import devopsPipeline from '/assets/devops-pipeline.jpg';
import devopsInfrastructure from '/assets/devops-infrastructure.jpg';
import devops1 from '/assets/devops1.jpg';
import devops2 from '/assets/devops2.jpg';
import './DevOps.css';

const DevOps = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [practicesRef, practicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const heroSlides = [
    {
      title: "DevOps Excellence",
      description: "Bridge the gap between development and operations with our comprehensive DevOps solutions that accelerate delivery and enhance reliability.",
      bg: devops1
    },
    {
      title: "Continuous Integration & Deployment",
      description: "Automate your software delivery pipeline with robust CI/CD solutions that ensure faster releases and higher quality code.",
      bg: devops2
    },
    {
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code, enabling consistency, scalability, and rapid deployment across environments.",
      bg: devopsInfrastructure
    },
    {
      title: "Cloud Native Solutions",
      description: "Leverage cloud technologies and containerization to build scalable, resilient applications that adapt to changing demands.",
      bg: devops1
    },
    {
      title: "Monitoring & Observability",
      description: "Gain complete visibility into your systems with comprehensive monitoring, logging, and alerting solutions for proactive issue resolution.",
      bg: devopsPipeline
    },
    {
      title: "Security & Compliance",
      description: "Integrate security practices throughout the development lifecycle with DevSecOps approaches that protect your infrastructure and data.",
      bg: devops2
    }
  ];

  const practicesImages = [
    "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    <div className="devops-page">
      <Navbar />

      <section className="devops-hero">
        <div className="devops-hero-slider-wrapper">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="devops-hero-slide"
              style={{ backgroundImage: `url(${slide.bg})` }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            >
              {index === currentSlide && (
                <>
                  <div className="devops-hero-overlay" />
                  <div className="container-custom devops-hero-content-wrapper">
                    <motion.div
                      className="devops-hero-content"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <motion.h1
                        className="devops-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="devops-hero-description"
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

      <motion.section
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding devops-intro"
      >
        <div className="container-custom">
          <div className="devops-intro-content">
            <p className="devops-intro-text">
              At <strong>RM1 Coders Hub</strong>, our DevOps expertise bridges the gap between development and operations, enabling faster delivery, improved collaboration, and enhanced system reliability. We implement industry best practices to automate workflows and optimize your entire software lifecycle.
            </p>
            <p className="devops-intro-text">
              From continuous integration and deployment to infrastructure automation and monitoring, our DevOps solutions help you achieve operational excellence while reducing costs and minimizing downtime.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={practicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: practicesInView ? 1 : 0, y: practicesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding devops-practices"
      >
        <div className="container-custom">
          <h2 className="section-title">DevOps Practices & Tools</h2>
          <div className="devops-grid">
            {devOpsPractices.map((practice, index) => (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: practicesInView ? 1 : 0, y: practicesInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="devops-card"
              >
                <div className="devops-card-image">
                  <img src={practicesImages[index]} alt={practice.title} />
                </div>

                <h3 className="devops-card-title">{practice.title}</h3>
                <p className="devops-card-description">{practice.description}</p>

                <div className="devops-tools">
                  {practice.tools.map((tool, i) => (
                    <span key={i} className="devops-tool">{tool}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding devops-services dv-no-bg"
      >
        <div className="container-custom">
          <h2 className="section-title">Our DevOps Services</h2>

          <div className="dv-cards-grid dv-cards-two">
            {devOpsServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="dv-card dv-clean-card"
              >
                <h3 className="dv-card-title">{service.title}</h3>
                <p className="dv-card-desc">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding devops-benefits dv-no-bg"
      >
        <div className="container-custom">
          <h2 className="section-title">Benefits of DevOps</h2>

          <div className="dv-cards-grid dv-cards-two">
            {devOpsBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="dv-card dv-clean-card"
              >
                <h3 className="dv-card-title">{benefit.title}</h3>
                <p className="dv-card-desc">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default DevOps;
