import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import atypicaLogo from "@/assets/images/atypica/atypica_logo.jpg";
import './Atypica.less';

const STORAGE_KEY = 'atypica-auth';
const CORRECT_PASSWORD = 'launch';

const Atypica = () => {
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
      <div className="atypica-page">
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
    <div className="atypica-page">
      <Navigation />

      {/* Hero Section */}
      <section className="atypica-hero">
        <div className="container">
          <div className="atypica-hero-content">
            <div className="atypica-hero-text">
              <h1 className="atypica-title">
                Atypica
              </h1>
              <p className="atypica-subtitle">
                Turning AI consumer research from "interesting tech" into something people actually use.
              </p>

              <div className="atypica-role-line">
                Product Growth Manager Intern · Oct 2025 – Present
              </div>

              <div className="atypica-links">
                <a
                  href="https://atypica.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atypica-btn"
                >
                  Visit Atypica
                </a>
              </div>
            </div>
            <img src={atypicaLogo} alt="Atypica" className="atypica-hero-logo" />
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="atypica-toc">
        <div className="container">
          <nav className="atypica-toc-nav">
            <button onClick={() => scrollToSection('opportunity')}>The Opportunity</button>
            <button onClick={() => scrollToSection('problem')}>The Problem</button>
            <button onClick={() => scrollToSection('discovery')}>What I Uncovered</button>
            <button onClick={() => scrollToSection('approach')}>What I Did</button>
            <button onClick={() => scrollToSection('impact')}>Impact</button>
            <button onClick={() => scrollToSection('learnings')}>What I Learned</button>
          </nav>
        </div>
      </section>

      {/* The Opportunity */}
      <section id="opportunity" className="atypica-section">
        <div className="container">
          <h2 className="atypica-section-title">The Opportunity</h2>

          <div className="atypica-context-main">
            <p>
              Atypica is a platform where consultants, product managers, and marketers can interview AI personas that think and respond like real consumers. These personas are built from behavioral data of 300,000+ real people and match actual human responses with 80% accuracy.
            </p>
            <p>
              When I joined, thousands of users were signing up monthly, but 70% churned within two weeks. The product worked - users just weren't sticking around.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="atypica-section">
        <div className="container">
          <h2 className="atypica-section-title">The Problem</h2>

          <div className="problem-blocks">
            <div className="problem-block">
              <h3>Onboarding friction</h3>
              <p>Users dropped off during onboarding due to complexity and fatigue.</p>
            </div>
            <div className="problem-block">
              <h3>Low study completion</h3>
              <p>Over half of users who started a study never finished it.</p>
            </div>
            <div className="problem-block">
              <h3>Poor conversion</h3>
              <p>Many users saw the value but didn't convert or return.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Uncovered */}
      <section id="discovery" className="atypica-section">
        <div className="container">
          <h2 className="atypica-section-title">What I Uncovered</h2>

          <div className="atypica-context-main">
            <p>
              I mapped user session recordings, Mixpanel cohorts, and churn interviews to understand where and why users were leaving.
            </p>

            <ul className="insight-list">
              <li>
                Users understood the value quickly, but were overwhelmed by seeing too many features too early.
              </li>
              <li>
                A lack of guidance ("Start Your Study" with no direction) created decision paralysis.
              </li>
              <li>
                Once users completed their first study, they were very likely to run additional studies.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section id="approach" className="atypica-section atypica-approach-section">
        <div className="container">
          <h2 className="atypica-section-title">What I Did</h2>

          {/* Activation */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Activation</h3>

            <div className="approach-blocks">
              <div className="approach-block">
                <h4>Simplified onboarding flow</h4>
                <p>
                  Mapped the user journey, reduced unnecessary steps, and redesigned the layout to lower cognitive load.
                </p>
              </div>

              <div className="approach-block">
                <h4>Guided first study experience</h4>
                <p>
                  Added prompts, use cases, and in-session nudges to help users start and finish their first study.
                </p>
              </div>

              <div className="approach-block">
                <h4>Introduced Discussion Mode</h4>
                <p>
                  Shipped a lighter-weight entry point that let users explore ideas through multi-persona discussions.
                </p>
              </div>
            </div>
          </div>

          {/* Growth & Monetization */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Growth & Monetization</h3>

            <ul className="approach-list">
              <li>Refocused target users on boutique consultants with clearer willingness to pay</li>
              <li>Ran KOL partnerships and Product Hunt launch to reach aligned users</li>
              <li>Launched an affiliate program to scale distribution through trusted creators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="atypica-section atypica-impact-section">
        <div className="container">
          <h2 className="atypica-section-title">Impact</h2>

          <div className="impact-stats-row">
            <div className="stat-card">
              <div className="stat-number">+30%</div>
              <div className="stat-label">activation rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">+20%</div>
              <div className="stat-label">MRR</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3×</div>
              <div className="stat-label">longer retention</div>
            </div>
          </div>

          <div className="atypica-context-main">
            <p>
              Users who completed the new onboarding stayed 3× longer. Conversion rate increased by 40% through segmented pricing. Revenue diversified across regions previously written off as "too price-sensitive."
            </p>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section id="learnings" className="atypica-section">
        <div className="container">
          <h2 className="atypica-section-title">What I Learned</h2>

          <div className="atypica-context-main">
            <ul className="insight-list">
              <li>Retention is the foundation of sustainable growth.</li>
              <li>Growth tactics fail when the core experience is unclear.</li>
              <li>Understanding why users stay matters more than optimizing signups.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Atypica;
