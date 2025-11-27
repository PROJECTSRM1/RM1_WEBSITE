import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { devOpsOverview, devOpsPractices, devOpsServices, devOpsBenefits } from '@/data/devOpsData';
import devopsPipeline from '@/assets/devops-pipeline.jpg';
import devopsInfrastructure from '@/assets/devops-infrastructure.jpg';
import './DevOps.css';
import Hero from '@/components/Hero/Hero';

const DevOps = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [practicesRef, practicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const practicesImages = [devopsPipeline, devopsInfrastructure, devopsPipeline, devopsInfrastructure];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="devops-page">
      <Navbar />

      {/* HERO */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="devops-hero"
      >
        <div className="devops-hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="devops-hero-title"
          >
            {devOpsOverview.title}
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="devops-hero-subtitle"
          >
            {devOpsOverview.description}
          </motion.p>
        </div>
      </motion.section>

      {/* INTRO */}
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
              At <strong>RM1 Coders Hub</strong>At RM1 Coders Hub, our DevOps expertise bridges the gap between development and operations, enabling faster delivery, improved collaboration, and enhanced system reliability. We implement industry best practices to automate workflows and optimize your entire software lifecycle.
            </p>
            <p className="devops-intro-text">
              From continuous integration and deployment to infrastructure automation and monitoring, our DevOps solutions help you achieve operational excellence while reducing costs and minimizing downtime.
            </p>
          </div>
        </div>
      </motion.section>

      {/* PRACTICES (UNCHANGED) */}
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

      {/* ---- SERVICES (NO ICONS, 2 PER ROW) ---- */}
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

      {/* ---- BENEFITS (NO ICONS, NO BLUE LINE) ---- */}
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
