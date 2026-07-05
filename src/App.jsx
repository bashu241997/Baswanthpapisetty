import React from "react";
import "./app.css";
import Layout from "./common/Layout";

function App() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5]">
      {/* Subtle Static Orbs (Z-index 0) */}
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />
      
      {/* Micro Grid Overlay */}
      <div className="grid-lines" />
      
      {/* Main Content Layout (Z-index 10) */}
      <div className="relative z-10">
        <Layout />
      </div>
    </div>
  );
}

export default App;
