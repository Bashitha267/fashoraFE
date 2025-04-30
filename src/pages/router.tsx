import { createBrowserRouter, Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Favourite } from '../pages/Favourite';
import { Home } from '../pages/Home';
import { Kids } from '../pages/Kids';
import { Men } from '../pages/Men';
import { Other } from '../pages/Other';
import { Product } from '../pages/Product';
import { Signup } from '../pages/Signup';
import { Women } from '../pages/Women';
import { Accessories } from './Accessories';
import { Beauty } from './Beauty';
import { Brands } from './Brands';
import { Checkout } from './Checkout';
import { Myorders } from './Myorders';
import { New } from './New';
import { Sale } from './Sale';

const Layout = ({ toggleCart }: { toggleCart: () => void }) => (
  <>
    <NavBar toggleCart={toggleCart} />
    <Outlet />
  </>
);

const createRouter = (
  display_cart: (_id: string) => void,
  addToCart: (product: any) => void,
  toggleCart: () => void
) =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout toggleCart={toggleCart} />,
      children: [
        { index: true, element: <Home /> },
        { path: 'women', element: <Women display_cart={display_cart} /> },
        { path: 'men', element: <Men display_cart={display_cart} /> },
        { path: 'kids', element: <Kids display_cart={display_cart} /> },
        { path: 'shoes', element: <Other display_cart={display_cart} /> },
        { path: 'product/:id', element: <Product display_cart={display_cart} addToCart={addToCart} /> },
        { path: 'fav', element: <Favourite /> },
        { path: 'login', element: <Signup /> },
        {path:'new',element:<New/>},
        {path:'beauty',element:<Beauty/>},
        {path:'sale',element:<Sale/>},
        {path:'accessories',element:<Accessories/>},
        {path:'brands',element:<Brands/>},
        {path:'myorders',element:<Myorders/>},
        {path:"checkout/",element:<Checkout/>},
      ]
    }
  ]);

export default createRouter;
