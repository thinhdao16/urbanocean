import React from 'react'
import { Link } from 'react-router-dom'
import NavbarTry from '../components/NavbarTry'

function RoadshowPage() {
  const events = [
    {
      city: 'LONDON',
      date: 'APR 4',
      location: 'Southbank Centre',
      time: '3-move line. Style over technicality.',
      activity: '"THE CONCRETE WAVE" LINE',
      promotion: 'Promotion when registering online:',
      benefits: ['Receive Scaters x Southbank Tee', 'Receive Sunscreen Wax'],
      img: '/assets/home_stake_1.jpg',
      color: '#FFB6C1'
    },
    {
      city: 'BIRMINGHAM',
      date: 'APR 11',
      location: 'Creation Skate Park',
      time: 'Line over tricks. Smooth flow, clean speed, no foot down.',
      activity: 'BOWL JAM',
      promotion: 'Promotion when registering online:',
      benefits: ['Receive Bucket Hat', 'Receive Sunscreen Wax'],
      img: '/assets/home_stake_2.jpg',
      color: '#FFEB3B'
    },
    {
      city: 'SHEFFIELD',
      date: 'APR 18',
      location: 'Devonshire Green',
      time: 'Long-distance carving. Smooth S-curves. Ride the concrete wave.',
      activity: '"STEEL CITY SURF" CRUISE',
      promotion: 'Promotion when registering online:',
      benefits: ['Receive Steel Bottle', 'Receive Sunscreen Wax'],
      img: '/assets/home_stake_3.png',
      color: '#4DD0E1'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#f9e7e5]  md:px-8 overflow-hidden">
        <NavbarTry fixed={false} />

        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-[#FF1493] mb-4 uppercase">
              ROADSHOW TOUR
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-[#00BCD4] uppercase">
              SURF INTO THE CITY
            </h2>
          </div>

          {/* Description */}
          <div className="text-center mb-2 max-w-3xl mx-auto text-black">
            <p className="text-base md:text-lg leading-relaxed ">
              This April, SCATERS hits the concrete across the UK.
            </p>
            <p className="text-base md:text-lg leading-relaxed ">
              Three cities. Three styles of flow.
            </p>
            <p className="text-base md:text-lg font-black">
              Ride the Raptor. <span className="text-[#00BCD4]">Surf into the city</span>
            </p>
          </div>

          {/* Explore Button */}
          <div className="text-center mb-16">
            <Link
              to="#events"
              className="inline-block px-12 py-4 border-2 border-[#FF1493] text-[#FF1493] rounded-full text-lg font-black uppercase tracking-wide hover:bg-[#FF1493] hover:text-white transition-all"
            >
              Explore The Tour
            </Link>
          </div>

          {/* Tour Description */}


          {/* City Images */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* London */}
            <div className="relative">
              <img
                src="/assets/london.png"
                alt="London"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
              </div>
            </div>

            {/* Birmingham */}
            <div className="relative">
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <p className="text-sm md:text-base leading-relaxed text-black">
                  The SCATERS Roadshow Tour is not your typical tricks showcase. It's about <span className="font-black">line, flow, rhythm,</span> and how you move with the space around you. From urban undercrofts to bowls and open plazas, <span className="font-black">each city Challenges</span> skaters to read the ground, find their wave, and ride it clean.
                </p>
              </div>
              <img
                src="/assets/sheffield.png"
                alt="Sheffield"
                className="w-full aspect-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/birmingham.png"
                alt="Birmingham"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
              </div>
            </div>

            {/* Sheffield */}

          </div>
        </div>
      </section>


      {/* Event Details */}
      {events.map((event, i) => (
        <section
          key={i}
          className="relative min-h-screen py-16  px-4 md:px-8 flex items-center"
          style={{ backgroundColor: event.color }}
        >

          <div className="absolute inset-0 opacity-20">
            <img
              src={event.img}
              alt={event.city}
              className="w-full h-full object-cover"
            />
          </div>
        <NavbarTry fixed={false} className='absolute!' />

          <div className="relative z-10 max-w-7xl mx-auto w-full">

            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className={i % 2 === 0 ? 'order-1' : 'order-2'}>
                <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 shadow-2xl">
                  <div className="text-[#FF1493] font-display text-4xl md:text-6xl mb-2 italic">
                    APR {event.date.split(' ')[1]}
                  </div>
                  <h3 className="text-5xl md:text-[80px] font-display leading-[0.8] mb-4 italic text-black">
                    {event.city}
                  </h3>
                  <p className="text-base md:text-xl font-black uppercase tracking-wide mb-8 text-black/80">
                    Location: {event.location}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-black/80">{event.time}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-[#FF1493]">Activity</h4>
                      <p className="text-xl md:text-2xl font-display italic text-black">{event.activity}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-[#FF1493]">{event.promotion}</h4>
                      <p className="text-xs font-black uppercase tracking-wide mb-2 text-black/80">Register online:</p>
                      <ul className="space-y-1">
                        {event.benefits.map((benefit, j) => (
                          <li key={j} className="text-xs font-black uppercase tracking-wide text-black/80">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs font-black uppercase tracking-wide mt-4 text-black/80">
                        All participants:<br />
                        • Receive Sunscreen Wax
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/register"
                    className="inline-block w-full py-4 bg-[#FF1493] text-white text-center font-black text-sm uppercase tracking-widest rounded-full hover:bg-black transition-all"
                  >
                    Register Online
                  </Link>

                  <button className="inline-block w-full mt-4 py-4 bg-white border-2 border-black text-black text-center font-black text-sm uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all">
                    Ask a question →
                  </button>
                </div>
              </div>

              <div className={i % 2 === 0 ? 'order-2' : 'order-1'}>
                <div className="aspect-square bg-white p-4 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                  <img
                    src={event.img}
                    alt={event.city}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Steel City Surf Cruise Detail */}


      {/* FAQ Section */}
      <section className="bg-[#FFB6C1] text-black py-4 px-4 md:px-8">
        <NavbarTry fixed={false}  />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-[100px] font-display leading-[0.8] mb-16 text-center italic text-[#FF1493]">
            FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Who can participate?',
                a: 'The Roadshow is open to all skill levels. Participants under 18 must have parental or guardian consent.'
              },
              {
                q: 'What should I bring?',
                a: 'Bring your own board (or try the Raptor), helmet, protective gear, water, and enthusiasm!'
              },
              {
                q: 'How do I get the exclusive gear?',
                a: 'Register online before the event. Top 50 early registrants at each stop receive exclusive collaboration products.'
              },
              {
                q: 'Is there a registration fee?',
                a: 'Registration is FREE! Just sign up online and show up ready to ride.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-display mb-3 italic">{faq.q}</h3>
                <p className="text-sm font-black uppercase tracking-wide leading-relaxed opacity-80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/join-now.png"
          alt="Join Now"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-[100px] font-display text-[#FFEB3B] mb-8 italic leading-none">
            REGISTER AND ENJOY
          </h2>
          <h3 className="text-4xl md:text-[80px] font-display text-white mb-12 italic leading-none">
            SURF INTO THE CITY
          </h3>
          <Link
            to="/register"
            className="group relative inline-block"
          >
            <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-pink-500 text-white px-12 md:px-16 py-4 md:py-6 font-display text-3xl md:text-5xl italic skew-x-[-12deg] border-4 border-black hover:bg-white hover:text-pink-500 transition-all flex items-center justify-center">
              JOIN NOW!
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default RoadshowPage
