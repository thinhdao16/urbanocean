import React from 'react'
import { Link } from 'react-router-dom'

function EveningEventRegisterPage() {
  // Google Form embed URL - THAY BẰNG LINK CỦA BẠN
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe5kzZiHm-smAy_LFZD_I6D3kNhMro7mJdQ4PrOGxzZLu14ow/viewform?usp=publish-editor"

  return (
    <div className="min-h-screen bg-[#FFD4E5] py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-display font-black text-[#FF1493] mb-4 uppercase">
            Evening Event
          </h1>
          <h2 className="text-2xl md:text-4xl font-display font-black text-black uppercase mb-6">
            VIP Registration
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-6">
            Register for exclusive evening events with meals, free drinks, and meet & greet with England skateboard team members.
          </p>
          
          {/* Info Box */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-black mb-4 text-[#FF1493]">What's Included:</h3>
            <ul className="text-left space-y-2">
              <li>🍽️ Complimentary meal at local hotel/restaurant</li>
              <li>🍹 Free drinks throughout the evening</li>
              <li>🎤 Talk from Skateboard England representative</li>
              <li>🤝 Meet & greet with England skateboard team member</li>
              <li>🎁 Exclusive merchandise (limited availability)</li>
            </ul>
          </div>

          <Link 
            to="/evening-events"
            className="inline-block px-6 py-3 border-2 border-[#FF1493] text-[#FF1493] font-black uppercase tracking-wide rounded-full hover:bg-[#FF1493] hover:text-white transition-colors mb-8"
          >
            ← View Current Registrations
          </Link>
        </div>

        {/* Google Form Embed */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <iframe 
            src={GOOGLE_FORM_URL}
            width="100%" 
            height="1400" 
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full"
          >
            Loading form...
          </iframe>
        </div>

        {/* Alternative: Direct Link */}
        <div className="text-center mt-8">
          <p className="text-sm mb-4">Form không hiển thị? Mở trong tab mới:</p>
          <a 
            href={GOOGLE_FORM_URL.replace('?embedded=true', '')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FF1493] text-white font-black uppercase tracking-wide rounded-full hover:bg-black transition-colors"
          >
            Open Registration Form →
          </a>
        </div>

        {/* Help Text */}
        <div className="mt-12 bg-yellow-100 rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="font-black mb-3">⚠️ Important Notes:</h3>
          <ul className="text-sm space-y-2">
            <li>• Participants under 18 must be accompanied by parent/guardian</li>
            <li>• Limited spots available - first come, first served</li>
            <li>• You will receive confirmation email within 48 hours</li>
            <li>• Bring valid ID to the event</li>
            <li>• Event dates: April 4 (London), April 11 (Birmingham), April 18 (Sheffield)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EveningEventRegisterPage
