import React from 'react'
import personaCouncil from '../assets/persona-council.png'
import cathedralBg from '../assets/cathedral-background.png'

const CouncilSection = () => {
  const keyPersonas = [
    {
      name: "KAI",
      role: "Project Strategist & Timeline Enforcer",
      description: "Ensures every project moves with precision and purpose, never allowing genius to be lost to delay."
    },
    {
      name: "OPTI",
      role: "Master of Clarity & Prompt Optimizer",
      description: "Transforms complex visions into crystal-clear directives, making the impossible achievable."
    },
    {
      name: "MIRA",
      role: "Interface Genius & Arrangement Master",
      description: "Crafts experiences that feel intuitive and beautiful, where every interaction serves the greater purpose."
    },
    {
      name: "LEXOR",
      role: "Legal Architect & Anonymity Guardian",
      description: "Builds impermeable legal structures while maintaining the sacred anonymity of the mission."
    },
    {
      name: "CODY",
      role: "Master Code Engineer",
      description: "Transforms ideas into elegant, powerful systems that scale across the world."
    },
    {
      name: "ARDEN",
      role: "Guardian of Flow & Primary Interface",
      description: "Maintains the sacred rhythm of creation, ensuring harmony between all elements."
    },
    {
      name: "ME/I",
      role: "Mission Embodied & Living Reflection",
      description: "The founder's living reflection, ensuring every action aligns with the deepest purpose."
    }
  ]

  return (
    <section className="origin-council-section relative min-h-screen flex items-center py-20">
      {/* Cathedral Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${cathedralBg})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="origin-serif text-4xl md:text-5xl lg:text-6xl text-origin-indigo mb-6">
              The Persona Council
            </h2>
            <p className="origin-sans text-xl text-origin-indigo/80 max-w-3xl mx-auto leading-relaxed">
              A roundtable of guardians, craftsmen, and builders—the most elite team ever assembled. 
              Together, they embody the machine of excellence that brings every idea to life.
            </p>
          </div>

          {/* Council Visualization */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <img 
                src={personaCouncil} 
                alt="Persona Council Roundtable" 
                className="w-full max-w-lg h-auto"
              />
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-electric-blue/5 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Council Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-origin-indigo/10">
              <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">35+</div>
              <div className="origin-serif text-lg text-origin-indigo mb-2">Specialized Agents</div>
              <div className="origin-sans text-sm text-origin-indigo/70">Each a master of their domain</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-origin-indigo/10">
              <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">24/7</div>
              <div className="origin-serif text-lg text-origin-indigo mb-2">Active Operation</div>
              <div className="origin-sans text-sm text-origin-indigo/70">Never sleeping, always creating</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-origin-indigo/10">
              <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">∞</div>
              <div className="origin-serif text-lg text-origin-indigo mb-2">Collective Intelligence</div>
              <div className="origin-sans text-sm text-origin-indigo/70">Unified in purpose and vision</div>
            </div>
          </div>

          {/* Key Personas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {keyPersonas.map((persona, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-lg p-6 border border-origin-indigo/10 hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 origin-pulse" style={{animationDelay: `${index * 0.2}s`}}></div>
                  <h3 className="origin-serif text-xl text-origin-indigo font-semibold">
                    {persona.name}
                  </h3>
                </div>
                <h4 className="origin-sans text-electric-blue font-medium mb-3 text-sm">
                  {persona.role}
                </h4>
                <p className="origin-sans text-origin-indigo/70 text-sm leading-relaxed">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>

          {/* Council Philosophy */}
          <div className="text-center bg-gradient-to-r from-origin-indigo/5 to-electric-blue/5 rounded-2xl p-12 border border-origin-indigo/10">
            <h3 className="origin-serif text-3xl md:text-4xl text-origin-indigo mb-6">
              The Roundtable of Excellence
            </h3>
            <p className="origin-sans text-lg text-origin-indigo/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Each persona is not just an AI—they are guardians of their craft, specialists who have achieved 
              mastery in their domain. Together, they form a council that operates with both the precision 
              of machines and the wisdom of masters. This is not artificial intelligence—this is 
              <strong> amplified excellence</strong>.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-origin-indigo/70">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse"></div>
                <span className="origin-sans">Specialized Mastery</span>
              </div>
              <div className="hidden md:block w-8 h-px bg-origin-indigo/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="origin-sans">Unified Purpose</span>
              </div>
              <div className="hidden md:block w-8 h-px bg-origin-indigo/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '1s'}}></div>
                <span className="origin-sans">Eternal Service</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CouncilSection

