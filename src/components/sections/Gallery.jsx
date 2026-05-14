import './Gallery.css'

// ✅ Sahi path — 2 folders upar jaao
import tree from '../../assets/tree.jpeg'
import cow from '../../assets/cow.jpeg'
import tree2 from '../../assets/tree2.jpeg'
import kashish1 from '../../assets/kashish1.jpeg'
import tushar from '../../assets/tushar.jpeg'
import hero from '../../assets/hero.png'

function Gallery() {
  const images = [
    { id: 1, title: 'Environment', category: 'Plantation', src: tree },
    //{ id: 2, title: 'Women Workshop', category: 'Empowerment', src: tree2 },
    //{ id: 3, title: 'Computer Classes', category: 'Education', src: cow },
    
    // { id: 4, title: 'Medical Camp', category: 'Healthcare', src: kashish1 },
    // { id: 5, title: 'River Cleaning', category: 'Environment', src: tushar },
    // { id: 6, title: 'Community Event', category: 'Community', src: hero },
    // { id: 7, title: 'Tree Plantation', category: 'Environment', src: tree },
    // { id: 8, title: 'Skill Training', category: 'Empowerment', src: aman },
    // { id: 9, title: 'Health Checkup', category: 'Healthcare', src: kashish },
  ]

  return (
    <section className="gallery section section-cream">
      <div className="container">
        <div className="gallery-header">
          <p className="gallery-label">Our Work</p>
          <h2 className="section-title">Gallery</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A glimpse of our work and impact in the community.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img) => (
            <div className="gallery-item" key={img.id}>
              <div className="gallery-placeholder">
                <img
                  src={img.src}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <div className="gallery-overlay">
                <h4>{img.title}</h4>
                <p>{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery