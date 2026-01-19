import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-20 px-8 border-t-4 border-[#FFEB3B]/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 text-center md:text-left">
        <div className="flex flex-col items-center  md:items-start gap-6 col-span-1 md:col-span-2">
       
          <img src="assets/logo_white.png" className='w-[120px] ml-0 lg:ml-20' />
          <p className=" leading-loose  ">
            When others chase the sea, we turn the city into waves.<br />
            Raptor transforms UK concrete into an endless coastline.
          </p>
          <div className="flex gap-4 w-full max-w-md mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/10 border-2 border-white/20 rounded-full px-6 py-3 text-[10px] font-black tracking-widest flex-1 outline-none focus:border-[#FFEB3B] transition-colors"
            />
            <button className="bg-white text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#FFEB3B] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h4 className="font-display text-2xl mb-4 ">Our Company</h4>
          <Link to="/" className=" font-black uppercase tracking-[0.3em] hover:text-[#00BCD4] transition-colors">Homepage</Link>
          <Link to="/about" className=" font-black uppercase tracking-[0.3em] hover:text-[#00BCD4] transition-colors">About Us</Link>
          <Link to="/roadshow" className=" font-black uppercase tracking-[0.3em] hover:text-[#00BCD4] transition-colors">Roadshow Tour</Link>
          <a href="#contact" className=" font-black uppercase tracking-[0.3em] hover:text-[#00BCD4] transition-colors">Contact Us</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display text-2xl mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="/assets/facebook.webp" alt="Facebook" className="w-full h-full object-contain" />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="/assets/igs.png" alt="Instagram" className="w-full h-full object-contain rounded-full" />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="/assets/tiktok.png" alt="TikTok" className="w-full h-full object-contain rounded-full" />
            </a>
          </div>
          <p className="mt-12 text-[8px] opacity-30 font-black uppercase tracking-[0.4em] md:text-right">
            © 2026 SCATERS UK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
