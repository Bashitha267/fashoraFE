import { createBrowserRouter } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Favourite } from '../pages/Favourite';
import { Home } from '../pages/Home';
import { Kids } from '../pages/Kids';
import { Men } from '../pages/Men';
import { Other } from '../pages/Other';
import { Product } from '../pages/Product';
import { Signup } from '../pages/Signup';
import { Women } from '../pages/Women';

const createRouter = (display_cart: (_id: string) => void, addToCart: (product: any) => void,toggleCart:()=>void) =>
  createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/nb', element: <NavBar toggleCart={toggleCart}/> },
    { path: '/women', element: <Women display_cart={display_cart} /> },
    { path: '/men', element: <Men display_cart={display_cart} /> },
    { path: '/kids', element: <Kids display_cart={display_cart} /> },
    { path: '/shoes', element: <Other display_cart={display_cart} /> },
    {
      path: '/product/:id',
      element: <Product display_cart={display_cart} addToCart={addToCart} />, // Pass addToCart here
    },
    { path: '/fav', element: <Favourite /> },
    { path: '/login', element: <Signup /> },
  ]);

export default createRouter;
