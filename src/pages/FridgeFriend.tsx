import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import './FridgeFriend.less';

// Import images
import solution1 from "@/assets/images/fridgeFriend/solution/solution-1.png";
import solution2 from "@/assets/images/fridgeFriend/solution/solution-2.png";
import solution3 from "@/assets/images/fridgeFriend/solution/solution-3.png";
import solution4 from "@/assets/images/fridgeFriend/solution/solution-4.png";
import hiFi from "@/assets/images/fridgeFriend/hi-fi.png";
import compost1 from "@/assets/images/fridgeFriend/ideation/Ideation-2-1.png";
import compost2 from "@/assets/images/fridgeFriend/ideation/Ideation-2-2.png";
import ideation1_1 from "@/assets/images/fridgeFriend/ideation/Ideation-1-1.png";
import ideation1_2 from "@/assets/images/fridgeFriend/ideation/Ideation-1-2.png";
import ideation1_3 from "@/assets/images/fridgeFriend/ideation/Ideation-1-3.png";
import ideation3_1 from "@/assets/images/fridgeFriend/ideation/Ideation-3-1.png";
import ideation3_2 from "@/assets/images/fridgeFriend/ideation/Ideation-3-2.png";
import ideation3_3 from "@/assets/images/fridgeFriend/ideation/Ideation-3-3.png";
import evaluation1 from "@/assets/images/fridgeFriend/testing/Evaluation-1.png";
import evaluation2 from "@/assets/images/fridgeFriend/testing/Evaluation-2.png";
import evaluation3 from "@/assets/images/fridgeFriend/testing/Evaluation-3.png";
import iteration1 from "@/assets/images/fridgeFriend/iteration/1.png";
import iteration2 from "@/assets/images/fridgeFriend/iteration/2.png";
import iteration3 from "@/assets/images/fridgeFriend/iteration/3.png";
import iteration4 from "@/assets/images/fridgeFriend/iteration/4.png";
import iteration5 from "@/assets/images/fridgeFriend/iteration/5.png";
import iteration6 from "@/assets/images/fridgeFriend/iteration/6.png";
import iteration7 from "@/assets/images/fridgeFriend/iteration/7.png";
import stickyNotes from "@/assets/images/fridgeFriend/stickynote.png";
import supermarket from "@/assets/images/fridgeFriend/supermarket.png";
import fridge from "@/assets/images/fridgeFriend/fridge.png";
import couch from "@/assets/images/fridgeFriend/couch.png";
import kitchen from "@/assets/images/fridgeFriend/kitchen.png";
import avo1 from "@/assets/images/fridgeFriend/avo1.jpg";
import avo2 from "@/assets/images/fridgeFriend/avo2.jpg";
import avo3 from "@/assets/images/fridgeFriend/avo3.jpg";
import avo4 from "@/assets/images/fridgeFriend/avo4.jpg";
import avo5 from "@/assets/images/fridgeFriend/avo5.jpg";
import avo6 from "@/assets/images/fridgeFriend/avo6.jpg";
import avo7 from "@/assets/images/fridgeFriend/avo7.jpg";

const FridgeFriend = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const avoImages = [avo1, avo2, avo3, avo4, avo5, avo6, avo7];

  return (
    <div className="fridge-friend-page">
      <Navigation />

      {/* Hero Section */}
      <section className="ff-hero">
        <div className="container">
          <div className="ff-hero-content">
            <h1 className="ff-title">
              Fridge Friend: AI-Powered Camera that Revolutionize Your Kitchen
            </h1>

            <div className="ff-meta-grid">
              <div className="ff-meta-column">
                <h3>Domain</h3>
                <p>UX/UI</p>
                <h3>Team</h3>
                <p>Hannah Xiao</p>
                <p>Alex Deli-Ivanov</p>
                <p>Lydia Claire Futrell</p>
                <p>Jing Cheng</p>
              </div>
              <div className="ff-meta-column">
                <h3>Skills</h3>
                <p>Primary Research</p>
                <p>Competitive Analysis</p>
                <p>Digital Ethnography Research</p>
                <p>Stakeholder + User Interviews</p>
              </div>
              <div className="ff-meta-about">
                <h3>Project Context</h3>
                <p>
                  Group project for Human Centered Design and Innovation at Columbia University.
                </p>
                <h3>Project Overview</h3>
                <p>
                  With nearly 40% of food in the U.S. being wasted and families losing approximately $1,500 a year on thrown-out groceries,{" "}
                  <a
                    href="https://www.youtube.com/watch?v=y9LqWhmTMeQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ff-link"
                  >
                    FridgeFriend
                  </a>{" "}
                  is an AI-powered kitchen companion that helps reduce food waste through Auto-Restocking, Recipe Generator, and In-Fridge Camera System.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="ff-toc">
        <div className="container">
          <nav className="ff-toc-nav">
            <button onClick={() => scrollToSection('solution')}>Solution</button>
            <button onClick={() => scrollToSection('ideation')}>Ideation</button>
            <button onClick={() => scrollToSection('evaluation')}>Evaluation</button>
            <button onClick={() => scrollToSection('iteration')}>Iteration</button>
            <button onClick={() => scrollToSection('reflection')}>Reflection</button>
          </nav>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="ff-section">
        <div className="container">
          <h2 className="ff-section-title">Solution</h2>
          <p className="ff-subtitle">
            An AI-powered kitchen companion that helps you reduce food waste and save money.
          </p>

          <div className="ff-solution-grid">
            <div className="ff-solution-card">
              <img src={solution1} alt="Auto-restocking feature" />
              <h4>Auto-Restocking</h4>
              <p>Automatically order groceries when items run low.</p>
            </div>
            <div className="ff-solution-card">
              <img src={solution2} alt="Recipe generator feature" />
              <h4>Recipe Generator</h4>
              <p>Get personalized recipes based on what's in your fridge.</p>
            </div>
            <div className="ff-solution-card">
              <img src={solution3} alt="Camera system feature" />
              <h4>Camera System</h4>
              <p>See inside your fridge from anywhere with live camera feed.</p>
            </div>
            <div className="ff-solution-card">
              <img src={solution4} alt="Expiration tracking feature" />
              <h4>Expiration Tracking</h4>
              <p>Get notified before food expires to minimize waste.</p>
            </div>
          </div>

          <img src={hiFi} alt="High fidelity mockups" className="ff-image" />
        </div>
      </section>

      {/* Process / Ideation Phases */}
      <section id="ideation" className="ff-section ff-ideation-section">
        <div className="container">
          <h2 className="ff-section-title">Ideation Phases</h2>
          <p className="ff-text-block">
            Our design process involved three major ideation phases, each building upon insights
            from user research and testing.
          </p>

          {/* Phase 1 */}
          <div className="ff-phase">
            <h3 className="ff-phase-title">Phase 1: Initial Concept</h3>
            <div className="ff-phase-images">
              <img src={ideation1_1} alt="Ideation phase 1 sketch 1" />
              <img src={ideation1_2} alt="Ideation phase 1 sketch 2" />
              <img src={ideation1_3} alt="Ideation phase 1 sketch 3" />
            </div>
            <p className="ff-text-block">
              The initial phase focused on understanding the core problem of food waste and
              exploring various technological solutions for kitchen management.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="ff-phase">
            <h3 className="ff-phase-title">Phase 2: Composting Integration</h3>
            <div className="ff-phase-images">
              <img src={compost1} alt="Composting concept 1" />
              <img src={compost2} alt="Composting concept 2" />
            </div>
            <p className="ff-text-block">
              We explored integrating composting features to create a complete sustainability
              solution for the kitchen.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="ff-phase">
            <h3 className="ff-phase-title">Phase 3: Refined Solution</h3>
            <div className="ff-phase-images">
              <img src={ideation3_1} alt="Ideation phase 3 sketch 1" />
              <img src={ideation3_2} alt="Ideation phase 3 sketch 2" />
              <img src={ideation3_3} alt="Ideation phase 3 sketch 3" />
            </div>
            <p className="ff-text-block">
              The final phase focused on refining the user interface and ensuring seamless
              integration between the camera system and mobile app.
            </p>
          </div>

          <img src={stickyNotes} alt="Ideation sticky notes" className="ff-image" />
        </div>
      </section>

      {/* Evaluation & Testing */}
      <section id="evaluation" className="ff-section">
        <div className="container">
          <h2 className="ff-section-title">Evaluation & Testing</h2>
          <p className="ff-subtitle">
            We conducted user testing with diverse participants to validate our design decisions.
          </p>

          <div className="ff-testing-grid">
            <div className="ff-test-user">
              <img src={evaluation1} alt="Test user Mike" />
              <h4 style={{ color: '#f4d12b' }}>Mike</h4>
              <ul>
                <li>24 years old</li>
                <li>Lives in NYC for more than 6 years</li>
                <li>Cooks daily due to home-based working style</li>
                <li>Rational buyer with strong focus on utility</li>
              </ul>
            </div>
            <div className="ff-test-user">
              <img src={evaluation2} alt="Test user Lauren" />
              <h4 style={{ color: '#a7cdf4' }}>Lauren</h4>
              <ul>
                <li>35 years old</li>
                <li>Lived in NYC for 10 years</li>
                <li>Loves cooking and jogging in spare time</li>
                <li>Pursues quality and healthy lifestyle</li>
              </ul>
            </div>
            <div className="ff-test-user">
              <img src={evaluation3} alt="Test users Adam, John, and Jane" />
              <h4 style={{ color: '#ceafd8' }}>Adam, John, and Jane</h4>
              <ul>
                <li>Early 20s</li>
                <li>New residents in NYC</li>
                <li>Half live off-campus</li>
                <li>Aware of food waste issue</li>
                <li>Passionate about sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience Iterations */}
      <section id="iteration" className="ff-section ff-iteration-section">
        <div className="container">
          <h2 className="ff-section-title">User Experience Iterations</h2>
          <p className="ff-subtitle">
            Based on user feedback, we refined the experience through seven key iterations.
          </p>

          {/* Iteration 1 */}
          <div className="ff-iteration">
            <div className="ff-iteration-content">
              <div className="ff-iteration-text">
                <h3>Live View of Fridge Contents</h3>
                <p>
                  Joy uses her phone to check her grocery list in the supermarket, guided efficiently
                  by her FridgeFriend app which syncs with her fridge at home.
                </p>
              </div>
              <div className="ff-iteration-screens">
                <div className="ff-screen">
                  <img src={iteration1} alt="Home page screen" />
                  <p>Home Page</p>
                </div>
                <div className="ff-screen">
                  <img src={iteration2} alt="Inside fridge screen" />
                  <p>Inside Fridge</p>
                </div>
              </div>
            </div>
            <img src={supermarket} alt="User in supermarket" className="ff-context-image" />
          </div>

          {/* Iteration 2 */}
          <div className="ff-iteration">
            <div className="ff-iteration-content">
              <div className="ff-iteration-text">
                <h3>Notification of Near-Expiry Food</h3>
                <p>
                  Relaxing at home, she receives an alert from the app, prompting her to easily
                  order fresh milk before her current supply expires.
                </p>
              </div>
              <div className="ff-iteration-screens">
                <div className="ff-screen">
                  <img src={iteration3} alt="Notification screen" />
                  <p>Notification</p>
                </div>
                <div className="ff-screen">
                  <img src={iteration4} alt="Expiration alert screen" />
                  <p>Expiration Alert</p>
                </div>
              </div>
            </div>
            <img src={fridge} alt="User at fridge" className="ff-context-image" />
          </div>

          {/* Iteration 3 */}
          <div className="ff-iteration">
            <div className="ff-iteration-content">
              <div className="ff-iteration-text">
                <h3>Automatic Restocking Feature</h3>
                <p>
                  She greets a delivery of fresh produce at her door, auto-restocked by FridgeFriend,
                  ensuring she always has fresh ingredients on hand.
                </p>
              </div>
              <div className="ff-iteration-screens">
                <div className="ff-screen">
                  <img src={iteration5} alt="Grocery screen" />
                  <p>Grocery</p>
                </div>
                <div className="ff-screen">
                  <img src={iteration6} alt="Restocking screen" />
                  <p>Restocking</p>
                </div>
              </div>
            </div>
            <img src={couch} alt="User on couch" className="ff-context-image" />
          </div>

          {/* Iteration 4 */}
          <div className="ff-iteration">
            <div className="ff-iteration-content">
              <div className="ff-iteration-text">
                <h3>Smart Recipe Generator</h3>
                <p>
                  In her kitchen, she follows a FridgeFriend recipe on her phone, using ingredients
                  the app knows she has, for a delicious, no-waste meal.
                </p>
              </div>
              <div className="ff-iteration-screens">
                <div className="ff-screen">
                  <img src={iteration7} alt="Recipe screen" />
                  <p>Recipe</p>
                </div>
              </div>
            </div>
            <img src={kitchen} alt="User in kitchen" className="ff-context-image" />
          </div>

          {/* Avocado Imagery */}
          <div className="ff-avo-gallery">
            {avoImages.map((avo, index) => (
              <img key={index} src={avo} alt={`Avocado ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section id="reflection" className="ff-section">
        <div className="container">
          <h2 className="ff-section-title">Reflection</h2>
          <p className="ff-text-block">
            This project taught us valuable lessons about sustainable design and user-centered
            innovation. By focusing on real user needs and iterating based on feedback, we created
            a solution that makes sustainable living both intuitive and effortless.
          </p>
          <p className="ff-text-block">
            As project leader, I learned the importance of balancing technical innovation with
            practical usability. The positive reception from users validated our approach of
            simplifying complex sustainability challenges into delightful user experiences.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FridgeFriend;
