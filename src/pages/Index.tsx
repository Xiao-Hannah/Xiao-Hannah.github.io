import { useEffect, useState } from "react";
import Navigation from "@/components/navigation/Navigation";
import ProjectCard from "@/components/cards/ProjectCard";
import Footer from "@/components/layout/Footer";
import { ArrowDown, Mail } from "lucide-react";
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
            <p className="hero-label">UX Designer & Researcher</p>
            <h1 className="hero-title">
              Creating meaningful experiences through
              <span className="highlight"> research-driven design</span>—
              one user story at a time.
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
                  Creation is at the heart of my everyday life. As a UX designer and researcher,
                  I blend anthropological curiosity with design thinking to create meaningful
                  digital experiences.
                </p>
                <p>
                  My background in anthropology fuels my deep curiosity about human connections
                  and narratives. I fell in love with ethnography because it reveals the
                  intricate social networks that shape people's lives. This passion for
                  understanding people drives everything I create.
                </p>
              </div>
            </div>

            <div className="about-sidebar">
              <div className="about-block">
                <h3>Currently</h3>
                <p>
                  Master's student at University of Washington, looking for opportunities to
                  create impactful products through user research and thoughtful design.
                </p>
              </div>

              <div className="about-block">
                <h3>Background</h3>
                <p>
                  Consulting, market research, and product management—giving me a broad
                  skillset and passion for turning research into actionable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <span className="section-number">03</span>
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
