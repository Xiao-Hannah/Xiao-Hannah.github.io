import { useState, useEffect } from "react";
import { TrendingUp, Users, Rocket, Star, Target, Search, Lightbulb, Cog, Lock } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Atypica.less';

const STORAGE_KEY = 'atypica-auth';
const CORRECT_PASSWORD = 'please';

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

  // Chart data
  const activationData = [
    { name: 'Before', value: 100 },
    { name: 'After', value: 130 }
  ];

  const mrrData = [
    { month: 'Oct', value: 100 },
    { month: 'Nov', value: 105 },
    { month: 'Dec', value: 112 },
    { month: 'Jan', value: 120 }
  ];

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
            <h1 className="atypica-title">
              Getting Users to Stick
            </h1>
            <p className="atypica-subtitle">
              I joined Atypica when 70% of signups disappeared after day one. Here's how we fixed that.
            </p>

            <div className="atypica-role-line">
              Product Growth Manager Intern · Oct 2025 – Present
            </div>

            <div className="atypica-metrics">
              <div className="atypica-metric-card">
                <div className="metric-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="metric-value">20%</div>
                <div className="metric-label">MRR Growth</div>
              </div>
              <div className="atypica-metric-card">
                <div className="metric-icon">
                  <Rocket size={24} />
                </div>
                <div className="metric-value">30%</div>
                <div className="metric-label">Activation Rate Increase</div>
              </div>
              <div className="atypica-metric-card">
                <div className="metric-icon">
                  <Users size={24} />
                </div>
                <div className="metric-value">Multi-channel</div>
                <div className="metric-label">User Acquisition</div>
              </div>
              <div className="atypica-metric-card">
                <div className="metric-icon">
                  <Star size={24} />
                </div>
                <div className="metric-value">Featured</div>
                <div className="metric-label">Product Hunt Placement</div>
              </div>
            </div>

            <div className="atypica-meta-row">
              <div className="atypica-meta-item">
                <h4>Duration</h4>
                <p>October 2025 – Present</p>
              </div>
              <div className="atypica-meta-item">
                <h4>Company</h4>
                <p>Atypica AI (Tezign)</p>
              </div>
              <div className="atypica-meta-item">
                <h4>Focus Areas</h4>
                <p>Growth Strategy, Activation, Retention</p>
              </div>
            </div>

            <div className="atypica-links">
              <a
                href="https://atypica.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="atypica-btn"
              >
                Visit Atypica AI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="atypica-toc">
        <div className="container">
          <nav className="atypica-toc-nav">
            <button onClick={() => scrollToSection('context')}>Context</button>
            <button onClick={() => scrollToSection('approach')}>Approach</button>
            <button onClick={() => scrollToSection('impact')}>Impact</button>
            <button onClick={() => scrollToSection('learnings')}>Learnings</button>
          </nav>
        </div>
      </section>

      {/* Context & Challenge */}
      <section id="context" className="atypica-section">
        <div className="container">
          <h2 className="atypica-section-title">Context & Challenge</h2>

          <div className="atypica-context-grid">
            <div className="atypica-context-main">
              <h3>What is Atypica?</h3>
              <p>
                Think of it as virtual focus groups at scale. Atypica lets you interview AI personas
                that act like real consumers—they have opinions, preferences, and make decisions based
                on actual behavioral data from 300,000+ real people.
              </p>
              <p>
                Instead of waiting weeks for traditional research, product teams and market researchers
                can test ideas and get consumer insights in minutes. Ask a persona why they'd choose
                one product over another, what drives their purchasing decisions, or how they feel
                about your messaging.
              </p>
              <p>
                The tech is impressive (85% accuracy matching real human responses), but when I started,
                nobody was actually using it consistently.
              </p>
            </div>

            <div className="atypica-context-sidebar">
              <div className="atypica-challenge-block">
                <h3>The Problem</h3>
                <p>
                  People would sign up, poke around, and leave. We had solid tech but terrible activation.
                  Most users didn't understand what they could actually do with the platform or why they
                  should care.
                </p>
              </div>
            </div>
          </div>

          <div className="atypica-problem-statement">
            <h3>What Was Going Wrong</h3>
            <div className="atypica-problem-grid">
              <div className="atypica-problem-item">
                <div className="problem-number">01</div>
                <p>~70% of signups never came back after their first session</p>
              </div>
              <div className="atypica-problem-item">
                <div className="problem-number">02</div>
                <p>Users didn't get the "aha" moment fast enough—they'd stare at a blank screen and bounce</p>
              </div>
              <div className="atypica-problem-item">
                <div className="problem-number">03</div>
                <p>We were trying random tactics with no clear growth strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Approach */}
      <section id="approach" className="atypica-section atypica-approach-section">
        <div className="container">
          <h2 className="atypica-section-title">How I Tackled It</h2>
          <p className="atypica-section-subtitle">
            Three phases over four months
          </p>

          {/* Phase 1 */}
          <div className="atypica-phase">
            <div className="phase-header">
              <div className="phase-icon">
                <Search size={28} />
              </div>
              <div className="phase-title-group">
                <h3>Phase 1: Figure Out What's Actually Happening</h3>
                <p className="phase-subtitle">First, I needed to understand where people were getting stuck</p>
              </div>
            </div>

            <div className="phase-content">
              <div className="phase-methods">
                <h4>What I Did</h4>
                <ul>
                  <li>Walked through the product myself, noting every confusing moment</li>
                  <li>Dug into Mixpanel and Intercom to see where people were bailing</li>
                  <li>Looked at different user types to spot patterns</li>
                </ul>
              </div>

              <div className="phase-visual">
                <h4>User Journey Map</h4>
                <div className="journey-map">
                  <div className="journey-step">
                    <div className="step-label">Signup</div>
                    <div className="step-bar" style={{height: '100%', backgroundColor: '#6366f1'}}></div>
                    <div className="step-value">100%</div>
                  </div>
                  <div className="journey-step friction">
                    <div className="step-label">Email Verify</div>
                    <div className="step-bar" style={{height: '70%', backgroundColor: '#fbbf24'}}></div>
                    <div className="step-value">70%</div>
                    <div className="friction-tag">Friction Point</div>
                  </div>
                  <div className="journey-step friction">
                    <div className="step-label">First Login</div>
                    <div className="step-bar" style={{height: '45%', backgroundColor: '#fbbf24'}}></div>
                    <div className="step-value">45%</div>
                    <div className="friction-tag">Friction Point</div>
                  </div>
                  <div className="journey-step">
                    <div className="step-label">Create Persona</div>
                    <div className="step-bar" style={{height: '30%', backgroundColor: '#94a3b8'}}></div>
                    <div className="step-value">30%</div>
                  </div>
                  <div className="journey-step">
                    <div className="step-label">Active User</div>
                    <div className="step-bar" style={{height: '22%', backgroundColor: '#94a3b8'}}></div>
                    <div className="step-value">22%</div>
                  </div>
                </div>
              </div>

              <div className="phase-insight">
                <strong>The insight:</strong> If someone didn't create their first persona within 48 hours,
                they were basically gone (90% churn rate). The problem wasn't the product—it was that we
                weren't showing people what to do or why it mattered.
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="atypica-phase">
            <div className="phase-header">
              <div className="phase-icon">
                <Target size={28} />
              </div>
              <div className="phase-title-group">
                <h3>Phase 2: Build a Framework That Actually Makes Sense</h3>
                <p className="phase-subtitle">Once I knew the problems, I needed a system to fix them</p>
              </div>
            </div>

            <div className="phase-content">
              <div className="strategy-section">
                <h4>Lifecycle Engagement Framework</h4>
                <div className="lifecycle-diagram">
                  <div className="lifecycle-stage">
                    <div className="stage-name">Acquisition</div>
                    <div className="stage-tactics">Multi-channel outreach, Product Hunt, KOLs</div>
                  </div>
                  <div className="lifecycle-arrow">→</div>
                  <div className="lifecycle-stage">
                    <div className="stage-name">Activation</div>
                    <div className="stage-tactics">Onboarding redesign, guided prompts, quick wins</div>
                  </div>
                  <div className="lifecycle-arrow">→</div>
                  <div className="lifecycle-stage">
                    <div className="stage-name">Retention</div>
                    <div className="stage-tactics">Email campaigns, feature discovery, cohort targeting</div>
                  </div>
                  <div className="lifecycle-arrow">→</div>
                  <div className="lifecycle-stage">
                    <div className="stage-name">Revenue</div>
                    <div className="stage-tactics">Upgrade prompts, usage triggers, value demonstration</div>
                  </div>
                </div>
                <p className="strategy-note">
                  This reusable framework allowed us to systematically address each stage of the user
                  lifecycle rather than applying band-aid solutions. The team has since adopted this
                  approach for ongoing product decisions.
                </p>
              </div>

              <div className="strategy-section">
                <h4>User Segmentation Strategy</h4>
                <div className="cohort-chips">
                  <div className="cohort-chip">
                    <span className="chip-label">Market Researchers</span>
                    <span className="chip-desc">Primary power users</span>
                  </div>
                  <div className="cohort-chip">
                    <span className="chip-label">Product Managers</span>
                    <span className="chip-desc">Discovery & validation</span>
                  </div>
                  <div className="cohort-chip">
                    <span className="chip-label">Startup Founders</span>
                    <span className="chip-desc">Early-stage insights</span>
                  </div>
                  <div className="cohort-chip">
                    <span className="chip-label">UX Researchers</span>
                    <span className="chip-desc">Behavioral patterns</span>
                  </div>
                </div>
              </div>

              <div className="strategy-section">
                <h4>Feature Prioritization Matrix</h4>
                <div className="priority-matrix">
                  <div className="matrix-labels">
                    <div className="y-axis-label">Impact</div>
                    <div className="x-axis-label">Effort</div>
                  </div>
                  <div className="matrix-grid">
                    <div className="matrix-quadrant high-impact low-effort">
                      <div className="quadrant-label">Quick Wins</div>
                      <div className="matrix-item priority-1">Onboarding tooltips</div>
                      <div className="matrix-item priority-1">Email verification flow</div>
                    </div>
                    <div className="matrix-quadrant high-impact high-effort">
                      <div className="quadrant-label">Major Projects</div>
                      <div className="matrix-item priority-2">IA restructure</div>
                      <div className="matrix-item priority-2">Guided template system</div>
                    </div>
                    <div className="matrix-quadrant low-impact low-effort">
                      <div className="quadrant-label">Fill-ins</div>
                      <div className="matrix-item priority-3">Help center expansion</div>
                    </div>
                    <div className="matrix-quadrant low-impact high-effort">
                      <div className="quadrant-label">Time Sinks</div>
                      <div className="matrix-item priority-4">Custom branding</div>
                    </div>
                  </div>
                </div>
                <p className="strategy-note">
                  By mapping initiatives on impact vs. effort, I was able to secure buy-in from
                  engineering and design teams for high-leverage changes that would move activation
                  metrics without derailing the product roadmap.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="atypica-phase">
            <div className="phase-header">
              <div className="phase-icon">
                <Cog size={28} />
              </div>
              <div className="phase-title-group">
                <h3>Phase 3: Execution & Iteration</h3>
                <p className="phase-subtitle">Translating strategy into measurable product improvements</p>
              </div>
            </div>

            <div className="phase-content">
              <div className="execution-section">
                <h4>Product Improvements</h4>

                <div className="improvement-comparison">
                  <div className="comparison-col">
                    <h5>Before: Generic Onboarding</h5>
                    <div className="comparison-box before">
                      <ul>
                        <li>Single signup form with 8 fields</li>
                        <li>No contextual guidance</li>
                        <li>Dashboard showed empty state</li>
                        <li>Users had to discover features themselves</li>
                      </ul>
                    </div>
                  </div>
                  <div className="comparison-col">
                    <h5>After: Progressive Onboarding</h5>
                    <div className="comparison-box after">
                      <ul>
                        <li>Multi-step signup (3 fields max per screen)</li>
                        <li>Inline tooltips and contextual help</li>
                        <li>Guided first persona creation flow</li>
                        <li>Interactive tutorial highlighting key features</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="improvement-item">
                  <h5>Information Architecture Restructure</h5>
                  <div className="ia-structure">
                    <div className="ia-node">
                      <div className="ia-node-title">Dashboard</div>
                      <div className="ia-children">
                        <div className="ia-child">Recent Personas</div>
                        <div className="ia-child">Quick Actions</div>
                        <div className="ia-child">Usage Insights</div>
                      </div>
                    </div>
                    <div className="ia-node">
                      <div className="ia-node-title">Persona Library</div>
                      <div className="ia-children">
                        <div className="ia-child">Pre-built (Browse)</div>
                        <div className="ia-child">Custom (Create)</div>
                        <div className="ia-child">Shared (Team)</div>
                      </div>
                    </div>
                    <div className="ia-node">
                      <div className="ia-node-title">Interview Studio</div>
                      <div className="ia-children">
                        <div className="ia-child">Templates</div>
                        <div className="ia-child">Active Sessions</div>
                        <div className="ia-child">Results</div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Simplified navigation reduced cognitive load and surfaced the platform's two core
                    value propositions—personas and interviews—more clearly.
                  </p>
                </div>

                <div className="improvement-item">
                  <h5>Guided Prompt Concepts</h5>
                  <div className="guided-prompts-card">
                    <div className="prompt-example">
                      <div className="prompt-tag">Suggested</div>
                      <div className="prompt-text">
                        "Create a persona for a health-conscious millennial to understand wellness product preferences"
                      </div>
                    </div>
                    <div className="prompt-example">
                      <div className="prompt-tag">Suggested</div>
                      <div className="prompt-text">
                        "Interview Gen Z consumers about sustainable fashion purchasing decisions"
                      </div>
                    </div>
                    <p className="prompt-note">
                      Pre-written templates reduced blank-page paralysis and demonstrated platform
                      capabilities through real use cases.
                    </p>
                  </div>
                </div>
              </div>

              <div className="execution-section">
                <h4>Growth Initiatives</h4>
                <ul className="growth-tactics">
                  <li>
                    <strong>KOL Partnerships:</strong> Identified and partnered with LinkedIn thought
                    leaders in product management and market research communities. These partnerships
                    drove qualified traffic and established credibility in target segments.
                  </li>
                  <li>
                    <strong>Campus Ambassador Program:</strong> Built a network of student ambassadors
                    at target universities to evangelize the platform for academic research projects,
                    creating a pipeline of early adopters who could grow into professional users.
                  </li>
                  <li>
                    <strong>Product Hunt Launch Playbook:</strong> Orchestrated a coordinated launch
                    strategy including teaser campaigns, maker interviews, and community engagement
                    that secured featured placement and drove sustainable traffic spikes beyond launch day.
                  </li>
                  <li>
                    <strong>Startup Community Activation:</strong> Engaged with Indie Hackers, Product
                    Hunt communities, and startup Slack groups to position Atypica as a go-to tool for
                    lean customer research.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section id="impact" className="atypica-section atypica-impact-section">
        <div className="container">
          <h2 className="atypica-section-title">Impact & Results</h2>

          <div className="impact-charts">
            <div className="chart-card">
              <h4>Activation Rate Improvement</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={activationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Bar dataKey="value" fill="var(--primary)" />
                </BarChart>
              </ResponsiveContainer>
              <p className="chart-note">
                Baseline indexed to 100. After implementing onboarding redesign and IA restructure,
                activation rate increased by 30 percentage points.
              </p>
            </div>

            <div className="chart-card">
              <h4>MRR Trajectory</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mrrData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--primary)"
                    strokeWidth={2}
                    dot={{ fill: 'var(--primary)', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="chart-note">
                Indexed growth trajectory showing 20% MRR increase from October baseline through
                multi-channel acquisition and improved conversion funnel.
              </p>
            </div>
          </div>

          <div className="funnel-visualization">
            <h4>Conversion Funnel Improvement</h4>
            <div className="funnel-container">
              <div className="funnel-stage" style={{width: '100%'}}>
                <div className="funnel-bar">
                  <span className="funnel-label">Signups</span>
                  <span className="funnel-value">100%</span>
                </div>
              </div>
              <div className="funnel-stage" style={{width: '75%'}}>
                <div className="funnel-bar">
                  <span className="funnel-label">Email Verified</span>
                  <span className="funnel-value">75%</span>
                  <span className="funnel-change">+15%</span>
                </div>
              </div>
              <div className="funnel-stage" style={{width: '60%'}}>
                <div className="funnel-bar">
                  <span className="funnel-label">First Login</span>
                  <span className="funnel-value">60%</span>
                  <span className="funnel-change">+15%</span>
                </div>
              </div>
              <div className="funnel-stage" style={{width: '50%'}}>
                <div className="funnel-bar">
                  <span className="funnel-label">Created First Persona</span>
                  <span className="funnel-value">50%</span>
                  <span className="funnel-change">+20%</span>
                </div>
              </div>
              <div className="funnel-stage" style={{width: '40%'}}>
                <div className="funnel-bar">
                  <span className="funnel-label">Active User (7-day)</span>
                  <span className="funnel-value">40%</span>
                  <span className="funnel-change">+18%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="qualitative-impact">
            <h4>Beyond the Numbers</h4>
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-icon">🔄</div>
                <h5>Reusable Framework</h5>
                <p>
                  The lifecycle engagement framework I designed has been adopted by the product team
                  for ongoing feature prioritization and roadmap decisions, ensuring sustained focus
                  on activation and retention.
                </p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🤝</div>
                <h5>Cross-Functional Alignment</h5>
                <p>
                  Data-driven insights from cohort analysis bridged communication between engineering,
                  design, and marketing teams, creating shared vocabulary around user behavior and
                  success metrics.
                </p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">💬</div>
                <h5>Improved User Sentiment</h5>
                <p>
                  Post-launch feedback showed users appreciated the clearer value proposition and
                  smoother onboarding experience, with notable improvements in NPS and support ticket
                  reduction for "getting started" queries.
                </p>
              </div>
            </div>
          </div>

          <div className="user-quotes">
            <h4>User Feedback</h4>
            <div className="quotes-grid">
              <div className="quote-card">
                <div className="quote-text">
                  "The new onboarding actually showed me what I could do with the platform. Before,
                  I signed up and had no idea where to start—now it walks you through creating your
                  first persona and the value clicked immediately."
                </div>
                <div className="quote-attribution">— Product Manager, B2B SaaS</div>
              </div>
              <div className="quote-card">
                <div className="quote-text">
                  "I've recommended Atypica to three colleagues this month. The platform finally feels
                  approachable for people who aren't AI experts. The guided prompts made it easy to get
                  useful insights on my first try."
                </div>
                <div className="quote-attribution">— Market Research Lead, Consumer Goods</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section id="learnings" className="atypica-section atypica-learnings-section">
        <div className="container">
          <h2 className="atypica-section-title">Key Learnings</h2>

          <div className="learnings-grid">
            <div className="learning-card">
              <div className="learning-icon">
                <Lightbulb size={32} />
              </div>
              <h4>Data + Empathy</h4>
              <p>
                Numbers tell you what's happening, but you need to talk to users to understand why.
                Cohort analysis showed the 70% drop-off, but product walkthroughs and user interviews
                revealed the emotional friction: people felt lost and didn't trust they could get value
                without significant time investment.
              </p>
            </div>

            <div className="learning-card">
              <div className="learning-icon">
                <Target size={32} />
              </div>
              <h4>Growth is a System</h4>
              <p>
                One-off tactics don't compound. Building a lifecycle framework that maps acquisition,
                activation, retention, and revenue created a repeatable playbook the team can use long
                after my internship. Systematic thinking beats heroic individual efforts.
              </p>
            </div>

            <div className="learning-card">
              <div className="learning-icon">
                <Users size={32} />
              </div>
              <h4>Cross-functional Storytelling</h4>
              <p>
                Engineers care about feasibility, designers care about user experience, marketers care
                about messaging. I learned to translate the same insight—"users don't understand our
                value prop"—into language that resonated with each stakeholder, which accelerated buy-in
                and execution.
              </p>
            </div>

            <div className="learning-card">
              <div className="learning-icon">
                <Rocket size={32} />
              </div>
              <h4>Launch is Just the Beginning</h4>
              <p>
                The Product Hunt featured placement was exciting, but what mattered more was the
                post-launch retention work. Traffic spikes fade fast—building habits through email
                sequences, feature discovery nudges, and cohort-based targeting is where sustainable
                growth happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Atypica;
