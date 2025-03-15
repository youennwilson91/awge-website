import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/Media.css';
import '../CSS/ScreenEffects.css';

export default function Media() {
    
    const navigate = useNavigate();

    useEffect(() => {
    // Petit délai pour s'assurer que le DOM est prêt
    const timeout = setTimeout(() => turnScreenOn(false), 2);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className='media-bg'>
        <div className='awge-stars'></div>
        <img 
              src="/buttons/return-button.gif" 
              alt="return" 
              className='return-button-media' 
              onClick={() => handleRouteClick(navigate, '/home')}
            />
        <p className='stars-text-media'>
            <h1 onClick={() => handleRouteClick(navigate, '/dir-by-awge')}>Directed by AWGE</h1><br />
            <h1 onClick={() => handleRouteClick(navigate, '/pictures')}>Pictures</h1><br />
            <h1 onClick={() => handleRouteClick(navigate, '/dir-by-awge')}>Videos</h1><br />
        </p>
    </div>
  )
}
