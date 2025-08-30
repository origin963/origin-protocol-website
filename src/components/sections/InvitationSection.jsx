import React from 'react';

const InvitationSection = () => {
  return (
    <section className="invitation-section">
      <div className="invitation-container">
        {/* Hero Background with Blueprint */}
        <div className="blueprint-hero">
          <div className="floating-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="blueprint-animation">
            <img 
              src="/assets/seed-of-life.png" 
              alt="The Blueprint - Seed of Life" 
              className="breathing-blueprint sacred-pulse will-animate"
            />
          </div>
        </div>
        
        {/* The Core Question */}
        <div className="invitation-content">
          <h1 className="invitation-question glowing-text">
            Have you ever had an idea that could help the world?
          </h1>
          
          <div className="invitation-subtitle">
            You don't need to start a company to change the world.
          </div>
          
          <div className="invitation-description">
            We've already done the hard part—the structure, the team, the legal, the systems.
            <br />
            You bring the spark. We build it. We launch it. We honor you for it.
            <br />
            And together, we help people by bringing ideas that matter to life.
          </div>
          
          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-text">Discover how</div>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;

