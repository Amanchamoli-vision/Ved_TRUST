import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Header />
      <main style={{ width: '100%' }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout