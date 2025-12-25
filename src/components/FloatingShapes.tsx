import React from "react";
import { motion } from "framer-motion";

export const FloatingShapes = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Circle 1 - Top Right */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 70%, transparent 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circle 2 - Middle Left */}
      <motion.div
        style={{
          position: "absolute",
          top: "40%",
          left: "8%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(139, 92, 246, 0.01) 70%, transparent 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circle 3 - Bottom Right */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "15%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, rgba(99, 102, 241, 0.01) 70%, transparent 100%)",
          filter: "blur(50px)",
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent shape - Small dot top left */}
      <motion.div
        style={{
          position: "absolute",
          top: "25%",
          left: "20%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "rgba(99, 102, 241, 0.3)",
        }}
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent shape - Small dot bottom left */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "12%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.3)",
        }}
        animate={{
          y: [0, -12, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Subtle line accent - top middle */}
      <motion.div
        style={{
          position: "absolute",
          top: "18%",
          left: "45%",
          width: "60px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent)",
        }}
        animate={{
          rotate: [0, 10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
