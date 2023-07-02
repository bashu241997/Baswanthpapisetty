import React from "react";
import "./app.css";
import Layout from "./common/Layout";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="absolute w-full bg-[#333] min-h-screen Home_background ">
      <BrowserRouter  future={{ v7_startTransition: true }}>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
