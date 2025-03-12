import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/DVD.css';
import '../CSS/ScreenEffects.css';
import { dvd } from './Router'

export default function DVD() {
    
    const navigate = useNavigate();

    useEffect(() => {
    // Petit délai pour s'assurer que le DOM est prêt
    const timeout = setTimeout(() => turnScreenOn(false), 2);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className='forum-bg'>
        <div className='awge-stars'></div>
        <img 
              src="/buttons/return-button.gif" 
              alt="return" 
              className='return-button-dvd' 
              onClick={() => handleRouteClick(navigate, '/home')}
            />
        <p className='stars-text'>
            <h1 onClick={() => handleRouteClick(navigate, '/dvd-vol-1')}>Vol. 1</h1><br />
            <h1 onClick={() => handleRouteClick(navigate, '/dvd-vol-2')}>Vol. 2</h1><br />
            <h1 onClick={() => handleRouteClick(navigate, '/dvd-vol-3')}>Vol. 3</h1><br />
        </p>
    </div>
  )
}