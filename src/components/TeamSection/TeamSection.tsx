import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./TeamSection.css";

const TeamSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // Update arrow visibility based on scroll position
  const updateArrows = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    updateArrows();
  }, []);

  const scrollLeftFunc = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRightFunc = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="team-wrapper">
      <p className="mini-title">[ Meet With Team ]</p>

      <motion.h2
        className="main-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Technology Specialisation
      </motion.h2>

      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Our technology specialists empower individuals and businesses by
        designing tailored solutions using cutting-edge technologies. We drive
        innovation and deliver future-ready developments that cater to the
        evolving needs of various industries.
      </motion.p>

      {/* Left Arrow */}
      {showLeft && (
        <button className="arrow left" onClick={scrollLeftFunc}>
          ❮
        </button>
      )}

      {/* Right Arrow */}
      {showRight && (
        <button className="arrow right" onClick={scrollRightFunc}>
          ❯
        </button>
      )}

      {/* Scrollable Image Row */}
      <div className="scroll-container" ref={scrollRef} onScroll={updateArrows}>
        <div className="scroll-images">
          <img src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg" alt="1" />
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="2" />
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" alt="3" />
          <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="4" />
          <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" alt="5" />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
