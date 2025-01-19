import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"
import cartSlice, { cartTotal } from './screen/Cart/cartSlice';
import usersSlice from './screen/Login&signup from/usersSlice';

// Store acts as a center place for all our states.
const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: usersSlice
  }
})

store.dispatch(cartTotal());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


