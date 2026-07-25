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
          <a href="#learn">Sunlink Learn</a>
          <a href="#community">Community</a>
          <button style={{ padding: '10px 20px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
            Join Free
          </button>
        </div>
      </nav>

      {/* HERO WITH SUN CITY NIGHT IMAGE */}
      <section style={{ textAlign: 'center', padding: '0', position: 'relative', color: 'white' }}>
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" 
          alt="Sun City Night"
          style={{ width: '100%', height: '550px', objectFit: 'cover', filter: 'brightness(0.5)' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%' }}>
          <h1 style={{ fontSize: '52px', margin: '0 0 10px' }}>Sunlink Hub x Sun City</h1>
          <p style={{ fontSize: '22px', margin: '0 0 10px', fontStyle: 'italic' }}>Connecting Sun City, Empowering Local Economies</p>
          <p style={{ fontSize: '16px', marginBottom: '30px' }}>North West, South Africa | 20 July 2026</p>
          <button style={{ padding: '18px 36px', fontSize: '18px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
            Download App
          </button>
        </div>
      </section>

      {/* PROBLEM - SLIDE 2 */}
      <section style={{ padding: '100px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}>The Problem We’re Solving</h2>
        <ul style={{ fontSize: '18px', lineHeight
