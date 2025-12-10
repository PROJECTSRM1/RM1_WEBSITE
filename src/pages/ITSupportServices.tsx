import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Headphones, Activity, Wrench, Shield, Database, RefreshCw } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { itSupportProcess, itServices, itSupportLevels, supportFeatures, supportStandards, whyITSupportPoints } from '@/data/itSupportData';
import itHelpdesk from '@/assets/it-helpdesk.jpg';
import itMonitoring from '@/assets/it-monitoring.jpg';
import itMaintenance from '@/assets/it-maintenance.jpg';
import itSecurity from '@/assets/it-security.jpg';
import itBackup from '@/assets/it-backup.jpg';
import itUpdates from '@/assets/it-updates.jpg';
import whyChooseUsImg from '@/assets/why-choose-us.jpg';
import './ITSupportServices.css';

const imageMap: Record<string, string> = {
  'it-helpdesk': itHelpdesk,
  'it-monitoring': itMonitoring,
  'it-maintenance': itMaintenance,
  'it-security': itSecurity,
  'it-backup': itBackup,
  'it-updates': itUpdates
};

const iconMap: Record<number, any> = {
  1: Headphones,
  2: Activity,
  3: Wrench,
  4: Shield,
  5: Database,
  6: RefreshCw
};

const ITSupportServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [levelsRef, levelsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const heroSlides = [
    {
      title: "IT Support Services",
      description: "Comprehensive IT support and managed services that keep your business running smoothly 24/7 with proactive monitoring and rapid issue resolution.",
      bg: itHelpdesk
    },
    {
      title: "24/7 Helpdesk Support",
      description: "Round-the-clock technical assistance from certified IT professionals ensuring your team stays productive at all times.",
      bg: itMonitoring
    },
    {
      title: "Proactive Monitoring",
      description: "Continuous system monitoring and health checks to identify and resolve issues before they impact your business operations.",
      bg: itMaintenance
    },
    {
      title: "Infrastructure Security",
      description: "Advanced security measures and compliance protocols to protect your data and systems from evolving cyber threats.",
      bg: itSecurity
    },
    {
      title: "Data Backup & Recovery",
      description: "Automated backup solutions and disaster recovery planning to ensure your critical business data is always protected and recoverable.",
      bg: itBackup
    },
    {
      title: "System Maintenance",
      description: "Regular updates, patches, and maintenance to keep your IT infrastructure running at peak performance and security.",
      bg: itUpdates
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
    <div className="min-h-screen">
      <Navbar />
      
      <section className="it-hero">
        <div className="it-hero-slider-wrapper">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="it-hero-slide"
              style={{ backgroundImage: `url(${slide.bg})` }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            >
              {index === currentSlide && (
                <>
                  <div className="it-hero-overlay" />
                  <div className="container-custom it-hero-content-wrapper">
                    <motion.div
                      className="it-hero-content"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <motion.h1
                        className="it-hero-title font-display"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="it-hero-description"
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

      <section className="it-section">
        <div className="container-custom">
          <motion.div className="intro-wrapper"
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="it-section-title font-display">
              Comprehensive IT Support & Managed Services
            </h2>
            <p className="it-intro-text">
              At <strong>RMI Coders</strong>, we provide end-to-end IT support services that keep your business running smoothly 24/7. Our team of certified IT professionals delivers proactive monitoring, rapid issue resolution, and strategic IT guidance to ensure maximum uptime and productivity. From helpdesk support to infrastructure management, we offer flexible service models tailored to your organization's unique needs. With our managed IT services, you can focus on your core business while we handle the complexity of modern IT environments, ensuring security, reliability, and optimal performance across all your technology assets.
            </p>
          </motion.div>
        </div>
      </section>

     <section className="it-section compliance-section">
        <div className="container-custom">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="it-content-header"
          >
            <h2 className="it-section-title font-display">Our IT Support Framework</h2>
            <p className="it-subtitle">Comprehensive support covering all aspects of your IT infrastructure.</p>
          </motion.div>

          <div className="it-grid">
            {itSupportProcess.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="it-card"
              >
                <img src={imageMap[step.image]} alt={step.title} className="it-card-image" />
                <h3 className="it-card-title font-display">{step.title}</h3>
                {step.description && (
                  <p className="it-card-desc">{step.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="it-section">
        <div className="container-custom">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="it-content-header"
          >
            <h2 className="it-section-title font-display">IT Services & Capabilities</h2>
            <p className="it-subtitle">Full spectrum of IT support and managed services:</p>
          </motion.div>

          <div className="it-grid">
            {itServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="it-card"
              >
                <img src={imageMap[service.image]} alt={service.title} className="it-card-image" />
                <h3 className="it-card-title font-display">{service.title}</h3>
                <p className="it-card-tech">{service.technologies}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="it-section it-bg-light">
        <div className="container-custom">
          <motion.div
            ref={levelsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={levelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="it-content-header"
          >
            <h2 className="it-section-title font-display">Support Levels & Service Models</h2>
            <p className="it-subtitle"><strong>RMI Coders</strong> offers multi-tiered support options:</p>
          </motion.div>

          <div className="it-domain-grid">
            {itSupportLevels.map((level, index) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 30 }}
                animate={levelsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="it-domain-card"
              >
                <h3 className="it-domain-title font-display">{level.title}</h3>
                <p className="it-domain-desc">{level.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="it-section">
        <div className="container-custom">
          <h2 className="it-section-title font-display">Support Features & Benefits</h2>
          <div className="it-features-grid">
            {supportFeatures.map((feature, index) => {
              const Icon = iconMap[index + 1] || Headphones;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="it-feature-card"
                >
                  <Icon size={32} className="it-feature-icon" />
                  <p className="it-feature-text">{feature}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="it-section it-bg-light">
        <div className="container-custom">
          <h2 className="it-section-title font-display">Compliance & Standards</h2>
          <div className="it-two-col">
            <div>
              <p className="it-quality-intro">Our IT support services comply with industry standards:</p>
              <ul className="it-list">
                {supportStandards.map((standard, index) => (
                  <li key={index}>• {standard}</li>
                ))}
              </ul>
            </div>
            <img src={itSecurity} alt="IT Support Standards" className="it-quality-image" />
          </div>
        </div>
      </section>

      <section className="it-section">
        <div className="container-custom">
          <h2 className="it-section-title font-display">Why Choose RMI Coders for IT Support?</h2>
          <div className="it-two-col">
            <div>
              <ul className="it-list">
                {whyITSupportPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
            <img src={whyChooseUsImg} alt="Why RMI Coders" className="it-quality-image" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITSupportServices;
