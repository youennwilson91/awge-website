import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../CSS/App.css";
import "../CSS/index.css";
import "../CSS/ScreenEffects.css";
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
    <div className="landing-bg">
      <img src="/awge-halftone-logo.png" alt="" className="AWGE" />
      <div className="flex flex-row items-center justify-center space-x-24">
        <button
          className={`press-start-button blink ${isClicked ? "clicked" : ""}`}
          onClick={handlePressStart}
          disabled={isClicked}
        >
          PRESS START
        </button>
      </div>
      <h2 className="copyright">©  2024 AWGE</h2>
    </div>
  );
}

export default App;
