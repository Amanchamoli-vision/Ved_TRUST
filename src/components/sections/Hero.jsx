import { Link } from 'react-router-dom'
import './Hero.css'

const pillars = [
  { num: '01', en: 'Gausala',            hi: 'गौशाला',           tag: 'Animal Welfare' },
  { num: '02', en: 'Free Education',     hi: 'निःशुल्क शिक्षा',  tag: 'Digital Literacy' },
  { num: '03', en: 'Women Empowerment',  hi: 'महिला सशक्तिकरण', tag: 'Empowerment' },
  { num: '04', en: 'Rural Healthcare',   hi: 'ग्रामीण स्वास्थ्य', tag: 'Medical Aid' },
  { num: '05', en: 'River Conservation', hi: 'नदी संरक्षण',       tag: 'Environment' },
  { num: '06', en: 'Vriksharopan',       hi: 'वृक्षारोपण',        tag: 'Reforestation' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grain" />

      <div className="hero-body">

        {/* ── LEFT ── */}
        <div className="hero-left">

          <div className="hero-tagline-block">
            <div className="hero-tagline-words">
              <span className="hero-tagline-word">
                <span className="hero-tagline-deva">सेवा</span>
                <span className="hero-tagline-roman">Seva</span>
              </span>
              <span className="hero-tagline-dot" aria-hidden="true">✦</span>
              <span className="hero-tagline-word">
                <span className="hero-tagline-deva">शिक्षा</span>
                <span className="hero-tagline-roman">Shiksha</span>
              </span>
              <span className="hero-tagline-dot" aria-hidden="true">✦</span>
              <span className="hero-tagline-word">
                <span className="hero-tagline-deva">स्वास्थ्य</span>
                <span className="hero-tagline-roman">Swasthya</span>
              </span>
            </div>
          </div>

          <div className="hero-rule" />
          <p className="hero-eyebrow">हमारे छः स्तम्भ · Six Pillars of Seva</p>

          <ul className="hero-pillars">
            {pillars.map((p) => (
              <li key={p.num} className="hero-pillar">
                <span className="hero-pillar-num">{p.num}</span>
                <span className="hero-pillar-en">{p.en}</span>
                <span className="hero-pillar-hi">{p.hi}</span>
              </li>
            ))}
          </ul>

          <div className="hero-rule" />

          <div className="hero-actions">
            <Link to="/services" className="btn-primary">हमारा काम देखें →</Link>
            <Link to="/contact"  className="btn-ghost">सहयोग करें</Link>
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="hero-right">

          {/* Shloka bar */}
          <div className="hero-shloka">
            <span className="hero-shloka-om">ॐ</span>
            <blockquote>
              <p className="hero-shloka-verse">बहुजन हिताय बहुजन सुखाय।</p>
              <p className="hero-shloka-trans">For the well-being and happiness of all</p>
            </blockquote>
          </div>

          {/* 2-line headline */}
          <h1 className="hero-headline">
            A new chapter for rural <em>Uttarakhand</em> begins here.
          </h1>

          {/* Manifesto */}
          <p className="hero-manifesto">
            We are a newly registered trust — not with years of work behind us,
            but with a clear vision ahead. Six programs. Six promises.
            Each one rooted in the soil of Uttarakhand, each one built
            for the people who have waited long enough.
          </p>

          <p className="hero-manifesto hero-manifesto--hi">
            हम अभी शुरुआत कर रहे हैं — लेकिन हमारा संकल्प अटल है।
            जो सपना हमने देखा है, उसे हम मिलकर साकार करेंगे।
          </p>

          {/* Stats grid — fills empty space */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">6</span>
              <span className="hero-stat-lbl">Core Programs</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">100%</span>
              <span className="hero-stat-lbl">Community Funded</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">∞</span>
              <span className="hero-stat-lbl">Seva, No Limit</span>
            </div>
          </div>

          {/* Promise row */}
          <div className="hero-promise-row">
            <div className="hero-promise">
              <span className="hero-promise-icon">◈</span>
              <span>No fake numbers.<br />Only honest work.</span>
            </div>
            <div className="hero-promise">
              <span className="hero-promise-icon">◈</span>
              <span>Community-first.<br />Always.</span>
            </div>
            <div className="hero-promise">
              <span className="hero-promise-icon">◈</span>
              <span>Vedic values.<br />Modern action.</span>
            </div>
          </div>

        </div>
      </div>

      {/* Ticker */}
      <div className="hero-ticker">
        <div className="hero-ticker-track">
          {['गौ सेवा', 'Free Education', 'नदी संरक्षण', 'Women Empowerment',
            'वृक्षारोपण', 'Rural Healthcare', 'अहिंसा', 'Seva & Swaraj',
            'गौ सेवा', 'Free Education', 'नदी संरक्षण', 'Women Empowerment',
            'वृक्षारोपण', 'Rural Healthcare', 'अहिंसा', 'Seva & Swaraj',
          ].map((t, i) => (
            <span key={i} className="hero-ticker-item">
              {t} <span className="hero-ticker-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero