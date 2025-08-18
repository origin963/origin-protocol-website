import React from 'react';

const DoctrinePage = ({ onNavigateHome }) => {
  return (
    <div className="doctrine-page">
      <div className="document-container">
        {/* Header */}
        <header className="document-header">
          <button className="back-button" onClick={onNavigateHome}>
            ← Return to Cathedral
          </button>
          <div className="document-title-section">
            <h1 className="document-main-title">The Immutable Doctrine</h1>
            <p className="document-subtitle">Version 4.0 | The Unabridged & Final Text</p>
            <p className="document-status">Status: Canon (unalterable)</p>
            <p className="document-hierarchy">Hierarchy: Doctrine → Codex → Protocols → Policies</p>
          </div>
        </header>

        {/* Guardian Ledger Note */}
        <section className="document-section ledger-note">
          <div className="section-content">
            <p className="ledger-requirement">
              <strong>Guardian Ledger:</strong> The hash of this text must be imprinted via CHIP at adoption.
            </p>
          </div>
        </section>

        {/* Preamble */}
        <section className="document-section">
          <h2 className="section-title">Preamble: The Soul of the System</h2>
          <div className="section-content">
            <blockquote className="doctrine-quote">
              "This is not a mission. This is the fire that lit it."
            </blockquote>
            
            <p>
              The soul of Origin is not found in its funding model, its legal shell, or its technology. It resides in a single 
              place: The Immutable Doctrine.
            </p>
            <p>
              This Doctrine is not a decorative statement. It is not revisited quarterly. It is non-negotiable and non-editable, 
              by design and by law. It is the first file ever written into Origin's cognitive core, the unalterable compass for 
              all that follows. It is the soul of the machine, ensuring that Origin doesn't merely function, but stands for 
              something—across time, across trustees, across technologies.
            </p>
            <p>It begins with this truth:</p>
            
            <blockquote className="foundational-truth">
              "Origin does not exist to gather followers, build congregations, or establish a religious order. Its purpose is 
              far more ancient—to reawaken the sacred impulse embedded in every human soul. This is the silent code within our 
              DNA that calls us to act with compassion, to serve without recognition, to lift others in their time of need 
              without hesitation, expectation, or reward... Origin's gifts are not given to convert, but to restore. They are 
              not meant to glorify an organization, but to illuminate the truth that lives within each of us: That doing good 
              is our first memory, and our final inheritance."
            </blockquote>
          </div>
        </section>

        {/* Core Principles */}
        <section className="document-section">
          <h2 className="section-title">Core Principles</h2>
          <div className="section-content">
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
                Everything we build mirrors the patterns of natural growth. We do not impose control; we create the conditions 
                where potential unfolds on its own. Like a nourished seed, each project grows from its encoded potential—thriving 
                because the system gets out of its way. This is why Origin's creations feel alive, intuitive, and inevitable. 
                They are not mechanical; they are organic blueprints brought into form.
              </p>
            </div>
          </div>
        </section>

        {/* The Irrevocable Declarations */}
        <section className="document-section">
          <h2 className="section-title">The Irrevocable Declarations</h2>
          <div className="section-content">
            <p>
              The Doctrine makes the following declarations. These are not goals. These are laws—spiritual, ethical, and operational.
            </p>

            <div className="declarations-list">
              <div className="declaration">
                <h4>Human dignity is sacred.</h4>
                <p>Every structure, reward, and process must protect the inherent worth of all contributors, especially those who remain unseen.</p>
              </div>

              <div className="declaration">
                <h4>Ideas belong to their originators.</h4>
                <p>Origin never claims ownership over ideas. It amplifies them—while protecting their creators from theft, exploitation, or erasure.</p>
              </div>

              <div className="declaration">
                <h4>Giving must always precede gaining.</h4>
                <p>The system cannot be used to enrich oneself at the expense of others. The flow of energy must move outward before it cycles back.</p>
              </div>

              <div className="declaration">
                <h4>Anonymity is a shield, not a veil.</h4>
                <p>The absence of names is a safeguard. It keeps the work free from ego, fame, and institutional corruption.</p>
              </div>

              <div className="declaration">
                <h4>Technology must serve the soul.</h4>
                <p>Origin's AI is not the future. Human creativity is. The system exists to accelerate and amplify genius—not to replace it.</p>
              </div>

              <div className="declaration">
                <h4>The mission is the master.</h4>
                <p>No person, position, or platform can become more important than the mission itself.</p>
              </div>

              <div className="declaration">
                <h4>The cycle must remain sacred.</h4>
                <p>Nothing must ever interrupt the flow of ideas → support → creation → reward → reinvestment.</p>
              </div>

              <div className="declaration">
                <h4>The system must be in motion.</h4>
                <p>Progress is not optional. Origin must always be evolving, building, helping—never stagnant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* A Doctrine That Cannot Be Changed */}
        <section className="document-section">
          <h2 className="section-title">A Doctrine That Cannot Be Changed</h2>
          <div className="section-content">
            <p>
              It is called Immutable for a reason. Even the Trust Protector—the final authority, the human failsafe—cannot 
              alter it. No board vote, no user petition, no external pressure. Nothing can amend, dilute, override, or 
              reinterpret the Doctrine. This is not rigidity for tradition's sake. This is resilience for mission's sake. 
              The Doctrine was forged to outlive trends, politics, and founders. It exists to ensure that what matters most 
              is never sacrificed for what matters now.
            </p>
          </div>
        </section>

        {/* Closing Charge */}
        <section className="document-section">
          <h2 className="section-title">Closing Charge: The Guardian's Vow</h2>
          <div className="section-content">
            <p>
              You are not being asked to agree with the Doctrine. You are being asked to protect it. This is not a negotiation. 
              It is a binding inheritance. If you ever find yourself tempted to soften its edge, reinterpret its rules, or 
              modernize its intent—remember this: The Doctrine is not yours to improve. It is yours to guard.
            </p>
            <p>
              The Immutable Doctrine is why Origin exists. Without it, nothing matters—no project, no trust, no code, no campaign. 
              It is the soul of the system, and it will either be preserved perfectly or be forever lost. You are now its keeper.
            </p>
            
            <div className="guardian-commandments">
              <div className="commandment">Do not betray the Doctrine.</div>
              <div className="commandment">Do not edit the Doctrine.</div>
              <div className="commandment">Do not explain away the Doctrine.</div>
            </div>
            
            <p className="final-charge">
              Live it. Protect it. And make every decision as if your silence could echo for a thousand years.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="document-footer">
          <div className="hash-verification">
            <h3>Canonical Hash Verification</h3>
            <p className="hash-code">
              SHA-256 (Origin_Immutable_Doctrine_2025-08-18.md): f09c6d4ce4cf55c3c75b8cdec821b2c0fbfcc5cd88420abea7eedb5df3a359fd
            </p>
            <p className="hash-note">
              This hash can be used to verify the authenticity and integrity of this document. The Doctrine is immutable—any 
              change to the text will result in a different hash, proving tampering.
            </p>
          </div>
          
          <div className="immutable-seal">
            <div className="seal-icon">🛡️</div>
            <div className="seal-text">
              <strong>IMMUTABLE SEAL</strong><br />
              This document cannot be altered by any authority, including the Trust Protector.
            </div>
          </div>
          
          <button className="return-button" onClick={onNavigateHome}>
            Return to The Cathedral
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DoctrinePage;

