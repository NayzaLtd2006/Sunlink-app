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
          <a href="#impact">Impact</a>
          <button style={{ padding: '10px 20px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
            Join Free
          </button>
        </div>
      </nav>

      {/* HERO - SLIDE 1 */}
      <section style={{ 
        textAlign: 'center', padding: '140px 20px', 
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', color: 'white' 
      }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 10px' }}>Sunlink Hub x Sun City</h1>
        <p style={{ fontSize: '20px', margin: '0 0 10px', fontStyle: 'italic' }}>Connecting Sun City, Empowering Local Economies</p>
        <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
          An App for Inclusive Tourism, Sustainable SMEs, and Community Power
        </p>
        <p style={{ fontSize: '14px', marginBottom: '30px' }}>North West, South Africa | 20 July 2026</p>
        <button style={{ padding: '18px 36px', fontSize: '18px', background: 'white', color: '#0ea5e9', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
          Download App
        </button>
      </section>

      {/* PROBLEM - SLIDE 2 */}
      <section id="problem" style={{ padding: '100px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}>The Problem We’re Solving</h2>
        <ul style={{ fontSize: '18px', lineHeight: '2' }}>
          <li>Tourists spend at Sun City, but <b>less than 10%</b> of that spend reaches surrounding townships</li>
          <li>Local SMEs, crafters, and tour guides have <b>no direct channel</b> to reach 1 million+ Sun City guests annually</li>
          <li>Youth in Rustenburg, Mogwase, and Tlhabane have skills but <b>lack digital platforms</b></li>
          <li>High data costs and <b>load shedding</b> make national apps inaccessible</li>
        </ul>
      </section>

      {/* WHAT IS SUNLINK - SLIDE 3 */}
      <section id="marketplace" style={{ padding: '100px 20px', background: '#f0f9ff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '50px' }}>What is Sunlink Hub?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              <h3>1. 🏪 Marketplace</h3>
              <p>Verified local SMEs, tours, crafts, food, and transport near Sun City</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              <h3>2. 📈 Growth Hub</h3>
              <p>Digital skills workshops + micro-loans for entrepreneurs</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              <h3>3. 🤝 Trust System</h3>
              <p>Community "Hub Leaders" from local wards verify businesses</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              <h3>4. 📱 Accessible Tech</h3>
              <p>Works offline and uses minimal data for guests and locals</p>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIVE ECONOMIC DEV - SLIDE 4 */}
      <section style={{ padding: '100px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '20px' }}>Inclusive Economic Development</h2>
        <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px' }}>
          <b>Zero listing fees</b> for SMEs in Bojanala District for first 12 months
        </p>
        <div style={{ background: '#e0f2fe', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '28px', color: '#0284c7' }}>Impact</h3>
          <p style={{ fontSize: '20px' }}>When a tourist buys from a local artisan, <b>up to 90% of spend stays in the community</b></p>
        </div>
      </section>

      {/* SUSTAINABLE ENTREPRENEURSHIP - SLIDE 5 + SUNLINK LEARN */}
      <section id="learn" style={{ padding: '100px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>Sunlink Learn</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#444', marginBottom: '20px' }}>
              Free 10min video lessons on hospitality, pricing, customer service, and tax basics
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li>✓ Stock tracking + WhatsApp bookings</li>
              <li>✓ Cashless payments built-in</li>
              <li>✓ Hospitality & Customer Service</li>
            </ul>
            <button style={{ marginTop: '20px', padding: '14px 28px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
              Start Learning
            </button>
          </div>
          <div>
            <h3>Built-in Business Tools</h3>
            <p>We aim to flip the 70% SME failure rate in year 1 with tools + market access</p>
          </div>
        </div>
      </section>

      {/* COMMUNITY EMPOWERMENT - SLIDE 6 */}
      <section id="community" style={{ padding: '100px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}>Community Empowerment</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            <h3>🤝 Sunlink Hub Leaders</h3>
            <p>Each ward has a trusted local who verifies businesses and resolves issues</p>
          </div>
          <div>
            <h3>☀️ Community Project Fund</h3>
            <p>5% of app profits go to projects voted by users: solar, Wi-Fi, youth programs</p>
          </div>
        </div>
      </section>

      {/* INNOVATION - SLIDE 7 */}
      <section style={{ padding: '100px 20px', background: '#f0f9ff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}>Innovation & Creativity</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              <h3>📶 Offline-first Mode</h3>
              <p>Full app functionality even during load shedding</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              <h3>🎙️ Voice Listings</h3>
              <p>Record products and tours in Setswana for low-literacy users</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              <h3>☀️ Sunlink Solar Shops</h3>
              <p>Network of local shops with solar power to serve tourists during outages</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS - SLIDE 9 */}
      <section id="impact" style={{ padding: '100px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>Impact Metrics & Partnership</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          <div>
            <h3 style={{ fontSize: '48px', color: '#0ea5e9', margin: 0 }}>500+</h3>
            <p>Local Jobs in 18 months</p>
          </div>
          <div>
            <h3 style={{ fontSize: '48px', color: '#0ea5e9', margin: 0 }}>R5M+</h3>
            <p>SME Revenue Year 1</p>
          </div>
          <div>
            <h3 style={{ fontSize: '48px', color: '#0ea5e9', margin: 0 }}>200+</h3>
            <p>SMEs Trained via Sunlink Learn</p>
          </div>
        </div>
        <div style={{ background: '#e0f2fe', padding: '30px', borderRadius: '12px' }}>
          <h3>Partnership Ask: Sun City</h3>
          <p>QR codes in rooms, "Beyond the Gates" concierge, marketing support, supplier development</p>
        </div>
      </section>

      {/* CTA - SLIDE 10 */}
      <section style={{ padding: '120px 20px', textAlign: 'center', background: '#0ea5e9', color: 'white' }}>
        <h2 style={{ fontSize: '40px' }}>Join us. Download. List. Support. Build with us.</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>Sunlink Hub proves a world-class resort can lift an entire region</p>
        <button style={{ padding: '18px 36px', fontSize: '18px', background: 'white', color: '#0ea5e9', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
          Get Started
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #eee', color: '#666', fontSize: '14px' }}>
        <p>© 2026 Sunlink Hub x Sun City</p>
        <p>References: DTIC 2023, SEDA 2024, IOL 2024</p>
      </footer>

    </div>
  )
      }
