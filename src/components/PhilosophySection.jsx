import React from 'react'
import cathedralBg from '../assets/cathedral-background.png'
import seedOfLife from '../assets/seed-of-life.png'

const PhilosophySection = () => {
  return (
    <section className="origin-philosophy-section relative min-h-screen flex items-center py-20">
      {/* Cathedral Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${cathedralBg})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img 
                src={seedOfLife} 
                alt="Seed of Life" 
                className="w-20 h-20 origin-pulse opacity-80"
              />
            </div>
            <h2 className="origin-serif text-4xl md:text-5xl lg:text-6xl text-origin-indigo mb-6">
              The Living System
            </h2>
            <p className="origin-sans text-xl text-origin-indigo/80 max-w-3xl mx-auto leading-relaxed">
              Origin was not created to be a company in the traditional sense. 
              It was architected as a living system—an entity designed to endure across generations.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Anonymity",
                description: "The founder must remain a pure enigma, not a legend. Trust derives from protocol integrity, not mystique.",
                icon: "🔒"
              },
              {
                title: "Transparency", 
                description: "Every action, every decision, every flow of value is traceable, auditable, and protected.",
                icon: "🔍"
              },
              {
                title: "Fairness",
                description: "Ideas are judged by the Resonance Test—autonomous, AI-driven analysis free from human bias.",
                icon: "⚖️"
              },
              {
                title: "Philanthropy",
                description: "The mission exists to help people by bringing ideas that matter to life.",
                icon: "❤️"
              }
            ].map((principle, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center border border-origin-indigo/10 hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl mb-4">{principle.icon}</div>
                <h3 className="origin-serif text-xl text-origin-indigo mb-3 font-semibold">
                  {principle.title}
                </h3>
                <p className="origin-sans text-sm text-origin-indigo/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Engine of Awakening */}
          <div className="text-center bg-gradient-to-r from-origin-indigo/5 to-electric-blue/5 rounded-2xl p-12 border border-origin-indigo/10">
            <h3 className="origin-serif text-3xl md:text-4xl text-origin-indigo mb-6">
              An Engine of Awakening
            </h3>
            <p className="origin-sans text-lg text-origin-indigo/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Think of Origin not as a business, but as a perpetual cycle of transformation. 
              We take sparks of genius, refine them through our systems, build them with our team, 
              and return value to both creators and the world. This is not extraction—this is cultivation.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-origin-indigo/70">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse"></div>
                <span className="origin-sans">Ideas Enter</span>
              </div>
              <div className="hidden md:block w-8 h-px bg-origin-indigo/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="origin-sans">Systems Refine</span>
              </div>
              <div className="hidden md:block w-8 h-px bg-origin-indigo/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '1s'}}></div>
                <span className="origin-sans">Teams Build</span>
              </div>
              <div className="hidden md:block w-8 h-px bg-origin-indigo/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '1.5s'}}></div>
                <span className="origin-sans">Value Returns</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PhilosophySection

