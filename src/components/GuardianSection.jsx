import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import cathedralBg from '../assets/cathedral-background.png'
import seedOfLife from '../assets/seed-of-life.png'

const GuardianSection = () => {
  return (
    <section className="origin-guardian-section relative min-h-screen flex items-center py-20">
      {/* Cathedral Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${cathedralBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-origin-indigo/20 to-origin-indigo/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Sacred Symbol */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <img 
                src={seedOfLife} 
                alt="Seed of Life" 
                className="w-32 h-32 origin-pulse opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-radial from-electric-blue/20 via-transparent to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Main Message */}
          <h2 className="origin-serif text-4xl md:text-5xl lg:text-6xl text-origin-indigo mb-8 leading-tight">
            The Guardian's Duty
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 border border-origin-indigo/20 shadow-2xl mb-12">
            <p className="origin-sans text-xl md:text-2xl text-origin-indigo/80 leading-relaxed mb-8">
              Origin is not ruled—it is <strong>guarded</strong>. The Trust Protector ensures the mission stays pure, 
              the rules stay fair, and the vision endures across generations.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-center gap-4">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse"></div>
                <span className="origin-sans text-origin-indigo/70">The structure is eternal</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="origin-sans text-origin-indigo/70">The mission is protected</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '1s'}}></div>
                <span className="origin-sans text-origin-indigo/70">The watch continues</span>
              </div>
            </div>

            <div className="border-t border-origin-indigo/20 pt-8">
              <h3 className="origin-serif text-2xl md:text-3xl text-origin-indigo mb-6">
                "The work is done. Now the watch begins."
              </h3>
              <p className="origin-sans text-lg text-origin-indigo/70 leading-relaxed">
                This is the final line of the manual, and the final thought for any visitor. 
                The cathedral is built. The systems are running. The council is assembled. 
                All that remains is for you to bring your spark.
              </p>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="space-y-6">
            <Button 
              className="origin-cta-button origin-sans text-lg px-12 py-4"
              onClick={() => document.getElementById('pathway')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join The Origin Collective
            </Button>
            
            <p className="origin-sans text-origin-indigo/60 text-sm">
              The cathedral awaits your genius. The watch has begun.
            </p>
          </div>

          {/* Footer Information */}
          <div className="mt-16 pt-8 border-t border-origin-indigo/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="origin-serif text-lg text-origin-indigo mb-2">The Codex</h4>
                <p className="origin-sans text-sm text-origin-indigo/60">
                  The sacred book encoding our complete philosophy and future directives
                </p>
              </div>
              <div>
                <h4 className="origin-serif text-lg text-origin-indigo mb-2">The Protocol</h4>
                <p className="origin-sans text-sm text-origin-indigo/60">
                  The operational manual explaining exactly how Origin receives and develops ideas
                </p>
              </div>
              <div>
                <h4 className="origin-serif text-lg text-origin-indigo mb-2">The Doctrine</h4>
                <p className="origin-sans text-sm text-origin-indigo/60">
                  The unchangeable principles of human dignity, selfless giving, and integrity
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default GuardianSection

