// src/components/BuyOut.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowBuyOut, addToCart } from './Reducer';
import '../CSS/Shop.css';

export default function BuyOut({ item }) {
    const dispatch = useDispatch();
    
    if (!item) return null;
    
    return (
        <div className='shop-buy-out-container'>
            <h1 onClick={() => dispatch(setShowBuyOut(false))}>X</h1>
            
            <div className="buyout-content">
                <img src={item.img} alt={item.text} />
                <h2>{item.text}</h2>
                <h2>Price: ${item.price || '19.99'}</h2>
                
                <div className="buyout-actions">
                    <h2 onClick={() => dispatch(addToCart(item))}>Add to Cart</h2>
                </div>
            </div>
        </div>
    );
}