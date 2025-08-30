import React from 'react';

const PromiseSection = () => {
  return (
    <section className="promise-section">
      <div className="promise-container">
        <div className="promise-header">
          <h2 className="promise-title">Origin provides everything you need to build it.</h2>
          <p className="promise-subtitle">
            Three core promises that transform sparks into reality
          </p>
        </div>
        
        <div className="promises-grid">
          {/* Promise 1: Funding */}
          <div className="promise-card">
            <div className="promise-icon">
              <img src="/assets/funding-icon.png" alt="Funding" />
            </div>
            <h3 className="promise-name">Funding</h3>
            <p className="promise-description">
              Complete financial support from concept to launch. No equity required, 
              no personal investment needed. We provide the capital; you provide the vision.
            </p>
            <div className="promise-features">
              <div className="feature">• Full Development Team</div>
              <div className="feature">• Technical Infrastructure</div>
              <div className="feature">• Launch Strategy</div>
              <div className="feature">• Market Positioning</div>
            </div>
          </div>
          
          {/* Promise 2: Protection */}
          <div className="promise-card">
            <div className="promise-icon">
              <img src="/assets/protection-icon.png" alt="Protection" />
            </div>
            <h3 className="promise-name">Protection</h3>
            <p className="promise-description">
              Legal fortress and IP protection through our impermeable four-layer structure. 
              Your ideas are safeguarded by the same anonymity that protects our founder.
            </p>
            <div className="promise-features">
              <div className="feature">• Co-Creator Status</div>
              <div className="feature">• Profit Sharing</div>
              <div className="feature">• Legal Protection</div>
              <div className="feature">• Ongoing Support</div>
            </div>
          </div>
          
          {/* Promise 3: Support */}
          <div className="promise-card">
            <div className="promise-icon">
              <img src="/assets/support-icon.png" alt="Support" />
            </div>
            <h3 className="promise-name">Support</h3>
            <p className="promise-description">
              Technical and strategic support from our AI Council of 35+ specialized agents, 
              plus human expertise across every domain needed to bring your idea to life.
            </p>
            <div className="promise-features">
              <div className="feature">• Full Audit Trail</div>
              <div className="feature">• Open Processes</div>
              <div className="feature">• Protected Identity</div>
              <div className="feature">• Verified Authenticity</div>
            </div>
          </div>
        </div>
        
        {/* The Silent Spark */}
        <div className="creator-representation">
          <div className="creator-image">
            <img src="/assets/hero-background.png" alt="The Silent Spark - Creator" />
          </div>
          <div className="creator-message">
            <h3>Every creator deserves to see their vision realized</h3>
            <p>
              We believe the world's greatest innovations are sleeping in the minds of people 
              who simply need the right support system to bring them to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;

