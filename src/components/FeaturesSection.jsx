import React from 'react'
import fundingIcon from '../assets/funding-icon.png'
import protectionIcon from '../assets/protection-icon.png'
import supportIcon from '../assets/support-icon.png'

const FeaturesSection = () => {
  const features = [
    {
      icon: fundingIcon,
      title: "The Idea Engine",
      subtitle: "From Spark to Reality",
      description: "Transforms sparks of genius into real-world projects—from apps and medical devices to metaphysical instruments. Every idea gets the full power of our systems, team, and resources.",
      capabilities: ["Full Development Team", "Technical Infrastructure", "Launch Strategy", "Market Positioning"]
    },
    {
      icon: protectionIcon,
      title: "The Contributor Pathway", 
      subtitle: "True Co-Creation",
      description: "Participants are not 'users'—they become members of The Origin Collective, true co-creators in the mission. Your relationship with Origin is partnership, not transaction.",
      capabilities: ["Co-Creator Status", "Profit Sharing", "Legal Protection", "Ongoing Support"]
    },
    {
      icon: supportIcon,
      title: "Transparency by Design",
      subtitle: "Anonymous Founder, Transparent Mission",
      description: "An anonymous founder, but a radically transparent and auditable mission. Every flow of value, every decision, every process is traceable and protected.",
      capabilities: ["Full Audit Trail", "Open Processes", "Protected Identity", "Verified Authenticity"]
    }
  ]

  const principles = [
    {
      title: "Category Creation Principle",
      description: "Origin doesn't compete in existing markets—it creates entirely new categories of thought and technology.",
      icon: "🚀"
    },
    {
      title: "Inevitability Architecture", 
      description: "Every section breathes inevitability—not if this will change the world, but when.",
      icon: "⚡"
    },
    {
      title: "Perpetual Evolution",
      description: "The system grows stronger with every idea, every project, every co-creator who joins the collective.",
      icon: "🌱"
    }
  ]

  return (
    <section className="origin-features-section relative min-h-screen flex items-center py-20 origin-indigo-bg">
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="origin-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Game-Changing Capabilities
            </h2>
            <p className="origin-sans text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              These are not features—they are fundamental shifts in how world-changing ideas 
              are discovered, developed, and delivered to humanity.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-electric-blue/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-16 h-16 opacity-80"
                  />
                </div>
                
                <h3 className="origin-serif text-2xl text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <h4 className="origin-sans text-electric-blue font-medium mb-4 text-center">
                  {feature.subtitle}
                </h4>
                <p className="origin-sans text-white/80 leading-relaxed mb-6 text-center">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-electric-blue rounded-full mr-3 origin-pulse" style={{animationDelay: `${capIndex * 0.2}s`}}></div>
                      <span className="origin-sans text-white/70 text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Principles */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 mb-16">
            <h3 className="origin-serif text-3xl text-white mb-8 text-center">
              Core Principles
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h4 className="origin-serif text-xl text-white mb-3">
                    {principle.title}
                  </h4>
                  <p className="origin-sans text-white/70 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Difference Statement */}
          <div className="text-center bg-gradient-to-r from-electric-blue/10 to-electric-blue/5 rounded-2xl p-12 border border-electric-blue/20">
            <h3 className="origin-serif text-3xl md:text-4xl text-white mb-6">
              This Is Not Innovation—This Is Evolution
            </h3>
            <p className="origin-sans text-lg text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              While others build companies, we build ecosystems. While others seek profit, we seek transformation. 
              While others compete for market share, we create entirely new realities. 
              This is not about disruption—this is about <strong>awakening</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-left">
                <h4 className="origin-serif text-xl text-electric-blue mb-3">Traditional Approach</h4>
                <ul className="space-y-2 text-white/70 origin-sans text-sm">
                  <li>• Build a company</li>
                  <li>• Seek funding</li>
                  <li>• Compete for market</li>
                  <li>• Extract value</li>
                  <li>• Exit strategy</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="origin-serif text-xl text-electric-blue mb-3">The Origin Way</h4>
                <ul className="space-y-2 text-white/70 origin-sans text-sm">
                  <li>• Join a movement</li>
                  <li>• Receive full support</li>
                  <li>• Create new categories</li>
                  <li>• Share value</li>
                  <li>• Eternal mission</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

