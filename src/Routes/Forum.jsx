import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/Forum.css';
import '../CSS/ScreenEffects.css';

export default function Forum() {
    
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
              className='return-button-forum' 
              onClick={() => handleRouteClick(navigate, '/home')}
            />
        <p className='stars-text'>
            AWGE Forum has been closed.<br />
            Please try again later.
        </p>
    </div>
  )
}