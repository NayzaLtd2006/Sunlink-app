                export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui', color: '#111' }}>
      <nav style={{padding: '20px', textAlign: 'center'}}>
        <h2 style={{ color: '#0ea5e9' }}>SUNLINK HUB x SUN CITY</h2>
      </nav>

      <section style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1>Sunlink Hub x Sun City</h1>
        <p>Connecting Sun City, Empowering Local Economies</p>
        <p><b>Call Us:</b> 071 076 3217</p>
        <a href="https://play.google.com" target="_blank">📱 Google Play</a>
        <a href="https://www.apple.com/app-store/" target="_blank" style={{marginLeft: '10px'}}>🍎 App Store</a>
      </section>

      <section id="marketplace" style={{ padding: '60px 20px', background: '#f0f9ff' }}>
        <h2 style={{textAlign: 'center'}}>Sunlink Marketplace</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>Mogwase Bead and Craft</h3>
            <p>Verified by: Thandi Mokoena</p>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>Tlhabane Cultural Tours</h3>
            <p>Verified by: Joseph Khumalo</p>
          </div>
        </div>
      </section>

      <section id="leaders" style={{ padding: '60px 20px' }}>
        <h2 style={{textAlign: 'center'}}>Community Hub Leaders</h2>
        <p style={{textAlign: 'center'}}>Contact: 073 111 2222</p>
      </section>

      <section id="contact" style={{ padding: '60px 20px', background: '#f8fafc', textAlign: 'center' }}>
        <h2>Contact Sunlink Hub</h2>
        <p><b>Customer Support:</b> 0800 123 456</p>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 20px', background: '#111', color: '#ccc' }}>
        <p>© 2026 Sunlink Hub. T and Cs: We do not take responsibility for transactions between users.</p>
      </footer>
    </div>
  );
                }
