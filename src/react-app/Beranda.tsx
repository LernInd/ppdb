// src/react-app/Beranda.tsx

import "./App.css";

export default function Beranda() {
  return (
    <div className="dashboard-container">
      {/* Sidebar Section */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-placeholder"></div>
          <h2>Darunnajah</h2>
        </div>
        <ul className="sidebar-menu">
          <li className="active"><span className="icon">🏠</span> Beranda</li>
          <li><span className="icon">📄</span> Formulir</li>
          <li><span className="icon">📤</span> Upload Berkas</li>
          <li><span className="icon">🖨️</span> Cetak Kartu</li>
          <li><span className="icon">📢</span> Pengumuman</li>
        </ul>
        <div className="sidebar-footer">
          <button className="btn-logout"><span className="icon">🚪</span> Logout</button>
        </div>
      </aside>

      {/* Main Content Section */}
      <main className="main-content">
        <header className="page-header">
          <h1>Formulir Pendaftaran</h1>
        </header>

        <div className="form-card">
          <div className="form-grid">
            {/* Kolom Kiri */}
            <div className="form-column">
              <div className="form-group">
                <label>NISN</label>
                <input type="text" placeholder="Masukkan NISN" />
              </div>
              
              <div className="form-group">
                <label>NIK</label>
                <input type="text" placeholder="Masukkan NIK" />
              </div>
              
              <div className="form-group">
                <label>Tempat Lahir</label>
                <input type="text" placeholder="Masukkan Tempat Lahir" />
              </div>
              
              <div className="form-group">
                <label>Tanggal Lahir</label>
                <input type="date" />
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="form-column">
              <div className="form-group">
                <label>Nama Lengkap (Sesuai Akta Kelahiran/Ijazah)</label>
                <input type="text" placeholder="Masukkan Nama Lengkap" />
              </div>
              
              <div className="form-group">
                <label>Jenis Kelamin</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input type="radio" name="jenis_kelamin" value="Laki-laki" /> Laki-laki
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="jenis_kelamin" value="Perempuan" /> Perempuan
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label>Gelombang</label>
                <select>
                  <option value="">Pilih Gelombang...</option>
                  <option value="1">Gelombang 1</option>
                  <option value="2">Gelombang 2</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="divider" />
          
          <div className="button-group-right">
            <button className="btn-outline-primary">Cari</button>
            <button className="btn-outline-secondary">Isi Manual</button>
            <button className="btn-primary">Selanjutnya</button>
          </div>
        </div>
      </main>
    </div>
  );
}