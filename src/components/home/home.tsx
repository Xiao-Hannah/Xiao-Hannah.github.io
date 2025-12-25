import React from "react";
import { motion } from "framer-motion";
import avocado from "./../../assets/images/home/avocado.png";
import avocadoBg from "./../../assets/images/home/avocado-bg.png";
import flowerBg from "./../../assets/images/home/flower-bg.png";
import flower from "./../../assets/images/home/flower.png";
import { Link, NavLink } from "react-router-dom";
import { MovingImage } from "../movingImage/MovingImage";
import { useWindowDimensions } from "../../hooks/hooks";

interface Projects {
  image: string;
  tags: string[];
  bgImage?: string;
  imageWidth?: string;
  title: string;
  titleFont?: string;
  titleColor?: string;
  titleSize?: string;
  letterSpacing?: string;
  description: string[];
  link: string;
  value: string;
}

const projects: Projects[] = [
  {
    title: "Bloomè",
    description: [
      "A mobile app that solves a simple problem: you want flowers but don't know how they'll look in your space. Bloomè lets you preview bouquets in AR, customize arrangements, and subscribe to weekly deliveries.",
    ],
    image: flower,
    bgImage: flowerBg,
    tags: ["Mobile App", "Figma"],
    imageWidth: "80%",
    link: "/bloome",
    value: "bloome",
    titleFont: "Georgia",
    titleColor: "#E3B8B5",
  },
  {
    title: "Fridge Friend",
    description: [
      "A semester-long project tackling food waste in NYC households. We built an AI-powered camera system that lives in your fridge, tracks what you have, suggests recipes, and handles reordering.",
    ],
    image: avocado,
    bgImage: avocadoBg,
    tags: ["UI/UX Design", "Figma", "CAD"],
    link: "/fridgeFriend",
    value: "fridgeFriend",
    titleFont: "Just Another Hand",
    titleColor: "#05441C",
    titleSize: "50px",
    letterSpacing: "3px",
  },
];

export const Home = () => {
  const { width } = useWindowDimensions();

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      }
    }
  };

  const welcomeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      }
    }
  };

  return (
    <div className="home-container">
      <motion.div
        className="home-title"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <div className="home-title-decoration">
          <div className="home-title-dot"></div>
          <div className="home-title-line"></div>
        </div>
        <h1> Hannah Xiao </h1>
        <p className="home-title-subtitle">Product Designer & Researcher</p>
      </motion.div>
      <motion.div
        className="home-welcome"
        initial="hidden"
        animate="visible"
        variants={welcomeVariants}
      >
        <h2>Hi there!</h2>
        <h2 style={{ fontSize: "26px" }}>
          I'm Hannah — a master's student at UW studying tech and innovation.
          I design products that solve real problems and build prototypes in maker
          spaces (you might smell the laser-cut plywood). Right now I'm exploring
          how technology shapes human connection and trying to make things that
          matter. Stick around to see what I've been working on.
        </h2>
      </motion.div>
      <div className="home-projects-container">
        {projects.map((project, index) => {
          const backwards = index % 2 === 0;
          return (
            <motion.div
              className={`home-project-container ${
                backwards ? "backwards" : ""
              }`}
              key={index}
              style={
                width <= 600
                  ? { flexDirection: "column" }
                  : index % 2 == 1
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }
              }
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              <MovingImage
                mainImage={project.image}
                backgroundImage={project.bgImage}
                width={"30%"}
                imageWidth={project.imageWidth}
                link={project.link}
              />
              <div className="home-project-text-container">
                <h2
                  style={{
                    fontFamily: project.titleFont,
                    color: project.titleColor,
                    fontSize: project.titleSize,
                    letterSpacing: project.letterSpacing,
                  }}
                >
                  {project.title}
                </h2>
                {project.description.map((description, descriptionIndex) => {
                  return (
                    <h3 key={descriptionIndex} style={{ fontSize: "24px" }}>
                      {description}
                    </h3>
                  );
                })}
                <div className="home-project-tag-container">
                  {project.tags.map((tag, tagIndex) => {
                    return (
                      <div className="home-project-tag" key={tagIndex}>
                        <p> {tag}</p>
                      </div>
                    );
                  })}
                </div>
                <NavLink
                  to={project.link}
                  className={`home-project-link ${project.value}`}
                >
                  <div className="home-project-link-hover" />
                  {`View ${project.title} now`}
                </NavLink>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
