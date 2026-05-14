import { Link } from 'react-router-dom'
import './Footer.css'

const FacebookIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill="#1877F2"/>
    <path d="M19.5 15h-3v8.5H13V15h-2v-3h2v-1.8c0-2.1 1.2-3.7 3.7-3.7H19v3h-1.8c-.55 0-.95.35-.95.95V12h3l-.75 3z" fill="white"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig2" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="10%" stopColor="#fdf497"/>
        <stop offset="50%" stopColor="#fd5949"/>
        <stop offset="68%" stopColor="#d6249f"/>
        <stop offset="100%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <circle cx="15" cy="15" r="15" fill="url(#ig2)"/>
    <rect x="8.5" y="8.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.6" fill="none"/>
    <circle cx="15" cy="15" r="3.2" stroke="white" strokeWidth="1.6" fill="none"/>
    <circle cx="19.5" cy="10.5" r="0.9" fill="white"/>
  </svg>
)

const TwitterIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill="#000"/>
    <path d="M7.5 7.5h4.7l2.8 4.2 3.8-4.2H22l-5.6 7 7.1 8H18.8l-3.3-4.7-4.2 4.7H7.5l6.1-7.5L7.5 7.5z" fill="white"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#FF6B00"/>
    <circle cx="12" cy="9" r="2.5" fill="white"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#FF6B00"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#FF6B00"/>
    <path d="M2 7l10 7 10-7" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
  </svg>
)

const navLinks = [
  { to: '/', icon: 'ti-home', label: 'Home' },
  { to: '/about', icon: 'ti-info-circle', label: 'About Us' },
  //{ to: '/services', icon: 'ti-settings', label: 'Services' },
  { to: '/gallery', icon: 'ti-photo', label: 'Gallery' },
  // { to: '/members', icon: 'ti-users', label: 'Members' },
  { to: '/contact', icon: 'ti-mail', label: 'Contact' },
]

const programs = [
  { icon: 'ti-building-community', label: 'Gausala' },
  { icon: 'ti-device-laptop', label: 'Free Computer Classes' },
  { icon: 'ti-heart-handshake', label: 'Women Empowerment' },
  { icon: 'ti-stethoscope', label: 'Medical Facility' },
  { icon: 'ti-droplet', label: 'Ganga Safai' },
  { icon: 'ti-school', label: 'Rural Education' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            <div className="footer-brand">
              <div className="footer-logo">
                <span className="f-ved">VED</span>
                <span className="f-trust"> TRUST</span>
              </div>
              <p className="footer-tagline">Seva • Shiksha • Swasthya</p>
              <p className="footer-desc">
                Working for Gausala, Free Education, Women Empowerment,
                Rural Healthcare and Ganga-Yamuna Conservation in
                Vikasnagar, Dehradun, Uttarakhand.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com/VEDTrust" target="_blank" rel="noreferrer" className="social-btn" title="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://instagram.com/ved.trust" target="_blank" rel="noreferrer" className="social-btn" title="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://twitter.com/VEDTrust" target="_blank" rel="noreferrer" className="social-btn" title="Twitter / X">
                  <TwitterIcon />
                </a>
              </div>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-line"></div>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>
                      <i className={`ti ${link.icon}`}></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-services-col">
              <h4 className="footer-heading">Our Programs</h4>
              <div className="footer-line"></div>
              <ul>
                {programs.map((p) => (
                  <li key={p.label}>
                    <i className={`ti ${p.icon}`}></i>
                    {p.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4 className="footer-heading">Contact Info</h4>
              <div className="footer-line"></div>
              <div className="footer-contact-item">
                <span className="fc-icon"><LocationIcon /></span>
                <p>C/O Geeta Tanda, Kothiyal Road,<br />Dinkervihar, Vikasnagar,<br />Dehradun – 248198, Uttarakhand</p>
              </div>
              <div className="footer-contact-item">
                <span className="fc-icon"><PhoneIcon /></span>
                <p>+91 9971997198</p>
              </div>
              <div className="footer-contact-item">
                <span className="fc-icon"><EmailIcon /></span>
                <p>ved.trust@hotmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 <span>VED TRUST</span>. All Rights Reserved. | Made with ❤️ for Rural India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer