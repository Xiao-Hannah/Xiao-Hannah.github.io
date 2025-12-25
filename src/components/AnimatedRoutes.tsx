import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "./about/about";
import { Home } from "./home/home";
import { FourOhFour } from "./website/404";
import { AnimatePresence, motion } from "framer-motion";
import { StylingBlock } from "./StylingBlock";
import { Contact } from "./contact/contact";
import { Fun } from "./fun/fun";
import { FridgeFriend } from "./projects/fridgeFriend/fridgeFriend";
import { Bloome } from "./projects/bloome/bloome";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <StylingBlock locationPath={location.pathname} />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/for fun" element={<Fun />} />
          <Route path="/fridgeFriend" element={<FridgeFriend />} />
          <Route path="/bloome" element={<Bloome />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
