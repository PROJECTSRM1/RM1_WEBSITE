import { useState, useEffect } from 'react';
import { Avatar, Rate } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Abdur Rashid',
    role: 'Founder & CEO',
    avatar: '👨🏽‍💼',
    rating: 5,
    comment: 'Working with Techio has been a game-changer for our business. Their team of experts delivered a custom software solution that exceeded our expectations.'
  },
  {
    id: 2,
    name: 'Alex Johnson',
    role: 'Managing Director',
    avatar: '👨‍💼',
    rating: 5,
    comment: 'Techio provided exceptional service and delivered innovative solutions. Their attention to detail and commitment to excellence is truly remarkable.'
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    role: 'Product Manager',
    avatar: '👩‍💼',
    rating: 5,
    comment: 'The team at Techio transformed our digital presence completely. Their creative approach and technical expertise helped us achieve our goals faster than expected.'
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'CTO',
    avatar: '👨‍💻',
    rating: 5,
    comment: 'Outstanding technical capabilities and professional service. Techio delivered a robust platform that scaled perfectly with our growing business needs.'
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    avatar: '👩‍💼',
    rating: 5,
    comment: 'Their innovative solutions and dedicated support team made the entire process seamless. We saw immediate improvements in our operational efficiency.'
  },
  {
    id: 6,
    name: 'David Thompson',
    role: 'Entrepreneur',
    avatar: '👨‍💼',
    rating: 5,
    comment: 'Techio exceeded all expectations with their cutting-edge technology solutions. Their team is responsive, skilled, and truly understands business needs.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.ceil(testimonialsData.length / cardsPerView) - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex * cardsPerView,
    (currentIndex * cardsPerView) + cardsPerView
  );

  return (
    <section className="testimonials section-padding">
      <div className="testimonials-bg-pattern" />
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <p className="testimonials-badge">[ TESTIMONIALS ]</p>
          <h2 className="section-title font-display">What Saying Our Customers</h2>
          <p className="testimonials-subtitle">
            Our finance specialization in helping individuals and families regain control
            of their financial future by repairing and improving their credit scores.
          </p>
        </motion.div>

        <div className="testimonials-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonials-grid"
            >
              {visibleTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <Rate disabled defaultValue={testimonial.rating} className="testimonial-rating" />
                  <p className="testimonial-comment">{testimonial.comment}</p>
                  <div className="testimonial-author">
                    <div className="avatar-emoji">{testimonial.avatar}</div>
                    <div>
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button className="testimonial-arrow testimonial-arrow-left" onClick={prevTestimonial}>
            <ChevronLeft size={24} />
          </button>
          <button className="testimonial-arrow testimonial-arrow-right" onClick={nextTestimonial}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="testimonial-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;