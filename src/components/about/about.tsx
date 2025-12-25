import React from "react";
import aboutImage from "./../../assets/images/about/about.jpg";
import aboutContent1 from "./../../assets/images/about/about1.jpg";
import aboutContent2 from "./../../assets/images/about/about2.jpg";
import { LinkItem } from "../../models/LinkItem";
import resume from "./../../assets/files/resume.pdf";
import { motion } from "framer-motion";

const subtitleLinks: LinkItem[] = [
  {
    displayName: "hx2313@uw.edu",
    link: "mailto:hx2313@uw.edu?Subject=Hello",
  },
  {
    displayName: "Instagram",
    link: "https://instagram.com/hanx0628?igshid=MTk0NTkyODZkYg==",
  },
  { displayName: "Résumé", link: resume },
];

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      }
    }
  };

  return (
    <motion.div
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="about-title"
        variants={itemVariants}
      >
        <div className="about-title-wrapper">
          <h1> About </h1>
          <div className="about-title-underline"></div>
        </div>
        <p className="about-title-tagline">Designer, Researcher, Maker</p>
        <div className="about-subtitle">
          {subtitleLinks.map((subtitleLink, index) => {
            return (
              <h2 key={index}>
                <a href={subtitleLink.link} target="_blank" rel="noopener">
                  {subtitleLink.displayName}
                </a>
              </h2>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        className="about-description"
        variants={itemVariants}
      >
        <h3>
          Creation is at the heart of my everyday life. To me, creativity is the
          spark behind everything I do. As a student, you'll often find me in
          the prototyping lab, surrounded by tools, crafting electronic gadgets
          and fabricating designs. In the winter, you can probably recognize me
          by the faint scent of laser-cut plywood trailing behind me. At home,
          my favorite way to unwind is watching films with my cat, Willow. I
          also love experimenting with special-effects makeup and baking—though
          my attempts don't always turn out as planned, the fun is in the
          process!
        </h3>
      </motion.div>
      <motion.div
        className="about-image-container"
        variants={itemVariants}
      >
        <img src={aboutImage} alt="about main image" className="about-image" />
      </motion.div>
      <div className="about-content-container">
        <img
          src={aboutContent1}
          alt="about content image 1"
          className="about-content-image"
        />

        <div className="about-content-text-container">
          <h3 className="about-content-text-title">My Journey</h3>
          <div className="about-content-text">
            <p>
              Before grad school, I worked in consulting, market research, and
              product management. Each role taught me something different — how to
              ask better questions, how to read data critically, and how to build
              products people actually need. Now I'm combining all of it: research,
              design, and a healthy skepticism about whether we're solving the right
              problems.
            </p>
          </div>
        </div>
        <img
          src={aboutContent2}
          alt="about content image 1"
          className="about-content-image"
        />

        <div className="about-content-text-container">
          <h3 className="about-content-text-title">A Passion for People</h3>
          <div className="about-content-text">
            <p>
              My background in anthropology fuels my deep curiosity about human
              connections and narratives. I fell in love with ethnography during
              my undergraduate years because it reveals the intricate social
              networks and personal stories that shape people's lives. I'm
              fascinated by the everyday joys and struggles we all face, as well
              as the ways power, culture, and social structures shape our
              experiences. Exploring these themes keeps me grounded and inspires
              the work I do.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
