import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/People.css';
import '../CSS/ScreenEffects.css';
import Item from '../components/Item';
import { people } from './Router.jsx'

function People() {
  const navigate = useNavigate();

  // Appliquer l'animation d'allumage au chargement du composant
  useEffect(() => {
    // Petit délai pour s'assurer que le DOM est prêt
    const timeout = setTimeout(turnScreenOn, 2);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
        <div className="people-bg">
        <img 
              src="/buttons/return-button.gif" 
              alt="return" 
              className='return-button-people' 
              onClick={() => handleRouteClick(navigate, '/artists')}
            />
            <div className="people-menu">
                <h1 className="people-menu-header">PEOPLE</h1>
                <div className="people-menu-content">
                    {people.map(artist => (
                        <h2 className="people-menu-content-item" key={artist.id}>
                            {artist.name}
                        </h2>
                    ))}
                </div>
            </div>
            <div className="people-copyright-container">
                <h2 className="people-copyright"> 2024 AWGE</h2>
                <h2 className="people-copyright">Terms and Conditions</h2>
                <h2 className="people-copyright">Privacy Policy</h2>
            </div>
        </div>
    </div>
  );
}

export default People;