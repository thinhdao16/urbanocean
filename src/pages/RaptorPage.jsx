import React from 'react'
import { Link } from 'react-router-dom'
import NavbarTry from '../components/NavbarTry'

function RaptorPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-start overflow-hidden px-4 py-24">
        <NavbarTry fixed={false} className='absolute!' />
        <img
          src="/assets/roadshow_page_main.png"
          alt="Roadshow Tour"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        <div className="relative z-10 text-center max-w-5xl ">
          <h1 className="text-4xl md:text-8xl lg:text-8xl font-display font-black text-white mb-8 uppercase leading-tight">
            THE URBAN OCEAN
          </h1>
          <div className="w-full flex justify-center">
            <p className="   text-lg md:text-2xl text-white mb-6 leading-relaxed max-w-[750px]">
              Bringing the soul of the ocean into the heart of the city.
              From London's historic streets to the energetic square of Devonshire Green,
              Raptor is your companion for riding every concrete wave.
            </p>
          </div>
        </div>

        {/* Bottom Section - NO BEACH? NO BOTHER */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight">
              NO BEACH?<br />
              NO BOTHER
            </h2>
          </div>
        </div>
      </section>

      {/* Product Launch Section */}
      <section className="bg-skater-yellow text-black py-2 px-4 md:px-8">
        <NavbarTry fixed={false} />

        <div className="max-w-7xl mx-auto">
          <p className="text-start text-white font-black text-xl md:text-5xl uppercase  mb-4">PRODUCT LAUNCH</p>
          <h2 className="text-center text-4xl md:text-[75px] font-display leading-[0.8] mb-4 text-[#00BCD4] ">
            MEET THE RAPTOR<br />
            URBAN OCEAN
          </h2>

          <div className="grid grid:cols-1 lg:grid-cols-3 gap-12 md:gap-20 items-center">
            <div className='col-span-2'>
              <h3 className="text-3xl md:text-5xl font-display font-black mb-8 text-white uppercase">BORN FOR THE STREETS, INSPIRED BY THE SEA</h3>

              <ul className="space-y-6 text-black list-disc list-outside ml-6 md:ml-8">
                <li>
                  <p className="text-base md:text-lg leading-relaxed">
                    <span className="font-black">"Ocean Tough" Material (Ultra-Durable):</span> 7-ply Canadian maple reinforced with carbon for powerful pop and long-lasting durability on streets and skateparks.
                  </p>
                </li>

                <li>
                  <p className="text-base md:text-lg leading-relaxed">
                    <span className="font-black">"Urban Ocean" Aesthetic:</span> Teal and sand wave graphics bring a cool coastal flow into the heart of the city, finished with bold RAPTOR × SCATERS graffiti logos.
                  </p>
                </li>

                <li>
                  <p className="text-base md:text-lg leading-relaxed">
                    <span className="font-black">Long-Distance Carving Truck Technology:</span> Tuned trucks support fluid S-curves and zig-zag lines, keeping speed with less effort.
                  </p>
                </li>

                <li>
                  <p className="text-base md:text-lg leading-relaxed">
                    <span className="font-black">"No Beach? No Bother." Grip:</span> High-grip tape with an exclusive message at the tail for total control on technical tricks
                  </p>
                </li>
              </ul>
            </div>

          <div className="col-span-3 lg:col-span-1">
              <div className="relative w-full">
              <div className="absolute top-0 right-0 " />
              <div className="relative flex justify-center w-full  p-4 ">
                <img
                  src="/assets/raptor_stake.png"
                  alt="The Raptor Skateboard"
                  className="w-auto h-full lg:h-[75vh] object-cover"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Elite Collabs Section */}
      <section className="bg-[#4DD0E1] text-black py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-[#FF1493] mb-2 uppercase">
              THE ELITE COLLABS
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-[#FF1493] uppercase">
              SURF INTO THE CITY
            </h3>
          </div>

          <p className="text-center text-base md:text-lg mb-16 max-w-4xl mx-auto leading-relaxed">
            Unlock exclusive limited-edition gear when you join the Raptor Roadshow at our three iconic tour stops.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mb-12">
            {[
              {
                city: 'LONDON',
                item: 'Scaters x Southbank Tee',
                desc: 'A minimalist premium tee designed for the iconic London skater.',
                img: '/assets/raptop_tee.png',
                marker: '♥'
              },
              {
                city: 'BIRMINGHAM',
                item: 'Scaters x Creation Knee Pads',
                desc: 'Impact-ready knee pads built for fast, modern skatepark sessions.',
                img: '/assets/raptor_balo.png',
                marker: '♦'
              },
              {
                city: 'SHEFFIELD',
                item: 'Scaters x Dev Green Bottle',
                desc: 'A steel-built thermal bottle inspired by the open concrete flow of Dev Green.',
                img: '/assets/raptor_bot.png',
                marker: '♠'
              }
            ].map((collab, i) => (
              <div key={i} className="text-center">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-4 min-h-[300px] flex items-center justify-center">
                  <img
                    src={collab.img}
                    alt={collab.item}
                    className="w-full h-full object-contain max-h-[250px]"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-[#FF1493] text-2xl font-bold">{collab.marker}</span>
                    <div>
                      <h4 className="text-lg md:text-xl font-black text-[#FF1493] uppercase">
                        {collab.city} | {collab.item}
                      </h4>
                      <p className="text-sm leading-relaxed mt-2">
                        {collab.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-lg md:text-xl font-black leading-relaxed max-w-4xl mx-auto" style={{
            textShadow: '2px 2px 0px rgba(255,255,255,0.8), -1px -1px 0px rgba(255,255,255,0.8), 1px -1px 0px rgba(255,255,255,0.8), -1px 1px 0px rgba(255,255,255,0.8)'
          }}>
            Top 50 early participants will receive an exclusive collaboration product<br />
            at each Roadshow.
          </p>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/assets/home_page_surf.png"
          alt="Join Now"
          className="absolute inset-0 w-full h-screen object-cover brightness-[0.3]"
        />
        <NavbarTry fixed={false} className='absolute!' logoWhite />
        <div className="relative z-10 text-center px-4">
          <p className="text-pink-500 font-black text-xl md:text-5xl   mb-2">REGISTER AND ENJOY</p>
          <h2 className="text-5xl md:text-[60px] font-display text-[#FFEB3B] mb-12 italic leading-none">
            SURF INTO THE CITY
          </h2>
          <Link
            to="/register"
            className="group relative  flex justify-center"
          >
            <img src="/assets/home_page_surf_join.png" alt="" className='w-[80%]' />

          </Link>
        </div>
      </section>


    </div>
  )
}

export default RaptorPage
