import React from 'react';

const EngineSection = () => {
  return (
    <section className="engine-section">
      <div className="engine-container">
        <div className="engine-header">
          <h2 className="engine-title">You are always honored for your creation.</h2>
          <p className="engine-subtitle">
            The Sacred Cycle ensures creators are rewarded while fueling the next innovation
          </p>
        </div>
        
        {/* Sacred Cycle Visualization */}
        <div className="sacred-cycle">
          <div className="cycle-visualization">
            <img 
              src="/src/assets/sacred-cycle.png" 
              alt="The Sacred Cycle" 
              className="cycle-image"
            />
          </div>
          
          <div className="cycle-explanation">
            <div className="cycle-acts">
              <div className="cycle-act">
                <div className="act-number">Act I</div>
                <div className="act-title">Gift of Proceeds</div>
                <div className="act-description">
                  100% of Net Profits are legally gifted to the Co-Creator. 
                  No equity dilution, no hidden fees, no corporate overhead.
                </div>
                <div className="act-flow">→</div>
              </div>
              
              <div className="cycle-act">
                <div className="act-number">Act II</div>
                <div className="act-title">Gift of Gratitude</div>
                <div className="act-description">
                  The Co-Creator may voluntarily donate 50% back to The Origin Foundation 
                  to fuel the next creator's journey.
                </div>
                <div className="act-flow">↻</div>
              </div>
            </div>
            
            <div className="cycle-principles">
              <h3>Sacred Principles</h3>
              <div className="principle">
                <strong>Voluntary:</strong> Act II is never coerced, only invited
              </div>
              <div className="principle">
                <strong>Transparent:</strong> All flows are recorded in the Guardian Ledger
              </div>
              <div className="principle">
                <strong>Perpetual:</strong> The cycle compounds momentum across generations
              </div>
            </div>
          </div>
        </div>
        
        {/* Financial Model Clarity */}
        <div className="financial-clarity">
          <h3>Complete Financial Transparency</h3>
          <div className="clarity-grid">
            <div className="clarity-item">
              <div className="clarity-stat">100%</div>
              <div className="clarity-label">Net Profits to Creator</div>
            </div>
            <div className="clarity-item">
              <div className="clarity-stat">0%</div>
              <div className="clarity-label">Equity Required</div>
            </div>
            <div className="clarity-item">
              <div className="clarity-stat">50%</div>
              <div className="clarity-label">Voluntary Gratitude Gift</div>
            </div>
            <div className="clarity-item">
              <div className="clarity-stat">∞</div>
              <div className="clarity-label">Cycle Generations</div>
            </div>
          </div>
        </div>
        
        {/* Understanding in 15 Seconds */}
        <div className="understanding-promise">
          <p className="understanding-text">
            "A viewer should understand our entire financial model in 15 seconds without reading a word."
          </p>
          <div className="understanding-visual">
            <div className="flow-step">Idea</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Build</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Launch</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Profits</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Creator</div>
            <div className="flow-arrow">↻</div>
            <div className="flow-step">Next Idea</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineSection;

