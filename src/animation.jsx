import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const LineSeparator = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({ width: "100%" });
        } else {
          setIsVisible(false);
          controls.start({ width: "0%" });
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No additional margin
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.unobserve(containerRef.current);
    };
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      className="w-10 h-2 bg-black"
      initial={{ width: 0 }}
      animate={controls}
      transition={{ duration: 1 }}
      style={{ width: isVisible ? "100%" : "0%" }}
    ></motion.div>
  );
};

export default LineSeparator;
