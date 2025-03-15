import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/Picutres.css';
import '../CSS/ScreenEffects.css';
import { dirByAwgeImages } from './Router';


export default function Pictures() {
    
    const navigate = useNavigate();

    useEffect(() => {
      // Petit délai pour s'assurer que le DOM est prêt
      const timeout = setTimeout(() => turnScreenOn(false), 2);
      return () => clearTimeout(timeout);
    }, []);


    return (
      <div className='pictures-bg'>
          <div className='awge-stars'></div>
          <img 
                src="/buttons/return-button.gif" 
                alt="return" 
                className='return-button-pictures' 
                onClick={() => handleRouteClick(navigate, '/media')}
              />
          <div className='pictures-container'>
            {dirByAwgeImages.map(item => (
                <img src={item.img} alt={`Picture ${item.id}`} />
            ))}
          </div>
      </div>
    )
}
