import { createContext, useReducer, useContext } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const ShopContext = createContext();

const shopSlice = createSlice({
  name: 'shop',
  initialState: { 
    showBuyOut: false,
    showCart: false,
    cart: [],
    formData: {
      email: '',
      subject: '',
      message: '',
      sendTo: ''
    }
  },
  reducers: {
    setShowBuyOut: (state, action) => {
      if (typeof action.payload === 'boolean') {
        state.showBuyOut = action.payload;
        state.selectedItem = null;
      } else {
        state.showBuyOut = action.payload.show;
        state.selectedItem = action.payload.item;
      }
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    }

  },
});

// Exporter les actions pour pouvoir les utiliser dans les composants
export const { setShowBuyOut, addToCart, setShowCart, setFormData } = shopSlice.actions;

// Configurer le store
const store = configureStore({
  reducer: {
    shop: shopSlice.reducer
  }
});

export default store;
