// src/react-app/berandaclient.tsx

import { useState } from "react";
import "./berandaclient.css";

export default function BerandaClient() {
  // State untuk mengontrol sidebar di mode mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="client-container">
      {/* Header Mobile (Hanya tampil di HP) */}
      <div className="mobile-header">
        <div className="brand-logo">
          <span>PPDB Client</span>
        </div>
        <button className="burger-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo desktop-only">
          <span>PPDB Client</span>
        </div>
        
        <ul className="sidebar-menu">
          <li><a href="#beranda" className="active" onClick={() => setIsSidebarOpen(false)}>Beranda</a></li>
          <li><a href="#pendaftaran" onClick={() => setIsSidebarOpen(false)}>Pendaftaran</a></li>
          <li><a href="#list" onClick={() => setIsSidebarOpen(false)}>List</a></li>
        </ul>
        
        {/* Ruang kosong untuk data pengguna (akan dikembangkan nanti) */}
        <div className="user-profile-placeholder">
          {/* Tempat data user */}
        </div>
      </aside>

      {/* Overlay: Gelap di latar belakang saat menu HP terbuka */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Main Content */}
      <main className="client-content">
        <header className="content-header">
          <h1>Selamat Datang di Portal PPDB</h1>
          <p>Silakan pilih menu untuk melakukan pendaftaran atau melihat list pendaftar.</p>
        </header>
        
        <div className="info-card">
          <h3>Informasi Alur Pendaftaran</h3>
          <p>1. Pilih menu <strong>Pendaftaran</strong> untuk mengisi formulir.</p>
          <p>2. Cek status berkas dan kelulusan pada menu <strong>List</strong>.</p>
        </div>
      </main>
    </div>
  );
}