import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, BarChart3, Bell, Wallet, Wrench, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { sdlcSteps, technicalExpertise, domainExpertise, qualityStandards, whyRMIPoints, mobileAppServices, mobileDevelopmentProcess, mobileFeatures } from '@/data/softwareDevelopmentData';
import sdlcRequirement from '@/assets/sdlc-requirement.jpg';
import sdlcDesign from '@/assets/sdlc-design.jpg';
import sdlcCoding from '@/assets/sdlc-coding.jpg';
import sdlcTesting from '@/assets/sdlc-testing.jpg';
import sdlcDeployment from '@/assets/sdlc-deployment.jpg';
import sdlcMaintenance from '@/assets/sdlc-maintenance.jpg';
import techFrontend from '@/assets/tech-frontend.jpg';
import techBackend from '@/assets/tech-backend.jpg';
import techMobile from '@/assets/tech-mobile.jpg';
import techCloud from '@/assets/tech-cloud.jpg';
import techDatabase from '@/assets/tech-database.jpg';
import techEmerging from '@/assets/tech-emerging.jpg';
import qualityCompliance from '@/assets/quality-compliance.jpg';
import whyRmi from '@/assets/why-rmi.jpg';
import customSoftware from '@/assets/custom-software.jpg';
import mobileProcess from '@/assets/mobile-process.jpg';
import enterpriseSoftware from '@/assets/enterprise-software.jpg';
import './SoftwareDevelopment.css';

const imageMap: Record<string, string> = {
  'sdlc-requirement': sdlcRequirement,
  'sdlc-design': sdlcDesign,
  'sdlc-coding': sdlcCoding,
  'sdlc-testing': sdlcTesting,
  'sdlc-deployment': sdlcDeployment,
  'sdlc-maintenance': sdlcMaintenance,
  'tech-frontend': techFrontend,
  'tech-backend': techBackend,
  'tech-mobile': techMobile,
  'tech-cloud': techCloud,
  'tech-database': techDatabase,
  'tech-emerging': techEmerging
};

const iconMap: Record<number, any> = {
  1: Zap,
  2: BarChart3,
  3: Bell,
  4: Wallet,
  5: Wrench,
  6: Package
};

const mobileTabs = [
  "Native App Development",
  "Cross-Platform App Development",
  "Enterprise Mobility Solutions",
  "UI&UX Design Prototyping",
  "App Moderization&Migration"
];

const tabDetails: Record<string, string[]> = {
  "Native App Development": [
    "We create high-performance apps designed specifically for each platform.",
    "iOS (Swift, Objective-C): Smooth, responsive, and aligned with Apple's design principles.",
    "Android (Kotlin, Java): Scalable, secure, and optimized for diverse Android devices.",
    "Native apps provide top-notch speed, security, and performance, making them ideal for feature-rich, mission-critical solutions."
  ],
  "Cross-Platform App Development": [
    "Single codebase for both Android and iOS using Flutter or React Native.",
    "Faster development cycles with reduced time-to-market.",
    "Consistent UI and user experience across platforms.",
    "Cost-effective solution without compromising on performance and quality."
  ],
 "Enterprise Mobility Solutions": [
    "Secure apps for workforce management and productivity.",
    "Integration with ERP, CRM, and HRM systems.",
    "Advanced authentication and access control for enterprises.",
    "Real-time data access and synchronization for field teams."
  ],
  "UI&UX Design Prototyping": [
    "Human-centered design approach for intuitive experiences.",
    "Wireframes, prototypes, and design systems for consistency.",
    "Focus on accessibility and seamless navigation.",
    "Interactive prototypes to validate user journeys before development."
  ],
  "App Moderization&Migration": [
    "Upgrade legacy apps to modern, scalable frameworks.",
    "Migrate apps to cloud-native environments.",
    "Optimize apps for new OS versions and devices.",
    "Improve performance, security, and maintainability of existing applications."
  ]
};

const SoftwareDevelopment = () => {
  const [activeTab, setActiveTab] = useState<string>("Native App Development");
  const [currentSlide, setCurrentSlide] = useState(0);

  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [sdlcRef, sdlcInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [techRef, techInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [domainRef, domainInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const heroSlides = [
    {
      title: "Enterprise Software Development Excellence",
      description: "Building scalable, secure, and innovative software solutions that drive digital transformation and business growth.",
      bg: customSoftware
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored applications designed specifically for your business needs, from concept to deployment and beyond.",
      bg: sdlcCoding
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      bg: techMobile
    },
    {
      title: "Cloud-Native Architecture",
      description: "Modern cloud solutions leveraging AWS, Azure, and GCP for scalability, reliability, and performance.",
      bg: techCloud
    },
    {
      title: "Agile Development Process",
      description: "Structured SDLC methodology ensuring quality delivery through iterative development and continuous improvement.",
      bg: sdlcDesign
    },
    {
      title: "Enterprise Integration Solutions",
      description: "Seamless integration with your existing systems, ERP, CRM, and third-party services for unified operations.",
      bg: enterpriseSoftware
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Slider */}
      <section className="sd-hero">
        <div className="sd-hero-slider-wrapper">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="sd-hero-slide"
              style={{ backgroundImage: `url(${slide.bg})` }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            >
              {index === currentSlide && (
                <>
                  <div className="sd-hero-overlay" />
                  <div className="container-custom sd-hero-content-wrapper">
                    <motion.div
                      className="sd-hero-content"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <motion.h1
                        className="sd-hero-title font-display"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="sd-hero-description"
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

      {/* Expertise Section */}
      <section className="sd-section">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="sd-section-title font-display">
              Software Development Expertise / Capabilities of RMI Coders
            </h2>
            <p className="sd-intro-text">
              At <strong>RMI Coders</strong>, we follow a mature and structured Software Development Life Cycle (SDLC) process that ensures every project is delivered with quality, efficiency, and precision. Our approach is a combination of industry best practices, modern methodologies, and hands-on expertise across multiple domains and technologies. RMI Coders follows a well-defined Software Development Life Cycle (SDLC) to ensure successful project execution. Our approach covers all stages of development with measurable milestones and deliverables.
            </p>
          </motion.div>
        </div>
      </section>

     {/* SDLC Framework */}
<section className="sd-section sd-bg-light">
  <div className="container-custom">

    <div className="sd-content-header">
      <h2 className="sd-section-title font-display">Strong SDLC Framework</h2>
      <p className="sd-subtitle">We adapt a phase-driven development methodology that guarantees predictable outcomes.</p>
    </div>

    <div className="sd-grid">
      {sdlcSteps.map((step) => (
        <div key={step.id} className="sd-card">
          <img
            src={imageMap[step.image]}
            alt={step.title}
            className="sd-card-image"
          />
          <h3 className="sd-card-title font-display">{step.title}</h3>

          {step.points && (
  <ul className="sd-card-list">
    {step.points.map((p, i) => (
      <li key={i}>{p}</li>
    ))}
  </ul>
)}

        </div>
      ))}
    </div>

  </div>
</section>

      {/* Technical Expertise */}
      <section className="sd-section">
        <div className="container-custom">
          <motion.div
            ref={techRef}
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sd-content-header"
          >
            <h2 className="sd-section-title font-display">Technical Expertise</h2>
            <p className="sd-subtitle">Our team excels in end-to-end software engineering with cross-platform skills:</p>
          </motion.div>

          <div className="sd-grid">
            {technicalExpertise.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="sd-card"
              >
                <img src={imageMap[tech.image]} alt={tech.title} className="sd-card-image" />
                <h3 className="sd-card-title font-display">{tech.title}</h3>
                <p className="sd-tech-text">{tech.technologies}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="sd-section sd-bg-light">
        <div className="container-custom">
          <motion.div
            ref={domainRef}
            initial={{ opacity: 0, y: 30 }}
            animate={domainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sd-content-header"
          >
            <h2 className="sd-section-title font-display">Domain Expertise</h2>
            <p className="sd-subtitle"><strong>RMI Coders</strong> have successfully built and delivered projects in multiple industries:</p>
          </motion.div>

          <div className="sd-domain-grid">
            {domainExpertise.map((domain, index) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                animate={domainInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="sd-domain-card"
              >
                <h3 className="sd-domain-title font-display">{domain.title}</h3>
                <p className="sd-domain-desc">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="sd-section">
        <div className="container-custom">
          <h2 className="sd-section-title font-display">Quality & Compliance</h2>
          <div className="sd-two-col">
            <div>
              <p className="sd-quality-intro">We ensure projects adhere to global quality and compliance standards:</p>
              <ul className="sd-list">
                {qualityStandards.map((standard, index) => (
                  <li key={index}>• {standard}</li>
                ))}
              </ul>
            </div>
            <img src={qualityCompliance} alt="Quality and Compliance" className="sd-quality-image" />
          </div>
        </div>
      </section>

      {/* Why RMI Coders */}
      <section className="sd-section sd-bg-light">
        <div className="container-custom">
          <h2 className="sd-section-title font-display">Why RMI Coders?</h2>
          <div className="sd-two-col">
            <div>
              <ul className="sd-list">
                {whyRMIPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
            <img src={whyRmi} alt="Why RMI Coders" className="sd-quality-image" />
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="sd-section">
        <div className="container-custom">
         <h2 className="sd-section-title expertise-title font-display">Our Expertise</h2>
          <h3 className="sd-subsection-title font-display">Custom Software Development</h3>
          <h4 className="sd-company-name">RMI Coders – Custom Software Development</h4>
        <div className="sd-two-col expertise-layout">

            <div>
              <p className="sd-expertise-text">
  At <b>RM1 Coders</b>, we specialize in building custom software solutions that align perfectly
  with our clients' unique business needs. With a strong SDLC foundation and a proven track
  record of delivering scalable, secure applications, we empower organizations to achieve
  digital transformation with confidence.
</p>

<p className="sd-expertise-text">
  Our team combines deep technical expertise, agile methodologies, and domain knowledge to
  deliver software that not only meets requirements but also creates long-term value.
</p>

            </div>
            <img src={customSoftware} alt="Custom Software Development" className="sd-quality-image" />
          </div>
        </div>
      </section>

      {/* Mobile App Development – UPDATED WITH TABS */}
      <section className="sd-section sd-bg-light">
        <div className="container-custom">
          <h2 className="sd-section-title font-display">Mobile App Development Services</h2>

          {/* Tab Buttons */}
          <div className="sd-tab-container">
            {mobileTabs.map((tab) => (
              <button
                key={tab}
                className={`sd-tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="sd-tab-content"
          >
            <ul className="sd-tab-list">
              {tabDetails[activeTab]?.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Mobile Development Process */}
      <section className="sd-section">
        <div className="container-custom">
          <h2 className="sd-section-title font-display">End-to-End Mobile App Development Process</h2>
          <div className="sd-two-col">
            <div>
              <ol className="sd-process-list">
                {mobileDevelopmentProcess.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            <img src={mobileProcess} alt="Mobile App Development Process" className="sd-quality-image" />
          </div>
        </div>
      </section>

      {/* Mobile Features */}
      <section className="sd-section sd-bg-light">
        <div className="container-custom">
          <h2 className="sd-section-title font-display">Key Features of Our Mobile Solutions</h2>
          <div className="sd-features-grid">
            {mobileFeatures.map((feature, index) => {
              const Icon = iconMap[index + 1] || Zap;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="sd-feature-card"
                >
                  <Icon size={32} className="sd-feature-icon" />
                  <p className="sd-feature-text">{feature}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Software */}
      <section className="sd-section">
        <div className="container-custom">
          <h2 className="sd-section-title font-display">Enterprise Software Solutions</h2>
          <div className="sd-two-col">
            <div>
              <p className="sd-enterprise-text">
                At <strong>RMI Coders</strong>, we design and deliver robust enterprise software solutions that empower organizations to streamline operations, enhance productivity, and scale efficiently. Our solutions are built to seamlessly integrate with your existing infrastructure, ensuring minimal disruption while maximizing business value. With deep expertise in system design, cloud-native development, and enterprise integrations, we provide software that supports both current needs and future growth.
              </p>
            </div>
            <img src={enterpriseSoftware} alt="Enterprise Software Solutions" className="sd-quality-image" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
