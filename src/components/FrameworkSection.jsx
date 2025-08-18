import React from 'react'
import legalFortress from '../assets/legal-fortress.png'

const FrameworkSection = () => {
  return (
    <section className="origin-framework-section relative min-h-screen flex items-center py-20 origin-indigo-bg">
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="origin-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              The Legal Fortress
            </h2>
            <p className="origin-sans text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A multi-layered legal and financial architecture designed for absolute anonymity and protection. 
              Legal strength and anonymity are not side notes—they're the lock and key of permanence.
            </p>
          </div>

          {/* Fortress Visualization */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <img 
                src={legalFortress} 
                alt="Legal Fortress Architecture" 
                className="w-full max-w-2xl h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-origin-indigo/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Fortress Layers */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Left Column - Foundation Layers */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 origin-pulse"></div>
                  <h3 className="origin-serif text-xl text-white font-semibold">
                    The Deepest Foundation
                  </h3>
                </div>
                <h4 className="origin-sans text-electric-blue font-medium mb-2">
                  The Perpetual Purpose Trust
                </h4>
                <p className="origin-sans text-white/80 text-sm leading-relaxed">
                  The ultimate authority and silent, ownerless core of the ecosystem. 
                  Its sole beneficiary is the mission itself—ensuring eternal purpose beyond any individual.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 origin-pulse" style={{animationDelay: '0.5s'}}></div>
                  <h3 className="origin-serif text-xl text-white font-semibold">
                    The Anonymity Firewall
                  </h3>
                </div>
                <h4 className="origin-sans text-electric-blue font-medium mb-2">
                  Attorney-Client Shield Protocol
                </h4>
                <p className="origin-sans text-white/80 text-sm leading-relaxed">
                  A specialized law firm acts as a legally privileged proxy, creating an unbreakable 
                  firewall between the Protector's identity and any public record.
                </p>
              </div>
            </div>

            {/* Right Column - Operational Layers */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 origin-pulse" style={{animationDelay: '1s'}}></div>
                  <h3 className="origin-serif text-xl text-white font-semibold">
                    The Primary Stone Wall
                  </h3>
                </div>
                <h4 className="origin-sans text-electric-blue font-medium mb-2">
                  Origin X Holdings LLC
                </h4>
                <p className="origin-sans text-white/80 text-sm leading-relaxed">
                  An anonymous Wyoming LLC, wholly owned by the Trust, that serves as the primary 
                  legal and financial shield for all operations.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 origin-pulse" style={{animationDelay: '1.5s'}}></div>
                  <h3 className="origin-serif text-xl text-white font-semibold">
                    The Mission Arms
                  </h3>
                </div>
                <h4 className="origin-sans text-electric-blue font-medium mb-2">
                  The Origin Foundation & Creators Trust
                </h4>
                <p className="origin-sans text-white/80 text-sm leading-relaxed">
                  The public-facing, operational arms that serve The Origin Collective, 
                  all legally controlled by the main holding LLC.
                </p>
              </div>
            </div>
          </div>

          {/* Impermeability Statement */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="origin-serif text-2xl md:text-3xl text-white mb-4">
              This Structure Creates Impermeability
            </h3>
            <p className="origin-sans text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              The Founder is unseen, but the system is undeniable. Every layer reinforces the next, 
              creating a fortress that protects both the mission's integrity and its eternal continuity. 
              This is not just legal protection—this is architectural permanence.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FrameworkSection

