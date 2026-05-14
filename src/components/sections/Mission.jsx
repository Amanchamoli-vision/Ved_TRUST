import './Mission.css'
import gaushalaImg from '../../assets/gausala.png'
import computerImg from '../../assets/computer1.png'
import womenImg    from '../../assets/women.png'
import medicalImg  from '../../assets/medical.png'
import riverImg    from '../../assets/river22.png'
import plantImg    from '../../assets/plant.png'

const programs = [
  {
    id: '01', slug: 'gaushala', hindi: 'गौशाला',
    tag: 'पशु सेवा · Animal Welfare', title: 'Gausala',
    subtitle: 'A Sanctuary We Are Building', img: gaushalaImg,
    body: `We are working to establish a Gausala in Uttarakhand that will shelter abandoned and injured cows, providing them lifelong care, nutritious fodder, and regular veterinary attention. Rooted in the Vedic principle of Ahimsa, we see the cow not merely as an animal but as a living symbol of compassion and sustenance.`,
    body2: `Our vision goes beyond shelter — the Gausala will generate organic compost and cow-based products to support local farmers and create dignified livelihoods. गौ सेवा ही ईश्वर सेवा है — this mission is both our faith and our future.`,
    stat: 'Coming', statLbl: 'Soon', accent: '#7c3aed', flip: false,
  },
  {
    id: '02', slug: 'education', hindi: 'निःशुल्क शिक्षा',
    tag: 'ज्ञान · Digital Literacy', title: 'Free Education',
    subtitle: 'Knowledge for Every Child', img: computerImg,
    body: `We plan to open free education centres in rural villages of Uttarakhand where children will learn computer skills, spoken English, mathematics, and critical thinking — equipping the next generation not just for exams, but for life. No child should be left behind because of geography or poverty.`,
    body2: `Each centre will be run by trained local youth, creating a cycle where today's students become tomorrow's teachers. शिक्षा केवल किताबों तक सीमित नहीं — यह आत्मविश्वास और स्वावलम्बन की नींव है।`,
    stat: 'Free', statLbl: 'For All Children', accent: '#4f46e5', flip: true,
  },
  {
    id: '03', slug: 'women', hindi: 'महिला सशक्तिकरण',
    tag: 'स्वावलम्बन · Empowerment', title: 'Women Empowerment',
    subtitle: 'Building Self-Reliant Women', img: womenImg,
    body: `We aim to launch skill-development programs for women across rural Uttarakhand — covering tailoring, handicraft, organic farming, and micro-entrepreneurship. By partnering with government schemes and NGO networks, we will ensure every woman has access to training, tools, and markets.`,
    body2: `जब एक स्त्री आत्मनिर्भर होती है, तो पूरा परिवार सशक्त होता है। We will form women-led self-help groups that independently manage savings, take collective decisions, and grow together.`,
    stat: 'Our', statLbl: 'Commitment', accent: '#a855f7', flip: false,
  },
  {
    id: '04', slug: 'medical', hindi: 'ग्रामीण स्वास्थ्य',
    tag: 'सेवा · Rural Healthcare', title: 'Medical Aid',
    subtitle: 'Healthcare as a Right, Not a Privilege', img: medicalImg,
    body: `Remote villages in Uttarakhand often have no access to even basic medical care. We intend to establish mobile medical camps and fixed health centres offering free consultations, medicines, and diagnostic support — with a special focus on maternal health, childhood nutrition, and chronic illness.`,
    body2: `निरोगी काया, निर्मल मन। Every person, regardless of income or geography, deserves dignified care. This is not charity — it is our responsibility as human beings.`,
    stat: 'Free', statLbl: 'Healthcare', accent: '#0891b2', flip: true,
  },
  {
    id: '05', slug: 'rivers', hindi: 'नदी संरक्षण',
    tag: 'पर्यावरण · Flagship Initiative', title: 'Ganga–Yamuna Conservation',
    subtitle: 'Protecting What We Hold Sacred', img: riverImg,
    body: `The Ganga and Yamuna are not merely rivers — they are the lifeblood of civilisation, woven into our prayers, our identity, and our history. Yet today, pollution and neglect threaten their very existence. We will organise community clean-up drives, awareness campaigns, and large-scale riparian plantation along their banks.`,
    body2: `गंगा हमारी माँ है — उसकी रक्षा हमारा धर्म है। We plan to train village-level "river guardians" who will monitor pollution and keep their stretch of the river clean, every single day.`,
    stat: 'Our', statLbl: 'Flagship Mission', accent: '#059669', flip: false,
  },
  {
    id: '06', slug: 'vriksharopan', hindi: 'वृक्षारोपण',
    tag: 'प्रकृति · Environment', title: 'Vriksharopan',
    subtitle: 'One Tree, One Promise', img: plantImg,
    body: `Forests are the lungs of the earth. We will engage schools, panchayats, and youth groups every monsoon season to restore green cover across degraded land in Uttarakhand. Every sapling planted will be tracked, tended, and celebrated as an act of devotion to future generations.`,
    body2: `वृक्षो रक्षति रक्षितः — the tree that is protected, protects in return. Through this ancient truth, we will build an unbroken bond between humanity and nature — one root at a time.`,
    stat: 'Our', statLbl: 'Pledge to Nature', accent: '#16a34a', flip: true,
  },
]

function Mission() {
  return (
    <section className="mission-page">

      {/* ── Hero ── */}
      <div className="mp-hero">
        <div className="mp-hero-noise" />
        <div className="mp-hero-inner">
          <p className="mp-hero-eyebrow">हमारा उद्देश्य · Our Mission</p>

          <h1 className="mp-hero-title">
            Six Pillars of <em>Seva &amp; Swaraj</em> begins here.
          </h1>

          <p className="mp-hero-sub">
            Ved Trust is committed to transforming rural communities through
            education, healthcare, animal welfare, and environmental conservation.
            These are the six pillars we are building — one step, one seva at a time.
          </p>
          <div className="mp-hero-divider">
            <span />
            <span className="mp-hero-om">ॐ</span>
            <span />
          </div>
        </div>
      </div>

      {/* ── Programs ── */}
      {programs.map((p) => (
        <article
          key={p.id}
          className={`mp-program ${p.flip ? 'mp-program--flip' : ''}`}
          style={{ '--accent': p.accent }}
        >
          <span className="mp-watermark">{p.id}</span>
          <div className="mp-img-col">
            <div className="mp-img-frame">
              <img src={p.img} alt={p.title} />
              <div className="mp-img-overlay" />
              <div className="mp-img-stat">
                <span className="mp-stat-num">{p.stat}</span>
                <span className="mp-stat-lbl">{p.statLbl}</span>
              </div>
            </div>
          </div>
          <div className="mp-text-col">
            <div className="mp-text-inner">
              <p className="mp-tag">{p.tag}</p>
              <p className="mp-hindi">{p.hindi}</p>
              <h2 className="mp-title">{p.title}</h2>
              <p className="mp-subtitle">{p.subtitle}</p>
              <div className="mp-rule" />
              <p className="mp-body">{p.body}</p>
              <p className="mp-body mp-body--2">{p.body2}</p>
              <a href={`/services#${p.slug}`} className="mp-cta">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      ))}

      {/* ── Closing ── */}
      <div className="mp-closing">
        <div className="mp-closing-noise" />
        <p className="mp-closing-shloka">सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।</p>
        <p className="mp-closing-trans">May all beings be happy. May all beings be free from illness.</p>
        <a href="/contact" className="mp-closing-btn">Join Our Mission →</a>
      </div>

    </section>
  )
}

export default Mission