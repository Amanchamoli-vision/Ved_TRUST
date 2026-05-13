import './About.css'

const pillars = [
  {
    sanskrit: 'अहिंसा',
    roman: 'Ahimsa',
    meaning: 'Non-violence in thought, word, and deed — toward every living being.',
  },
  {
    sanskrit: 'सेवा',
    roman: 'Seva',
    meaning: 'Selfless service as worship — not charity, but dharma.',
  },
  {
    sanskrit: 'स्वावलम्बन',
    roman: 'Swavalambana',
    meaning: 'Self-reliance built from within communities, not imposed from outside.',
  },
  {
    sanskrit: 'सत्य',
    roman: 'Satya',
    meaning: 'Radical transparency — in governance, in accounts, in intent.',
  },
]

function About() {
  return (
    <section className="ab-page">

      {/* ── IDENTITY BLOCK ── */}
      <div className="ab-identity">
        <div className="ab-id-left">
          <p className="ab-eyebrow">परिचय · Who We Are</p>
          <h1 className="ab-name">
            <span className="ab-name-sanskrit">वेद ट्रस्ट</span>
            <span className="ab-name-eng">VED TRUST</span>
          </h1>
          <p className="ab-fullform">
            Ved Transformative Research &amp; Universal Science Technology Foundation
          </p>
          <p className="ab-tagline">
            "यत्र विश्वं भवत्येकनीडम्" —<em> where the world becomes one home.</em>
          </p>
        </div>
        <div className="ab-id-right">
          <div className="ab-id-meta">
            <div className="ab-meta-item">
              <span className="ab-meta-label">स्थापना · Registered</span>
              <span className="ab-meta-val">Uttarakhand, India</span>
            </div>
            <div className="ab-meta-item">
              <span className="ab-meta-label">प्रकार · Type</span>
              <span className="ab-meta-val">Section 8 Non-Profit</span>
            </div>
            <div className="ab-meta-item">
              <span className="ab-meta-label">क्षेत्र · Region</span>
              <span className="ab-meta-val">Vikasnagar, Dehradun</span>
            </div>
            <div className="ab-meta-item">
              <span className="ab-meta-label">सम्पर्क · Contact</span>
              <span className="ab-meta-val">+91 9971997198</span>
            </div>
            <div className="ab-meta-item">
              <span className="ab-meta-label">ईमेल · Email</span>
              <span className="ab-meta-val">ved.trust@hotmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── STORY BLOCK ── */}
      <div className="ab-story">
        <div className="ab-story-inner">
          <div className="ab-story-text">
            <p className="ab-section-label">हमारी कहानी · Our Story</p>
            <h2 className="ab-section-title">Born from the hills,<br />rooted in dharma.</h2>
            <p className="ab-para">
              VED Trust was born in the shadow of the Himalayas — not in a boardroom, but
              among the farmers, women, and children of rural Uttarakhand who had been left
              behind by the pace of modern development. We saw villages without schools, rivers
              choked with waste, and cows abandoned on roadsides. We did not see problems.
              We saw a <em>dharma</em> — an obligation to act.
            </p>
            <p className="ab-para ab-para--quote">
              गाँव से गाँव तक, नदी से नदी तक — हम वहाँ हैं जहाँ ज़रूरत है।
              <em>From village to village, river to river — we are where the need is.</em>
            </p>
            <p className="ab-para">
              We are a newly registered organisation, but our roots run deep. The people
              behind VED Trust have spent years working on the ground in Vikasnagar — learning
              what these communities truly need, building trust slowly, and refusing to act
              without listening first. The registration is new. The commitment is not.
            </p>
            <p className="ab-para">
              Every programme we design is built to become unnecessary — because true seva
              creates independence, not dependence. We are here to start something, hand it
              to the community, and step back.
            </p>
          </div>

          <div className="ab-story-aside">
            <p className="ab-section-label">दृष्टि · Vision</p>
            <div className="ab-vision-card">
              <p className="ab-vision-shloka">तमसो मा ज्योतिर्गमय</p>
              <p className="ab-vision-trans">Lead us from darkness into light.</p>
              <p className="ab-vision-body">
                Our vision is a rural Uttarakhand where every child can read, every woman
                can earn, every river runs clean, and every cow is cared for. We are at the
                very beginning of that journey — and we invite you to walk it with us.
              </p>
            </div>
            <div className="ab-registered-badge">
              <span className="ab-badge-icon">✦</span>
              <div>
                <p className="ab-badge-title">Newly Registered</p>
                <p className="ab-badge-sub">Section 8 Company · Uttarakhand</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── VALUES BLOCK ── */}
      <div className="ab-values">
        <div className="ab-values-inner">
          <p className="ab-section-label ab-label--light">मूल्य · Core Principles</p>
          <h2 className="ab-section-title ab-title--light">
            The four sutras<br />we live by.
          </h2>
          <div className="ab-pillars">
            {pillars.map((p, i) => (
              <div className="ab-pillar" key={i}>
                <span className="ab-pillar-num">0{i + 1}</span>
                <p className="ab-pillar-sanskrit">{p.sanskrit}</p>
                <p className="ab-pillar-roman">{p.roman}</p>
                <p className="ab-pillar-meaning">{p.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div className="ab-cta">
        <p className="ab-cta-shloka">सर्वे भवन्तु सुखिनः</p>
        <p className="ab-cta-trans">May all beings be happy — this is our only ambition.</p>
        <div className="ab-cta-btns">
          <a href="/contact" className="ab-btn ab-btn--primary">Join the Mission</a>
          <a href="/services" className="ab-btn ab-btn--ghost">Our Work →</a>
        </div>
      </div>

    </section>
  )
}

export default About