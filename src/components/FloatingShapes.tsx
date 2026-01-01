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
      {/* Subtle gradient blobs in background */}
      <motion.div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle at 30% 30%, rgba(155, 221, 255, 0.15), rgba(96, 213, 250, 0.08), transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-8%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle at 60% 60%, rgba(96, 213, 250, 0.12), rgba(155, 221, 255, 0.06), transparent 65%)",
          filter: "blur(70px)",
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};
