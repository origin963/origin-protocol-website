import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import FrameworkSection from './components/FrameworkSection'
import PathwaySection from './components/PathwaySection'
import EngineSection from './components/EngineSection'
import CouncilSection from './components/CouncilSection'
import FeaturesSection from './components/FeaturesSection'
import GuardianSection from './components/GuardianSection'

function App() {
  return (
    <div className="App origin-cathedral">
      {/* The Mission Invite */}
      <HeroSection />
      
      {/* The Living System */}
      <PhilosophySection />
      
      {/* The Legal Fortress */}
      <FrameworkSection />
      
      {/* The Co-Creator Journey */}
      <PathwaySection />
      
      {/* The Operational Core */}
      <EngineSection />
      
      {/* The Persona Roundtable */}
      <CouncilSection />
      
      {/* Game-Changing Capabilities */}
      <FeaturesSection />
      
      {/* The Guardian's Watch */}
      <GuardianSection />
    </div>
  )
}

export default App

