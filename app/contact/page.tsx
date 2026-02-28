'use client'

import { Mail, MapPin, Send } from 'lucide-react'
import { useState, FormEvent } from 'react'
import type { Metadata } from 'next'

// Note: metadata export only works in Server Components.
// Move this to a separate layout if you need metadata on this page.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // TODO: connect to email service (e.g. Resend, Formspree)
    // For now, open mailto as fallback
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProperty: ${formData.property}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\nGuests: ${formData.guests}\n\n${formData.message}`
    )
    window.location.href = `mailto:hello@rofeliving.es?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClasses =
    'w-full px-4 py-3 bg-rofe-white border border-rofe-cream text-rofe-basalt focus:outline-none focus:ring-1 focus:ring-rofe-basalt placeholder:text-rofe-drift'
  const labelClasses = 'block text-xs uppercase tracking-[0.15em] mb-2 text-rofe-drift'

  return (
    <div className="min-h-screen pt-20 bg-rofe-white">
      {/* Header */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-rofe-warm">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase text-rofe-drift mb-4"
            style={{ fontWeight: 300 }}
          >
            Reach Out
          </p>
          <h1
            className="text-4xl md:text-6xl text-rofe-basalt tracking-[0.04em]"
            style={{ fontWeight: 200 }}
          >
            Get in Touch
          </h1>
          <p
            className="text-lg text-rofe-ash max-w-xl mx-auto mt-6"
            style={{ fontWeight: 300 }}
          >
            We&apos;re here to help you plan your perfect Lanzarote escape
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div>
              <h2
                className="text-2xl mb-10 text-rofe-basalt tracking-[0.04em]"
                style={{ fontWeight: 200 }}
              >
                Contact Information
              </h2>

              <div className="space-y-8 mb-14">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-rofe-warm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-rofe-ash" />
                  </div>
                  <div>
                    <h3 className="text-sm text-rofe-basalt mb-1 tracking-[0.05em]" style={{ fontWeight: 300 }}>
                      Email
                    </h3>
                    <a
                      href="mailto:hello@rofeliving.es"
                      className="text-rofe-ash hover:text-rofe-basalt transition-colors text-sm"
                      style={{ fontWeight: 300 }}
                    >
                      hello@rofeliving.es
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-rofe-warm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-rofe-ash" />
                  </div>
                  <div>
                    <h3 className="text-sm text-rofe-basalt mb-1 tracking-[0.05em]" style={{ fontWeight: 300 }}>
                      Location
                    </h3>
                    <p className="text-rofe-ash text-sm" style={{ fontWeight: 300 }}>
                      La Santa, Lanzarote<br />
                      Canary Islands, Spain
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-rofe-warm">
                <h3
                  className="text-sm text-rofe-basalt mb-4 tracking-[0.05em]"
                  style={{ fontWeight: 300 }}
                >
                  Response Hours
                </h3>
                <div className="space-y-2 text-rofe-ash text-sm" style={{ fontWeight: 300 }}>
                  <p>Monday – Friday: 9:00 AM – 8:00 PM CET</p>
                  <p>Saturday: 10:00 AM – 6:00 PM CET</p>
                  <p>Sunday: 10:00 AM – 4:00 PM CET</p>
                </div>
                <p
                  className="mt-4 text-xs text-rofe-drift tracking-[0.05em]"
                  style={{ fontWeight: 300 }}
                >
                  24/7 support available for current guests
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className="text-2xl mb-10 text-rofe-basalt tracking-[0.04em]"
                style={{ fontWeight: 200 }}
              >
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-[1px] h-10 bg-rofe-drift/40 mx-auto mb-6" />
                  <p className="text-rofe-basalt text-lg mb-2" style={{ fontWeight: 200 }}>
                    Thank you for reaching out
                  </p>
                  <p className="text-rofe-ash text-sm" style={{ fontWeight: 300 }}>
                    Your email client should have opened. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className={labelClasses} style={{ fontWeight: 300 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className={labelClasses} style={{ fontWeight: 300 }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses} style={{ fontWeight: 300 }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="property" className={labelClasses} style={{ fontWeight: 300 }}>
                      Interested Property
                    </label>
                    <select
                      id="property"
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select a property</option>
                      <option value="rofe-la-santa">RØFE La Santa</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="checkIn" className={labelClasses} style={{ fontWeight: 300 }}>
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="checkOut" className={labelClasses} style={{ fontWeight: 300 }}>
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses} style={{ fontWeight: 300 }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-rofe-basalt text-rofe-cream text-sm tracking-[0.15em] uppercase hover:bg-rofe-stone transition-colors flex items-center justify-center gap-3"
                    style={{ fontWeight: 300 }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
