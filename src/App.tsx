import { useEffect, useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { NavBar } from './components/NavBar'
import { Favourite } from './pages/Favourite'
import { Home } from './pages/Home'
import { Kids } from './pages/Kids'
import { Men } from './pages/Men'
import { Other } from './pages/Other'
import { Product } from './pages/Product'
import { Signup } from './pages/Signup'
import { Women } from './pages/Women'

function App() {

  const [cartopen,setCartopen] = useState(false)
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const [productId,setproductID]=useState('')
  const [currentpage,setCurrenPage]=useState("home")
  const addToCart = (product) => {
      
    setCartItems((prevItems) => [...prevItems, product]);
    localStorage.setItem("cartItems",JSON.stringify(cartItems))

  };
  const display_cart = (_id) => {
    setproductID(_id);
    setTimeout(() => navigateTo("product"), 0);
};

useEffect(() => {
    if (productId) {
        navigateTo("product");
    }
}, [productId]);

 
  const toggleCart =()=>{
    setCartopen(!cartopen)
  }
  const initialcart=()=>{
    const cart=localStorage.getItem('cartItems');
    return cart ? JSON.parse(cart):[];
  }
  useEffect(()=>{
    setCartItems(initialcart())
  },[])

  useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  },[cartItems])

  const navigateTo=(page:string)=>{
    setCurrenPage(page)
   window.scrollTo(0,0);

  }
  const renderPage=()=>{
    switch(currentpage){
      case "home":
        return <Home navigate_page={navigateTo}/>;
      case "women":
        return <Women display_cart={display_cart}/>;
      case "men":
        return <Men display_cart={display_cart}/>;
      case "product":
        return <Product addToCart={addToCart} productID={productId} display_cart={display_cart}/>;
      case "kids":
        return <Kids display_cart={display_cart}/>;
       case "other":
         return <Other display_cart={display_cart}/>;
      case "fav":
        return <Favourite/>
      case "login":
        return <Signup/>
      }
  }

  return (
    <>
    {/* <div className="body items-start flex flex-col">

  
      <div className="relative">
        
        <ShoppingCart size={50} color='black'/>
        <span className='absolute top-0 right-0 bg-pink-500 text-white text-xs rounded-full p-1 '>{count}</span>
      </div>
      <div className="btn mt-16">
        <button  className="p-3 text-2xl bg-amber-700" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      </div> */}
      <NavBar toggleCart={toggleCart} cartLength={cartItems.length} navigateTo={navigateTo} currentPage={currentpage}/>
      {renderPage()}
      <Cart isOpen={cartopen} toggleCart={toggleCart} cartItems={cartItems} setCartItems={setCartItems}/>
    </>
  )
}

export default App
