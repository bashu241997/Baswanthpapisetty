import React from "react";
import "./app.css";
import Layout from "./common/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden minebg absolute w-full h-auto z-[-1]">
      <img src={require('./assets/back.png')} className="-z-[12] w-full fixed" />
      <div className="container mx-auto sm:px-6">
        <Layout />
      </div>
    </div>
  );
}

export default App;
