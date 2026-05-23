import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import BerandaClient from "./berandaclient"; // Impor komponen baru

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Jalur akses untuk beranda client */}
        <Route path="/client" element={<BerandaClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;