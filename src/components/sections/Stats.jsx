import vedLogo from '../../assets/ved-logo.png'

function Stats() {
  const stats = [
    { number: '0', label: 'Children Educated', icon: '👦' },
    { number: '0', label: 'Women Empowered', icon: '👩' },
    { number: '0', label: 'Cows Sheltered', icon: '🐄' },
    { number: '0', label: 'Medical Aid Given', icon: '🏥' },
  ]

  return (
    <>
      <style>{`
        .stats {
          background: linear-gradient(135deg, #1A4A2E, #2d7a4e);
          padding: 60px 0;
        }
        .stats-logo-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }
        .stats-logo {
          width: 180px;
          height: 180px;
          object-fit: contain;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          text-align: center;
        }
        .stat-card {
          padding: 32px 20px;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .stat-card:last-child {
          border-right: none;
        }
        .stat-icon {
          font-size: 40px;
          display: block;
          margin-bottom: 12px;
        }
        .stat-number {
          font-size: 42px;
          font-weight: 800;
          color: #FF6B00;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-card {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.15);
          }
        }
        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="stats">
        <div className="container">
          <div className="stats-logo-wrapper">
            <img src={vedLogo} alt="VED Foundation Logo" className="stats-logo" />
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <span className="stat-icon">{stat.icon}</span>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Stats