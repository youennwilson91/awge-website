import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/Artists.css';
import '../CSS/ScreenEffects.css';
import Item from '../components/Item';
import { artists } from './Router.jsx'

function Artists() {
  const navigate = useNavigate();

  // Appliquer l'animation d'allumage au chargement du composant
  useEffect(() => {
    // Petit délai pour s'assurer que le DOM est prêt
    const timeout = setTimeout(turnScreenOn, 2);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
        <div className="artist-bg">
        <img 
              src="/buttons/return-button.gif" 
              alt="return" 
              className='return-button-artists' 
              onClick={() => handleRouteClick(navigate, '/artists')}
            />
            <div className="artists-menu">
                <h1 className="artists-menu-header">ARTISTS</h1>
                <div className="artists-menu-content">
                    {artists.map(artist => (
                        <h2 className="artists-menu-content-item" 
                            key={artist.id} 
                            onClick={() => handleRouteClick(navigate, `/artist?id=${artist.id}`)}
                        >
                            {artist.name}
                        </h2>
                    ))}
                </div>
            </div>
            <div className="artists-copyright-container">
                <h2 className="artists-copyright"> 2024 AWGE</h2>
                <h2 className="artists-copyright">Terms and Conditions</h2>
                <h2 className="artists-copyright">Privacy Policy</h2>
            </div>
        </div>
    </div>
  );
}

export default Artists;