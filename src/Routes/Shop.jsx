import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/Shop.css';
import '../CSS/ScreenEffects.css';
import { shopping_grid } from '../Routes/Router';
import Item from '../components/Item';

export default function Shop() {
    
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
        <div className='shop-item-container'>
            {shopping_grid.map(item => (
                <div key={item.id} >
                    <Item item={item} />
                </div>
            ))}
        </div>
    </div>
  )
}