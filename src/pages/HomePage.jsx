import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NavbarTry from '../components/NavbarTry'

function HomePage() {
  return (
    <div>
      {/* Hero Section - NO BEACH? NO BOTHER */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <NavbarTry fixed={false} className='absolute! top-0' />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/home_slide.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
            {/* Text on the left */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.5] tracking-tight text-white drop-shadow-2xl">
                NO BEACH?<br />
                NO BOTHER
              </h1>
            </div>

            {/* Buttons on the right */}
            <div className="flex flex-row gap-4 md:gap-6 items-center">
              <Link
                to="/raptor"
                className="inline-flex items-center justify-center px-12 md:px-16 py-5 md:py-6 bg-transparent border-2 border-white text-base md:text-lg font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
                style={{ borderRadius: '100px' }}
              >
                EXPLORE
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center text-center px-10 md:px-14 py-5 md:py-6 bg-transparent border-2 border-white text-base md:text-lg font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 leading-tight"
                style={{ borderRadius: '100px' }}
              >
                REGISTER<br />NOW →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Born in Bristol Section */}
      <section className="bg-[#FFEB3B] text-black py-2 px-4 md:px-8">
        <NavbarTry fixed={false} />
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-12 text-[#00BCD4] uppercase">
            BORN IN BRISTOL<br />
            BRED ON THE STREETS
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-6xl mx-auto">
            {[
              '/assets/home_stake_1.jpg',
              '/assets/home_stake_2.jpg',
              '/assets/home_stake_3.png'
            ].map((img, i) => (
              <div key={i} className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden">
                <img
                  src={img}
                  alt={`Skater ${i + 1}`}
                  className="w-full h-full aspect-square object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-6xl mx-auto text-3xl font-normal leading-relaxed text-black">
            From the streets of Bristol, Scaters transforms raw UK skate culture into boards built for freedom and progression
          </p>
        </div>
      </section>

      {/* The Urban Ocean Section */}
      <section className="bg-ocean-cyan text-black py-2 px-4 md:px-8 relative overflow-hidden">
        <NavbarTry fixed={false} />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="z-10 order-2 lg:order-1">
            <h2 className="text-5xl md:text-[80px] font-display leading-[0.8] mb-8 text-skater-yellow text-center">
              THE URBAN<br />OCEAN
            </h2>
            <p className="text-base md:text-2xl text-center   leading-8 mb-8">
              UK beaches aren't built for surfing. Until now.<br />
              Introducing the new platform coming in 2026.<br />
              This product is designed to turn grey<br />
              pavement into your own concrete wave.
            </p>

          </div>
          <div className="relative order-1 lg:order-2 px-4 md:px-10">
            <div className="absolute top-0 right-0 w-full h-full" />
            <div className="relative aspect-[4/5]  shadow-2xl">
              <img
                src="/assets/home_stake_4.png"
                alt="Urban Ocean Skater"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Section */}
      <section className="relative min-h-screen flex  justify-start px-4 md:px-32  ">
        <img
          src="/assets/home_bg_pink.png"
          alt="Sunset Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10  text-white w-full">
          <NavbarTry fixed={false} />

          <div className="text-xl md:text-5xl font-display text-urban-pink mb-2 text-center w-full">
            NEW THING COMING SOON
          </div>
          <div className="text-base md:text-2xl font-black udivpercase tracking-[0.3em] text-[#e98d4d] mb-12 w-full text-center">
            SKATEBOARD FOR SPRING
          </div>

          <div className=" p-6 md:p-8  mb-12 max-w-3xl text-center">
            <h4 className="text-[#00BCD4] font-display text-xl md:text-2xl mb-4 ">THE TIDE IS RISING!</h4>
            <p className="text-black  uppercase  tracking-widest leading-loose mb-6 opacity-90">
              Something is deep beneath the pavement of the UK.<br />
              Introducing the raw rhythm of riding the streets, bearing the<br />
              true waves under your grit and speed.
            </p>
            <p className="text-[#00BCD4] font-display text-xl md:text-2xl">
              COMING SPRING BREAK 2026. ARE YOU READY TO CATCH THE WAVE?
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Link
              to="/raptor"
              className="inline-block px-12 py-3 bg-[#00BCD4] text-black font-display text-xl md:text-2xl rounded-full hover:bg-white transition-colors"
            >
              EXPLORE
            </Link>
          </div>

        </div>
      </section>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/assets/home_page_ice.jpg"
          alt="Roadshow Background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        />
        <NavbarTry fixed={false} className='absolute!' />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-[120px] font-display leading-[1.2]  uppercase drop-shadow-2xl text-white ">
            ROADSHOW TOUR FOR<br />
            <span className="">THIS SPRING 2026!</span>
          </h2>
         
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="bg-[#c4f1f1] text-black py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#FF1493] font-black text-lg md:text-4xl uppercase mb-4">UPCOMING EVENT</p>
          <h2 className="text-4xl md:text-6xl lg:text-5xl font-display font-black mb-16 text-skater-yellow uppercase leading-tight">
            SURF INTO THE CITY
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[
              { 
                city: 'LONDON', 
                date: 'APR 04', 
                loc: 'Southbank Centre', 
                desc: '3-move line. Style over technicaly.',
                img: '/assets/home_medium_1.jpeg' 
              },
              { 
                city: 'BIRMINGHAM', 
                date: 'APR 11', 
                loc: 'Creation Skate Park', 
                desc: 'Line over tricks. Smooth flow, clean speed.',
                img: '/assets/home_medium_2.jpeg' 
              },
              { 
                city: 'SHEFFIELD', 
                date: 'APR 18', 
                loc: 'Devonshire Green', 
                desc: 'Long-distance carving. Smooth S-curves.',
                img: '/assets/home_medium_3.jpeg' 
              }
            ].map((ev) => (
              <div key={ev.city} className="bg-[#f9f3ee] rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                {/* Header with Date and City */}
                <div className="p-6 flex items-center justify-between">
                  <div className="bg-[#FFEB3B] px-6 py-1 rounded-lg transform -rotate-2">
                    <span className="font-black text-lg uppercase">{ev.date}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-black uppercase">{ev.city}</h3>
                </div>

                {/* Image */}
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={ev.img}
                    alt={ev.city}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-4 text-left">
                  <h4 className="text-2xl font-black mb-3">{ev.loc}</h4>
                  <p className="text-base text-gray-700 mb-6">{ev.desc}</p>
                  
                  <Link 
                    to="/roadshow"
                    className="block w-full py-4 bg-[#8bbdbd] text-white text-center font-black text-sm uppercase tracking-wide rounded-full hover:bg-[#00BCD4] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

export default HomePage
