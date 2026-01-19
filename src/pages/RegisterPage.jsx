import React, { useState } from 'react'
import NavbarTry from '../components/NavbarTry'

function RegisterPage() {
  const [formData, setFormData] = useState({
    eventLocation: '',
    fullName: '',
    dob: '',
    gender: '',
    age: '',
    guest1: '',
    guest2: '',
    skillLevel: '',
    favouriteSkater: '',
    contactNo: '',
    email: '',
    address: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Registration submitted! We will contact you soon.')
  }

  return (
    <div className="">
     <NavbarTry fixed={false} className='absolute!' />
      <section className="relative min-h-screen py-24 md:py-32 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <img 
          src="/assets/register_page.png" 
          alt="Join Now Background" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.2]"
        />
        
        <div className="relative z-10 w-full max-w-6xl">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-pink-500 font-black text-xl md:text-2xl tracking-[0.3em] italic mb-2">
              REGISTER AND ENJOY
            </p>
            <h1 className="text-5xl md:text-[100px] font-display text-[#FFEB3B] mb-8 italic leading-none">
              SURF INTO THE CITY
            </h1>
            <p className="text-sm md:text-base font-black uppercase tracking-wide text-white/80 max-w-3xl mx-auto">
              Join the Raptor Roadshow and experience the urban ocean revolution.<br />
              Register now to secure your spot and exclusive gear.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid md:grid-cols-4 gap-x-6 gap-y-10 mb-16">
              {[
                { label: 'EVENT LOCATION', name: 'eventLocation', placeholder: 'eg: Birmingham', type: 'select', options: ['London', 'Birmingham', 'Sheffield'] },
                { label: 'FULL NAME', name: 'fullName', placeholder: 'eg: Jennie Kim', type: 'text' },
                { label: 'D.O.B', name: 'dob', placeholder: 'eg: dd/mm/yyyy', type: 'date' },
                { label: 'GENDER', name: 'gender', placeholder: 'eg: Female', type: 'select', options: ['Male', 'Female', 'Other', 'Prefer not to say'] },
                { label: 'AGE', name: 'age', placeholder: 'eg: 25', type: 'number' },
                { label: 'GUEST 1', name: 'guest1', placeholder: 'eg: David Burn (Optional)', type: 'text' },
                { label: 'GUEST 2', name: 'guest2', placeholder: 'eg: David Burn (Optional)', type: 'text' },
                { label: 'SKILL LEVEL', name: 'skillLevel', placeholder: 'eg: 1 year', type: 'select', options: ['Beginner (0-1 year)', 'Intermediate (1-3 years)', 'Advanced (3-5 years)', 'Expert (5+ years)'] },
                { label: 'FAVOURITE SKATER', name: 'favouriteSkater', placeholder: 'eg: Sky Brown', type: 'text' },
                { label: 'CONTACT No', name: 'contactNo', placeholder: 'eg: +44 xxxxxxxxxx', type: 'tel' },
                { label: 'EMAIL', name: 'email', placeholder: 'eg: you@example.com', type: 'email' },
                { label: 'ADDRESS', name: 'address', placeholder: 'eg: 12 abc st, London, UK', type: 'text' }
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-[#FFEB3B] uppercase tracking-[0.2em] italic">
                    {field.label}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={!field.placeholder.includes('Optional')}
                      className="bg-black/40 backdrop-blur-md border-2 border-pink-400 rounded-full px-6 py-4 text-sm text-white outline-none focus:border-[#FFEB3B] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-black">{field.placeholder}</option>
                      {field.options.map(opt => (
                        <option key={opt} value={opt} className="bg-black">{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={!field.placeholder.includes('Optional')}
                      className="bg-black/40 backdrop-blur-md border-2 border-pink-400 rounded-full px-6 py-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#FFEB3B] transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mb-12">
              <button 
                type="submit"
                className="group relative inline-block"
              >
                <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-pink-500 text-white px-12 md:px-16 py-4 md:py-6 font-display text-3xl md:text-5xl italic skew-x-[-12deg] border-4 border-black hover:bg-white hover:text-pink-500 transition-all flex items-center justify-center">
                  JOIN NOW!
                </div>
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] max-w-3xl mx-auto leading-loose italic opacity-80">
                Surf Into The City Roadshow is open to all skill levels.<br />
                <span className="text-[#FFEB3B]">⚠️ Participants under 18 must have parental or guardian consent.</span>
              </p>
            </div>
          </form>
        </div>
      </section>

 

  

  
    </div>
  )
}

export default RegisterPage
