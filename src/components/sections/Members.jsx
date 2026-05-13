import './Members.css'
import amanImg from '../../assets/aman.jpeg'
import kashishImg from '../../assets/kashish1.jpeg'
import tusharImg from '../../assets/tushar.jpeg'

const placeholder = 'https://ui-avatars.com/api/?background=1A4A2E&color=FF6B00&size=400&font-size=0.4&bold=true'

const members = [
  {
    name: 'Dr Neelmani',
    role: 'Founder & Director',
    desc: 'Visionary leader behind VED Trust, dedicated to rural development and community welfare.',
    image: `${placeholder}&name=Dr+Neelmani`,
  },
  {
    name: 'Member Name',
    role: 'Secretary',
    desc: 'Responsible for organizational management and coordinating NGO activities.',
    image: `${placeholder}&name=Secretary`,
  },
  {
    name: 'Aman Chamoli',
    role: 'Treasurer',
    desc: 'Managing financial operations and ensuring transparent use of funds.',
    image: amanImg,
  },
  {
    name: 'Tushar Kukwase',
    role: 'Education Head',
    desc: 'Leading free computer education programs for rural children.',
    image: tusharImg,
  },
  {
    name: 'Member Name',
    role: 'Medical Coordinator',
    desc: 'Organizing medical camps and healthcare facilities for rural communities.',
    image: `${placeholder}&name=Medical+Coord`,
  },
  {
    name: 'Kashish',
    role: 'Environment Head',
    desc: 'Leading Ganga-Yamuna river conservation and cleanliness drives.',
    image: kashishImg,
  },
]

function Members() {
  return (
    <section className="members section">
      <div className="container">

        <div className="members-header">
          <p className="members-label">Our Team</p>
          <h2 className="section-title">Our Members</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Dedicated individuals working together for community development.
          </p>
        </div>

        <div className="members-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>

              {/* Gallery jaisi full image */}
              <div className="member-img-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-img"
                />
                {/* Hover overlay */}
                <div className="member-overlay">
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                </div>
              </div>

              {/* Description neeche */}
              <div className="member-info">
                <h3 className="member-name-bottom">{member.name}</h3>
                <span className="member-role-bottom">{member.role}</span>
                <p className="member-desc">{member.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Members