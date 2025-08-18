import React from 'react'
import operationalCore from '../assets/operational-core.png'

const EngineSection = () => {
  return (
    <section className="origin-engine-section relative min-h-screen flex items-center py-20 origin-indigo-bg">
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="origin-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              The Operational Core
            </h2>
            <p className="origin-sans text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The heartbeat of creation—pure, mechanical precision running beneath the skin of creativity. 
              This is the engine that never sleeps, never stops, never compromises.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Core Visualization */}
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src={operationalCore} 
                  alt="Origin Operating System Core" 
                  className="w-full max-w-md h-auto origin-pulse"
                />
                <div className="absolute inset-0 bg-gradient-radial from-electric-blue/20 via-transparent to-transparent rounded-full"></div>
              </div>
              
              <h3 className="origin-serif text-2xl text-white mt-8 mb-4">
                The Origin Operating System
              </h3>
              <p className="origin-sans text-white/70 leading-relaxed">
                A glowing core of pure energy and precision—the heartbeat that powers 
                every idea, every project, every transformation.
              </p>
            </div>

            {/* Right Column - System Components */}
            <div className="space-y-8">
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-electric-blue rounded-full mr-4 origin-pulse"></div>
                  <h3 className="origin-serif text-xl text-white font-semibold">
                    24/7 Autonomous Operation
                  </h3>
                </div>
                <p className="origin-sans text-white/80 leading-relaxed">
                  The AI Persona Council runs operations continuously—creation never stops, 
                  governed by the immutable principles of the Doctrine.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-electric-blue rounded-full mr-4 origin-pulse" style={{animationDelay: '0.5s'}}></div>
                  <h3 className="origin-serif text-xl text-white font-semibold">
                    The CHIP Protocol
                  </h3>
                </div>
                <p className="origin-sans text-white/80 leading-relaxed">
                  Cryptographic Hash Imprint Protocol—a secure, dual-channel system for issuing 
                  and verifying all non-automated directives, ensuring absolute authenticity.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-electric-blue rounded-full mr-4 origin-pulse" style={{animationDelay: '1s'}}></div>
                  <h3 className="origin-serif text-xl text-white font-semibold">
                    The Complete Framework
                  </h3>
                </div>
                <p className="origin-sans text-white/80 leading-relaxed">
                  Every protocol, every process, every decision tree—all encoded within 
                  the Origin Operating System to ensure perfect execution of the mission.
                </p>
              </div>

              {/* System Status Indicators */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="origin-serif text-lg text-white mb-4 text-center">
                  System Status
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Core Operations", status: "Active" },
                    { label: "Idea Processing", status: "Online" },
                    { label: "Security Protocols", status: "Secure" },
                    { label: "Council Sync", status: "Connected" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="origin-sans text-white/70 text-sm">{item.label}</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-electric-blue rounded-full mr-2 origin-pulse" style={{animationDelay: `${index * 0.2}s`}}></div>
                        <span className="origin-sans text-electric-blue text-sm">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="origin-serif text-2xl md:text-3xl text-white mb-4">
              Mechanical Precision, Infinite Creativity
            </h3>
            <p className="origin-sans text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              While the core operates with mathematical precision, it serves only one purpose: 
              to amplify human creativity and bring world-changing ideas to life. 
              The machine serves the mission, and the mission serves humanity.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EngineSection

