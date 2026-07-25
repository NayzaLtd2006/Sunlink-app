export default function App() {
  const heroTextStyle = {position: "absolute" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "90%"};

  return (
    <div style={{ fontFamily: "system-ui", color: "#111" }}>
      
      {/* NAVBAR */}
      <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "white", zIndex: 10}}>
        <h2 style={{ margin: 0, color: "#0ea5e9", fontWeight: "bold" }}>SUNLINK HUB x SUN CITY</h2>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#marketplace">Marketplace</a>
          <a href="#solar">Solar Shops</a>
          <a href="#leaders">Hub Leaders</a>
          <a href="#learn">Sunlink Learn</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "0", position: "relative", color: "white" }}>
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" alt="Sun City" style={{ width: "100%", height: "550px", objectFit: "cover", filter: "brightness(0.5)" }}/>
        <div style={heroTextStyle}>
          <h1 style={{ fontSize: "52px", margin: "0 0 10px" }}>Sunlink Hub x Sun City</h1>
          <p style={{ fontSize: "22px", margin: "0 0 10px", fontStyle: "italic" }}>Connecting Sun City, Empowering Local Economies</p>
          <p style={{ fontSize: "16px", marginBottom: "30px" }}>Available on Android and iPhone</p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginBottom: "20px" }}>
            <a href="https://play.google.com" target="_blank" style={{ background: "black", color: "white", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>📱 Google Play</a>
            <a href="https://www.apple.com/app-store/" target="_blank" style={{ background: "black", color: "white", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", fontWeight:
