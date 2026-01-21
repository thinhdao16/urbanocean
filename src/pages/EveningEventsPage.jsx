import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function EveningEventsPage() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch and parse XML
    fetch('/roadshow-evening-events.xml')
      .then(response => response.text())
      .then(xmlText => {
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
        
        // Parse XML entries
        const entryNodes = xmlDoc.getElementsByTagName('entry')
        const parsedEntries = []

        for (let i = 0; i < entryNodes.length; i++) {
          const entry = entryNodes[i]
          
          // Helper function to get text content
          const getText = (tagName) => {
            const element = entry.getElementsByTagName(tagName)[0]
            return element ? element.textContent : ''
          }

          // Parse skateboards
          const skateboards = []
          const skateboardNodes = entry.getElementsByTagName('skateboard')
          for (let j = 0; j < skateboardNodes.length; j++) {
            skateboards.push(skateboardNodes[j].textContent)
          }

          // Parse professionals
          const professionals = []
          const professionalNodes = entry.getElementsByTagName('professional')
          for (let j = 0; j < professionalNodes.length; j++) {
            professionals.push(professionalNodes[j].textContent)
          }

          // Parse phone numbers
          const phones = []
          const phoneNodes = entry.getElementsByTagName('phone')
          for (let j = 0; j < phoneNodes.length; j++) {
            phones.push({
              type: phoneNodes[j].getAttribute('type'),
              number: phoneNodes[j].textContent,
              preferred: phoneNodes[j].getAttribute('preferred') === 'true'
            })
          }

          // Parse guests
          const guests = []
          const guestNodes = entry.getElementsByTagName('guest')
          for (let j = 0; j < guestNodes.length; j++) {
            const guestName = guestNodes[j].getElementsByTagName('name')[0]?.textContent
            const guestAge = guestNodes[j].getElementsByTagName('age')[0]?.textContent
            guests.push({ name: guestName, age: guestAge })
          }

          // Parse parent/guardian if exists
          const parentGuardianNode = entry.getElementsByTagName('parentGuardian')[0]
          const parentGuardian = parentGuardianNode ? {
            name: parentGuardianNode.getElementsByTagName('name')[0]?.textContent,
            relationship: parentGuardianNode.getElementsByTagName('relationship')[0]?.textContent
          } : null

          parsedEntries.push({
            eventDate: getText('eventDate'),
            eventLocation: getText('eventLocation'),
            mainEntrant: {
              name: getText('name'),
              dateOfBirth: getText('dateOfBirth'),
              age: getText('age'),
              sex: getText('sex'),
              parentGuardian: parentGuardian,
              experience: getText('skateboardingExperience'),
              skateboards: skateboards,
              professionals: professionals,
              email: getText('email'),
              phones: phones,
              address: {
                street: getText('street'),
                city: getText('city'),
                postcode: getText('postcode'),
                country: getText('country')
              }
            },
            guests: guests
          })
        }

        setEntries(parsedEntries)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#4DD0E1]">
        <div className="text-center">
          <div className="text-4xl font-display font-black mb-4">Loading...</div>
          <p>Đang tải dữ liệu từ XML...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="text-center text-red-600">
          <div className="text-4xl font-display font-black mb-4">Error</div>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#4DD0E1] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-display font-black text-[#FF1493] mb-4 uppercase">
            Evening Events
          </h1>
          <h2 className="text-2xl md:text-4xl font-display font-black text-black uppercase mb-6">
            VIP Guest List
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Exclusive evening events with meals, free drinks, talks from Skateboard England representatives, 
            and meet & greet with England skateboard team members.
          </p>
          <div className="mt-6 inline-block bg-[#FFEB3B] px-6 py-3 rounded-lg">
            <p className="font-black">Total Entries: {entries.length}</p>
          </div>
        </div>

        {/* Entries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* Header */}
              <div className="bg-[#FF1493] text-white p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-display font-black">{entry.eventLocation}</span>
                  <span className="bg-white text-[#FF1493] px-3 py-1 rounded-full text-sm font-black">
                    #{index + 1}
                  </span>
                </div>
                <p className="text-sm">📅 {new Date(entry.eventDate).toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}</p>
              </div>

              {/* Main Entrant Info */}
              <div className="p-6">
                <h3 className="text-xl font-black mb-2">{entry.mainEntrant.name}</h3>
                <div className="space-y-2 text-sm mb-4">
                  <p><span className="font-black">Age:</span> {entry.mainEntrant.age} ({entry.mainEntrant.sex})</p>
                  <p><span className="font-black">DOB:</span> {entry.mainEntrant.dateOfBirth}</p>
                  
                  {entry.mainEntrant.parentGuardian && (
                    <p className="bg-yellow-100 p-2 rounded">
                      <span className="font-black">Guardian:</span> {entry.mainEntrant.parentGuardian.name} ({entry.mainEntrant.parentGuardian.relationship})
                    </p>
                  )}

                  <p><span className="font-black">Experience:</span> {entry.mainEntrant.experience}</p>
                  
                  <div>
                    <p className="font-black">Skateboards:</p>
                    <ul className="list-disc list-inside ml-2">
                      {entry.mainEntrant.skateboards.map((board, i) => (
                        <li key={i} className="text-xs">{board}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-black">Favourite Pros:</p>
                    <p className="text-xs">{entry.mainEntrant.professionals.join(', ')}</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-4 mb-4">
                  <p className="font-black mb-2">Contact:</p>
                  <p className="text-xs mb-1">📧 {entry.mainEntrant.email}</p>
                  {entry.mainEntrant.phones.map((phone, i) => (
                    <p key={i} className="text-xs">
                      📞 {phone.number} ({phone.type})
                      {phone.preferred && <span className="text-green-600 font-black"> ✓ Preferred</span>}
                    </p>
                  ))}
                  <p className="text-xs mt-2">
                    📍 {entry.mainEntrant.address.street}, {entry.mainEntrant.address.city}, {entry.mainEntrant.address.postcode}
                  </p>
                </div>

                {/* Guests */}
                {entry.guests.length > 0 && (
                  <div className="bg-[#4DD0E1]/20 p-3 rounded-lg">
                    <p className="font-black mb-2">Guests ({entry.guests.length}):</p>
                    {entry.guests.map((guest, i) => (
                      <p key={i} className="text-sm">
                        👤 {guest.name} (Age: {guest.age})
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link 
            to="/roadshow"
            className="inline-block px-8 py-4 bg-[#FF1493] text-white font-black uppercase tracking-wide rounded-full hover:bg-black transition-colors"
          >
            ← Back to Roadshow
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EveningEventsPage
