import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function IntelDashboard() {
  const card = {border: '2px solid #FFD700', padding: '20px', borderRadius: '12px', background: '#FFF', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px'}
  const btn = {background: '#FFD700', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginRight: '10px', color: '#000'}
  const h = {color: '#FF8C00'}

  return (
    <div style={{padding: '40px 20px', background: '#FFF8E1', minHeight: '100vh'}}>
      <h1 style={{...h, fontSize: '32px', textAlign: 'center'}}>Hub Leader Intel</h1>
      <p style={{textAlign: 'center', marginBottom: '30px'}}>Manage vendors, payouts, and training videos.</p>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '30px 0'}}>
        <div style={card}>
          <h3 style={h}>Vendor Approvals</h3>
          <p>Review and approve new vendors</p>
          <button style={btn}>View Requests</button>
        </div>
        
        <div style={card}>
          <h3 style={h}>Payouts</h3>
          <p>Manage hub leader payouts</p>
          <button style={btn}>Manage Payouts</button>
        </div>

        <div style={card}>
          <h3 style={h}>Training Videos</h3>
          <p>Upload and manage training content</p>
          <button style={btn}>Upload Video</button>
        </div>
      </div>

      <div style={{textAlign: 'center', marginTop: '40px'}}>
        <Link to="/" style={{...btn, textDecoration: 'none', display: 'inline-block'}}>Back to Home</Link>
      </div>
    </div>
  );
}

function Home() { 
  const btn = {background: '#FFD700', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none', color: '#000', display: 'inline-block'}
  return (
    <div style={{padding: '40px', textAlign: 'center', background: '#FFF8E1', minHeight: '100vh'}}>
      <h1 style={{color: '#FF8C00', fontSize: '36px'}}>Welcome to Sunlink</h1>
      <p>Empowering Hub Leaders across South Africa</p>
      <Link to="/intel" style={{...btn, marginTop: '20px'}}>Go to Hub Leader Dashboard</Link>
    </div>
  )
}

function Navbar() {
  const link = {color: '#FF8C00', fontWeight: 'bold', textDecoration: 'none', margin: '0 15px', fontSize: '18px'}
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: '#FFF', borderBottom: '2px solid #FFD700'}}>
      <Link to="/" style={{...link, fontSize: '22px'}}>Sunlink</Link>
      <div>
        <Link to="/" style={link}>Home</Link>
        <Link to="/intel" style={link}>Hub Leader</Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intel" element={<IntelDashboard />} />
      </Routes>
    </Router>
  );
}