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
      <section id="marketplace" style={{ padding: '100px 20px', maxWidth: '120
