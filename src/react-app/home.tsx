// src/react-app/home.tsx

import "./home.css"; // Kita buat file CSS terpisah khusus untuk halaman ini agar rapi

export default function Home() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Masuk Sistem</h2>
        
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Masukkan username" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Masukkan password" required />
          </div>
          
          <div className="remember-group">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Ingat saya ke depannya</label>
          </div>
          
          <button type="submit" className="btn-login">Masuk</button>
        </form>
      </div>
    </div>
  );
}