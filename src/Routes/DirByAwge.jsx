import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/DirByAwge.css';
import '../CSS/ScreenEffects.css';
import { dirByAwge } from './Router';



export default function DirByAwge() {
    
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
              className='return-button-dba' 
              onClick={() => handleRouteClick(navigate, '/media')}
            />
        <h1 className='shimmer-neon'>Directed <br/> By AWGE</h1>
        <div className='list-container'>
          {dirByAwge.map(item => (
            <div class="list-item" key={item.id} onClick={() => window.open(item.link, '_blank')}>
              <img src={item.img} alt={item.title} />
              <p>
                <h2>{item.title}</h2>
                <h3>{item.By}</h3>
              </p>
            </div>
          ))}

        </div>
    </div>
  )
}
