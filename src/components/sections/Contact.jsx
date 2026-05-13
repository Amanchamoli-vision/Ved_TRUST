import { useState } from 'react'
import './Contact.css'

// ─────────────────────────────────────────────
// HOW TO ENABLE DIRECT EMAIL (optional):
// 1. Go to https://web3forms.com
// 2. Enter amanchamoli28@gmail.com → get free key
// 3. Paste the key below replacing YOUR_KEY_HERE
// Until then, Send button opens your mail app automatically.
// ─────────────────────────────────────────────
const WEB3FORMS_KEY = 'YOUR_KEY_HERE'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const openMailto = (data) => {
    const subject = encodeURIComponent(data.subject || 'VED Trust – Contact Form')
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )
    window.open(`mailto:amanchamoli28@gmail.com?subject=${subject}&body=${body}`)
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in Name, Email, and Message.')
      return
    }
    setStatus('sending')

    // If no Web3Forms key → open mail app as fallback
    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'YOUR_KEY_HERE') {
      openMailto(formData)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      return
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: formData.subject || 'VED Trust – New Contact Form Submission',
          from_name: formData.name,
          email: formData.email,
          replyto: formData.email,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        openMailto(formData)
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch {
      openMailto(formData)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  const socialLinks = [
    {
      name: 'Facebook',
      handle: '@VEDTrust',
      url: 'https://www.facebook.com/vedtrust',
      color: '#1877F2',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@ved.trust',
      url: 'https://www.instagram.com/ved.trust',
      color: '#E1306C',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-1.613.074-3.067.4-4.204 1.537C1.712 2.746 1.386 4.2 1.312 5.813 1.254 7.093 1.24 7.501 1.24 12c0 4.499.014 4.907.072 6.187.074 1.613.4 3.067 1.537 4.204 1.137 1.137 2.591 1.463 4.204 1.537C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.613-.074 3.067-.4 4.204-1.537 1.137-1.137 1.463-2.591 1.537-4.204.058-1.28.072-1.688.072-6.187 0-4.499-.014-4.907-.072-6.187-.074-1.613-.4-3.067-1.537-4.204C19.014.472 17.56.146 15.947.072 14.667.014 14.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter / X',
      handle: '@VEDTrust',
      url: 'https://www.twitter.com/vedtrust',
      color: '#000000',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.166 2.25H8.04l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="contact">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="contact-eyebrow">Get In Touch</span>
          <h2 className="contact-title">
            We'd Love To <br />
            <span className="title-accent">Hear From You</span>
          </h2>
          <p className="contact-sub">
            Have questions or want to support our cause? Reach out to us!
          </p>
        </div>

        <div className="contact-body">
          {/* Left: Info */}
          <div className="info-col">
            <div className="info-cards">
              {[
                {
                  emoji: '📍',
                  label: 'Our Address',
                  lines: ['C/O Geeta Tanda, Kothiyal Road', 'Dinkervihar, Vikasnagar', 'Dehradun – 248198, Uttarakhand'],
                },
                { emoji: '📞', label: 'Phone', lines: ['+91 9971997198'] },
                { emoji: '✉️', label: 'Email', lines: ['ved.trust@hotmail.com'] },
              ].map((card) => (
                <div className="info-card" key={card.label}>
                  <div className="info-card-icon">{card.emoji}</div>
                  <div>
                    <p className="info-card-label">{card.label}</p>
                    {card.lines.map((l) => (
                      <p className="info-card-text" key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="social-section">
              <p className="social-heading">Follow Us</p>
              <div className="social-list">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    style={{ '--sc': s.color }}
                  >
                    <span className="social-pill-icon" style={{ color: s.color }}>{s.icon}</span>
                    <span className="social-pill-name">{s.name}</span>
                    <span className="social-pill-handle">{s.handle}</span>
                    <span className="social-pill-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="form-col">
            <div className="form-card">
              <div className="form-card-header">
                <h3>Send a Message</h3>
                <p>We usually reply within 24 hours</p>
              </div>

              <div className="form-fields">
                <div className="field-row">
                  <div className="field-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="field-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                  />
                </div>

                <div className="field-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                  />
                </div>

                <button
                  className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className="btn-inner"><span className="spinner" /> Sending…</span>
                  ) : status === 'success' ? (
                    <span className="btn-inner">✓ Message Sent!</span>
                  ) : (
                    <span className="btn-inner">
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </span>
                  )}
                </button>

                {status === 'success' && (
                  <p className="form-success">Thank you! We'll get back to you soon 🙏</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact