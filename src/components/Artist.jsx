import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import { artists } from '../Routes/Router';
import '../CSS/Artist.css';
import '../CSS/ScreenEffects.css';

export default function Artist() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const artistId = parseInt(searchParams.get('id'));
    
    // Trouver l'artiste correspondant dans le tableau artists
    const artist = artists.find(a => a.id === artistId);
  
    // Appliquer l'animation d'allumage au chargement du composant
    useEffect(() => {
      // Petit délai pour s'assurer que le DOM est prêt
      const timeout = setTimeout(turnScreenOn, 2);
      return () => clearTimeout(timeout);
    }, []);
  
    if (!artist) {
      return (
        <div className="artist-bg" style={{ 
            backgroundImage: `url(${artist.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <h1>Artiste non trouvé</h1>
          <button onClick={() => handleRouteClick(navigate, '/artists')}>
            Retour aux artistes
          </button>
        </div>
      );
    }
  
    return (
      <div>
          <div className="artist-bg" style={{ 
            backgroundImage: `url(${artist.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            <img 
                src="/buttons/return-button.gif" 
                alt="return" 
                className="return-button-artists" 
                onClick={() => handleRouteClick(navigate, '/artists')}
            />
            <div className="artist-menu">
                <img src={artist.img} alt=""/>
                <h1 className="artist-menu-header">{artist.name}</h1>
                <div className="artist-menu-content">
                    
                    {/* Informations de l'artiste */}
                    <div className="artist-info">
                        {artist.info?.info1 && <p>{artist.info.info1}</p>}
                        {artist.info?.info2 && <p>{artist.info.info2}</p>}
                    </div>
                </div>
            </div>
            <div className="artists-copyright-container">
                <h2 className="artists-copyright">&copy; 2024 AWGE</h2>
                <h2 className="artists-copyright">Terms and Conditions</h2>
                <h2 className="artists-copyright">Privacy Policy</h2>
            </div>
          </div>
      </div>
    );
  }