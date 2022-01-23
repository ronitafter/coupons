import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {CartProvider} from 'react-use-cart';



function App() {
  return (
    <div className="App">
    <h1 className='text-info'>App</h1>
    <CartProvider>
    <Home/>
    <Cart/>
    </CartProvider>
    </div>
  );
}

export default App;
