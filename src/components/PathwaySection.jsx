import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import sacredCycle from '../assets/sacred-cycle.png'
import cathedralBg from '../assets/cathedral-background.png'

const PathwaySection = () => {
  const [formData, setFormData] = useState({ story: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would integrate with The Compass portal
    console.log('Idea submitted:', formData.story)
    alert('Your spark has been received. Welcome to The Origin Collective.')
  }

  return (
    <section id="pathway" className="origin-pathway-section relative min-h-screen flex items-center py-20">
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
              The Co-Creator Pathway
            </h2>
            <p className="origin-sans text-xl text-origin-indigo/80 max-w-3xl mx-auto leading-relaxed">
              This is not crowdsourcing. It's curated genius. Join a movement where your ideas 
              become world-changing tools, and you are honored for every creation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - The Sacred Cycle */}
            <div>
              <h3 className="origin-serif text-3xl text-origin-indigo mb-8 text-center">
                The Sacred Cycle
              </h3>
              
              <div className="flex justify-center mb-8">
                <img 
                  src={sacredCycle} 
                  alt="Sacred Cycle" 
                  className="w-full max-w-md h-auto"
                />
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-origin-indigo/10">
                  <h4 className="origin-serif text-xl text-origin-indigo mb-3 flex items-center">
                    <span className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center text-white text-sm mr-3">1</span>
                    The Gift of Proceeds
                  </h4>
                  <p className="origin-sans text-origin-indigo/80 leading-relaxed">
                    <strong>100% of a project's Net Profits</strong> are legally gifted to its Co-Creator. 
                    You are not just credited—you are honored with the full financial reward of your genius.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-origin-indigo/10">
                  <h4 className="origin-serif text-xl text-origin-indigo mb-3 flex items-center">
                    <span className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center text-white text-sm mr-3">2</span>
                    The Gift of Gratitude
                  </h4>
                  <p className="origin-sans text-origin-indigo/80 leading-relaxed">
                    The Co-Creator then <strong>voluntarily donates 50%</strong> of those profits back to 
                    The Origin Foundation, fueling the next cycle of creation and helping more ideas come to life.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - The Compass Portal */}
            <div>
              <h3 className="origin-serif text-3xl text-origin-indigo mb-8 text-center">
                The Compass Portal
              </h3>
              
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-8 border border-origin-indigo/20 shadow-xl">
                <p className="origin-sans text-origin-indigo/80 mb-6 text-center leading-relaxed">
                  Your ideas are judged by the <strong>Resonance Test</strong>—an autonomous, 
                  AI-driven analysis of their alignment with our mission, free from human bias.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="origin-serif text-lg text-origin-indigo block mb-3">
                      Tell us your story
                    </label>
                    <textarea
                      value={formData.story}
                      onChange={(e) => setFormData({ story: e.target.value })}
                      placeholder="What idea could help the world? Share your spark of genius..."
                      className="origin-form-input h-32 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="origin-cta-button w-full origin-sans text-lg py-4"
                  >
                    Submit to The Idea Vault™
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-origin-indigo/10">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm text-origin-indigo/70">
                    <div>
                      <div className="w-8 h-8 bg-electric-blue/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse"></div>
                      </div>
                      <span className="origin-sans">Secure</span>
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-electric-blue/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '0.5s'}}></div>
                      </div>
                      <span className="origin-sans">Protected</span>
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-electric-blue/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-3 h-3 bg-electric-blue rounded-full origin-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                      <span className="origin-sans">Auditable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PathwaySection

