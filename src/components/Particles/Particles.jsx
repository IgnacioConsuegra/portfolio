import { useEffect, useRef } from "react";
import './Particles.css'
const Particles = () => {
  const onlyOnce = useRef(true);
  useEffect(() => {
    if(onlyOnce.current) {
      console.log("Only once")
      const script = document.createElement("script");
      script.src = "./ParticlesCanvas.js";
      document.body.appendChild(script);
      onlyOnce.current = false;
    }
  }, []);
  return (
    <div className="canvasHolder">
      <canvas id="canvas"></canvas>
    </div>
  );
};
export default Particles;
