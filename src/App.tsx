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
          <a href="#contact">Contact</a>
          <button style={{ padding: '10px 20px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
            List Your Business
          </button>
        </div>
      </nav>

      {/* HERO WITH APP STORE BUTTONS */}
      <section style={{ textAlign: 'center', padding: '0', position: 'relative', color: 'white' }}>
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" 
          alt="Sun City"
          style={{ width: '100%', height: '550px', objectFit: 'cover', filter: 'brightness(0.5)' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%' }}>
          <h1 style={{ fontSize: '52px', margin: '0 0 10px' }}>Sunlink Hub x Sun City</h1>
          <p style={{ fontSize: '22px', margin: '0 0 10px', fontStyle: 'italic' }}>Connecting Sun City, Empowering Local Economies</p>
          <p style={{ fontSize: '16px', marginBottom: '30px' }}>Available on Android & iPhone</p>
          
          {/* APP STORE BUTTONS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <a href="https://play.google.com" target="_blank" style={{ 
              background: 'black', color: 'white', padding: '12px 24px', borderRadius: '8px', 
              textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              📱 Get it on Google Play
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" style={{ 
              background: 'black', color: 'white', padding: '12px 24px', borderRadius: '8px', 
              textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              🍎 Download on App Store
            </a>
          </div>

          <a href="tel:0710763217" style={{ fontSize: '16px', color: 'white', textDecoration: 'underline' }}>
            Or Call Us: 071 076 3217
          </a>
        </div>
      </section>

      {/* MARKETPLACE WITH REAL BUSINESSES */}
      <section id="marketplace" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '10px' }}>Sunlink Marketplace</h2>
        <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '50px', color: '#
