import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function SpreadSelect() {
  return <div>스프레드 선택 (준비 중)</div>;
}

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <header style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/spread">SpreadSelect</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spread" element={<SpreadSelect />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
