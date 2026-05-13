import React from 'react'
import './Services.css'

const services = [
  {
    num: '01',
    icon: 'ti-building-community',
    title: 'Gausala',
    desc: 'A dedicated shelter for cows providing care, protection and preserving our cultural and religious heritage.',
    tag: 'Animal Welfare',
    accent: 'warm',
  },
  {
    num: '02',
    icon: 'ti-device-laptop',
    title: 'Free Computer Classes',
    desc: 'Free computer education for rural children, bridging the digital gap and opening doors to better opportunities.',
    tag: 'Education',
    accent: 'earth',
  },
  {
    num: '03',
    icon: 'ti-heart-handshake',
    title: 'Women Empowerment',
    desc: 'Skill development and income generation programs for women in rural areas through NGO-supported initiatives.',
    tag: 'Empowerment',
    accent: 'warm',
  },
  {
    num: '04',
    icon: 'ti-stethoscope',
    title: 'Medical Facility',
    desc: 'Basic healthcare services for villages where medical access is limited, ensuring health and wellbeing for all.',
    tag: 'Healthcare',
    accent: 'earth',
  },
  {
    num: '05',
    icon: 'ti-droplet',
    title: 'Ganga-Yamuna Safai',
    desc: 'Community-driven river cleanliness drives for Ganga and Yamuna — protecting our lifelines for future generations.',
    tag: 'Environment',
    accent: 'warm',
  },
  {
    num: '06',
    icon: 'ti-tree',
    title: 'Vriksharopan',
    desc: 'Mass tree plantation drives across villages and riverbanks — nurturing green cover, clean air and a living earth for generations to come.',
    tag: 'Environment',
    accent: 'earth',
  },
]

function Services() {
  return (
    <section className="services section">
      <div className="container">

        <div className="services-header">
          <p className="services-label">What We Do</p>
          <h2 className="section-title">Our work</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            We serve communities through these key programs and initiatives.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <div className={`service-row ${service.accent}`} key={service.num}>
              <div className="service-accent-bar"></div>
              <div className="service-num-col">
                <span className="service-num">{service.num}</span>
              </div>
              <div className="service-icon-col">
                <div className="service-icon-box">
                  <i className={`ti ${service.icon}`}></i>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <div className="service-tag-col">
                <span className="service-tag">{service.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services