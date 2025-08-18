import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import heroCathedral from '../assets/hero-cathedral.png'

const HeroSection = () => {
  return (
    <section className="origin-hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cathedral Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCathedral})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Sacred Geometry Accent */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 border border-electric-blue/30 rounded-full flex items-center justify-center origin-pulse">
            <div className="w-16 h-16 border border-electric-blue/50 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-electric-blue/20 rounded-full origin-pulse"></div>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <h1 className="origin-serif text-white mb-8 leading-tight">
          <span className="block text-4xl md:text-6xl lg:text-7xl mb-4 origin-fade-in">
            You don't need to start a company
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl mb-6 text-electric-blue origin-fade-in" style={{animationDelay: '0.3s'}}>
            to change the world.
          </span>
        </h1>

        <div className="origin-sans text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed origin-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="mb-6">
            We've already done the hard part—the structure, the team, the legal, the systems.
          </p>
          <p className="mb-6">
            <span className="text-electric-blue font-medium">All you need is the spark.</span>
          </p>
          <p className="text-lg">
            You bring the idea. We build it. We launch it. We honor you for it.<br />
            And together, we help people by bringing ideas that matter to life.
          </p>
        </div>

        {/* Call to Action */}
        <div className="origin-fade-in" style={{animationDelay: '0.9s'}}>
          <Button 
            className="origin-cta-button origin-sans text-lg px-8 py-4 mb-4"
            onClick={() => document.getElementById('pathway')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enter The Origin Collective
          </Button>
          <p className="text-white/70 text-sm mt-4">
            Join the movement. Awaken your quiet genius.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 origin-pulse">
        <div className="flex flex-col items-center">
          <span className="text-xs mb-2 origin-sans">Discover the Cathedral</span>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="w-2 h-2 bg-electric-blue rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

