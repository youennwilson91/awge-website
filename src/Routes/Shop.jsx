import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/Shop.css';
import '../CSS/ScreenEffects.css';
import { shopping_grid } from '../Routes/Router';
import Item from '../components/Item';
import { useDispatch, useSelector } from 'react-redux';
import { setShowBuyOut, setShowCart, addToCart } from '../components/Reducer';
import BuyOut from '../components/BuyOut';

export default function Shop() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showBuyOut = useSelector(state => state.shop.showBuyOut);
    const selectedItem = useSelector(state => state.shop.selectedItem);
    const showCart = useSelector(state => state.shop.showCart);
    const cart = useSelector(state => state.shop.cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        setTotal(total);
    }, [cart]);

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
        <div className='shop-cart-container' onClick={() => dispatch(setShowCart(true))}>
            <img src="/shop/cart-icon.avif" alt="cart" />
        </div>
        <div className='shop-item-container'>
            {shopping_grid.map(item => (
                <div key={item.id} >
                    <Item item={item} onClick={() => dispatch(setShowBuyOut({ show: true, item }))}/>
                </div>
            ))}
        </div>

        {showBuyOut && (
            <BuyOut item={selectedItem} />
        )}

        {showCart && (
            <div className='shop-buy-out-container'>
                <h1 onClick={() => dispatch(setShowCart(false))}>X</h1>
                <div className="cart-content">
                    {cart.map(item => (
                        <div key={item.id}>
                            <img src={item.img} alt={item.text} />
                            <h2>{item.text}</h2>
                            <h2>Price: ${item.price}</h2>
                        </div>
                    ))}
                </div>
                <h2>Total: ${total}</h2>
                <h2 className='pay-button'>$ PAY $</h2>
            </div>
        )}

    </div>
  )
}
