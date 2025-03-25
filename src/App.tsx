import { useEffect, useState } from 'react';
import './App.css';
import { Cart } from './components/Cart';
import { NavBar } from './components/NavBar';
import { Favourite } from './pages/Favourite';
import { Home } from './pages/Home';
import { Kids } from './pages/Kids';
import { Men } from './pages/Men';
import { Other } from './pages/Other';
import { Product } from './pages/Product';
import { Signup } from './pages/Signup';
import { Women } from './pages/Women';

function App() {
  const [cartopen, setCartopen] = useState(false);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : []
  );
  const [productId, setProductID] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const addToCart = (product: any) => {
    setCartItems((prevItems:any) => {
      const updatedItems = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage here
      return updatedItems;
    });
  };

  const display_cart = (_id: string) => {
    if (_id) {
      setProductID(_id);
    }
  };

  useEffect(() => {
    if (productId) {
      navigateTo('product');
    }
  }, [productId]);

  const toggleCart = () => {
    setCartopen(!cartopen);
  };

  const initialCart = () => {
    const cart = localStorage.getItem('cartItems');
    return cart ? JSON.parse(cart) : [];
  };

  useEffect(() => {
    setCartItems(initialCart());
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateto={navigateTo} />;
      case 'Women':
        return <Women display_cart={display_cart} />;
      case 'Men':
        return <Men display_cart={display_cart} />;
      case 'product':
        return <Product addToCart={addToCart} productID={productId} display_cart={display_cart} navigateTo={navigateTo} />;
      case 'Kids':
        return <Kids display_cart={display_cart} />;
      case 'Footwear':
        return <Other display_cart={display_cart} />;
      case 'fav':
        return <Favourite />;
      case 'login':
        return <Signup />;
      default:
        return <Home navigateto={navigateTo}  />;
    }
  };

  return (
    <>
      <NavBar toggleCart={toggleCart} cartLength={cartItems.length} navigateTo={navigateTo} currentPage={currentPage} />
      {renderPage()}
      <Cart isOpen={cartopen} toggleCart={toggleCart} cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default App;
