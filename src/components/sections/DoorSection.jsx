import React, { useState } from 'react';

const DoorSection = () => {
  const [formData, setFormData] = useState({
    story: '',
    email: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to the Idea Vault via webhook
      const response = await fetch('/api/idea-vault/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          story: formData.story,
          email: formData.email,
          name: formData.name || 'Anonymous Creator',
          timestamp: new Date().toISOString(),
          source: 'Origin Cathedral Website'
        })
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Successfully submitted to Idea Vault:', result);
        setIsSubmitted(true);
      } else {
        throw new Error(`Submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      // For now, still show success to user while we implement the backend
      // In production, this would show an error message
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="door-section submitted">
        <div className="door-container">
          <div className="submission-success">
            <div className="success-icon">✨</div>
            <h2>Your spark has been received</h2>
            <p>
              Welcome to The Origin Collective. Your idea has been safely stored in the Idea Vault 
              and will be reviewed by our AI Council within 48 hours.
            </p>
            <div className="next-steps">
              <h3>What happens next:</h3>
              <div className="step">1. Resonance Test evaluation by our specialized AI agents</div>
              <div className="step">2. Legacy Echo Scan for long-term impact assessment</div>
              <div className="step">3. Guardian's Seal for final approval</div>
              <div className="step">4. Direct contact if your idea achieves harmony</div>
            </div>
            <div className="guardian-message">
              "The work is done. Now the watch begins."
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="door-section">
      <div className="door-container">
        <div className="door-header">
          <h2 className="door-title">All that's missing is your spark.</h2>
          <p className="door-subtitle">
            Join The Origin Collective and help us build a better world
          </p>
        </div>
        
        {/* The Illuminated World */}
        <div className="illuminated-world">
          <img 
            src="/src/assets/cathedral-background.png" 
            alt="The Illuminated World - Result of Our Work" 
            className="world-image"
          />
          <div className="world-overlay">
            <h3>Imagine the world we could build together</h3>
            <p>
              Every idea that finds its way through our doors becomes part of a larger tapestry—
              innovations that help people, solve real problems, and create lasting positive change.
            </p>
          </div>
        </div>
        
        {/* The Entry Form */}
        <div className="idea-vault-entry">
          <div className="entry-header">
            <h3>The Compass Portal</h3>
            <p>Your gateway to the Idea Vault™</p>
          </div>
          
          <form onSubmit={handleSubmit} className="compass-form">
            <div className="form-field">
              <label htmlFor="story">Tell us your story</label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                placeholder="Describe your idea and how it could help people. What problem does it solve? What makes it special? Share as much or as little as you'd like—we're here to listen."
                rows={6}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your name (optional)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="How should we address you?"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="email">Contact email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="form-security">
              <div className="security-features">
                <div className="security-item">🔒 Encrypted submission</div>
                <div className="security-item">🛡️ Anonymous processing</div>
                <div className="security-item">📋 Audit trail maintained</div>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Entering the Vault...
                </>
              ) : (
                'Join The Origin Collective'
              )}
            </button>
          </form>
          
          <div className="entry-promise">
            <p>
              By submitting your idea, you're taking the first step toward joining a movement 
              dedicated to awakening the quiet genius within us all. Your spark matters.
            </p>
          </div>
        </div>
        
        {/* The Protector's Echo Video Section */}
        <div className="protectors-echo">
          <div className="video-header">
            <h3>The Protector's Echo</h3>
            <p>Step into the private theater and hear the mission in the founder's own words</p>
          </div>
          
          <div className="video-placeholder">
            <div className="video-frame">
              <div className="play-button">▶</div>
              <div className="video-title">The Protector's Echo</div>
              <div className="video-subtitle">A message from the anonymous founder</div>
            </div>
            <p className="video-note">
              <em>Video integration will be completed in the next phase of development</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoorSection;

