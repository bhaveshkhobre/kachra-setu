"use client";
import problemImg from "@/assets/problemImg.png";
import solutionImg from "@/assets/solutionImg.jpeg";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

const Footer = () => {
  // Ref for the solution image
  const solutionRef = useRef(null);
  const isInView = useInView(solutionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 60, damping: 18, duration: 0.8 },
      });
    }
  }, [isInView, controls]);

  return (
    <footer className="w-full">
      {/* Problem Image Section */}
    <section className="w-full flex items-center justify-center py-10 bg-card">
          <div className="w-full max-w-6xl">
            <img
              src="https://i.postimg.cc/5bLtNgb8/problem-Img.png"
              alt="Problem"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              style={{ minHeight: "600px", maxWidth: "1200px" }}
            />
          </div>
        </section>

      {/* Solution Image Section */}
  <section className="w-full flex items-center justify-center py-10 bg-card">
        <motion.div
          ref={solutionRef}
          initial={{ x: -120, opacity: 0 }}
          animate={controls}
          className="w-full max-w-6xl"
        >
          <img
            src="https://i.postimg.cc/RVdhCCKN/solution-Img.jpg"
            alt="Solution"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            style={{ minHeight: "600px", maxWidth: "1200px" }}
          />
        </motion.div>
      </section>
    </footer>
  );
};

export default Footer;
