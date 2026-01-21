import React from 'react'
import { Link } from 'react-router-dom'
import NavbarTry from '../components/NavbarTry'

function AboutPage() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden bg-skater-yellow">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative ml-0 lg:ml-96">
          <img 
            src="/assets/about_stake.png" 
            alt="Skater" 
            className="absolute inset-0 w-full lg:w-full h-full object-cover "
          />
        </div>

        {/* Right Side - Content */}
          <div className="absolute top-0 right-0 left-0">
            <NavbarTry fixed={false} />
          </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-4 lg:py-12 relative">
          {/* Navbar on top right */}
        

          <div className="mt-4">
            {/* Logo */}
            <div className="mb-12 flex flex-col  items-center justify-center">
             <img src="assets/logo.png" className='w-[70%]' />
              <p className="text-base md:text-lg font-normal text-black">
                Ride the Impossible from Bristol to the World.
              </p>
            </div>

            {/* Our Soul */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-display font-black text-[#00BCD4] mb-4 uppercase">
                OUR SOUL
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-black">
                Back in Bristol, Scaters was immersed in one of the world's most iconic street cultures. We set out to engineer more than just boards. We engineer freedom. We are the heartbeat of the UK skate scene, bringing local grit to the global stage.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-[#00BCD4] mb-4 uppercase">
                OUR MISSION
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-black">
                Our mission is to dissolve the boundary between "I can't" and "Watch me." From the steep hills of Bristol to the back alleys of London, we turn rough streets into spaces for creativity and movement. With Scaters, the city becomes your playground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our DNA Section */}
      {/* Our DNA Section */}
      <section className="bg-[#f9e7e5] text-black py-2 px-4 md:px-8">
        <NavbarTry fixed={false} logoWhite />
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-black text-center mb-12 text-[#FF1493] uppercase">
            OUR DNA
          </h2>
          
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
            {/* Left side - DNA items */}
            <div className="space-y-6">
              {[
                {
                  title: 'UNBOUNDED FREEDOM',
                  desc: 'We break the boundary between "impossible" and "possible," turning every street into a space for absolute liberty.'
                },
                {
                  title: 'UK AUTHENTICITY',
                  desc: 'Born in Bristol, we stay true to the raw soul of British skate culture—designed by riders, for riders.'
                },
                {
                  title: 'COMMUNITY INTEGRITY',
                  desc: 'We prioritize local skate shops over e-commerce to keep the heart of the UK skating scene alive and thriving.'
                },
                {
                  title: 'FEARLESS INNOVATION',
                  desc: 'We obsess over engineering and durability so you can push past your limits with total confidence.'
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-[#f8d14f] border-4 border-dashed border-black rounded-full px-6 py-3 shrink-0 w-50 flex items-center justify-center">
                    <span className="text-base lg:text-lg font-black uppercase text-center">{item.title}</span>
                  </div>
                  <p className="text-base leading-relaxed pt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/assets/about_stakes_men.png" 
                alt="Skater" 
                className="w-full max-w-sm lg:max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

  
    </div>
  )
}

export default AboutPage
