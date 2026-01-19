import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import './Bloome.less';

// Import images
import solutionFull from "@/assets/images/bloome/solution/solution-full.png";
import solutionCustomize from "@/assets/images/bloome/solution/customize.gif";
import solutionTracking from "@/assets/images/bloome/solution/tracking.gif";
import solutionHome from "@/assets/images/bloome/solution/home.gif";
import persona1Journey from "@/assets/images/bloome/emphasize/persona1Journey.png";
import persona2Journey from "@/assets/images/bloome/emphasize/persona2Journey.png";
import competitor from "@/assets/images/bloome/ideate/competitor.png";
import userFlow from "@/assets/images/bloome/prototype/userflow.png";
import lowFidelity from "@/assets/images/bloome/prototype/lowFidelity.png";

const Bloome = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bloome-page">
      <Navigation />

      {/* Hero Section */}
      <section className="bloome-hero">
        <div className="container">
          <div className="bloome-hero-content">
            <h1 className="bloome-title">
              Bloomè: Personalized Floral Experience at Your Fingertips
            </h1>

            <div className="bloome-meta-grid">
              <div className="bloome-meta-column">
                <h3>Domain</h3>
                <p>UX/UI</p>
                <h3>My Role</h3>
                <p>Project Manager</p>
              </div>
              <div className="bloome-meta-column">
                <h3>Skills</h3>
                <p>Competitive Analysis</p>
                <p>Usability Test</p>
                <p>User Interviews</p>
              </div>
              <div className="bloome-meta-about">
                <h3>Project Context</h3>
                <p>
                  Google UX Design Certificate project created out of personal interest in understanding end-to-end UX design processes.
                </p>
                <h3>Introduction</h3>
                <p>
                  Bloomè is a digital platform designed to simplify floral shopping through AR Preview, Customized Bouquets, and Weekly Delivery Service. The project evolved through empathy exercises, ideation sessions, and iterative prototyping informed by usability testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bloome-toc">
        <div className="container">
          <nav className="bloome-toc-nav">
            <button onClick={() => scrollToSection('solution')}>Solution</button>
            <button onClick={() => scrollToSection('process')}>Process</button>
            <button onClick={() => scrollToSection('emphasize')}>Emphasize</button>
            <button onClick={() => scrollToSection('define')}>Define</button>
            <button onClick={() => scrollToSection('ideate')}>Ideate</button>
            <button onClick={() => scrollToSection('prototype')}>Prototype</button>
            <button onClick={() => scrollToSection('reflection')}>Reflection</button>
          </nav>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="bloome-section">
        <div className="container">
          <h2 className="bloome-section-title">Solution</h2>
          <p className="bloome-subtitle">
            When Floristry Meets Innovation - Craft Your Perfect Bouquet with a Touch of Tech.
          </p>
          <h3 className="bloome-logo-text">Bloomè</h3>
          <img src={solutionFull} alt="Bloome solution overview" className="bloome-image" />

          {/* Solution Features */}
          <div className="bloome-features">
            <div className="bloome-feature-card">
              <img src={solutionCustomize} alt="Customize feature" />
              <h4>Customize</h4>
              <p>Create your perfect bouquet with our intuitive customization tools.</p>
            </div>
            <div className="bloome-feature-card">
              <img src={solutionTracking} alt="Tracking feature" />
              <h4>Tracking</h4>
              <p>Track your delivery in real-time from our shop to your door.</p>
            </div>
            <div className="bloome-feature-card">
              <img src={solutionHome} alt="Home feature" />
              <h4>AR Preview</h4>
              <p>See how bouquets look in your space with augmented reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bloome-section bloome-process-section">
        <div className="container">
          <h2 className="bloome-section-title">Process</h2>
          <div className="bloome-process-grid">
            <div className="bloome-process-item">
              <h4>Emphasize</h4>
              <p>Persona</p>
              <p>User Journey Map</p>
            </div>
            <div className="bloome-process-item">
              <h4>Define</h4>
              <p>Problem Statement</p>
            </div>
            <div className="bloome-process-item">
              <h4>Ideate</h4>
              <p>Competitor Audit</p>
              <p>Ideation</p>
            </div>
            <div className="bloome-process-item">
              <h4>Prototype</h4>
              <p>User Flow</p>
              <p>Wireframes</p>
            </div>
            <div className="bloome-process-item">
              <h4>Test</h4>
              <p>Usability Test</p>
              <p>Insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emphasize Section */}
      <section id="emphasize" className="bloome-section">
        <div className="container">
          <h2 className="bloome-section-title">Emphasize: Understand the Users</h2>
          <h3>Persona</h3>
          <p className="bloome-text-block">
            In our exploration of the bouquet shopping experience, we discovered a universal challenge:
            <strong> the significant time invested in selecting the right bouquet</strong>.
            Whether for personal aesthetics or as a thoughtful gift, customers seek a balance
            between beauty and efficiency.
          </p>
          <p className="bloome-text-block">
            To capture these insights, we crafted two personas based on our initial research.
            These personas represent our primary customer segments and are at the heart of our
            design process, ensuring our app resonates with the diverse needs of our customers.
          </p>

          <h3 className="bloome-subsection-title">User Journey Map</h3>
          <div className="bloome-persona-section">
            <h4 className="bloome-persona-name">Emily Chen</h4>
            <p className="bloome-persona-goal">
              Goal: To effortlessly integrate stylish floral arrangements into her dynamic urban lifestyle.
            </p>
            <img src={persona1Journey} alt="Emily Chen journey map" className="bloome-image" />
          </div>

          <div className="bloome-persona-section">
            <h4 className="bloome-persona-name bloome-persona-blue">David Martinez</h4>
            <p className="bloome-persona-goal">
              Goal: To find and purchase unique, high-quality bouquets for special occasions
              without the hassle of decision-making.
            </p>
            <img src={persona2Journey} alt="David Martinez journey map" className="bloome-image" />
          </div>
        </div>
      </section>

      {/* Define Section */}
      <section id="define" className="bloome-section bloome-define-section">
        <div className="container">
          <h2 className="bloome-section-title">Define: Problem Statements</h2>
          <p className="bloome-text-block">
            In the bustling urban environment, time-pressed consumers struggle to find convenient,
            swift, and personalized ways to purchase and enjoy floral arrangements. Despite the
            availability of online flower delivery services,
            <strong> there exists a gap in the market for a digital solution that combines the
            efficiency of technology with the personal touch of a florist's expertise</strong>.
          </p>

          <div className="bloome-hmw">
            <p>
              How might we enable busy consumers to easily choose and visualize BOUQUETS through
              a mobile app?
            </p>
          </div>

          <p className="bloome-text-block">
            Therefore, the Bloomè app aims to address these needs by providing an innovative
            platform that allows customers to quickly and effortlessly select, customize, and
            preview floral arrangements within the context of their own environment.
          </p>
        </div>
      </section>

      {/* Ideate Section */}
      <section id="ideate" className="bloome-section">
        <div className="container">
          <h2 className="bloome-section-title">Ideate: Competitor Analysis & Brainstorming</h2>
          <h3>Competitor Audit</h3>
          <img src={competitor} alt="Competitor analysis" className="bloome-image" />

          <h3 className="bloome-subsection-title">Key Findings</h3>
          <p className="bloome-text-block">
            In our competitive audit of renowned florists, we uncovered key opportunities to
            enhance the mobile bouquet shopping experience:
          </p>

          <div className="bloome-findings">
            <div className="bloome-finding">
              <h4>Limited Mobile Experience</h4>
              <p>
                Most florists have not yet embraced mobile apps, unveiling a chance to simplify
                ordering for on-the-go flower enthusiasts.
              </p>
            </div>
            <div className="bloome-finding">
              <h4>Refined Interfaces</h4>
              <p>
                Each brand showcases a polished interface, yet stands out with its own
                accessibility-boosting features.
              </p>
            </div>
            <div className="bloome-finding">
              <h4>Universal Pain Points</h4>
              <p>
                A common thread is the need for bouquet previews and detailed size guides to
                assist customers in their selection process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Section */}
      <section id="prototype" className="bloome-section">
        <div className="container">
          <h2 className="bloome-section-title">Prototype: User Flow & Wireframes</h2>

          <h3>User Flow</h3>
          <img src={userFlow} alt="User flow diagram" className="bloome-image" />

          <h3 className="bloome-subsection-title">Low-Fidelity Wireframes</h3>
          <img src={lowFidelity} alt="Low fidelity wireframes" className="bloome-image" />

          <h3 className="bloome-subsection-title">High-Fidelity Wireframes</h3>
          <p className="bloome-text-block">
            The high-fidelity prototypes showcase our refined design with detailed interactions,
            color scheme, and typography that bring Bloomè to life.
          </p>
        </div>
      </section>

      {/* Reflection Section */}
      <section id="reflection" className="bloome-section">
        <div className="container">
          <h2 className="bloome-section-title">Reflection</h2>
          <p className="bloome-text-block">
            As a case study for the Google UX Design Professional Certificate course,
            <strong> I independently navigated through all phases of the design process,
            including Empathize, Define, Ideate, Prototype, and Iterate</strong>. My journey
            with Bloomè involved creating personas, defining the problem statement, conducting
            competitor audits, and engaging in iterative prototyping.
          </p>
          <p className="bloome-text-block">
            Embarking on this project as a first-timer, particularly with Figma, I not only
            developed my technical skills but also gained a deep understanding of the
            human-centered design process. <strong>A key learning was the importance of
            balancing attention to detail with the overall completion of the project</strong>.
            Bloomè, through its innovative approach and my contributions, stands as a testament
            to the potential of thoughtful UX design in transforming everyday experiences.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bloome;
