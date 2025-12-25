import React from "react";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-title-decoration">
          <div className="contact-decoration-line"></div>
          <div className="contact-decoration-circle"></div>
          <div className="contact-decoration-line"></div>
        </div>
        <h1> Get In Touch</h1>
        <p className="contact-subtitle">Let's create something amazing together</p>
        <p>
          I'm always open to collaborating on interesting projects, chatting about
          UX research, or answering questions about my work. The best way to reach
          me is email — I typically respond within a couple days.
        </p>
        <a
          className={"contact-button"}
          href={"mailto:hx2313@uw.edu?Subject=Hello"}
          target="_blank"
          rel="noopener"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};
