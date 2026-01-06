import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import ProjectCard from "@/components/cards/ProjectCard";
import Footer from "@/components/layout/Footer";
import { ArrowDown, Mail, ArrowRight } from "lucide-react";
import resume from "@/assets/files/resume.pdf";
import './Index.less';

const projects = [
  {
    title: "Bloomè",
    description: "An all-in-one platform helping users overcome period poverty through education, product accessibility, and community support.",
    category: "UX Research & Design",
    year: "2024",
    link: "/bloome",
  },
  {
    title: "Fridge Friend",
    description: "A smart kitchen companion that helps reduce food waste through intelligent inventory tracking and recipe suggestions.",
    category: "Product Design",
    year: "2023",
    link: "/fridgefriend",
  },
];

const Index = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="index-page">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className={`hero-content ${heroVisible ? 'visible' : ''}`}>
            <p className="hero-label">Product Growth Manager</p>
            <h1 className="hero-title">
              Driving <span className="highlight">product growth</span> by turning user insights into <span className="highlight">experiments</span> across the funnel.
            </h1>
          </div>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollToSection("work")}
          aria-label="Scroll to work section"
        >
          <span>Scroll</span>
          <ArrowDown className="icon" />
        </button>
      </section>

      {/* Work Section */}
      <section id="work" className="work-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Selected Work</h2>
            <p className="section-description">
              Projects where research meets creativity, solving real problems for real people.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-main">
              <span className="section-number">02</span>
              <h2>About</h2>

              <div className="about-text">
                <p>
                  I'm a product manager who believes creativity is the heart of everything.
                  With my anthropology and economics background at Columbia, I am deeply
                  interested in human connections and narratives. This passion for
                  understanding people drives everything I create.
                </p>
                <p>
                  With a M.S. degree at University of Washington, I want to create meaningful
                  digital experiences for my users through data and prototyping.
                </p>
              </div>
            </div>

            <div className="about-sidebar">
              <div className="about-block">
                <h3>Currently</h3>
                <p>
                  Based in Seattle, pursuing a master's degree at the University of Washington,
                  focusing on how research and data translate into product decisions.
                </p>
              </div>

              <div className="about-block">
                <h3>Previously</h3>
                <p>
                  Experience across consulting, market research, and product management, often
                  working where ambiguity turns into clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Fun Section */}
      <section id="for-fun" className="for-fun-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>For Fun</h2>
            <p className="section-description">
              Beyond design—exploring the world, capturing moments, and embracing new experiences.
            </p>
          </div>

          <div className="for-fun-topics">
            <div className="for-fun-topic">
              <h3>Archaeological Project</h3>
              <p>From Sherds to Society: An analysis of Kwahe'e Black-on-white and Social Interaction in the Taos District</p>
            </div>
            <div className="for-fun-topic">
              <h3>Photography</h3>
              <p>Photos are my way to connect with people all around world</p>
            </div>
            <div className="for-fun-topic">
              <h3>Travelling</h3>
              <p>Where's my next adventure</p>
            </div>
            <div className="for-fun-topic">
              <h3>Trying New Things</h3>
              <p>Venturing out of my comfort zone</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/for-fun')}
            className="for-fun-link"
          >
            View My Adventures
            <ArrowRight className="icon" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <span className="section-number">04</span>
          <h2>Let's Connect</h2>
          <p className="contact-description">
            Always open to discussing new projects, collaborations, or opportunities.
          </p>

          <a href="mailto:hx2313@uw.edu" className="contact-email">
            <Mail className="icon" />
            <span>hx2313@uw.edu</span>
          </a>

          <div className="contact-links">
            <a
              href="https://instagram.com/hanx0628"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Instagram
            </a>
            <a
              href="https://github.com/Xiao-Hannah"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
