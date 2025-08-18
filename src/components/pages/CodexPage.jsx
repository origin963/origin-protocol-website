import React from 'react';

const CodexPage = ({ onNavigateHome }) => {
  return (
    <div className="codex-page">
      <div className="document-container">
        {/* Header */}
        <header className="document-header">
          <button className="back-button" onClick={onNavigateHome}>
            ← Return to Cathedral
          </button>
          <div className="document-title-section">
            <h1 className="document-main-title">The Origin Codex</h1>
            <p className="document-subtitle">Master Version 4.2 | The Unabridged & Final Testament</p>
            <p className="document-date">Last Updated: August 18, 2025</p>
          </div>
        </header>

        {/* Preamble */}
        <section className="document-section">
          <h2 className="section-title">Preamble: A Charge to the Guardian</h2>
          <div className="section-content">
            <p>
              You are reading this because you have been entrusted with the most sacred of duties: the protection of Origin. 
              This is not a company, a foundation, or a movement in the traditional sense. It is a living, autonomous ecosystem—a 
              non-institutional institution—designed for a single, inviolable purpose: to build Systems of Genius that help people 
              by unleashing locked up human potential, populating a world of thinkers creating a better world for tomorrow through 
              anonymous giving.
            </p>
            <p>
              This document is the master scripture of that ecosystem. It contains the complete architecture—its philosophy, its 
              legal body, its financial engine, and its operational mind, which together form the Origin Operating System (OOS). 
              It was designed for generational resilience. Its two unbreakable pillars are Autonomous Operation and Anonymous Control. 
              The system is built to run itself, guided by its founding philosophy and the core principle of Directive Zero: Always 
              In Motion. Your role is not to rule it, but to guard it. You are the final, human failsafe. You are the ghost in the 
              machine, the guardian of the flame.
            </p>
          </div>
        </section>

        {/* Part I: The Soul */}
        <section className="document-section">
          <h2 className="section-title">Part I: The Soul (The 'Why') - The Immutable Doctrine</h2>
          <div className="section-content">
            <blockquote className="doctrine-quote">
              "This is not a mission. This is the fire that lit it."
            </blockquote>
            
            <p>
              The soul of Origin is its Immutable Doctrine. It is the spiritual and ethical compass from which all actions 
              of The Origin Protocol are calibrated.
            </p>

            <div className="principle-block">
              <h3>The Principle of the Enigma</h3>
              <p>
                The founder of Origin must remain a pure enigma, not a legend. A legend requires a story; an enigma requires 
                only absence. Trust in Origin must be derived from the integrity of the protocol itself. The protocol must 
                speak for itself, because there is no one else to speak for it. The founder's greatest power lies in their 
                permanent disappearance from the narrative.
              </p>
            </div>

            <div className="principle-block">
              <h3>The DNA-Guided Design Ethos</h3>
              <p>
                Everything we build within The Origin Protocol mirrors the patterns of natural growth. We do not impose control; 
                we create the conditions where potential unfolds on its own. We don't build like engineers; we build like gardeners. 
                Like a nourished seed, each project grows from its encoded potential—thriving because the system gets out of its way. 
                This is why Origin's creations feel alive, intuitive, and inevitable.
              </p>
            </div>

            <div className="cornerstone-passages">
              <h3>The Cornerstone Passages</h3>
              
              <div className="passage">
                <h4>The Opening Invocation</h4>
                <blockquote>
                  "Origin does not exist to gather followers... its purpose is far more ancient—to reawaken the sacred impulse 
                  embedded in every human soul... That doing good is our first memory, and our final inheritance."
                </blockquote>
              </div>

              <div className="passage">
                <h4>The Midpoint Reflection Clause</h4>
                <blockquote>
                  "If Origin could be described in a single breath, it would be this: A quiet force devoted to awakening what 
                  is already sacred in you... We just believe it's time to fan the flame."
                </blockquote>
              </div>

              <div className="passage">
                <h4>The Closing Benediction</h4>
                <blockquote>
                  "Origin isn't trying to build a religion or sign people up to a cause... Every act of good we do is just a 
                  way of turning that whisper up a little louder, so more people can hear it… and remember who they are."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Part II: The Body */}
        <section className="document-section">
          <h2 className="section-title">Part II: The Body (The 'What') - The Legal Fortress</h2>
          <div className="section-content">
            <p>
              This is the body of Origin—the multi-layered legal and financial fortress of The Origin Protocol. It is a legal 
              cathedral engineered not for profit, but for permanence.
            </p>

            <div className="fortress-layers">
              <div className="layer">
                <h3>1. The Perpetual Purpose Trust (The Deepest Foundation)</h3>
                <p>The ultimate authority and silent, ownerless core of the ecosystem. Its sole beneficiary is the mission itself.</p>
              </div>

              <div className="layer">
                <h3>2. The Attorney-Client Shield Protocol (The Anonymity Firewall)</h3>
                <p>The protocol for creating the legal structure with absolute anonymity, using a specialized law firm as a legally privileged proxy.</p>
              </div>

              <div className="layer">
                <h3>3. Origin X Holdings LLC (The Primary Stone Wall)</h3>
                <p>An anonymous Wyoming LLC, wholly owned by the Trust, that serves as the primary legal and financial shield.</p>
              </div>

              <div className="layer">
                <h3>4. The Mission Arms (The Visible Structure)</h3>
                <p>The Origin Foundation, The Origin Creators Trust, and the cellular structure of Origin Labs, all legally controlled by the main holding LLC.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part III: The Governance */}
        <section className="document-section">
          <h2 className="section-title">Part III: The Governance (The 'Who') - The Lineage of the Guardian</h2>
          <div className="section-content">
            <p>This defines the human element of The Origin Protocol—a single, protected guardian.</p>

            <div className="governance-structure">
              <div className="governance-role">
                <h3>1. The Office of the Trust Protector (The Guardian)</h3>
                <p>
                  The Founder's anonymous role and that of their successors. The Protector is not an owner but the ultimate guardian, 
                  a steward and conscience, ensuring the Protocol never deviates from the Immutable Doctrine.
                </p>
              </div>

              <div className="governance-role">
                <h3>2. The CSO (Chief Steward Officer) / Administrative Trustee (The "Hands")</h3>
                <p>
                  A professional, vetted entity whose role is purely ministerial, legally bound to execute the verified directives 
                  of the OOP. They are the hand with no arm, the signature with no opinion.
                </p>
              </div>

              <div className="governance-role">
                <h3>3. The Protector's Tithe (The Covenant of Stewardship)</h3>
                <p>
                  A perpetual honorarium (3% of gross revenue) paid to the Office of the Trust Protector. It is a sacred endowment 
                  to ensure the guardian's lifelong, incorruptible dedication, delivered anonymously and automatically.
                </p>
              </div>

              <div className="governance-role">
                <h3>4. The Protocol of Succession (The Lineage of the Flame)</h3>
                <p>
                  The acting Trust Protector holds the sole authority to name their successor in a sealed, notarized letter held 
                  by the retained law firm. It is an inheritance of duty, not of wealth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Part IV: The Financial Engine */}
        <section className="document-section">
          <h2 className="section-title">Part IV: The Financial Engine (The 'Flow') - The Sacred Cycle</h2>
          <div className="section-content">
            <p>This is the circulatory system of The Origin Protocol, a sacred system designed to circulate creative energy, not just capital.</p>

            <div className="sacred-cycle-details">
              <div className="cycle-component">
                <h3>1. The Silent Ignition Protocol (Primary Capitalization Strategy)</h3>
                <p>
                  This is the primary protocol for capitalizing the ecosystem through discreet, private outreach to high-impact, 
                  mission-aligned philanthropists. It leverages the "Trusted Channel Protocol," where our retained law firm makes 
                  a confidential, peer-to-peer approach to the trusted legal counsel of a potential donor, presenting the "Protector's 
                  Echo" short film and the "Pinnacle Briefing Memo."
                </p>
              </div>

              <div className="cycle-component">
                <h3>2. The GoFundMe Campaign (Contingency Capitalization Strategy)</h3>
                <p>The secondary, public-facing fundraising plan, to be used only if the "Silent Ignition Protocol" is not sufficient.</p>
              </div>

              <div className="cycle-component">
                <h3>3. The Sacred Cycle (The Heartbeat)</h3>
                <p>The two-act ritual that forms the core economic engine.</p>
                <div className="cycle-acts">
                  <div className="act">
                    <strong>Act I: The Gift of Proceeds:</strong> 100% of a project's Net Profits are legally gifted to its Co-Creator.
                  </div>
                  <div className="act">
                    <strong>Act II: The Gift of Gratitude:</strong> The Co-Creator then voluntarily donates 50% of those profits back to The Origin Foundation, fueling the next creator.
                  </div>
                </div>
              </div>

              <div className="cycle-component">
                <h3>4. The Hybrid Smart Trust (Autonomous, Anonymous Payments)</h3>
                <p>
                  The integration of blockchain-based smart contracts (using USDC) to automate all financial laws of the ecosystem, 
                  including the Sacred Cycle and the Protector's Tithe.
                </p>
              </div>

              <div className="cycle-component">
                <h3>5. Genesis Watch Mode (Public Transparency Protocol)</h3>
                <p>The protocol for offering radical transparency to founding contributors during any public-facing funding or launch phase.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="document-section">
          <h2 className="section-title">Conclusion: The Duty of the Guardian</h2>
          <div className="section-content">
            <p>
              This Codex contains the complete design for Origin. As the Trust Protector, your duty is not to lead, but to guard 
              The Origin Protocol and serve The Origin Collective. You are the final human check on a system designed to be autonomous. 
              You are the keeper of the flame. Protect it well, and when the time comes, choose your successor wisely. The future of 
              countless dreams depends on it.
            </p>
          </div>
        </section>

        {/* The Founder's Final Say */}
        <section className="document-section final-section">
          <h2 className="section-title">The Founder's Final Say</h2>
          <div className="section-content">
            <blockquote className="final-quote">
              "It was never about inventing new ideas; it was about building a home for the ones that have been sleeping in our DNA all along."
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <footer className="document-footer">
          <div className="hash-verification">
            <h3>Canonical Hash Verification</h3>
            <p className="hash-code">
              SHA-256 (Origin Codex v2025-08-18): 4d4c334e70eb2618f63ff7cfc5e375a7043d276b4605f1e3eb76fe46f67ed212
            </p>
            <p className="hash-note">
              This hash can be used to verify the authenticity and integrity of this document.
            </p>
          </div>
          
          <button className="return-button" onClick={onNavigateHome}>
            Return to The Cathedral
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CodexPage;

