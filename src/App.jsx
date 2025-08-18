import React from 'react';
import './App.css';

// Import the four main sections based on OPTI's master briefing
import InvitationSection from './components/sections/InvitationSection';
import PromiseSection from './components/sections/PromiseSection';
import EngineSection from './components/sections/EngineSection';
import DoorSection from './components/sections/DoorSection';

// Import sacred document pages
import CodexPage from './components/pages/CodexPage';
import ProtocolPage from './components/pages/ProtocolPage';
import DoctrinePage from './components/pages/DoctrinePage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  // Handle navigation between main site and sacred documents
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Render sacred document pages
  if (currentPage === 'codex') {
    return <CodexPage onNavigateHome={() => navigateTo('home')} />;
  }
  if (currentPage === 'protocol') {
    return <ProtocolPage onNavigateHome={() => navigateTo('home')} />;
  }
  if (currentPage === 'doctrine') {
    return <DoctrinePage onNavigateHome={() => navigateTo('home')} />;
  }

  // Main four-section journey as specified by OPTI
  return (
    <div className="App origin-cathedral">
      {/* Section 1: The Invitation - "Have you ever had an idea that could help the world?" */}
      <InvitationSection />
      
      {/* Section 2: The Promise - "Origin provides everything you need to build it." */}
      <PromiseSection />
      
      {/* Section 3: The Engine - "You are always honored for your creation." */}
      <EngineSection />
      
      {/* Section 4: The Door - "All that's missing is your spark." */}
      <DoorSection />
      
      {/* Footer with Sacred Documents Navigation */}
      <footer className="sacred-footer">
        <div className="footer-content">
          <div className="sacred-documents">
            <button 
              className="sacred-link"
              onClick={() => navigateTo('codex')}
            >
              <div className="document-title">The Codex</div>
              <div className="document-subtitle">The sacred book encoding our complete philosophy and future directives</div>
            </button>
            
            <button 
              className="sacred-link"
              onClick={() => navigateTo('protocol')}
            >
              <div className="document-title">The Protocol</div>
              <div className="document-subtitle">The operational manual explaining exactly how Origin receives and develops ideas</div>
            </button>
            
            <button 
              className="sacred-link"
              onClick={() => navigateTo('doctrine')}
            >
              <div className="document-title">The Doctrine</div>
              <div className="document-subtitle">The unchangeable principles of human dignity, selfless giving, and integrity</div>
            </button>
          </div>
          
          <div className="guardian-closing">
            <div className="closing-message">"The work is done. Now the watch begins."</div>
            <div className="cathedral-tagline">The cathedral awaits your genius. The watch has begun.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

