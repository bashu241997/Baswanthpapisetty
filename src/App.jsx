import React from "react";
import "./app.css";
import Layout from "./common/Layout";
import { BrowserRouter } from "react-router-dom";
import { loadFull } from "tsparticles";
import Particles from "react-particles";

function App() {
  const particlesInit = React.useCallback(async engine => {
    await loadFull(engine);
}, []);

  return (<div className="overflow-hidden absolute w-full h-auto z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">   
  <Particles
    id="tsparticles"
    init={particlesInit}
    className="particles-app"
    options={{
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 5,
                },
                repulse: {
                    distance: 200,
                    duration: 0.6,
                },
            },
        },
        particles: {
            color: {
                value: "#51b375",
            },
            links: {
                color: "#51b375",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 2, max: 5 },
            },
        },
        detectRetina: true,
    }}
/>

      <BrowserRouter  future={{ v7_startTransition: true }}>
        <div className="container mx-auto sm:px-6">
        <Layout />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
