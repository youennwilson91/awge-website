import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/Home.css';
import '../CSS/ScreenEffects.css';
import Item from '../components/Item';
import { grid } from './Router.jsx'

function Home() {
  const navigate = useNavigate();

  // Appliquer l'animation d'allumage au chargement du composant
  useEffect(() => {
    // Petit délai pour s'assurer que le DOM est prêt
    const timeout = setTimeout(turnScreenOn, 2);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
        <div className="home-bg">
            <div className="home-menu">
                <div className="home-menu-header">
                    <img src="/awge-halftone-logo.png" alt="" className="AWGE-small" />
                </div>
                <div className="home-menu-content">
                    {grid.map(item => (
                        <div key={item.id} className="home-menu-content-item-container" onClick={() => handleRouteClick(navigate, item.route)}>
                            <Item item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-copyright-container">
                <h2 className="home-copyright">© 2024 AWGE</h2>
                <h2 className="home-copyright">Terms and Conditions</h2>
                <h2 className="home-copyright">Privacy Policy</h2>
            </div>
        </div>
        <img src="/media-background.gif" alt="" className="media-gif" />
        <div className="vhs-container">
            <img src="/buttons/vhs-camera-button.gif" alt="" />
            <p className="media-text" onClick={() => handleRouteClick(navigate, '/media')}>MEDIA</p>
        </div>
    </div>
  );
}

export default Home;
