import React from "react";
import "./app.css";
import Layout from "./common/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {


  return (<div className="overflow-hidden bg-#fbfbfb absolute w-full h-auto z-[-1]">   
      <BrowserRouter  future={{ v7_startTransition: true }}>
        <div className="container mx-auto sm:px-6">
        <Layout />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
