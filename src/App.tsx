  export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui', color: '#111' }}>
      
      {/* NAVBAR */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 40px', borderBottom: '1px solid #eee', position: 'sticky', top: 0, background: 'white', zIndex: 10
      }}>
        <h2 style={{ margin: 0, color: '#0ea5e9', fontWeight: 'bold' }}>SUNLINK HUB x SUN CITY</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#marketplace">Marketplace</a>
          <a href="#leaders">Hub Leaders</a>
          <a href="#learn">Sunlink Learn</a>
          <button style={{ padding: '10px 20px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
            List Your Business
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: '0', position: 'relative', color: 'white' }}>
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" 
          alt="Sun City"
          style={{ width: '100%', height: '550px', objectFit: 'cover', filter: 'brightness(0.5)' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%' }}>
          <h1 style={{ fontSize: '52px', margin: '0 0 10px' }}>Sunlink Hub x Sun City</h1>
          <p style={{ fontSize: '22px', margin: '0 0 10px', fontStyle: 'italic' }}>Connecting Sun City, Empowering Local Economies</p>
          <button style={{ padding: '18px 36px', fontSize: '18px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
            Download App
          </button>
        </div>
      </section>

      {/* MARKETPLACE WITH REAL BUSINESSES - SLIDE 3 */}
      <section id="marketplace" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '10px' }}>Sunlink Marketplace</h2>
        <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '50px', color: '#666' }}>Verified local SMEs near Sun City. All businesses verified by Community Hub Leaders.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* BUSINESS 1 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', background: 'white' }}>
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600" style={{ width: '100%', height: '180px', objectFit: 'cover' }}/>
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>Mogwase Bead & Craft</h3>
                <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>✓ Verified</span>
              </div>
              <p style={{ color: '#666', margin: '8px 0' }}>Handmade beadwork, keyrings, and souvenirs</p>
              <p style={{ fontSize: '14px' }}><b>Location:</b> Mogwase Plaza, Bojanala</p>
              <p style={{ fontSize: '14px' }}><b>WhatsApp:</b> 072 123 4567</p>
              <p style={{ fontSize: '12px', color: '#0284c7', marginTop: '10px' }}>Verified by: Thandi Mokoena - Mogwase Ward Hub Leader</p>
              <a href="https://wa.me/27721234567" target="_blank" style={{ display: 'inline-block', marginTop: '10px', background: '#25D366', color: 'white', padding: '10px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>WhatsApp Order</a>
            </div>
          </div>

          {/* BUSINESS 2 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', background: 'white' }}>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600" style={{ width: '100%', height: '180px', objectFit: 'cover' }}/>
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>Tlhabane Cultural Tours</h3>
                <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>✓ Verified</span>
              </div>
              <p style={{ color: '#666', margin: '8px 0' }}>Township tours, cultural experiences, transport</p>
              <p style={{ fontSize: '14px' }}><b>Location:</b> Tlhabane, Rustenburg</p>
              <p style={{ fontSize: '14px' }}><b>Call:</b> 082 987 6543</p>
              <p style={{ fontSize: '12px', color: '#0284c7', marginTop: '10px' }}>Verified by: Joseph Khumalo - Tlhabane Ward Hub Leader</p>
              <a href="tel:0829876543" style={{ display: 'inline-block', marginTop: '10px', background: '#0ea5e9', color: 'white', padding: '10px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>Book Tour</a>
            </div>
          </div>

          {/* BUSINESS 3 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', background: 'white' }}>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" style={{ width: '100%', height: '180px', objectFit: 'cover' }}/>
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>Sun City Taxi & Shuttle</h3>
                <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>✓ Verified</span>
              </div>
              <p style={{ color: '#666', margin: '8px 0' }}>Reliable transport to and from Sun City 24/7</p>
              <p style={{ fontSize: '14px' }}><b>Location:</b> Rustenburg CBD</p>
              <p style={{ fontSize: '14px' }}><b>WhatsApp:</b> 071 555 1234</p>
              <p style={{ fontSize: '12px', color: '#0284c7', marginTop: '10px' }}>Verified by: Sarah Lebone - Rustenburg Ward Hub Leader</p>
              <a href="https://wa.me/27715551234" target="_blank" style={{ display: 'inline-block', marginTop: '10px', background: '#25D366', color: 'white', padding: '10px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>Book Ride</a>
            </div>
          </div>

        </div>
      </section>

      {/* HUB LEADERS SECTION - SLIDE 6 */}
      <section id="leaders" style={{ padding: '100px 20px', background: '#f0f9ff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '20px' }}>Community Hub Leaders</h2>
          <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '50px' }}>Trusted locals who verify businesses and support SMEs in each ward</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3>Thandi Mokoena</h3>
              <p style={{ color: '#0ea5e9', fontWeight: 'bold' }}>Mogwase Ward Hub Leader</p>
              <p>Supports 45+ local crafters and food vendors</p>
              <p><b>Contact:</b> 073 111 2222</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3>Joseph Khumalo</h3>
              <p style={{ color: '#0ea5e9', fontWeight: 'bold' }}>Tlhabane Ward Hub Leader</p>
              <p>Coordinates tours and cultural experiences</p>
              <p><b>Contact:</b> 082 333 4444</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3>Sarah Lebone</h3>
              <p style={{ color: '#0ea5e9', fontWeight: 'bold' }}>Rustenburg Ward Hub Leader</p>
              <p>Verifies transport and hospitality businesses</p>
              <p><b>Contact:</b> 071 555 6666</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUNLINK LEARN */}
      <section id="learn" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '20px' }}>Sunlink Learn</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            {/* VIDEO 1: PRICING */}
<iframe 
  width="100%" 
  height="220" 
  src="https://www.youtube-nocookie.com/embed/tn0veQ7_stI" 
  title="Pricing Strategy" 
  style={{ border: 0 }} 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen>
</iframe>

{/* VIDEO 2: WHATSAPP */}
<iframe 
  width="100%" 
  height="220" 
  src="https://www.youtube-nocookie.com/embed/VJQJPi8ScJY" 
  title="WhatsApp Business" 
  style={{ border: 0 }} 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen>
</iframe>

      {/* CTA */}
      <section style={{ padding: '120px 20px', textAlign: 'center', background: '#0ea5e9', color: 'white' }}>
        <h2 style={{ fontSize: '40px' }}>Join us. Download. List. Support. Build with us.</h2>
        <button style={{ marginTop: '20px', padding: '18px 36px', fontSize: '18px', background: 'white', color: '#0ea5e9', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
          List Your SME Free
        </button>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #eee', color: '#666' }}>
        <p>© 2026 Sunlink Hub x Sun City | Zero listing fees for 12 months</p>
      </footer>

    </div>
  )
          }
