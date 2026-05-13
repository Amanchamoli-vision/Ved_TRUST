import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import vedLogo from '../../assets/v-trust.png'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="header">
      <div className="header-container">

        {/* ── Logo + Org Name ── */}
        <Link to="/" className="logo">
          <img src={vedLogo} alt="VED Trust Logo" className="logo-img" />
          <div className="logo-text-block">
            <span className="logo-title">Ved Transformative Research &amp;</span>
            <span className="logo-subtitle">Universal Science Technology Foundation</span>
          </div>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name.split('').map((char, i) => (
                <span className="char" key={i}>{char}</span>
              ))}
            </Link>
          ))}

          <Link to="/donate" className="btn-donate btn-donate--mobile" onClick={() => setMenuOpen(false)}>
            ❤️ Donate
          </Link>
        </nav>

        <Link to="/donate" className="btn-donate btn-donate--desktop">
          <span className="btn-donate-heart">❤️</span>
          Donate
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default Header