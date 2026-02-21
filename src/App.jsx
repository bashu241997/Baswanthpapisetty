import React, { useEffect, useState } from "react";
import "./app.css";
import Layout from "./common/Layout";

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 6}s`,
      delay: `${Math.random() * 5}s`,
      maxOpacity: 0.2 + Math.random() * 0.5,
    });
  }
  return stars;
};

function App() {
  const [stars] = useState(() => generateStars(100));
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0c0c14]">
      <div className="cursor-glow hidden md:block" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />
      <div className="stars-container">
        {stars.map((s) => (
          <div key={s.id} className="star" style={{ left: s.left, top: s.top, "--duration": s.duration, "--delay": s.delay, "--max-opacity": s.maxOpacity }} />
        ))}
      </div>
      <div className="grid-lines" />
      <div className="relative z-10"><Layout /></div>
    </div>
  );
}
export default App;
