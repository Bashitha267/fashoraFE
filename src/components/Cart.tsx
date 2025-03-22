import { ShoppingBag, Trash2, X } from "lucide-react";
import React, { useEffect } from "react";

interface CartProps {
  isOpen: boolean;
  toggleCart: () => void;
  cartItems: { id: number; name: string; price: number; quantity: number; image: string }[]; // Define the structure of cart items
  setCartItems: React.Dispatch<React.SetStateAction<{ id: number; name: string; price: number; quantity: number; image: string }[]>>; // SetState function type
}

export const Cart: React.FC<CartProps> = ({ isOpen, toggleCart, cartItems, setCartItems }) => {
  
  const getInitialCart = () => {
    const cart = localStorage.getItem("cartItems");
    return cart ? JSON.parse(cart) : [];
  };

  const clearCart = () => {
    localStorage.removeItem('cartItems');
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 4.99;
  const total = subtotal + shipping;

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQty = (id: number, newQty: number) => {
    if (newQty < 1) {
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <div
      className={`fixed inset-0 transition-opacity duration-300 overflow-hidden z-1500 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={toggleCart} 
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-300 opacity-75 transition-opacity"></div>

        {/* Cart Section */}
        <section
          className={`absolute right-0 max-w-full transition-transform duration-300 h-screen flex 
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-screen max-w-md bg-white p-4 shadow-lg flex flex-col">
            <div className="flex flex-row justify-between">
              <div>
                <h2 className="text-xl font-serif">Shopping Cart</h2>
              </div>
              <div>
                <button onClick={toggleCart} className=" transform duration-300">
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className={cartItems.length > 5 ? "overflow-y-scroll" : "overflow-hidden"}>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex flex-row justify-between p-4 border-b gap-2">
                    <div>
                      <img
                        src={item.image}
                        className="w-32 h-32 object-contain rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>{item.name}</div>
                      <div className="inline-flex gap-2 border-2 border-gray-100 w-fit">
                        <div
                          className="p-1 hover:bg-gray-100 px-2"
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                        >
                          -
                        </div>
                        <div className="p-1">{item.quantity}</div>
                        <div
                          className="p-1 hover:bg-gray-100 px-2"
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>{item.price}</div>
                      <div
                        className="flex flex-row gap-1"
                        onClick={() => removeItem(item.id)}
                      >
                        <div>
                          <Trash2 size={24} color="red" />
                        </div>
                        <div>
                          <button className="text-red-600 font-semibold cursor-pointer">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col gap-2 mt-24">
                  <div className="flex flex-row justify-center">
                    <ShoppingBag size={45} color="grey" />
                  </div>
                  <div className="flex flex-row justify-center">Your cart is empty</div>
                  <div className="text-gray-500 flex flex-row justify-center">
                    Start adding items to your cart
                  </div>
                  <div className="flex flex-row justify-center mt-5">
                    <button
                      className="inline-flex w-fit bg-orange-500 text-white p-2"
                      onClick={toggleCart}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
              {cartItems.length > 0 && (
                <div className="absolute -bottom-4 right-0 border-t-2 border-black flex flex-col w-full gap-2 p-6 z-25 bg-white">
                  <div className="flex flex-row justify-between">
                    <div className="font-bold">Subtotal</div>
                    <div>{subtotal.toFixed(2)}</div>
                  </div>

                  <div className="flex flex-row justify-between">
                    <div className="text-gray-500">Shipping</div>
                    <div>{shipping.toFixed(2)}</div>
                  </div>

                  <div className="flex flex-row justify-between">
                    <div className="font-bold">Total</div>
                    <div>{total.toFixed(2)}</div>
                  </div>

                  <div
                    className="flex flex-row bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 p-2 justify-center text-white rounded-3xl"
                    onClick={clearCart} // Correctly call clearCart function here
                  >
                    <button>Checkout</button>
                  </div>

                  <div className="flex flex-row justify-center text-gray-500 mt-3">
                    or{" "}
                    <span className="px-2 text-pink-500 text-md font-sans">
                      <button onClick={toggleCart}>Continue Shopping</button>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
