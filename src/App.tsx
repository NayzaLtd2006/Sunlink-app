export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui', color: '#111' }}>
      
      {/* NAVBAR */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 40px', borderBottom: '1px solid #eee', position: 'sticky', top: 0, background: 'white', zIndex: 10
      }}>
        <h2 style={{ margin: 0, color: '#0ea5e9', fontWeight: 'bold' }}>SUNLINK</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#learn">Learn</a>
          <a href="#stats">Impact</a>
          <a href="#videos">Videos</a>
          <button style={{ padding: '10px 20px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
            Join
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ 
        textAlign: 'center', padding: '120px 20px', 
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', color: 'white' 
      }}>
        <h1 style={{ fontSize: '52px', margin: '0 0 20px' }}>Welcome to Sunlink</h1>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto 30px' }}>
          Connecting people through hospitality, learning, and community
        </p>
        <button style={{ padding: '16px 32px', fontSize: '18px', background: 'white', color: '#0ea5e9', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
          Get Started
        </button>
      </section>

      {/* STATS / NUMBERS SECTION */}
      <section id="stats" style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '50px' }}>Our Impact</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontSize: '48px', color: '#0ea5e9', margin: 0 }}>10K+</h3>
            <p style={{ fontSize: '18px', color: '#666' }}>Students</p>
          </div>
          <div>
            <h3 style={{ fontSize: '48px', color: '#0ea5e9', margin: 0 }}>50+</h3>
            <p style={{ fontSize: '18px', color: '#666' }}>Courses</p>
          </div>
          <div>
            <h3 style={{ fontSize: '48px', color: '#0ea5e9', margin: 0 }}>25+</h3>
            <p style={{ fontSize: '18px', color: '#666' }}>Countries</p>
          </div>
          <div>
            <h3 style={{ fontSize: '48px', color: '#0ea5e9', margin: 0 }}>100+</h3>
            <p style={{ fontSize: '18px', color: '#666' }}>Partners</p>
          </div>
        </div>
      </section>

      {/* SUNLINK LEARN HOSPITALITY SECTION */}
      <section id="learn" style={{ padding: '100px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>Sunlink Learn Hospitality</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#444', marginBottom: '20px' }}>
              Master the art of hospitality with world-class courses. From hotel management to customer service excellence, 
              we equip you with skills to thrive in the global hospitality industry.
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li>✓ Professional Certification Programs</li>
              <li>✓ Real-world Training & Internships</li>
              <li>✓ Expert Instructors</li>
            </ul>
            <button style={{ marginTop: '20px', padding: '14px 28px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
              Explore Courses
            </button>
          </div>
          <div style={{ background: '#e0f2fe', borderRadius: '16px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '20px', color: '#0284c7' }}>Hospitality Image Here</span>
          </div>
        </div>
      </section>

      {/* VIDEOS SECTION */}
      <section id="videos" style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '50px' }}>Featured Videos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* VIDEO 1 */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <iframe 
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Video 1"
              style={{ border: 0 }}
              allowFullScreen>
            </iframe>
            <div style={{ padding: '20px' }}>
              <h3>Welcome to Sunlink</h3>
              <p style={{ color: '#666' }}>Learn about our mission and community</p>
            </div>
          </div>

          {/* VIDEO 2 */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <iframe 
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Video 2"
              style={{ border: 0 }}
              allowFullScreen>
            </iframe>
            <div style={{ padding: '20px' }}>
              <h3>Hospitality Training</h3>
              <p style={{ color: '#666' }}>See our students in action</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #eee', color: '#666' }}>
        <p>© 2026 Sunlink. Learn Hospitality. Grow Together.</p>
      </footer>

    </div>
  )
                   }
