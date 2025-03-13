import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/About.css';
import '../CSS/ScreenEffects.css';

export default function About() {
    
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
            <h1>Rules</h1>
            <h1>#1 NEVER REVEAL WHAT AWGE MEANS<br />#2 WHEN IN DOUBT ALWAYS REFER TO RULE #1</h1>
            <hr />
            <h1 onClick={() => handleRouteClick(navigate, '/artists')}>Artists</h1><br />
            <h1 onClick={() => handleRouteClick(navigate, '/people')}>People</h1><br />
        </p>
    </div>
  )
}