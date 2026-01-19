import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import './Zebra.less';

const STORAGE_KEY = 'zebra-auth';
const CORRECT_PASSWORD = 'launch';

const Zebra = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user has previously authenticated
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, 'true');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Show password gate if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="zebra-page">
        <Navigation />
        <div className="password-gate">
          <div className="password-gate-content">
            <div className="password-gate-icon">
              <Lock size={48} />
            </div>
            <h1>This page is password protected</h1>
            <p>Please enter the password to view this content.</p>
            <form onSubmit={handleSubmit} className="password-form">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="password-input"
                autoFocus
              />
              {error && <div className="password-error">{error}</div>}
              <button type="submit" className="password-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="zebra-page">
      <Navigation />

      {/* Hero Section */}
      <section className="zebra-hero">
        <div className="container">
          <div className="zebra-hero-content">
            <div className="zebra-hero-text">
              <h1 className="zebra-title">
                Zebra Workcloud Clock App
              </h1>
              <p className="zebra-subtitle">
                Enhanced authentication and security for frontline workforce management.
              </p>

              <div className="zebra-role-line">
                Product Manager Intern · Summer 2025
              </div>

              <div className="zebra-links">
                <a
                  href="https://www.zebra.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zebra-btn"
                >
                  Visit Zebra
                </a>
              </div>
            </div>
            <img src="/images/zebra.jpg" alt="Zebra Technologies" className="zebra-hero-logo" />
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="zebra-toc">
        <div className="container">
          <nav className="zebra-toc-nav">
            <button onClick={() => scrollToSection('context')}>Context & Problem</button>
            <button onClick={() => scrollToSection('approach')}>What I Did</button>
            <button onClick={() => scrollToSection('result')}>Result</button>
            <button onClick={() => scrollToSection('learnings')}>What I Learned</button>
          </nav>
        </div>
      </section>

      {/* Context & Problem */}
      <section id="context" className="zebra-section">
        <div className="container">
          <h2 className="zebra-section-title">Context & Problem</h2>

          <div className="zebra-context-with-image">
            <div className="zebra-context-text">
              <p>
                Zebra's Workcloud Clock App runs on ET40/45 tablets deployed across warehouses, retail floors, and distribution centers where frontline workers clock in and out of shifts on shared devices.
              </p>

              <h3 className="zebra-subsection-title">The Challenge</h3>
              <ul className="zebra-simple-list">
                <li>Existing methods (manual entry, QR codes, RFID badges) created friction and left systems vulnerable to time fraud</li>
                <li>Customers concerned about storing biometric data on shared devices</li>
                <li>Needed stronger authentication without slowing high-volume clock-in periods</li>
              </ul>
            </div>

            <div className="zebra-context-image">
              <img src="/images/clockin.jpg" alt="Workcloud Clock App in use" />
            </div>
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section id="approach" className="zebra-section zebra-approach-section">
        <div className="container">
          <h2 className="zebra-section-title">What I Did</h2>

          <div className="zebra-context-main">
            <p>
              I led two parallel initiatives to address authentication and security gaps while maintaining operational efficiency for frontline workers.
            </p>

            <h3 className="zebra-subsection-title">NFC Integration Feasibility</h3>
            <p className="zebra-subsection-intro">
              Evaluated contactless authentication as an alternative to existing methods.
            </p>
            <ul className="zebra-simple-list">
              <li>Assessed six NFC chip types for ET40/45 tablet compatibility, memory requirements, and security features</li>
              <li>Designed encoding workflows for physical cards and mobile wallet provisioning</li>
              <li>Built comparative analysis of deployment options to inform product roadmap decisions</li>
            </ul>

            <h3 className="zebra-subsection-title">Identity Guardian Integration</h3>
            <p className="zebra-subsection-intro">
              Integrated Zebra's facial biometric platform directly into the Clock App to eliminate on-device biometric storage.
            </p>
            <ul className="zebra-simple-list">
              <li>Confirmed technical feasibility across system architecture and existing APIs</li>
              <li>Mapped end-to-end user flows from enrollment through authentication and defined product requirements</li>
              <li>Built working proof-of-concept in Android Studio to validate integration approach</li>
              <li>Coordinated with engineering to resolve technical blockers and refine implementation path</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Result */}
      <section id="result" className="zebra-section zebra-result-section">
        <div className="container">
          <h2 className="zebra-section-title">Result</h2>

          <div className="zebra-context-main">
            <p>
              Both solutions addressed critical gaps in security and efficiency without disrupting the frontline worker experience. The proof-of-concept validated the technical approach and established the foundation for product rollout.
            </p>

            <h3 className="zebra-subsection-title">Security & Privacy</h3>
            <ul className="zebra-simple-list">
              <li>Eliminated on-device biometric storage through Identity Guardian integration</li>
              <li>Enabled multifactor authentication with barcode and facial verification</li>
              <li>Reduced fraud risk through encrypted, contactless NFC credentials</li>
            </ul>

            <h3 className="zebra-subsection-title">Operational Efficiency</h3>
            <ul className="zebra-simple-list">
              <li>Reduced authentication time during high-volume shift changes</li>
              <li>Maintained seamless clock-in flow without adding operational complexity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section id="learnings" className="zebra-section">
        <div className="container">
          <h2 className="zebra-section-title">What I Learned</h2>

          <div className="zebra-context-main">
            <p>
              Enterprise product work requires confirming alignment early and often. Different stakeholders can walk away from the same technical discussion with different understandings—frequent check-ins and written documentation prevent costly misalignment.
            </p>
            <p>
              Leading with "why" before defining "how" shapes better product decisions. Understanding the operational problem behind a feature request matters more than optimizing for implementation speed.
            </p>
            <p>
              Working demos validate feasibility faster than documentation. Under tight timelines, a proof-of-concept that proves technical viability moves the conversation forward more effectively than polished specs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Zebra;
