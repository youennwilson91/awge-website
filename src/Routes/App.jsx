import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../CSS/index.css";
import { turnScreenOn, handleRouteClick } from "../utils/screenTransitions";

function App() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  function handlePressStart() {
    setIsClicked(true);
    handleRouteClick(navigate, "/home");
  }

  // Appliquer l'animation d'allumage au chargement initial
  useEffect(() => {
    // Petit délai pour s'assurer que le DOM est prêt
    const timeout = setTimeout(turnScreenOn, 2);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center text-shadow bg-gray-300 animate-pulse">
      <img src="/awge-halftone-logo.png" alt="" className="w-1/2 h-1/4 inline-block object-contain mb-5" />
      <div className="flex flex-row items-center justify-center space-x-24">
      <button
        className="font-press-start cursor-pointer animate-blink hover:animate-none hover:bg-black hover:text-white "
        onClick={handlePressStart}
        disabled={isClicked}
      >
        PRESS START
      </button>
      </div>
      <h2 className="text-sm leading-tight text-black inline-block"> 2024 Youenn WILSON</h2>
    </div>
  );
}

export default App;
