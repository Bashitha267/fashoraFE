import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import createRouter from '../src/pages/router';
import './App.css';
import { Cart } from './components/Cart';

function App() {
  const [cartopen, setCartopen] = useState(false);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : []
  );

  const [productId, setProductID] = useState('');
  console.log(productId)
  const display_cart = (_id: string) => {
    if (_id) {
      setProductID(_id);
    }
  };

  const toggleCart = () => {
    setCartopen(!cartopen);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const initialCart = () => {
    const cart = localStorage.getItem('cartItems');
    return cart ? JSON.parse(cart) : [];
  };

  useEffect(() => {
    setCartItems(initialCart());
    window.dispatchEvent(new Event('cartUpdated'));
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('cartUpdated'));
  }, [cartItems]);

  const addToCart = (product: any) => {
    setCartItems((prevItems: any) => [...prevItems, product]);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const router = createRouter(display_cart, addToCart, toggleCart);

  return (
    <>
      <RouterProvider router={router} />

      <Cart
        isOpen={cartopen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default App;
